"use client";
import { useEffect, useCallback, useState } from "react";

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

import { ProductWithDefaultImageDto } from "@/dto";

import { useAuthStatus } from "@/hooks";

import { WishListService } from "@/services";

export const useFavorites = () => {
  const { isLoggedIn } = useAuthStatus();

  const queryClient = useQueryClient();

  const [localWishList, setLocalWishList] = useState<
    ProductWithDefaultImageDto[]
  >([]);

  useEffect(() => {
    if (!isLoggedIn) {
      const storedWishList = localStorage.getItem("wishList");
      if (storedWishList) {
        try {
          const parsedWishList = JSON.parse(storedWishList);
          if (Array.isArray(parsedWishList)) {
            setLocalWishList(parsedWishList);
            queryClient.setQueryData(["favoritesCount"], parsedWishList.length);
          }
        } catch (e) {
          console.error("Помилка при читанні з localStorage:", e);
        }
      }
    }
  }, [isLoggedIn, queryClient]);

  const { data: serverWishList = [] } = useQuery<ProductWithDefaultImageDto[]>({
    queryKey: ["wishList"],
    queryFn: WishListService.getAllWishList,
    enabled: isLoggedIn,
    initialData: [],
  });

  useEffect(() => {
    if (isLoggedIn) {
      queryClient.setQueryData(["favoritesCount"], serverWishList.length);
    }
  }, [serverWishList, isLoggedIn, queryClient]);

  const addToWishListMutation = useMutation({
    mutationFn: async (product: ProductWithDefaultImageDto) => {
      if (isLoggedIn) {
        await WishListService.addToWishList(String(product.id));
        return product;
      } else {
        const storedWishList = localStorage.getItem("wishList");
        const parsedWishList = storedWishList ? JSON.parse(storedWishList) : [];
        const isDuplicate = parsedWishList.some(
          (p: ProductWithDefaultImageDto) => p.id === product.id
        );
        if (!isDuplicate) {
          const updatedList = [...parsedWishList, product];
          localStorage.setItem("wishList", JSON.stringify(updatedList));
          setLocalWishList(updatedList);
          return updatedList;
        }
      }
    },
    onSuccess: (newProduct) => {
      if (isLoggedIn) {
        queryClient.setQueryData<ProductWithDefaultImageDto[]>(
          ["wishList"],
          (oldWishList = []) => {
            return [...oldWishList, newProduct as ProductWithDefaultImageDto];
          }
        );
        queryClient.setQueryData(
          ["favoritesCount"],
          (count: number) => (count || 0) + 1
        );
      } else if (Array.isArray(newProduct)) {
        queryClient.setQueryData(["wishList"], newProduct || []);
        queryClient.setQueryData(["favoritesCount"], (newProduct || []).length);
      }
    },
  });

  const removeFromWishListMutation = useMutation({
    mutationFn: async (productId: number) => {
      if (isLoggedIn) {
        await WishListService.removeFromWishList(String(productId));
        return productId;
      } else {
        const storedWishList = localStorage.getItem("wishList");
        const parsedWishList = storedWishList ? JSON.parse(storedWishList) : [];
        const updatedList = parsedWishList.filter(
          (p: ProductWithDefaultImageDto) => p.id !== productId
        );
        localStorage.setItem("wishList", JSON.stringify(updatedList));
        setLocalWishList(updatedList);
        return updatedList;
      }
    },
    onSuccess: (removedProductId) => {
      if (isLoggedIn) {
        queryClient.setQueryData<ProductWithDefaultImageDto[]>(
          ["wishList"],
          (oldWishList = []) => {
            return oldWishList.filter(
              (product) => product.id !== removedProductId
            );
          }
        );
        queryClient.setQueryData(
          ["favoritesCount"],
          (count: number) => (count || 0) - 1
        );
      } else {
        queryClient.setQueryData(["wishList"], removedProductId || []);
        queryClient.setQueryData(
          ["favoritesCount"],
          (removedProductId || []).length
        );
      }
    },
  });

  const removeAllFromWishListMutation = useMutation({
    mutationFn: async () => {
      if (isLoggedIn) {
        await WishListService.removeAllFromWishList();
      } else {
        localStorage.removeItem("wishList");
        setLocalWishList([]);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(["wishList"], []);
      queryClient.setQueryData(["favoritesCount"], 0);
    },
  });

  const { data: count = 0 } = useQuery<number>({
    queryKey: ["favoritesCount"],
    queryFn: () => (isLoggedIn ? serverWishList.length : localWishList.length),
    staleTime: Infinity,
  });

  const isFavorite = useCallback(
    (productId: number) => {
      return isLoggedIn
        ? serverWishList.some((item) => item.id === productId)
        : localWishList.some((p) => p.id === productId);
    },
    [isLoggedIn, serverWishList, localWishList]
  );

  const wishList = isLoggedIn ? serverWishList : localWishList;

  return {
    wishList,
    count,
    addToWishList: addToWishListMutation.mutate,
    removeFromWishList: removeFromWishListMutation.mutate,
    removeAllFromWishList: removeAllFromWishListMutation.mutate,
    isFavorite,
  };
};

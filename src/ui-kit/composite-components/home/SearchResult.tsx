"use client";

import React from "react";
import { useProducts } from "@/hooks/products/useProduct";
import { useGlobalStateContext } from "@/сontext/GlobalContext";
import { ProductCard } from "@/ui-kit/composite-components";
import { ProductWithDefaultImageDto } from "@/dto";

const SearchResults = () => {
  const { searchTerm } = useGlobalStateContext();
  const {
    data: searchResults,
    isLoading,
    isError,
  } = useProducts({
    page: 1,
    limit: 10,
    sort: "createdAt",
    searchTerm,
  });

  if (!searchTerm) return null;

  if (isLoading) return <p>Loading search results...</p>;
  if (isError) return <p>Error loading search results.</p>;

  return (
    <div className="md:mt-20">
      {searchResults?.length ? (
        <div>
          <h2 className="text-2xl font-semibold uppercase">Search result</h2>
          <div className="flex flex-wrap">
            {searchResults.map((product: ProductWithDefaultImageDto) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;

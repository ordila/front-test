import { ButtonIcon } from "@/ui-kit/base-components";
import Image from "next/image";
import Link from "next/link";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useFavorites } from "@/hooks";
import { ProductWithDefaultImageDto } from "@/dto";

interface ProductCardProps {
  product: ProductWithDefaultImageDto;
  label?: string;
}

export function ProductCard({ product, label }: ProductCardProps) {
  const { isFavorite, addToWishList, removeFromWishList } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isProductFavorite) {
      removeFromWishList(product.id);
    } else {
      addToWishList(product);
    }
  };

  const discountedPrice = Math.floor(
    product.price - (product.price * (product.discount ?? 0)) / 100
  );

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group w-full sm:w-full md:w-[260px] min-h-[385px] border-b border-r border-[#00000033] pt-[60px] pb-[16px] px-[16px] md:px-[37px] md:pt-[82px] md:pb-[24px] flex flex-col relative">
        {label && (
          <div className="absolute top-4 left-4 md:top-[30px] md:left-[30px] bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {label}
          </div>
        )}

        {/* Іконка улюбленого */}
        <div
          onClick={toggleFavorite}
          className="absolute top-4 right-4 md:top-[30px] md:right-[30px] cursor-pointer transition-transform duration-200 hover:scale-110"
        >
          {isProductFavorite ? (
            <FavoriteIcon sx={{ color: "#CDFF3A" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "gray" }} />
          )}
        </div>

        {/* Зображення продукту */}
        {product.images &&
          product.images.length > 0 &&
          product.images[0].imageUrl && (
            <Image
              src={product.images[0].imageUrl}
              alt={product.name}
              width={187}
              height={227}
              className="product-image self-center mb-5 w-[187px] h-[227px]"
            />
          )}

        {/* Назва продукту */}
        <p className="font-medium text-md mb-4 uppercase tracking-[1px]">
          {product.name}
        </p>

        {/* Стара і нова ціна */}
        <div className="">
          <p className="text-dark-gray line-through">${product.price}</p>
          <p className="text-xl font-bold text-gray-800">${discountedPrice}</p>
        </div>

        {/* Кнопка Explore */}
        <div className="flex w-[104px] h-10 justify-center items-center absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
          <ButtonIcon title="Explore" className="-rotate-45" />
        </div>
      </div>
    </Link>
  );
}

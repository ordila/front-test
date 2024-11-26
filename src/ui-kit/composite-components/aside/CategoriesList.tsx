import React from "react";

import Image from "next/image";
import Link from "next/link";

import { useCategories } from "@/hooks";
import { CategoriesSkeleton } from "../../base-components/skeleton/CategoriesSkeleton";

export const CategoriesList = () => {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <CategoriesSkeleton />;

  if (error instanceof Error)
    return <div>Error loading categories: {error.message}</div>;

  return (
    <ul className="pt-[40px] h-[900px] border-r border-[#00000033]">
      {data?.map((category: { id: string; name: string; imageUrl: string }) => (
        <li
          key={category.id}
          className="flex  pl-5 hover:bg-slate-100 transition-colors duration-300"
        >
          <Link
            href={`/category/${category.id}`}
            className="text-gray-700 w-[406px] h-[60px] flex items-center  gap-3 hover:text-black uppercase transition-colors duration-300"
          >
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={24}
              height={24}
            />

            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

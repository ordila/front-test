"use client";

import { CategoriesList } from "./CategoriesList";
import { Filters } from "../filter/Filter";
import { useParams } from "next/navigation";

export const Aside = () => {
  const { categoryID } = useParams();
  return (
    <aside>
      <CategoriesList />

      {categoryID && <Filters />}
    </aside>
  );
};

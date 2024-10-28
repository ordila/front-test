"use client";
import { useParams } from "next/navigation";

import { CategoriesList } from "./CategoriesList";

export const Aside = () => {
  const { categoryId } = useParams();

  return (
    <aside>
      {/* Логіка для відображення категорій */}
      <CategoriesList />

      {/* Логіка для фільтрів на сторінці категорій */}
      {categoryId && (
        <div>
          <h3 className="text-md font-bold mt-6 mb-4">Filters</h3>

          <div className="mb-2">
            <label>
              <input type="checkbox" />
              Filter
            </label>
          </div>
        </div>
      )}
    </aside>
  );
};

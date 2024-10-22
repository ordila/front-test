"use client";
import React from "react";

import { useParams } from "next/navigation";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return <div>Category page : {categoryId}</div>;
};

export default CategoryPage;

"use client";
import React, { useState } from "react";
import AboutProduct from "../AboutProduct";
import Specification from "../../specification/Specification";
import Reviews from "../../reviews/Reviews";
import { useProductByID } from "@/hooks/products/useProductByID";
import Image from "next/image";
import { Breadcrumb } from "@/ui-kit/composite-components/breadcrum/BreadCrum";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "about", label: "About Product", content: <AboutProduct /> },
  { id: "specs", label: "Specifications", content: <Specification /> },
  { id: "reviews", label: "Reviews", content: <Reviews /> },
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const { product } = useProductByID();

  const breadcrumbItems = [
    {
      title: product?.category.name || "Category",
      Icon: product?.category?.imageUrl ? (
        <Image
          src={product?.category?.imageUrl}
          alt="Icon"
          width={16}
          height={16}
          className="stroke-red fill-red"
        />
      ) : undefined,
      href: `/category/${product?.categoryId}`,
    },
    {
      title: product?.name.split(" ")[0] || "Product",
      Icon: product?.category?.imageUrl ? (
        <Image
          src={product?.category?.imageUrl}
          alt="Icon"
          width={16}
          height={16}
        />
      ) : undefined,
    },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`uppercase font-black text-[20px] whitespace-nowrap flex items-center gap-2 px-4 py-2 transition-colors ${
              activeTab === tab.id ? "text-black" : "text-gray"
            }`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            <span
              className={`block w-3 h-3 rounded-sm ${
                activeTab === tab.id
                  ? "bg-flash-green border border-black"
                  : "bg-medium-grey"
              }`}
            ></span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                id={`tabpanel-${tab.id}`}
                role="tabpanel"
                className="transition-opacity duration-300 ease-in-out"
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ProductTabs;

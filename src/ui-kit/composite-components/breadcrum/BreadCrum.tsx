"use client";

import React from "react";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface BreadcrumbItem {
  title: string;
  href?: string;
  Icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center space-x-2 py-4">
      <Link href="/" className="group flex items-center text-gray-400 ">
        <HomeOutlinedIcon
          sx={{ color: "#D1D1D1" }}
          fontSize="small"
          className="mr-1 group-hover:text-black transition-colors duration-200"
        />
        <span className="text-sm font-medium text-medium-grey group-hover:text-black uppercase transition-colors duration-200">
          Home
        </span>
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRightIcon fontSize="small" className="text-gray-400" />

          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center text-gray-400 hover:text-gray-600"
            >
              {item.Icon && <span className="mr-1">{item.Icon}</span>}
              <span className="text-sm font-medium uppercase">
                {item.title}
              </span>
            </Link>
          ) : (
            <div className="flex items-center text-black">
              {item.Icon && <span className="mr-1">{item.Icon}</span>}
              <span className="text-sm font-semibold uppercase">
                {item.title}
              </span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

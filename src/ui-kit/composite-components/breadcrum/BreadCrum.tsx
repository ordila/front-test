"use client";

import React from "react";
import Link from "next/link";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface BreadcrumbItem {
  title: string;
  href?: string;
  Icon?: React.ElementType;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center space-x-2 py-4">
      <Link
        href="/"
        className="flex items-center text-gray-400 hover:text-gray-600"
      >
        <HomeOutlinedIcon
          sx={{ color: "#D1D1D1" }}
          fontSize="small"
          className="mr-1"
        />
        <span className="text-sm font-medium text-medium-grey uppercase">
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
              {item.Icon && <item.Icon fontSize="small" className="mr-1" />}
              <span className="text-sm font-medium uppercase">
                {item.title}
              </span>
            </Link>
          ) : (
            <div className="flex items-center text-black">
              {item.Icon && <item.Icon fontSize="small" className="mr-1" />}
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

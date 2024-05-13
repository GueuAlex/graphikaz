import { ApiCategoryProps, ImpressCategoryProps } from "@/types";
import React from "react";
import "../styles/category_glass_style.scss";
import Link from "next/link";

interface CategorySelectorProps {
  category: ApiCategoryProps | ImpressCategoryProps;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  category,
}) => {
  function getUrl(): string {
    if (category.type === "CREATION GRAPHIQUE") {
      return `creationgraphique/${category.libelle}`;
    } else {
      return `impression/${category.libelle}`;
    }
  }
  return (
    <Link href={getUrl()} className="category-selector">
      <div className="category-icon">
        <i className="ri-megaphone-line"></i>
      </div>
      <div className="category-caption">
        <small>5 service</small>
        <p>{category.libelle} </p>
      </div>
    </Link>
  );
};

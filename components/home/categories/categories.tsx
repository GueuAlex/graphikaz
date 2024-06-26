import "./categories.css";

import Link from "next/link";
import React from "react";
import { impressCategories } from "@/constants";
import { ApiCategoryProps } from "@/types";
import CategoryContainer from "./category_container";

const Categories = ({
  apiCategories,
}: {
  apiCategories: ApiCategoryProps[];
}) => {
  return (
    <div className="w-full px-[2em]  categories relative bg-slate-50">
      <div className="py-[4rem] max-w-[97rem]  mx-auto   relative">
        <div className="categories-title flex flex-row justify-between items-start">
          <div>
            <h2 className=" text-slate-800">
              Parcourez les services par catégorie
            </h2>
            <small className="subtitle mt-3 text-slate-500 font-semibold">
              Une équipe de designers à votre écoute
            </small>
          </div>
          <span className="hover:text-secondary font-semibold">
            <Link href="/categories">
              Toutes les catégories <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className="categories-content relative  mt-16 w-full">
          {/* new look */}

          {apiCategories.length > 2
            ? apiCategories
                .slice(1, 3)
                .map((category, index) => (
                  <CategoryContainer category={category} key={index} />
                ))
            : apiCategories.map((category, index) => (
                <CategoryContainer category={category} key={index} />
              ))}

          {impressCategories.map((impressCat, index) => {
            if (index === 1 || index === 2) {
              return <CategoryContainer category={impressCat} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

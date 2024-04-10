import "./categories.css";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { categories, impressCategories } from "@/constants";
import { ApiCategoryProps } from "@/types";
import { Hc1 } from "@/public";
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
            ? apiCategories.slice(1, 3).map((category, index) => (
                <Link
                  key={category.libelle}
                  href={`/categories?category=${category.libelle}`}
                >
                  <CategoryContainer
                    icon={
                      index === 1
                        ? "ri-megaphone-line "
                        : "ri-code-s-slash-fill "
                    }
                    service_count={3}
                    libelle={category.libelle}
                  />
                </Link>
              ))
            : apiCategories.map((category) => (
                <Link
                  key={category.libelle}
                  href={`/categories?category=${category.libelle}`}
                >
                  <CategoryContainer
                    icon={"ri-megaphone-line"}
                    service_count={3}
                    libelle={category.libelle}
                  />
                </Link>
              ))}

          {impressCategories.map((impressCat, index) => {
            if (index === 1 || index === 2) {
              return (
                <Link
                  key={impressCat.libelle}
                  href={`/impression?category=${impressCat.libelle}`}
                >
                  <CategoryContainer
                    icon={
                      index === 1 ? "ri-file-paper-2-line" : "ri-bank-card-line"
                    }
                    service_count={index === 1 ? 19 : 15}
                    libelle={impressCat.libelle}
                  />
                </Link>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

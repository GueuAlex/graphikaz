import "./categories.css";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { categories } from "@/constants";
import { ApiCategoryProps } from "@/types";
import { Hc1 } from "@/public";

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
              Parcourir les talents par catégorie​
            </h2>
            <small className="subtitle mt-3 text-slate-500 font-semibold">
              Inspirez-vous de 1800+ compétences
            </small>
          </div>
          <span className="hover:text-secondary font-semibold">
            <Link href="/categories">
              Toutes les catégories <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className="categories-content relative  mt-16 w-full">
          {apiCategories.length > 8
            ? apiCategories.slice(0, 8).map((category) => (
                <Link
                  key={category.libelle}
                  href="/categories"
                  className=" link font-[600]"
                >
                  <div className="flex flex-row gap-4  items-center">
                    <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                      <Image src={Hc1} alt="dev" className="img" />
                    </div>
                    <div className="category-title">
                      <h3 className=" no-underline">{category.libelle}</h3>
                      {/*  <small className="mt-5 no-underline">
                    {category.service_count > 1
                      ? `${category.service_count} services`
                      : `${category.service_count} service`}
                  </small> */}
                      <small className="mt-5 no-underline">1 service </small>
                    </div>
                  </div>
                </Link>
              ))
            : apiCategories.map((category) => (
                <Link
                  key={category.libelle}
                  href="/categories"
                  className=" link font-[600]"
                >
                  <div className="flex flex-row gap-4  items-center">
                    <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                      <Image src={Hc1} alt="dev" className="img" />
                    </div>
                    <div className="category-title">
                      <h3 className=" no-underline">{category.libelle}</h3>
                      {/*  <small className="mt-5 no-underline">
                    {category.service_count > 1
                      ? `${category.service_count} services`
                      : `${category.service_count} service`}
                  </small> */}
                      <small className="mt-5 no-underline">1 service </small>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

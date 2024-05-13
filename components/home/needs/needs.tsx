import { Wrapper } from "@/reutilisables";
import "./needs.css";

import React from "react";
import Link from "next/link";
import { ApiCategoryProps } from "@/types";
import { CategorySelector } from "@/reutilisables/category_selector";
import { impressCategories } from "@/constants";

interface NeedPrps {
  categories: ApiCategoryProps[];
}

const Needs: React.FC<NeedPrps> = ({ categories }) => {
  return (
    <div className="w-full px-[2rem] py-[5rem]  bg-primary relative  needs">
      <div className="max-w-[97rem] mx-auto relative ">
        <div>
          <h2 className=" text-slate-200">
            Besoin d'un visuel ou d'une impresion sans vous déplacer ?
          </h2>
          <small className="subtitle mt-3 text-slate-300 font-semibold">
            Services les plus consultés et les plus vendus de tous les temps
          </small>
        </div>
        <div className="needs-content w-full flex flex-row justify-between items-start gap-12 mt-12 flex-wrap">
          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-cursor-line text-slate-200 text-[2.8rem]"></i>

            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Sélectionnez votre service
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Parcourez notre catalogue de services et choisissez celui qui
              correspond le mieux à vos besoins.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-sticky-note-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Choisissez votre format et style
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Sélectionnez le format de votre infographie (ex: A4, 15) et le
              style qui vous correspond. Des exemples et des options de
              personnalisation sont disponibles pour vous guider.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-group-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Collaborez avec nos designers
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Notre équipe de designers expérimentés prendra en charge votre
              projet et vous fera des propositions jusqu'au résultat final.
            </p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <i className="ri-download-cloud-2-line text-slate-200 text-[2.8rem]"></i>
            <h3 className="text-slate-200 font-semibold text-[1.3rem]">
              Finalisez et téléchargez votre infographie
            </h3>
            <p className="text-slate-200 font-normal text-[.9rem]">
              Une fois que votre infographie répond à toutes vos attentes,
              téléchargez le fichier final prêt à être utilisé pour l'impression
              ou le numérique.
            </p>
          </div>
        </div>
        <hr className="border-b-[1px] border-teal-800 my-14" />
        <div className="mt-[75px]">
          <div className="flex justify-between items-center pb-8">
            <div className="head">
              <h2 className=" text-slate-200">
                Parcourez les services par catégorie
              </h2>
              <small className="subtitle mt-3 text-slate-50 font-semibold">
                Une équipe de designers à votre écoute
              </small>
            </div>
            <span className="hover:text-secondary font-semibold">
              <Link href="/categories" className="see-more-link">
                Toutes les catégories <i className="ri-arrow-right-line"></i>
              </Link>
            </span>
          </div>
          <div className="categories-list pt-6">
            {categories.length > 2 &&
              categories
                .slice(1, 3)
                .map((category, index) => (
                  <CategorySelector category={category} key={index} />
                ))}
            {impressCategories.map((impressCat, index) => {
              if (index === 1 || index === 2) {
                return <CategorySelector category={impressCat} key={index} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;

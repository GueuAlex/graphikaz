import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/mini-carousel.scss";
import { ApiCategoryProps } from "@/types";
import { colorTab, iconTab } from "@/constants/data";

// Composant de catégorie

const MiniCategoryContainer = ({
  category,
  iconData,
  classename,
}: {
  category: ApiCategoryProps;
  iconData: string;
  classename: string;
}) => {
  return (
    <a href={`/creationgraphique/${category.libelle.toLowerCase()}`}>
      <div
        className={` mini-category-container flex gap-2 justify-center items-center`}
      >
        <div className={`${classename} mini-cat-icon-contaier`}>
          <i className={iconData}></i>
        </div>
        <div className="mini-cat-text-container flex gap-2">
          <p>{category.libelle}</p>
          <span>→</span>
        </div>
      </div>
    </a>
  );
};

interface MiniCategoryCarouselProps {
  categories: ApiCategoryProps[];
}

// Carrousel qui affiche des éléments 4 par 4
const MiniCategoryCarousel: React.FC<MiniCategoryCarouselProps> = ({
  categories,
}) => {
  // Calcul des indices des éléments à afficher

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className=" relative">
      <div className="flex justify-between items-center flex-wrap gap-3 mb-6">
        <p className="text-[20px] font-semibold">
          Les plus populaires dans création graphique
        </p>
        <small className=" text-stone-700 font-light"></small>
      </div>

      <Slider {...settings}>
        {categories.map((item, index) => (
          <div className="p-2" key={index}>
            <MiniCategoryContainer
              category={item}
              iconData={iconTab[index]}
              classename={colorTab[index]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MiniCategoryCarousel;

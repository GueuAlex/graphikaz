import Category2Container from "@/components/home/categories/categories2_container";
import { ImpressCategoryProps, ApiCategoryProps } from "@/types";
import { useState } from "react";

// Créer un type union pour combiner les deux types
type CombinedCategoryProps = ImpressCategoryProps | ApiCategoryProps;

// Fonction pour mélanger un tableau
function shuffle<T>(array: T[]): T[] {
  // Création d'une copie pour éviter de modifier l'original
  const result = [...array];

  // Mélange avec Fisher-Yates
  for (let i = result.length - 1; i > 0; i--) {
    // Choisir un index aléatoire
    const j = Math.floor(Math.random() * (i + 1));

    // Échanger les éléments
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Concaténer les tableaux en utilisant le type union

interface CategoryCarouselProps {
  combinedCategories: CombinedCategoryProps[];
}

// Carrousel qui affiche des éléments 4 par 4
const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  combinedCategories,
}) => {
  const shuffleList = shuffle(combinedCategories);

  return (
    <div className="carousel carousel-center  space-x-4 ">
      {shuffleList.map((item, index) => (
        <div className="carousel-item" key={index}>
          <Category2Container category={item} />
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;

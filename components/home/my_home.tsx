"use client";
import {
  Hero,
  Needs,
  Categories,
  PopularServices,
  ProofSection,
  CounterSection,
  Testinmonials,
  TrendingService,
  Blogs,
  NewsLetter,
} from "@/components/home";
import { ApiCategoryProps, packProps } from "@/types";
import { fetchAllData, getCategories } from "@/types/api_services";
import { useEffect, useState } from "react";

const MyHome = () => {
  ////// hooks
  const [isLaoding, setIsloadin] = useState(true);
  const [categoriesList, setcategoriesList] = useState<ApiCategoryProps[]>([]);
  const [categoriesIsLaoding, setcategoriesIsloadin] = useState(true);
  const [packList, setData] = useState<packProps[]>([]);
  //////// get all categories

  async function getCategoriesList() {
    try {
      const data = await getCategories();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  /// get services
  async function fetchAndUseData() {
    try {
      const data = await fetchAllData();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  ////////: useEffect
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const packData: packProps[] = data!;
        setData(packData);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(packData);
        setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setIsloadin(false);
      });
    //////////
    getCategoriesList()
      .then((data) => {
        const categories: ApiCategoryProps[] = data!;
        setcategoriesList(categories);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(categories);
        setcategoriesIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setcategoriesIsloadin(false);
      });
  }, []);

  /* if (isLaoding) {
    return <div className="loading-div">chargement...</div>;
  } */
  return (
    <>
      <Hero />
      <Needs />
      <Categories apiCategories={categoriesList} />
      <PopularServices packList={packList} />
      <ProofSection />
      <CounterSection />
      <Testinmonials />
      <TrendingService packList={packList} />
      <Blogs />
      <NewsLetter />
    </>
  );
};

export default MyHome;

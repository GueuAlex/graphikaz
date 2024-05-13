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
  Categories2,
} from "@/components/home";
import Loader from "@/reutilisables/laoder";
import { ApiCategoryProps, apiServiceProps, packProps } from "@/types";
import { fetchAllData, getCategories } from "@/types/api_services";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MyHome = () => {
  ////// hooks
  const [isLaoding, setIsloadin] = useState(true);
  const [categoriesList, setcategoriesList] = useState<ApiCategoryProps[]>([]);
  const [categoriesIsLaoding, setcategoriesIsloadin] = useState(true);
  const [serviceList, setData] = useState<apiServiceProps[]>([]);
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
        const packData: apiServiceProps[] = data!;
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

  if (isLaoding || categoriesIsLaoding) {
    return (
      <AnimatePresence>
        {" "}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
        >
          <Loader />
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <>
      <Hero apiCategories={categoriesList} />
      <Needs categories={categoriesList} />
      <Categories apiCategories={categoriesList} />
      <Categories2 apiCategories={categoriesList} />
      <TrendingService serviceList={serviceList} categories={categoriesList} />
      {/* <PopularServices serviceList={serviceList} categories={categoriesList} /> */}
      <ProofSection />
      {/*  <CounterSection /> */}
      {/* <Testinmonials /> */}

      {/*  <Blogs /> */}
      <NewsLetter />
    </>
  );
};

export default MyHome;

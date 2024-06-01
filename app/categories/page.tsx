"use client";

import React, { useEffect, useState } from "react";
import "./categories.scss";
import "@/styles/checkout_side_bar.scss";
import { PathnameComponent } from "@/components";
import { TServiceCard, Wrapper } from "@/reutilisables";
import { bcardTab, FlyersTab, impressCategories } from "@/constants";
import { ApiCategoryProps, apiServiceProps } from "@/types";
import { fetchAllData, getCategories } from "@/types/api_services";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/reutilisables/laoder";

import CategoryCarousel from "@/reutilisables/categories_carousel";
import { ImpressServiceContainer } from "@/reutilisables/impress_service_container";

function Categories() {
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
  //////// fetching api //////////////////////////////////////////////

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
  const [isLaoding, setIsloadin] = useState(true);
  const [services, setData] = useState<apiServiceProps[]>([]);
  const [categoriesList, setcategoriesList] = useState<ApiCategoryProps[]>([]);
  const [categoriesIsLaoding, setcategoriesIsloadin] = useState(true);
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const servicesList: apiServiceProps[] = data!;
        setData(servicesList);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(servicesList);
        setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setIsloadin(false);
      });

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
  //////////////////////////////////////////////////////////////////////

  //const [argCategory, setArgCategory] = useState<ApiCategoryProps>();
  //const [findedServices, setFindedServices] = useState<apiServiceProps[]>([]);

  /* ******** show more / show less === categories  **************/

  /* ******** show more / show less  **************/

  /* ******** show more / show less === date posted  **************/

  //////////////////////////: PAGINATION LOGIQUE //////////////////////////
  const servicePerPage = 8; // Nombre d'éléments par page

  const [currentPage, setCurrentPage] = useState(1);

  //const displayedServices = services;

  const serviceTotalItems = services.length;
  const totalPages = Math.ceil(serviceTotalItems / servicePerPage);

  const visibleServices = services.slice(
    (currentPage - 1) * servicePerPage,
    currentPage * servicePerPage
  );
  //////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  // État pour gérer l'affichage complet ou partiel de la liste des categories
  const [showMore, setShowMore] = useState(false);

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

  /* ************************* */
  /////////////////////////////////////////////////////////////:
  ////// GETIONS D'AFFICHAGE DES DE LA LISTE DE CATEGORIE///////
  const initialVisibleCatCount = 8;
  const test = Array(100).fill(categoriesList).flat();

  // Longueur totale de la liste des catégories
  const totalCategories = test.length;

  // Liste des catégories à afficher en fonction de l'état
  const displayedCategories = showMore
    ? test // Montrer tout si "showMore" est vrai
    : test.slice(0, Math.min(initialVisibleCatCount, totalCategories)); // Montrer jusqu'à 5 ou moins

  const handleCatToggle = () => {
    setShowMore(!showMore);
  };
  const transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <div className="categories">
      <Wrapper>
        <PathnameComponent /> {/* showing current root (file d'ariane) */}
      </Wrapper>
      {/* banner */}
      <div className="bannerss relative flex justify-center items-center">
        <div className=" max-w-[110rem] w-full">
          <BannerContainer />
        </div>
      </div>
      {/* banner end */}
      <div className="backdrop-gb">
        <Wrapper>
          <div className="all-categories">
            <div className="py-6">
              <p className="text-[20px] font-semibold">Categories</p>
              <small className=" text-stone-700 font-light">
                Nous avons ce que vous cherchez
              </small>
            </div>
            <CategoryCarousel
              combinedCategories={[...impressCategories, ...categoriesList]}
            />
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="py-6">
          <p className="text-[20px] font-semibold">Nos best seller</p>
          <small className=" text-stone-700 font-light">
            Dans création graphique
          </small>
        </div>
        {/* service cards */}

        <div className="cat-service-cards">
          {visibleServices.map((service, index) => {
            const category: ApiCategoryProps = categoriesList.find(
              (c) => c.id === service.category_id
            )!;
            return (
              <TServiceCard service={service} category={category} key={index} />
            );
          })}
        </div>
        {/* service cards end */}
      </Wrapper>

      {/* impress best seller */}
      <Wrapper>
        <div className="py-6">
          <p className="text-[20px] font-semibold">Services en voque</p>
          <small className=" text-stone-700 font-light">Dans impression</small>
        </div>
        {/* service cards */}

        <div className="  relative flex  items-start justify-center gap-2 flex-wrap">
          {[...bcardTab.slice(0, 2), ...FlyersTab.slice(8, 11)].map(
            (impressService, index) => (
              <ImpressServiceContainer service={impressService} key={index} />
            )
          )}
        </div>
        {/* service cards end */}
      </Wrapper>
    </div>
  );
}

const BannerContainer = () => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        <h2 className="banner-title">Decouvez nos services par categorie</h2>
        <small className="small-text font-light">
          Explorez un monde de possibilités dans notre captivante collection{" "}
          <br /> Où l'innovation rencontre le style pour élever votre expérience
          au-delà des attentes.
        </small>
        <div className="banner-demo-container">
          <div className="flex items-center justify-center">
            <i className="ri-play-fill text-[1.9em]"></i>
          </div>
          <p>How Graphikaz Works</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;

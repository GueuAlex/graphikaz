"use client";

import React, { useEffect, useState } from "react";
import "./categories.scss";
import { PathnameComponent } from "@/components";
import { TServiceCard, Wrapper } from "@/reutilisables";
import { categories } from "@/constants";
import { ApiCategoryProps, apiServiceProps, packProps } from "@/types";
import { fetchAllData, getCategories } from "@/types/api_services";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/reutilisables/laoder";
import { useRouter, useSearchParams } from "next/navigation";

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
  const options = ["Sort by (Default)", "Newest", "Oldest", "Random"];
  const [optionIsVisible, setVisibility] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selectedOption, setOption] = useState("Sort by (Default)");
  const toggleOption = () =>
    optionIsVisible ? setVisibility(false) : setVisibility(true);
  const toggleFilterSideBar = () =>
    toggle ? setToggle(false) : setToggle(true);

  const [argCategory, setArgCategory] = useState<ApiCategoryProps>();
  const [findedServices, setFindedServices] = useState<apiServiceProps[]>([]);

  /* ******** show more / show less === categories  **************/
  const itemsPerPage = 5;
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(
    categoriesList.slice(0, itemsPerPage)
  );
  const handleShoMore = () => {
    // afficher tous les elements
    setVisibleItems(categoriesList);
    setShowAll(true);
  };
  const handleShoLess = () => {
    // afficher le nombre d'element par defaut
    setVisibleItems(categoriesList.slice(0, itemsPerPage));
    setShowAll(false);
  };
  /* ******** show more / show less  **************/

  /* ******** show more / show less === date posted  **************/
  const data = [
    "Dernières Heures",
    "Dernières 24 heures",
    "7 derniers jours",
    "14 derniers jours",
    "30 derniers jours",
    "Tout",
  ];
  const [showAllD, setShowAllD] = useState(false);
  const [visibleItemsD, setVisibleItemsD] = useState(data.slice(0, 4));
  const handleShoMoreD = () => {
    // afficher tous les elements
    setVisibleItemsD(data);
    setShowAllD(true);
  };
  const handleShoLessD = () => {
    // afficher le nombre d'element par defaut
    setVisibleItemsD(data.slice(0, 4));
    setShowAllD(false);
  };
  /* ******** show more / show less  **************/

  /* select arrays */
  const responseTime = [
    "1 Hour",
    "2 Hours",
    "3 hours",
    "4 Hours",
    "5 Hours",
    "6 Hours",
    "7 Hours",
  ];
  const deliveryTime = [
    "1 Jour",
    "2 Jous",
    "3 Jours",
    "4 Jourss",
    "5 Jourss",
    "6 Jourss",
    "7 Jourss",
  ];
  const englishLevel = [
    "Basic",
    "Conversational",
    "Fluent",
    "Native Or Bilingual",
    "Professional",
  ];
  const cities = [
    "Abidjan",
    "Man",
    "Biankouman",
    "Yakro",
    "Daloa",
    "Sans-Pédro",
    "Divo",
    "Gagnoa",
    "et etc ...",
  ];

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(975000);

  const handleMinChange = (event: any) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(Math.min(newMinValue, maxValue)); // Assurer que min <= max
  };

  const handleMaxChange = (event: any) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(Math.max(newMaxValue, minValue)); // Assurer que max >= min
  };
  const params = useSearchParams();
  const initialCategory = params?.get("category");
  console.log("intial " + initialCategory);
  useEffect(() => {
    let currentCategory = initialCategory || "all";
    if (initialCategory) {
      const catFinded: ApiCategoryProps | undefined = categoriesList.find(
        (c) => c.libelle.toLowerCase() === initialCategory.trim().toLowerCase()
      );
      if (catFinded) {
        console.log("Category found: " + initialCategory);
        setArgCategory(catFinded);
        const findedServ: apiServiceProps[] = services.filter(
          (serv) => serv.category_id === catFinded.id
        );
        setFindedServices(findedServ);
      } else {
        console.log("Category not found, setting to 'all'");
      }
    } else {
      //initialCategory = "all";
    }
    console.log("Current category: " + currentCategory);
  }, [initialCategory, argCategory, services, categoriesList]);
  /*   console.log("---------------------------------------------------");
  console.log(argCategory); */

  //////////////////////////: PAGINATION LOGIQUE //////////////////////////
  const servicePerPage = 8; // Nombre d'éléments par page

  const [currentPage, setCurrentPage] = useState(1);

  const displayedServices =
    findedServices.length > 0 ? findedServices : services;

  const serviceTotalItems = displayedServices.length;
  const totalPages = Math.ceil(serviceTotalItems / servicePerPage);

  const visibleServices = displayedServices.slice(
    (currentPage - 1) * servicePerPage,
    currentPage * servicePerPage
  );
  //////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

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
    <div className="categories">
      <div className={`${toggle ? "show-overlay" : ""} overlay`}></div>
      {/* categories aside filter */}
      <aside
        className={`${
          toggle ? "show-cat-side-filter" : "hide-cat-side-filter"
        } cat-side-filter`}
      >
        <form>
          <div className="side-filter-container">
            <div className="filter-header">
              <h3>All Filters</h3>
              <div className="close-button" onClick={toggleFilterSideBar}>
                <i className="ri-close-line"></i>
              </div>
            </div>

            {/* categories */}
            <div className="filter-section">
              <h3 className="title">Categories</h3>
              <div className="filter-cat-body">
                <ul>
                  {visibleItems.map((cat, index) => (
                    <li id={index.toString()}>
                      <input
                        type="checkbox"
                        value={cat.libelle}
                        name={cat.libelle}
                        id={cat.id.toString()}
                      />
                      <label htmlFor={cat.id.toString()}>{cat.libelle}</label>
                    </li>
                  ))}
                </ul>
                {!showAll ? (
                  <div className="show">
                    <i className="ri-add-line symbol"></i>
                    <span onClick={handleShoMore} className="show-text">
                      Voir plus
                    </span>
                  </div>
                ) : (
                  <div className="show">
                    <i className="ri-subtract-line symbol"></i>
                    <span onClick={handleShoLess} className="show-text">
                      Voir moin
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Date posted */}
            <div className="filter-section">
              <h3 className="title">Date de publication</h3>
              <div className="filter-cat-body">
                <ul>
                  {visibleItemsD.map((data, index) => (
                    <li>
                      <input
                        type="radio"
                        value={data}
                        name="radio"
                        id={index.toString()}
                      />
                      <label htmlFor="">{data}</label>
                    </li>
                  ))}
                </ul>
                {!showAllD ? (
                  <div className="show">
                    <i className="ri-add-line symbol"></i>
                    <span onClick={handleShoMoreD} className="show-text">
                      Voir plus
                    </span>
                  </div>
                ) : (
                  <div className="show">
                    <i className="ri-subtract-line symbol"></i>
                    <span onClick={handleShoLessD} className="show-text">
                      Voir moin
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Reponse time */}
            {/* <div className="filter-section">
              <h3 className="title">Response Time</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  Response Time
                </option>
                {responseTime.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div> */}

            {/* delivery Time */}
            <div className="filter-section">
              <h3 className="title">Délai de livraison</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  Délai
                </option>
                {deliveryTime.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="filter-section">
              <h3 className="title">Budget</h3>
              <div className="buget-min-max">
                <div className="min">{minValue} ₣</div>
                <div className="max">{maxValue} ₣</div>
              </div>
              <div className="ranger relative">
                <div className="slider">
                  <div className={`progress`}></div>
                </div>
                <div className="range-inputs">
                  <input
                    type="range"
                    id="minRange"
                    name="minRange"
                    min="5000"
                    max="975000"
                    value={minValue}
                    onChange={handleMinChange}
                  />
                  <input
                    type="range"
                    id="maxRange"
                    name="maxRange"
                    min="5000"
                    max="975000"
                    value={maxValue}
                    onChange={handleMaxChange}
                  />
                </div>
              </div>
            </div>

            {/* English Level */}
            {/* <div className="filter-section">
              <h3 className="title">English Level</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  English Level
                </option>
                {englishLevel.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div> */}

            {/* Cities */}
            <div className="filter-section">
              <h3 className="title">Ville</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  Abidjan
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            {/* <div className="filter-section">
              <h3 className="title">Location</h3>
              <div className="filter-location">
                <input type="text" name="location" id="" className=" flex-1" />
                <i className="ri-map-pin-line"></i>
              </div>
            </div> */}

            <div className="filte-footer w-full">
              <button
                className="py-4 flex justify-center items-center gap-3 w-full bg-secondary mb-3 rounded text-white"
                type="submit"
              >
                Find Service <i className="ri-arrow-right-up-line"></i>{" "}
              </button>
            </div>
          </div>
        </form>
      </aside>
      {/* aside filter end */}
      <Wrapper>
        <PathnameComponent /> {/* showing current root (file d'ariane) */}
      </Wrapper>
      {/* banner */}
      <div className="bannerss relative flex justify-center items-center">
        <div className=" max-w-[110rem] w-full">
          <BannerContainer category={argCategory} />
        </div>
      </div>
      {/* banner end */}
      <Wrapper>
        {/* filter buttons area */}
        <div className="filter-container relative">
          {/* <div className="text-light"> Showing 1 – 8 of 12 results</div> */}
          {findedServices.length <= 0 ? (
            <div className="text-light">
              {" "}
              Showing 1 – {services.length > 8 ? "8" : services.length} of{" "}
              {services.length} results
            </div>
          ) : (
            <div className="text-light">
              {" "}
              Showing 1 –{" "}
              {findedServices.length > 8 ? "8" : findedServices.length} of{" "}
              {findedServices.length} results
            </div>
          )}
          <div className="filter-buttons">
            <button type="button" onClick={toggleFilterSideBar}>
              <i className="ri-filter-3-fill"></i> &nbsp; Filter
            </button>
            <button type="button" onClick={toggleOption}>
              {selectedOption} <i className="ri-arrow-drop-down-fill"></i>
            </button>
            <div
              className={`${
                optionIsVisible ? "show-options" : ""
              } selected-options shadow-sm absolute  right-0 top-11`}
            >
              <ul>
                {options.map((option) => (
                  <li
                    onClick={() => {
                      optionIsVisible
                        ? setVisibility(false)
                        : setVisibility(true);
                      setOption(option);
                    }}
                    className={selectedOption == option ? "active" : ""}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* filter buttons area end */}
      </Wrapper>
      <Wrapper>
        {/* service cards */}
        <div className="cat-service-cards">
          {visibleServices.map((service, index) => (
            <TServiceCard
              service={service}
              category={argCategory}
              key={index}
            />
          ))}
        </div>
        {/* service cards end */}
        {/* pagination buttons */}
        <div className="paginator py-[2em] gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </div>
          ))}
          <div
            className="next"
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
          >
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
        {/* pagination end */}
      </Wrapper>
    </div>
  );
}

const BannerContainer = ({
  category,
}: {
  category: ApiCategoryProps | undefined;
}) => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        <h2 className="banner-title">
          {category ? category.libelle : "Nos services"}
        </h2>
        <small className="small-text font-light">
          Explorez un monde de possibilités dans notre captivante collection{" "}
          {category ? "de " + category.libelle : "services"}, <br /> Où
          l'innovation rencontre le style pour élever votre expérience au-delà
          des attentes.
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

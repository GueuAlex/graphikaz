"use client";

import React, { useContext, useEffect, useState } from "react";
import "./creation_graphique_category.scss";
import "@/styles/checkout_side_bar.scss";
import { PathnameComponent } from "@/components";
import { TServiceCard, Wrapper } from "@/reutilisables";
import { ApiCategoryProps, apiServiceProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/reutilisables/laoder";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
  cities,
  date_interval,
  delivery_time,
  options,
} from "@/constants/data";
import MiniCategoryCarousel from "@/reutilisables/mini_categories_carousel";
import { MyAppContext } from "@/reutilisables/app_context";
import { TextSeparated } from "@/reutilisables/text_separaded";
import { EmptyBox, EmptySearchResult } from "@/public";
import Image from "next/image";

export default function Page({ params }: { params: Params }) {
  //s'assurer que le context est bien utilisables
  const context = useContext(MyAppContext);
  if (!context) {
    throw new Error("ComponentY must be used within a MyProvider");
  } else {
    console.log("context ok in navbar component");
  }
  // get context data
  const { categories, servicesList, isLoading } = context;
  // get the category parse as params to the url
  const { category } = params;

  // decode the pased params
  const category_name = decodeURIComponent(category);

  //find the category that was specified in the url
  let findedCategory: ApiCategoryProps | undefined = categories.find(
    (c) => c.libelle.toLowerCase() === category_name.toLowerCase()
  );

  //let services: apiServiceProps [] |[] = servicesList.find((s)=> s.category_id === findedCategory?.id);

  /* ******** show more / show less === categories  **************/
  const itemsPerPage = 5;

  /* ************************************************************************************
   ************************* ALL HOOKS IN THIS PAGE************************************* */
  const [optionIsVisible, setVisibility] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [selectedOption, setOption] = useState("Sort by (Default)");
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(
    categories.slice(0, itemsPerPage)
  );

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(975000);
  const [showAllD, setShowAllD] = useState(false);
  const [visibleItemsD, setVisibleItemsD] = useState(date_interval.slice(0, 4));

  useEffect(() => {
    findedCategory = categories.find(
      (c) => c.libelle.toLowerCase() === category_name.toLowerCase()
    );
  }, [category, category_name]);

  ////////////////////////////////////////////////////////////////////////////////////////
  /////////////// SIDE BAR BUTTONS - FILTER - SORT BY CONFIGURATION //////////////////////
  // sort by (Default) button state configuration
  const toggleOption = () =>
    optionIsVisible ? setVisibility(false) : setVisibility(true);
  // toggle side bar button configuration
  const toggleFilterSideBar = () =>
    toggleSideBar ? setToggleSideBar(false) : setToggleSideBar(true);

  // side bar categories show more
  const handleShoMore = () => {
    // afficher tous les elements
    setVisibleItems(categories);
    setShowAll(true);
  };
  // side bar categories show less
  const handleShoLess = () => {
    // afficher le nombre d'element par defaut
    setVisibleItems(categories.slice(0, itemsPerPage));
    setShowAll(false);
  };
  // side bar show date interval show more
  const handleShoMoreD = () => {
    // afficher tous les elements
    setVisibleItemsD(date_interval);
    setShowAllD(true);
  };
  // side bar show date interval show less
  const handleShoLessD = () => {
    // afficher le nombre d'element par defaut
    setVisibleItemsD(date_interval.slice(0, 4));
    setShowAllD(false);
  };

  // side bar min price ranger
  const handleMinChange = (event: any) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(Math.min(newMinValue, maxValue)); // Assurer que min <= max
  };
  // side bar max price ranger
  const handleMaxChange = (event: any) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(Math.max(newMaxValue, minValue)); // Assurer que max >= min
  };
  ////////////////////// END CONFIGURATION ////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  /////////////////////////// PAGINATION LOGIC //////////////////////////////
  const servicePerPage = 8; // Nombre d'éléments par page

  const [currentPage, setCurrentPage] = useState(1);

  //const displayedServices = services;

  const serviceTotalItems = servicesList.length;
  const totalPages = Math.ceil(serviceTotalItems / servicePerPage);

  const visibleServices = servicesList.slice(
    (currentPage - 1) * servicePerPage,
    currentPage * servicePerPage
  );
  ///////////////////END PAGINATION LOGICS///////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  if (isLoading) {
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

  if (!findedCategory) {
    return (
      <Wrapper>
        <div className="empty-service-container flex justify-center items-center flex-col gap-3 my-11 h-[90vh]">
          <h2>Opps !</h2>
          <Image
            src={EmptySearchResult}
            alt="empty-box"
            width={203}
            height={175}
          />
          <p>
            Aucun résultat trouvé pour{" "}
            <span className="underlined underline-mask font-semibold">
              {category_name}.
            </span>{" "}
            Revenez plutard
          </p>
          <TextSeparated text="ou" />
          <a href="/categories" className="redirect-link">
            Explorez nos services par categorie
          </a>
        </div>
      </Wrapper>
    );
  }

  // Récupérez tous les services dont l'id de catégorie correspond à celui de findedCategory
  const filteredServices: apiServiceProps[] = servicesList.filter(
    (service) => service.category_id === findedCategory!.id
  );

  return (
    <div className="categories">
      {toggleSideBar && <div className={`show-overlay  overlay`}></div>}
      {/* categories aside filter */}
      <aside
        className={`${
          toggleSideBar ? "show-cat-side-filter" : "hide-cat-side-filter"
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
                    <li id={index.toString()} key={index}>
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
                    <li key={index}>
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
              <select name="" id="" defaultValue={delivery_time[0]}>
                <option disabled>Délai</option>
                {delivery_time.map((time, index) => (
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
              <select name="" id="" defaultValue={cities[0]}>
                <option disabled>Abidjan</option>
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
          <BannerContainer cat={findedCategory} />
        </div>
      </div>
      {/* banner end */}
      <div className="backdrop-gb">
        <Wrapper>
          <div className="all-categories">
            <MiniCategoryCarousel categories={categories} />
          </div>
        </Wrapper>
      </div>

      {/* return filter buttons un sercices card if filteredServices length > 0  */}
      {filteredServices.length > 0 && (
        <Wrapper>
          {/* filter buttons area */}
          <div className="filter-container relative">
            {/* <div className="text-light"> Showing 1 – 8 of 12 results</div> */}
            {servicesList.length <= 0 ? (
              <div className="text-light">
                {" "}
                Showing – {servicesList.length > 8
                  ? "8"
                  : servicesList.length}{" "}
                of {servicesList.length} results
              </div>
            ) : (
              <div className="text-light">
                {" "}
                Showing – {servicesList.length > 8
                  ? "8"
                  : servicesList.length}{" "}
                of {servicesList.length} results
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
                  {options.map((option, index) => (
                    <li
                      key={index}
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

          {/* service cards */}
          <div className="cat-service-cards mt-4">
            {visibleServices.map((service, index) => {
              const category: ApiCategoryProps = categories.find(
                (c) => c.id === service.category_id
              )!;
              return (
                <TServiceCard
                  service={service}
                  category={category}
                  key={index}
                />
              );
            })}
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
      )}
      {/* show empty box if filteredServices are empty it's means there no founded service for the current category */}
      {filteredServices.length <= 0 && (
        <Wrapper>
          <div className="empty-service-container flex justify-center items-center flex-col gap-3 my-11">
            <h2>Opps !</h2>
            <Image src={EmptyBox} alt="empty-box" width={150} height={150} />
            <p>
              Aucun service trouvé pour{" "}
              <span className="underlined underline-mask font-semibold">
                {findedCategory.libelle}.
              </span>{" "}
              Revenez plutard
            </p>
            <TextSeparated text="ou" />
            <a href="/categories" className="redirect-link">
              Explorez nos services par categorie
            </a>
          </div>
        </Wrapper>
      )}
    </div>
  );
}

interface BannerContainerProps {
  cat: ApiCategoryProps;
}
const BannerContainer: React.FC<BannerContainerProps> = ({ cat }) => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        <h2 className="banner-title">{cat.libelle}</h2>

        <small className="small-text font-light">
          Explorez un monde de possibilités dans notre captivante collection de{" "}
          <span className=" underlined underline-clip font-bold">
            {cat.libelle}
          </span>{" "}
          où l'innovation <br />
          rencontre le style pour élever votre expérience au-delà des attentes.
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

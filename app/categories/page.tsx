"use client";

import React, { useEffect, useState } from "react";
import "./categories.scss";
import { PathnameComponent } from "@/components";
import { TServiceCard, Wrapper } from "@/reutilisables";
import { services, prestators, categories } from "@/constants";
import { packProps } from "@/types";
import { fetchAllData } from "@/types/api_services";

function Categories() {
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
  const [packList, setData] = useState<packProps[]>([]);
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

  /* ******** show more / show less === categories  **************/
  const itemsPerPage = 5;
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(
    categories.slice(0, itemsPerPage)
  );
  const handleShoMore = () => {
    // afficher tous les elements
    setVisibleItems(categories);
    setShowAll(true);
  };
  const handleShoLess = () => {
    // afficher le nombre d'element par defaut
    setVisibleItems(categories.slice(0, itemsPerPage));
    setShowAll(false);
  };
  /* ******** show more / show less  **************/

  /* ******** show more / show less === date posted  **************/
  const data = [
    "Last Hour",
    "Last 24 hours",
    "Last 7 days",
    "Last 14 days",
    "Last 30 days",
    "All",
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
    "1 Day",
    "2 Days",
    "3 Days",
    "4 Days",
    "5 Days",
    "6 Days",
    "7 Days",
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
  const [maxValue, setMaxValue] = useState(80);

  const handleMinChange = (event: any) => {
    const newMinValue = parseInt(event.target.value);
    setMinValue(Math.min(newMinValue, maxValue)); // Assurer que min <= max
  };

  const handleMaxChange = (event: any) => {
    const newMaxValue = parseInt(event.target.value);
    setMaxValue(Math.max(newMaxValue, minValue)); // Assurer que max >= min
  };

  return (
    <div className="categories">
      <div className={`${toggle ? "show-overlay" : ""} overlay`}></div>
      {/* aside filter */}
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
                        value={cat.label}
                        name={cat.label}
                        id={cat.id.toString()}
                      />
                      <label htmlFor={cat.id.toString()}>{cat.label}</label>
                    </li>
                  ))}
                </ul>
                {!showAll ? (
                  <div className="show">
                    <i className="ri-add-line symbol"></i>
                    <span onClick={handleShoMore} className="show-text">
                      Show more
                    </span>
                  </div>
                ) : (
                  <div className="show">
                    <i className="ri-subtract-line symbol"></i>
                    <span onClick={handleShoLess} className="show-text">
                      Show less
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Date posted */}
            <div className="filter-section">
              <h3 className="title">Date Posted</h3>
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
                      Show more
                    </span>
                  </div>
                ) : (
                  <div className="show">
                    <i className="ri-subtract-line symbol"></i>
                    <span onClick={handleShoLessD} className="show-text">
                      Show less
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Reponse time */}
            <div className="filter-section">
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
            </div>

            {/* delivery Time */}
            <div className="filter-section">
              <h3 className="title">Response Time</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  Delivery Time
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
                <div className="min">${minValue}</div>
                <div className="max">${maxValue}</div>
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
                    min="0"
                    max="100"
                    value={minValue}
                    onChange={handleMinChange}
                  />
                  <input
                    type="range"
                    id="maxRange"
                    name="maxRange"
                    min="0"
                    max="100"
                    value={maxValue}
                    onChange={handleMaxChange}
                  />
                </div>
              </div>
            </div>

            {/* English Level */}
            <div className="filter-section">
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
            </div>

            {/* Cities */}
            <div className="filter-section">
              <h3 className="title">City</h3>
              <select name="" id="">
                <option value="" selected disabled>
                  Cities
                </option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="filter-section">
              <h3 className="title">Location</h3>
              <div className="filter-location">
                <input type="text" name="location" id="" className=" flex-1" />
                <i className="ri-map-pin-line"></i>
              </div>
            </div>

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
          <BannerContainer />
        </div>
      </div>
      {/* banner end */}
      <Wrapper>
        {/* filter buttons area */}
        <div className="filter-container relative">
          <div className="text-light"> Showing 1 – 8 of 12 results</div>
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
          {packList.map((pack, index) => {
            /* const prestator = prestators.find(
              (prestator) => prestator.id === service.prestatorId
            ); */
            return (
              <TServiceCard service={pack.service} montant={pack.montant} />
            );
          })}
        </div>
        {/* service cards end */}
        {/* pagination buttons */}
        <div className="paginator py-[2em] gap-3">
          <div className="page1 active">1</div>
          <div className="page2">2</div>
          <div className="next">
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
        {/* pagination end */}
      </Wrapper>
    </div>
  );
}

const BannerContainer = () => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        <h2 className="banner-title">Design & Creative</h2>
        <small className="small-text">
          Give your visitor a smooth online experience with a solid UX design
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

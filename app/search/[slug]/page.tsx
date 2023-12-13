"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import { PathnameComponent } from "@/components";
import {
  ApiCategoryProps,
  OptionsProps,
  apiServiceProps,
  packProps,
} from "@/types";
import Image from "next/image";

import { fetchAllData, getCategories } from "@/types/api_services";
import { TServiceCard, Wrapper } from "@/reutilisables";
import Error404 from "@/reutilisables/404";
import Loader from "@/reutilisables/laoder";
import { AnimatePresence, motion } from "framer-motion";

export default function Page({ params }: { params: { slug: string } }) {
  const title = decodeURIComponent(params.slug);
  console.log(title);
  ///////////// fetching data from api ///////////////:
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
  const [filteredServices, setFilteredServices] = useState<apiServiceProps[]>(
    []
  );
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
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const servicesList: apiServiceProps[] = data!;
        setData(servicesList);
        // Maintenant, vous pouvez utiliser les données ici
        //console.log(servicesList);
        // Filtrer les services en fonction du titre
        const filtered = servicesList.filter((service) =>
          matchesTitle(service, title)
        );
        console.log(filtered);
        setFilteredServices(filtered);
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
        //console.log(categories);
        setcategoriesIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setcategoriesIsloadin(false);
      });
  }, [title]);

  ///////////////////::
  //// filtre de services
  function matchesTitle(service: apiServiceProps, title: string): boolean {
    // Vérifier si le libellé du service correspond au titre
    if (service.libelle.toLowerCase().includes(title.toLowerCase())) {
      return true;
    }

    // Vérifier si le libellé d'un pack de service correspond au titre
    if (
      service.pack_services.some((pack) =>
        pack.libelle.toLowerCase().includes(title.toLowerCase())
      )
    ) {
      return true;
    }

    // Vérifier si le libellé d'une option dans un pack de service correspond au titre
    if (
      service.pack_services.some((pack) =>
        pack.ligne_services.some((option) =>
          option.libelle.toLowerCase().includes(title.toLowerCase())
        )
      )
    ) {
      return true;
    }

    return false;
  }

  /////

  //////////////////////////: PAGINATION LOGIQUE //////////////////////////
  const servicePerPage = 8; // Nombre d'éléments par page

  const [currentPage, setCurrentPage] = useState(1);

  /* const displayedServices =
   findedServices.length > 0 ? findedServices : services; */

  const serviceTotalItems = filteredServices.length;
  const totalPages = Math.ceil(serviceTotalItems / servicePerPage);

  const visibleServices = filteredServices.slice(
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
  if (filteredServices.length <= 0) {
    return (
      <Wrapper>
        <Error404 />
      </Wrapper>
    );
  }

  return (
    <div className="single_service_details saerch-result-page">
      <Wrapper>
        <div className="flex justify-between">
          <PathnameComponent /> {/* heading with fil d'ariane */}
        </div>
      </Wrapper>

      {/* banner */}
      <div className="bannerss relative flex justify-center items-center">
        <div className=" max-w-[110rem] w-full">
          <BannerContainer
            title={title}
            // service={service} //prestator={prestator}
          />
        </div>
      </div>
      {/* banner container */}
      <Wrapper>
        {/* filter buttons area */}
        <div className="filter-container relative">
          {/* <div className="text-light"> Showing 1 – 8 of 12 results</div> */}
          {filteredServices.length <= 0 ? (
            <div className="text-light">
              {" "}
              Showing 1 – {services.length > 8 ? "8" : services.length} of{" "}
              {services.length} results
            </div>
          ) : (
            <div className="text-light">
              {" "}
              Showing 1 –{" "}
              {filteredServices.length > 8
                ? "8"
                : filteredServices.length} of {filteredServices.length} results
            </div>
          )}
        </div>
        {/* filter buttons area end */}
      </Wrapper>
      <Wrapper>
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
        {/* pagination buttons */}
        <div className="paginator py-[2em] mt-3 gap-3 ">
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

  //////////////: rien de trouvé
}

// }

const BannerContainer = ({ title }: { title: string }) => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        <h2 className="banner-title text-[2em]">Resultats de recherche pour</h2>
        <small className="small-text font-light">{title}</small>
      </Wrapper>
    </div>
  );
};

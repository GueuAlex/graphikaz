"use client";
import Link from "next/link";
import "./popular_services.css";

import Image from "next/image";
import { ApiCategoryProps, apiServiceProps } from "@/types";
import { DeliCar, Imgold, Service2 } from "@/public";
import { useEffect, useState } from "react";

const PopularServices = ({
  serviceList,
  categories,
}: {
  serviceList: apiServiceProps[];
  categories: ApiCategoryProps[];
}) => {
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (categories.length > 0 && activeCategory.length === 0) {
      setActiveCategory(categories[0].libelle);
      console.log(activeCategory);
    }
  }, [activeCategory]);
  /*   async function fetchAndUseData() {
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
  }, []); */

  /// sinon
  return (
    <div className="w-full px-[2rem] py-[5rem] popularServices relative">
      <div className="py-[4rem] max-w-[97rem]  mx-auto   relative">
        <div className="p-title-container flex flex-row justify-between items-start">
          <div>
            <h2 className=" text-slate-800 ">Popular Services</h2>
            <small className="subtitle mt-3 text-slate-500">
              Most viewed and all-time top-selling services
            </small>
          </div>
          <div className=" flex flex-row gap-5 button-group">
            {categories.map((category) => (
              <button
                type="button"
                className={
                  category.libelle === activeCategory ? "active-button" : ""
                }
                onClick={() => {
                  setActiveCategory(category.libelle);
                  console.log("active cat:", activeCategory);
                }}
              >
                {category.libelle}
              </button>
            ))}
            {/* <button type="button" className="active-button">
              Design & Creative
            </button>
            <button type="button">Development & It</button>
            <button type="button">Digital Marketing</button>
            <button type="button">Writing & Translation</button> */}
          </div>
        </div>
        <div className="mt-10 relative">
          <div className="p-service-content flex-container gap-7">
            {serviceList.map((service) => {
              const category: ApiCategoryProps = categories.find(
                (c) => c.id === service.category_id
              )!;
              return <PServiceCard service={service} category={category} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const PServiceCard = ({
  service,
  category,
}: {
  service: apiServiceProps;
  category: ApiCategoryProps | undefined; // Changer ici
}) => {
  return (
    <div key={service.id} className="flex-item">
      <Link
        href={`/categories/${service.libelle}`}
        className="po-link flex-1  border rounded-md flex flex-row gap-3 pr-2"
      >
        <div className="flex-2 object-contain">
          {service.image_services.length > 0 ? (
            <Image
              src={
                "https://graphikaz.digifaz.com/api/photo_service/" +
                service.image_services[0].libelle
              }
              alt="sv1"
              className="w-full h-full rounded-tl-[5px] rounded-bl-[5px]"
              width={576}
              height={768}
            />
          ) : (
            <Image
              src={Imgold}
              alt="sv1"
              className=" w-full h-full rounded-tl-[5px] rounded-bl-[5px]"
            />
          )}
        </div>
        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
          <div className="flex flex-row justify-between ">
            <p className="mt-2 text-slate-400">
              {category !== undefined ? category.libelle : ""}
            </p>
            <div className="w-[2.3rem] h-[2.3rem] flex items-center justify-center border border-secondary rounded-full bg-secondary">
              <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
            </div>
          </div>
          <p className=" p-link text-stone-900 font-[500] text-[1.2rem] line-clamp-2 ">
            {service.libelle}
          </p>
          {service.libelle.length < 50 ? <br /> : ""}
          <p className="mt-3 text-stone-500">
            <i className="ri-star-fill text-yellow-500"></i>{" "}
            <span className="text-black font-semibold">{4.5}</span>{" "}
            {`(${2} Reviews)`}
          </p>

          <div className="mt-5 w-full h[1px] border " />
          <div className="pt-[0.7rem] flex flex-row items-start justify-between">
            <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
              <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                {/* prestator src */}
                {/* prestators.find(
                      (prestator) => prestator.id === service.prestatorId
                    )?.profilPic ?? "" */}
                <div className="overlay-dot absolute "></div>
                <Image src={DeliCar} alt="f1" className="rounded-full" />
              </div>
              <p className="text-[0.9rem]">
                {/* prestator name */}
                {/* {prestators.find(
                  (prestator) => prestator.id === service.prestatorId
                )?.fullName ?? ""} */}

                {service.pack_services.length > 0 ? (
                  <span>
                    <small>Livrer sous </small>{" "}
                    <small>
                      {service.pack_services[0].delais_livraison + " jours"}
                    </small>
                  </span>
                ) : (
                  ""
                )}
              </p>
              {/*  {service.pack_services.length > 0 ? (
                <span>
                  <small>Livrer sous </small>{" "}
                  <small>
                    {service.pack_services[0].delais_livraison + " jours"}
                  </small>
                </span>
              ) : (
                ""
              )} */}
            </div>
            {/*  <p className="text-[0.8rem] text-stone-500">
              {service.pack_services.length > 0 ? "A PARTIR DE" : ""}
              <span className="text-[16px] text-black font-normal">
                {service.pack_services.length > 0
                  ? service.pack_services[0]?.montant + " FCFA"
                  : ""}
              </span>
            </p> */}
          </div>
          <button type="button" className="service-view-botton">
            {service.pack_services.length > 0
              ? "A PARTIR DE " + service.pack_services[0]?.montant + " FCFA"
              : "VOIR"}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PopularServices;

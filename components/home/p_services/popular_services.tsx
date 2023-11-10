"use client";
import Link from "next/link";
import "./popular_services.css";

import React, { useEffect, useState } from "react";
import { services, prestators } from "@/constants";
import Image from "next/image";
import { ServiceProps, apiServiceProps, packProps } from "@/types";
import { fetchAllData } from "@/types/api_services";
import { Digifaz, Service2 } from "@/public";

const PopularServices = ({ packList }: { packList: packProps[] }) => {
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
            <h2 className=" text-slate-800">Popular Services</h2>
            <small className="subtitle mt-3 text-slate-500 font-semibold">
              Most viewed and all-time top-selling services
            </small>
          </div>
          <div className=" flex flex-row gap-5 button-group">
            <button type="button" className="active-button">
              Design & Creative
            </button>
            <button type="button">Development & It</button>
            <button type="button">Digital Marketing</button>
            <button type="button">Writing & Translation</button>
          </div>
        </div>
        <div className="mt-10 relative">
          <div className="p-service-content flex-container gap-7">
            {packList.map((pack) => (
              <PServiceCard service={pack.service} montant={pack.montant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PServiceCard = ({
  service,
  montant,
}: {
  service: apiServiceProps;
  montant: number;
}) => {
  return (
    <div key={service.id} className="flex-item">
      <Link
        href={`/categories/${service.libelle}`}
        className="po-link flex-1  border rounded-md flex flex-row gap-3 pr-2"
      >
        <div className="flex-2 object-contain">
          <Image src={Service2} alt="sv1" className="w-full h-full" />
        </div>
        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
          <div className="flex flex-row justify-between ">
            <p className="mt-2 text-slate-400">{"service.category"}</p>
            <div className="w-[2.3rem] h-[2.3rem] flex items-center justify-center border border-secondary rounded-full bg-secondary">
              <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
            </div>
          </div>
          <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
            {service.libelle}
          </p>
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
                <Image src={Digifaz} alt="f1" className="rounded-full" />
              </div>
              <p className="text-[0.9rem]">
                {/* prestator name */}
                {/* {prestators.find(
                  (prestator) => prestator.id === service.prestatorId
                )?.fullName ?? ""} */}
                Digifaz
              </p>
            </div>
            <p className="text-[0.8rem] text-stone-500">
              A PARTIR DE{" "}
              <span className="text-[16px] text-black font-normal">
                {montant} FCFA
              </span>
            </p>
          </div>
          <button type="button" className="service-view-botton">
            voir
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PopularServices;

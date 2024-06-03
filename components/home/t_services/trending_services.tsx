import React, { useState } from "react";
import Link from "next/link";
import "./trending_services.css";
import { TServiceCard } from "@/reutilisables";
import { ApiCategoryProps, apiServiceProps, GraphicServProps } from "@/types";

const TrendingService = ({
  serviceList,
  categories,
}: {
  serviceList: GraphicServProps[];
  categories: ApiCategoryProps[];
}) => {
  /*  const multipliedServiceList = serviceList.flatMap((service) =>
    Array.from({ length: 10 }, () => service)
  ); */

  return (
    <div className="t-services w-full px-[2rem] py-[5rem] bg-primaryy relative  flex justify-center items-center">
      <div className="max-w-[97rem] relative   w-full">
        <div className="t-service-header flex flex-row justify-between items-center mb-[3rem] mt-5">
          <div className="">
            <h2 className=" text-neutral-800">Best sellers</h2>
            <small className="subtitle mt-3 text-slate-500 font-semibold">
              Services les plus consultés et vendus
            </small>
          </div>
          <span className="hover:text-secondary text-slate-700 font-semibold">
            <Link href="/categories?category=all">
              Tout afficher <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className="px-[5px] py-[5px] relative">
          {/* Trying carrousel  */}
          <div className="carousel carousel-center  p-4 space-x-4">
            {serviceList.map((service, index) => {
              const category: ApiCategoryProps = categories.find(
                (c) => c.id === service.categoryId
              )!;
              return (
                <div className="carousel-item" key={service.id}>
                  <TServiceCard
                    key={service.id}
                    service={service}
                    category={category}
                    /* style={{
                    display: index === currentIndex ? "block" : "none",
                  }} */
                  />
                </div>
              );
            })}
          </div>
          {/* end of trying */}
        </div>
      </div>
    </div>
  );
};

export default TrendingService;

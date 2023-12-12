import Link from "next/link";
import "./trending_services.css";

import { TServiceCard } from "@/reutilisables";
import { ApiCategoryProps, apiServiceProps, packProps } from "@/types";

const TrendingService = ({
  serviceList,
  categories,
}: {
  serviceList: apiServiceProps[];
  categories: ApiCategoryProps[];
}) => {
  return (
    <div className="t-services w-full px-[2rem] py-[5rem] bg-primary relative  flex justify-center items-center">
      <div className="max-w-[97rem] relative   w-full">
        <div className="t-service-header flex flex-row justify-between items-center mb-[3rem] mt-5">
          <div className="">
            <h2 className="text-slate-100">Trending Services</h2>
            <small className="subtitle mt-3 text-slate-300 font-semibold">
              Most viewed and all-time top-selling services
            </small>
          </div>
          <span className="hover:text-secondary text-slate-200 font-semibold">
            <Link href="/categories?category=all">
              All services <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className="px-[5px] py-[5px] relative">
          <div className="w-[2.5rem] h-[2.5rem] hover:bg-secondary hover:text-white cursor-pointer bg-white opacity-80 absolute z-[100] rounded-full shadow shadow-slate-600 top-1/2 flex justify-center items-center">
            <i className="ri-arrow-left-s-line text-[1.5rem]"></i>
          </div>
          <div className="w-[2.5rem] h-[2.5rem]  hover:bg-secondary hover:text-white cursor-pointer bg-white opacity-80 absolute z-[100] rounded-full shadow shadow-slate-600 right-0 top-1/2 flex justify-center items-center">
            <i className="ri-arrow-right-s-line text-[1.5rem]"></i>
          </div>

          <div className="t-services-cards flex flex-nowrap justify-around gap-2">
            {serviceList.length > 5
              ? serviceList.slice(0, 4).map((service) => {
                  const category: ApiCategoryProps = categories.find(
                    (c) => c.id === service.category_id
                  )!;
                  return (
                    <TServiceCard
                      key={service.id}
                      service={service}
                      category={category}
                    />
                  );
                })
              : serviceList.map((service) => {
                  const category: ApiCategoryProps = categories.find(
                    (c) => c.id === service.category_id
                  )!;
                  return (
                    <TServiceCard
                      key={service.id}
                      service={service}
                      category={category}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingService;

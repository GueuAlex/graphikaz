import Link from "next/link"
import "./popular_services.css";

import React from 'react';
import { services, prestators } from "@/constants";
import Image from "next/image";
import { ServiceProps } from "@/types";

const PopularServices = () => {
  return (
    <div className="w-full px-[2rem] py-[5rem] popularServices relative">
        <div className="py-[4rem] max-w-[97rem]  mx-auto   relative">
            <div className="p-title-container flex flex-row justify-between items-start" > 
                <div>
                    <h2 className=" text-slate-800">
                        Popular Services
                    </h2>
                    <small className="subtitle mt-3 text-slate-500 font-semibold">
                        Most viewed and all-time top-selling services
                    </small>
                </div>
                <div className=" flex flex-row gap-5 button-group">
                    <button type="button" className="active-button">Design & Creative</button>
                    <button type="button" >Development & It</button>
                    <button type="button" >Digital Marketing</button>
                    <button type="button">Writing & Translation</button>
                </div>
            </div>
            <div className="mt-10 relative">

            <div className="p-service-content flex-container gap-7">

                {services.map((service) => (
                    <PServiceCard service={service} />
                ))}

            </div>

            </div>
        </div>
    </div>
  )
}



const PServiceCard = ({ service }: { service: ServiceProps })  => {
  return (
    <div key={service.id} className="flex-item">
        <Link href="/" className="po-link flex-1  border rounded-md flex flex-row gap-3 pr-2">
            <div className="flex-2 object-contain">
                <Image src={service.cover} alt="sv1" className="w-full h-full" />
            </div>
            <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                <div className="flex flex-row justify-between ">
                    <p className="mt-2 text-slate-400">{service.category}</p> 
                    <div className="w-[2.3rem] h-[2.3rem] flex items-center justify-center border border-secondary rounded-full bg-secondary">
                        <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
                    </div>
                </div>
                <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                    {service.title} 
                </p>
                <p className="mt-3 text-stone-500">
                    <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">{service.reviewScore}</span> {`(${service.totalReview} Reviews)`}
                </p>

                <div className="mt-5 w-full h[1px] border "/>
                <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                    <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                        <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                        <Image
                            src={prestators.find(prestator => prestator.id === service.prestatorId)?.profilPic ?? ""}
                            alt="f1"
                            className="rounded-full"
                        />        
                        </div>
                        <p className="text-[0.9rem]">{prestators.find(prestator => prestator.id === service.prestatorId)?.fullName ?? ""}</p>
                    </div>
                    <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">${service.startPrice}</span></p>
                </div>
            </div>
        </Link>
    </div>
  )
} 


export default PopularServices



import Link from "next/link"
import "./popular_services.css";

import React from 'react';
import { Service1, Service2, Service3, Service4, Service5, Service6,
        F1, F2, F3, F4, F5, F6 } from "@/public";
import Image from "next/image";

const PopularServices = () => {
  return (
    <div className="w-full px-[2rem] py-[5rem] popularServices relative">
        <div className="py-[4rem] max-w-[97rem]  mx-auto sm:px-16 px-6 sm:py-16  relative">
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

                <div className="flex-item">
                    <Link href="/" className="po-link flex-1  border rounded-md flex flex-row gap-3 pr-2">
                        <div className="flex-2 object-contain">
                            <Image src={Service1} alt="sv1" className="w-full h-full" />
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border border-secondary rounded-full bg-secondary">
                                    <i className="ri-heart-line pt-1  text-white text-[1rem]"></i>
                                </div>
                            </div>
                            <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                                Embedded Android & AOSP customizations on app mobile
                            </p>
                            <p className="mt-3 text-stone-500">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">4.5</span> {`(2 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F1} alt="f1" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">John Powell</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$120</span></p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex-item">
                    <Link href="/" className="po-link flex-1 w-[100%]  border rounded-md flex flex-row gap-3 pr-2">
                        <div className="flex-2 object-contain">
                            <Image src={Service2} alt="sv2"  className="w-full h-full"/>
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border rounded-full add-to-favorite hover:bg-secondary hover:border-secondary">
                                    <i className="ri-heart-line pt-1  text-[1rem]"></i>
                                </div>
                            </div>
                            <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                                Developers drop the framework folder into a new parent
                            </p>
                            <p className="mt-3 text-stone-500">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">4.0</span> {`(1 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F3} alt="f3" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">Robert Fox</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$59</span></p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="flex-item">
                    <Link href="/" className="po-link flex-1 w-[100%]  border rounded-md flex flex-row gap-3 pr-2">
                        <div className="flex-2 object-contain">
                            <Image src={Service3} alt="sv2"  className="w-full h-full" />
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border rounded-full add-to-favorite hover:bg-secondary hover:border-secondary">
                                    <i className="ri-heart-line pt-1  text-[1rem]"></i>
                                </div>
                            </div>
                            <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                                PHP framework that yuo can use to create your own custom
                            </p>
                            <p className="mt-3 text-stone-500">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">3.8</span> {`(8 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F4} alt="f4" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">Ali Tufan</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$199</span></p>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className="flex-item">
                    <Link href="/" className="po-link flex-1 w-[100%]  border rounded-md flex flex-row gap-3 pr-2">
                        <div className="flex-2 object-contain">
                            <Image src={Service4} alt="sv4" className="w-full h-full" />
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border rounded-full add-to-favorite hover:bg-secondary hover:border-secondary">
                                    <i className="ri-heart-line pt-1 text-[1rem]"></i>
                                </div>
                            </div>
                            <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                                Custom iOS and Android apps development for your project
                            </p>
                            <p className="mt-3 text-stone-500">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">4.8</span> {`(14 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F5} alt="f5" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">Tom Wilson</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$159</span></p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex-item">
                    <Link href="/" className="po-link flex-1 w-[100%]  border rounded-md flex flex-row gap-3 pr-2 ">
                        <div className="flex-2 object-contain">
                            <Image src={Service5} alt="sv5" className="w-full h-full" />
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border rounded-full add-to-favorite hover:bg-secondary hover:border-secondary">
                                    <i className="ri-heart-line pt-1 text-[1rem]"></i>
                                </div>
                            </div>
                            <p className=" p-link text-stone-900 font-[500] text-[1.2rem] ">
                                I will often turn to a PHP framework to compose My code
                            </p>
                            <p className="mt-3 text-stone-500">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">4.8</span> {`(14 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F4} alt="f4" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">Ali Tufan</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$69</span></p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex-item">
                    <Link href="/" className="po-link flex-1 w-[100%]  border rounded-md flex flex-row gap-3 pr-2">
                        <div className="flex-2 object-contain">
                            <Image src={Service6} alt="sv6" className="w-full h-full" />
                        </div>
                        <div className="acess flex-2 flex-col justify-center items-center pt-2 pb-1 left-container">
                            <div className="flex flex-row justify-between ">
                                <p className="cat-label mt-2 text-slate-400">Design & Creative</p> 
                                <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center border rounded-full add-to-favorite hover:bg-secondary hover:border-secondary">
                                    <i className="ri-heart-line pt-1 text-[1rem]"></i>
                                </div>
                            </div>
                            <p className="p-link text-stone-900 font-[500] text-[1.2rem] ">
                                Power management, notification and geofencing for host serve
                            </p>
                            <p className="mt-3 text-stone-500 p-review">
                                <i className="ri-star-fill text-yellow-500"></i> <span className="text-black font-semibold">4.8</span> {`(14 Reviews)`}
                            </p>

                            <div className="mt-5 w-full h[1px] border "/>
                            <div className="pt-[0.7rem] flex flex-row items-start justify-between">
                                <div className=" flex flex-row gap-3 justify-start items-center hover:text-secondary">
                                    <div className="w-[2.2rem] h-[2.2rem]  rounded-full object-contain">
                                        <Image src={F6} alt="f6" className="rounded-full" />
                                    </div>
                                    <p className="text-[0.9rem]">Thomas Powell</p>
                                </div>
                                <p className="text-[0.8rem] text-stone-500">Starting at: <span className="text-[1.1rem] text-black font-semibold">$125</span></p>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default PopularServices
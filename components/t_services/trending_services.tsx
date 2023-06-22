import Link from "next/link"
import "./trending_services.css"

import Image from "next/image";
import { F1, Service1 } from "@/public";

const TrendingService = () => {
  return (
    <div className="t-services w-full px-[2rem] py-[5rem] bg-primary relative  flex justify-center items-center">
       <div className="max-w-[97rem] relative   w-full">
            <div className="t-service-header flex flex-row justify-between items-center" > 
                <div className="mb-[4rem]">
                    <h2 className="text-slate-100">
                        Trending Services
                    </h2>
                    <small className="subtitle mt-3 text-slate-300 font-semibold">
                        Most viewed and all-time top-selling services
                    </small>
                </div>
                <span className="hover:text-secondary text-slate-200 font-semibold">
                    <Link href="/">All services <i className="ri-arrow-right-line"></i></Link>
                </span>
            </div>
            <div className="px-[5px] py-[5px] relative">
                <div className="w-[2.5rem] h-[2.5rem] bg-white opacity-80 absolute z-[100] rounded-full shadow shadow-slate-600 top-1/2 flex justify-center items-center"><i className="ri-arrow-left-s-line text-[1.5rem]"></i></div>
                <div className="w-[2.5rem] h-[2.5rem] bg-white opacity-80 absolute z-[100] rounded-full shadow shadow-slate-600 right-0 top-1/2 flex justify-center items-center"><i className="ri-arrow-right-s-line text-[1.5rem]"></i></div>
                <div className="flex flex-row flex-shrink gap-5 justify-center items-center">

                <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <div className="w-[2.7rem] h-[2.7rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-50 mt-2 mr-2">
                                <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
                            </div>
                            <Image src={Service1} alt="sv1" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px]">
                            <div className="px-[20px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">Design & Creative</p> 
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
                        </div>
                    </div>
                   </Link>

                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <div className="w-[2.7rem] h-[2.7rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-50 mt-2 mr-2">
                                <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
                            </div>
                            <Image src={Service1} alt="sv1" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px]">
                            <div className="px-[20px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">Design & Creative</p> 
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
                        </div>
                    </div>
                   </Link>

                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <div className="w-[2.7rem] h-[2.7rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-50 mt-2 mr-2">
                                <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
                            </div>
                            <Image src={Service1} alt="sv1" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px]">
                            <div className="px-[20px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">Design & Creative</p> 
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
                        </div>
                    </div>
                   </Link>

                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <div className="w-[2.7rem] h-[2.7rem] flex items-center justify-center border border-secondary rounded-full bg-secondary absolute right-0 z-50 mt-2 mr-2">
                                <i className="ri-heart-line pt-1 text-white text-[1.2rem]"></i>
                            </div>
                            <Image src={Service1} alt="sv1" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px]">
                            <div className="px-[20px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">Design & Creative</p> 
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
                        </div>
                    </div>
                   </Link>

                   

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default TrendingService
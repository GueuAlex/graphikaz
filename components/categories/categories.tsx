import "./categories.css"

import Link from "next/link"
import React from 'react'
import Image from "next/image"
import { Hc1, Hc2,
    Hc3,
    Hc4,
    Hc5,
    Hc6,
    Hc7,
    Hc8 } from "@/public"

const Categories = () => {
  return (
    <div className="w-full  categories relative" >
        <div className="py-[4rem] max-w-[97rem]  mx-auto sm:px-16 px-6 sm:py-16  relative">
            <div className="categories-title flex flex-row justify-between items-start" > 
                <div>
                    <h2 className=" text-slate-800">
                        Browse talent by category​
                    </h2>
                    <small className="subtitle mt-3 text-slate-500 font-semibold">
                        Get some Inspirations from 1800+ skills
                    </small>
                </div>
                <span className="hover:text-secondary font-semibold">
                    <Link href="/">All categories <i className="ri-arrow-right-line"></i></Link>
                </span>
            </div>
            <div  className="categories-content relative  mt-16">
                
                   
                   <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4  items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc1} alt="dev" className="img"/>
                            </div>
                            <div className="category-title">
                                <h3>Developement & It</h3>
                                <small className="mt-5">8 Services</small>
                            </div>
                        </div>
                    </Link>


                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc2} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Design & Creative</h3>
                                <small className="mt-5">3 Services</small>
                            </div>
                        </div>
                    </Link>
                   

                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc3} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Digital Marketing</h3>
                                <small className="mt-5">1 Service</small>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc4} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Writing & Translation</h3>
                                <small className="mt-5">1 Service</small>
                            </div>
                        </div>
                    </Link>
                    

                    

                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc6} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Video & Animation</h3>
                                <small className="mt-5">5 Services</small>
                            </div>
                        </div>
                    </Link>


                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc7} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Programming & Tech</h3>
                                <small className="mt-5">10 Services</small>
                            </div>
                        </div>
                    </Link>
                    


                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc8} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Finance & Accouting</h3>
                                <small className="mt-5">2 Services</small>
                            </div>
                        </div>
                    </Link>


                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc5} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Music & Audio</h3>
                                <small className="mt-5">0 Service</small>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc3} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Digital Marketing</h3>
                                <small className="mt-5">1 Service</small>
                            </div>
                        </div>
                    </Link>

                    <Link href="/" className=" link font-[600]">
                        <div className="flex flex-row gap-4 items-center">
                            <div className=" max-h-[5rem] max-w-[5rem] object-contain ">
                                <Image src={Hc4} alt="dev" className="img" />
                            </div>
                            <div className="category-title">
                                <h3>Writing & Translation</h3>
                                <small className="mt-5">1 Service</small>
                            </div>
                        </div>
                    </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Categories
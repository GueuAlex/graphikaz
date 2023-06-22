import "./testimonials.css"

import React from 'react'
import Image from "next/image"
import { F1, F7, F8, F9, F5, F6 } from "@/public"

const Testinmonials = () => {
  return (
    <div className="testimonials px-[2rem] py-[5rem] w-full flex justify-center items-start">
        <div className="max-w-[97rem] h-full w-full flex flex-col justify-center items-center">
        
                <h2 className=" text-slate-800">
                    Testimonials
                </h2>
                <small className="subtitle mt-3 text-slate-500 font-semibold">
                    Interdum et malesuada fames ac ante ipsum
                </small>

                <i className="ri-double-quotes-l text-[5.5rem] font-bold text-secondary mt-5"></i>
                <div className="flex flex-col justify-center items-center text-testi">
                  <h2 className=" text-slate-800 text-center max-w-[65rem]">
                      "Sed ut prespiciatis unde omnis iste natus error sit voluptatem accusaatium doloremque laudantium, totam rem aperiam, eaque ipsa quae ad illo inventore veritatis"
                  </h2> 
                  <h3 className="mt-10">
                    Ali Tufan
                  </h3>
                  <small className=" text-stone-600 mt-2">Product Manager, Apple Inc</small>

                  <div className="flex flex-row gap-3 flex-wrap mt-10 img-container">
                      <div className="w-[6.5rem] h-[6.5rem] rounded-full hover:border-secondary hover:border-[2px] px-[10px] py-[10px] object-contain">
                        <Image src={F7} alt="f1" className="rounded-full" />
                      </div>

                      <div className="w-[6.5rem] h-[6.5rem] rounded-full hover:border-secondary hover:border-[2px]  px-[10px] py-[10px] object-contain ">
                          <Image src={F6} alt="f1" className="rounded-full" />
                      </div>
                      <div className="w-[6.5rem] h-[6.5rem] rounded-full border-secondary border-[2px]  px-[10px] py-[10px] object-contain ">
                          <Image src={F1} alt="f1" className="rounded-full" />
                      </div>
                      <div className="w-[6.5rem] h-[6.5rem] rounded-full hover:border-secondary hover:border-[2px]  px-[10px] py-[10px] object-contain ">
                          <Image src={F5} alt="f1" className="rounded-full" />
                      </div>
                      <div className="w-[6.5rem] h-[6.5rem] rounded-full hover:border-secondary hover:border-[2px]  px-[10px] py-[10px] object-contain ">
                          <Image src={F9} alt="f1" className="rounded-full" />
                      </div>
                  </div>
                </div>
            
        </div>
    </div>
  )
}

export default Testinmonials
import Link from "next/link"
import Image from "next/image"
import "./blogs.css"
import { Blog1,Blog2,Blog3,Blog4, } from "@/public"

const Blogs = () => {
  return (
    <div className="w-full px-[2rem] py-[7rem] relative  flex justify-center items-center">
       <div className="max-w-[97rem] relative   w-full">
            <div className="flex flex-row justify-between items-center" > 
                <div className="mb-[4rem]">
                    <h2 className="text-slate-900">
                        Our Blog
                    </h2>
                    <small className="subtitle mt-3 text-stone-600 font-semibold">
                        See how you can up your career status
                    </small>
                </div>
                <span className="hover:text-secondary text-slate-800 font-semibold">
                    <Link href="/">All Blogs <i className="ri-arrow-right-line"></i></Link>
                </span>
            </div>
            <div className="px-[5px] py-[5px] relative">
                <div className="flex flex-row flex-wrap justify-between items-center">
                <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] h-auto max-h-[32rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <Image src={Blog1} alt="blog1" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px] shadow-slate-200 shadow">
                            <div className="px-[30px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">November 7, 2022</p> 
                                <p className=" mb-3 p-link text-stone-900 font-[500] text-[1.2rem] ">
                                    New Apartment Nice in the Best Canadian Cities
                                </p>
                                <small className="text-[1rem] text-slate-600">
                                    Bringing the culture of sharing to everyone
                                </small>
                            </div>
                        </div>
                    </div>
                   </Link>

                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] h-auto max-h-[32rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <Image src={Blog2} alt="blog2" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px] shadow-slate-200 shadow">
                            <div className="px-[30px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">November 7, 2022</p> 
                                <p className=" mb-3 p-link text-stone-900 font-[500] text-[1.2rem] ">
                                    Diamond Manor Apartment in the New York and Service
                                </p>
                                <small className="text-[1rem] text-slate-600">
                                    Bringing the culture of sharing to everyone
                                </small>
                            </div>
                        </div>
                    </div>
                   </Link>


                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] h-auto max-h-[32rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <Image src={Blog3} alt="blog3" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px] shadow-slate-200 shadow">
                            <div className="px-[30px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">November 7, 2022</p> 
                                <p className=" mb-3 p-link text-stone-900 font-[500] text-[1.2rem] ">
                                    Unveils the Best Canadian Cities for Biking
                                </p>
                                <small className="text-[1rem] text-slate-600">
                                    Bringing the culture of sharing to everyone
                                </small>
                            </div>
                        </div>
                    </div>
                   </Link>


                   <Link href="/" className="po-link">
                    <div className="flex-container flex-col max-w-[22rem] h-auto max-h-[32rem] rounded-[8px]">
                        <div className=" h-[50%] object-contain rounded-t-[8px] relative">
                            <Image src={Blog4} alt="blog4" className="h-[100%] rounded-t-[8px]" />
                        </div>
                        <div className="acess h-[50%] bg-slate-50 rounded-b-[8px] shadow-slate-200 shadow">
                            <div className="px-[30px] py-[30px]">
                            <p className="mt-2 text-slate-400 mb-[8px]">November 7, 2022</p> 
                                <p className=" mb-3 p-link text-stone-900 font-[500] text-[1.2rem] ">
                                    Exploring Some of the Cities and Home Services
                                </p>
                                <small className="text-[1rem] text-slate-600">
                                    Bringing the culture of sharing to everyone
                                </small>
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

export default Blogs
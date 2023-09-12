import "./proof_section.css"


import { Cover } from "@/public";
import Image from "next/image";

const ProofSection = () => {
  return (
    <div className="proof-section w-full  px-[2rem] py-[2rem] bg-tertiary relative">

        <div className="py-[4rem] max-w-[97rem] mx-auto  relative">
            <div className="flex-container justify-center items-center   proof-container">
                <div className="flex-item1  f-right flex flex-col justify-start  items-start">
                    <h2 className="text-slate-800">
                        A whole world of freelance<br />talent at your fingertips
                    </h2>
                    <div className="flex flex-row gap-5  mt-8  items-start">
                        <i className="ri-medal-line text-primary text-[3rem]"></i>
                        <div className="f-text">
                            <h3 className="text-[1.3em] mb-2 font-[600] ">Proof of quality</h3>
                            <p>Check any pro’s work samples, client reviews, and identity<br />verification.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5  mt-8  items-start">
                        <i className="ri-money-dollar-circle-line text-primary text-[3rem]"></i>
                        <div className="f-text">
                            <h3 className="text-[1.3em] mb-2 font-[600] ">No cost until you hire</h3>
                            <p>Check any pro’s work samples, client reviews, and identity<br />verification.</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5  mt-8  items-start">
                        <i className="ri-shield-check-line text-primary text-[3rem]"></i>
                        <div className="f-text">
                            <h3 className="text-[1.3em] mb-2 font-[600] ">Safe and secure</h3>
                            <p>Check any pro’s work samples, client reviews, and identity<br />verification.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-item1 f-left  relative">
                    <div className="absolute midlle-box note  bg-primary rounded-[8px] top-[40%] z-20 flex flex-col px-[15px] py-[15px]">
                        <div className="flex flex-row gap-5 items-center">
                            <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                            <small className=" text-white text-[1rem]">The best for every budget</small>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                            <small className=" text-white text-[1rem]">Quality work done quickly</small>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                            <small className=" text-white text-[1rem]">Protected payments, every time</small>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <i className="ri-checkbox-circle-fill text-white text-[2rem]"></i>
                            <small className=" text-white text-[1rem]">24/7 support</small>
                        </div>
                    </div>
                    <Image src={Cover} alt="cover"  className="relative "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProofSection
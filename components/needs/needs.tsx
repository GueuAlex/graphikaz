import "./needs.css"

import React from 'react'

const Needs = () => {
  return (
    <div className="w-full px-[2rem] py-[5rem]  bg-primary relative  needs">
        <div className="max-w-[97rem] mx-auto relative ">
        <div > 
            <h2 className=" text-slate-200">
                Need something done?
            </h2>
            <small className="subtitle mt-3 text-slate-300 font-semibold">
                Most viewed and all-time top-selling services
            </small>
        </div>
        <div className="needs-content w-full flex flex-row justify-between items-start gap-12 mt-12">
            <div className="flex flex-col gap-2">
                <i className="ri-macbook-line text-slate-200 text-[2.8rem]"></i>
                <h3 className="text-slate-200 font-semibold text-[1.3rem]">
                    Post a job
                </h3>
                <p  className="text-slate-200 font-normal text-[.9rem]">
                    It’s free and easy to post a job. Simply fill in a title, description.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <i className="ri-user-search-line text-slate-200 text-[2.8rem]"></i>
                <h3 className="text-slate-200 font-semibold text-[1.3rem]">
                    Choose freelancers
                </h3>
                <p  className="text-slate-200 font-normal text-[.9rem]">
                    It’s free and easy to post a job. Simply fill in a title, description.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <i className="ri-exchange-dollar-line text-slate-200 text-[2.8rem]"></i>
                <h3 className="text-slate-200 font-semibold text-[1.3rem]">
                    Pay safely
                </h3>
                <p  className="text-slate-200 font-normal text-[.9rem]">
                    It’s free and easy to post a job. Simply fill in a title, description.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <i className="ri-customer-service-2-fill text-slate-200 text-[2.8rem]"></i>
                <h3 className="text-slate-200 font-semibold text-[1.3rem]">
                     We’re here to help
                </h3>
                <p  className="text-slate-200 font-normal text-[.9rem]">
                     It’s free and easy to post a job. Simply fill in a title, description.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Needs
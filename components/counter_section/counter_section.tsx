"use client"

import "./counter_section.css"

import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const CounterSection = () => {
    const [counterOn, setCounterOnn] = useState(false);
  return (
    <div className="max-full  px-[2rem] py-[5rem]  border-b flex items-center justify-center counert-section">
        <div className=" max-w-[97rem] w-full">
            <div className="flex-row flex  justify-evenly counter-contanair ">
                <div className="number flex flex-col justify-center items-center text-[3rem]">
                    <ScrollTrigger onEnter={() => setCounterOnn(true)}>
                        {counterOn &&  <CountUp start={0} end={850} delay={0}/>}M
                    </ScrollTrigger>
                    <p className="label text-[1.2rem] font-normal">Total Freelancer</p>
                </div>
                <div className="number flex flex-col justify-center items-center text-[3rem]">
                    <ScrollTrigger onEnter={() => setCounterOnn(true)}>
                        {counterOn &&  <CountUp start={0} end={675} delay={0}/>}M
                    </ScrollTrigger>
                    <p className="label text-[1.2rem] font-normal">Positive Review</p>
                </div>
                <div className="number flex flex-col justify-center items-center text-[3rem]">
                    <ScrollTrigger onEnter={() => setCounterOnn(true)}>
                        {counterOn &&  <CountUp start={0} end={95} delay={0}/>}M
                    </ScrollTrigger>
                    <p className="label text-[1.2rem] font-normal">Order recieved</p>
                </div>
                <div className="number flex flex-col justify-center items-center text-[3rem]">
                    <ScrollTrigger onEnter={() => setCounterOnn(true)}>
                        {counterOn &&  <CountUp start={0} end={570} delay={0}/>}M
                    </ScrollTrigger>
                    <p className="label text-[1.2rem] font-normal">Projects Completed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterSection
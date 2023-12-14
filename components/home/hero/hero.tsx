"use client";

import "./hero.css";
import Image from "next/image";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  Slider,
  Slider53,
  Slider61,
  Slider63,
  Slider64,
  Slider65,
  Slider66,
  Comp,
} from "@/public";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [searchInfo, setSearchInfo] = useState("");
  const [isErro, setError] = useState(false);
  const popularSearch = [
    "Designer",
    "Developer",
    "Web",
    "IOS",
    "PHP",
    "Senior",
    "Engineer",
  ];

  const router = useRouter();
  return (
    <div className="mx-auto  px-4 sm:px-6 flex justify-center items-center lg:px-8">
      <div className="my-hero relative gap-[5em]  grid grid-flow-row grid-cols-2 max-w-[97rem] ">
        <div className="rigth_hero  h-[100%]  flex flex-col items-start text-slate-50  justify-center">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.15, ease: "easeIn" }}
            >
              <h1 className="text-primary font-semibold lg:text-[40px] mt-2">
                With talented{" "}
                <span className="text-secondary">freelancers</span>
                <br />
                do more work.
              </h1>

              <small className=" text-slate-800 mt-4 ">
                Millions of people use freeio.com to turn their ideas into
                reality.
              </small>
            </motion.div>
          </AnimatePresence>

          <div className="search-container w-[85%]  lg:w-[100%] my-3">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 1, ease: "easeIn" }}
              >
                <div className="input_div border border-stone-600 flex justify-between items-center ">
                  <div className="search-component flex-2">
                    <i className="ri-search-line text-slate-800 text-[23px]">
                      {" "}
                    </i>
                    <input
                      type="text"
                      className=""
                      name=""
                      id=""
                      placeholder="What are you looking for ?"
                      value={searchInfo}
                      onChange={({ target }) => {
                        setSearchInfo(target.value);
                        setError(false);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="bg-primary "
                    onClick={() => {
                      //console.log(searchInfo.length);
                      if (searchInfo.trim().length <= 0) {
                        //console.log("true");
                        setError(true);
                      } else {
                        console.log("bonjour");
                        router.push("/search/" + searchInfo);
                      }
                    }}
                  >
                    Search
                  </button>
                </div>
                {isErro ? (
                  <div className="error-div px-4 py-2">
                    <i className="ri-close-circle-line"></i>{" "}
                    <span>Veuillez renseigner le champs !</span>
                  </div>
                ) : (
                  <div></div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 45 }}
              transition={{ delay: 1, ease: "easeIn" }}
            >
              <small className=" text-slate-800 font-medium mt-4 text-[14px] ">
                Popular Searches :{" "}
                {popularSearch.map((searchword, index) => (
                  <a href={`search/${searchword}`} className="mr-2">
                    {searchword},
                  </a>
                ))}
              </small>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="left_hero relative   h-[100%] -z-40  flex items-center justify-center  px-3.5 ">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1, ease: "easeIn" }}
            >
              <Image src={Slider} alt="Slider" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              className="absolute bottom-0 -z-40"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.25, ease: "easeIn" }}
            >
              <Image src={Slider61} alt="wave" className="slider61" />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              className="absolute top-8 right-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.35, bounce: "easeInOut" }}
            >
              <Image src={Slider65} alt="wave" className="boul1" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              className="absolute top-1/3 left-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.35, bounce: "easeInOut" }}
            >
              <Image src={Slider66} alt="wave" className="boul1" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              className="absolute boul   top-[50%]  right-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.35, bounce: "easeInOut" }}
            >
              <Image src={Slider64} alt="wave" className="boul1" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              className="h-[18rem] flotant w-full  absolute z-50 bottom-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 1.35, bounce: "easeInOut" }}
            >
              <Image
                src={Slider63}
                alt="wave"
                className="absolute scl1 top-0 left-0"
              />
              <Image
                src={Slider53}
                alt="wave"
                className="absolute scl2 top-[35%] right-0"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              className="absolute -z-50"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.15, ease: "easeIn" }}
            >
              <Image src={Comp} alt="wave" className="" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;

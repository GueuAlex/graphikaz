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

import React, { useState, useContext } from "react";
import { MyAppContext } from "@/reutilisables/app_context";
import { useRouter } from "next/navigation";
import { ApiCategoryProps } from "@/types";
import {
  Bubble1,
  Bubble2,
  ShapeImg1,
  ShapeImg2,
  ShapeImg3,
  Woman,
} from "@/public/hero";

interface HeroProps {
  apiCategories: ApiCategoryProps[];
}

const Hero: React.FC<HeroProps> = ({ apiCategories }) => {
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
  const context = useContext(MyAppContext);
  if (!context) {
    throw new Error("ComponentX must be used within a MyProvider");
  } else {
    console.log("context ok in hero component");
  }
  const { toggleState } = context;
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
              <h1 className="hero-h1 text-primary font-semibold lg:text-[40px] mt-2">
                Trouver les bons services{" "}
                <span className="text-secondary">graphiques</span>
                <br />
                immédiatement.
              </h1>

              <small className=" text-slate-800 mt-4 ">
                Rejoignez la communauté des personnes qui utilisent
                graphikaz.com pour gagner du temps
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
                      className=" disabled"
                      name=""
                      id=""
                      onClick={toggleState}
                      placeholder="Que recherchez-vous  ?"
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
                    onClick={
                      () => {
                        toggleState();
                      }
                      /* () => {
                      //console.log(searchInfo.length);
                      if (searchInfo.trim().length <= 0) {
                        //console.log("true");
                        setError(true);
                      } else {
                        console.log("bonjour");
                        router.push("/search/" + searchInfo);
                      }
                    } */
                    }
                  >
                    Recherche
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
              <small className="seach-tag text-slate-800 font-medium mt-4 text-[14px] ">
                Recherches populaires :{" "}
                {apiCategories.map((category, index) => (
                  <a
                    href={`/categories?category=${category.libelle}`}
                    className="mr-2"
                    key={index}
                  >
                    {category.libelle}
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
              <Image src={Woman} alt="Slider" />
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
              <Image src={ShapeImg2} alt="wave" className="boul1" />
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
              <Image src={ShapeImg3} alt="wave" className="boul1" />
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
              <Image src={ShapeImg1} alt="wave" className="boul1" />
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
                src={Bubble2}
                alt="wave"
                className="absolute scl1 top-0 left-0"
              />
              <Image
                src={Bubble1}
                alt="wave"
                className="absolute scl2 top-[35%] right-0"
              />
            </motion.div>
          </AnimatePresence>

          {/*  <AnimatePresence>
            <motion.div
              className="absolute -z-50"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.15, ease: "easeIn" }}
            >
              <Image src={Comp} alt="wave" className="" />
            </motion.div>
          </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

"use client";
import {
  Hero,
  Needs,
  ProofSection,
  TrendingService,
  NewsLetter,
  Categories2,
} from "@/components/home";
import { MyAppContext } from "@/reutilisables/app_context";
import Loader from "@/reutilisables/laoder";

import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

const MyHome = () => {
  const context = useContext(MyAppContext);
  if (!context) {
    throw new Error("No context found in hero component");
  }
  const { isLoading, servicesList, categories } = context;

  if (isLoading) {
    return (
      <AnimatePresence>
        {" "}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <Loader />
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <>
      <Hero apiCategories={categories} />
      <Needs categories={categories} />
      {/* <Categories apiCategories={categories} /> */}
      <Categories2 apiCategories={categories} />
      <TrendingService serviceList={servicesList} categories={categories} />
      {/* <PopularServices serviceList={serviceList} categories={categoriesList} /> */}
      <ProofSection />
      {/*  <CounterSection /> */}
      {/* <Testinmonials /> */}

      {/*  <Blogs /> */}
      <NewsLetter />
    </>
  );
};

export default MyHome;

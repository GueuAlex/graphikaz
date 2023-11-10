"use client";
import {
  Hero,
  Needs,
  Categories,
  PopularServices,
  ProofSection,
  CounterSection,
  Testinmonials,
  TrendingService,
  Blogs,
  NewsLetter,
} from "@/components/home";
import { packProps } from "@/types";
import { fetchAllData } from "@/types/api_services";
import { useEffect, useState } from "react";

const MyHome = () => {
  async function fetchAndUseData() {
    try {
      const data = await fetchAllData();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  const [isLaoding, setIsloadin] = useState(true);
  const [packList, setData] = useState<packProps[]>([]);
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const packData: packProps[] = data!;
        setData(packData);
        // Maintenant, vous pouvez utiliser les données ici
        console.log(packData);
        setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setIsloadin(false);
      });
  }, []);

  /* if (isLaoding) {
    return <div className="loading-div">chargement...</div>;
  } */
  return (
    <>
      <Hero />
      <Needs />
      <Categories />
      <PopularServices packList={packList} />
      <ProofSection />
      <CounterSection />
      <Testinmonials />
      <TrendingService packList={packList} />
      <Blogs />
      <NewsLetter />
    </>
  );
};

export default MyHome;

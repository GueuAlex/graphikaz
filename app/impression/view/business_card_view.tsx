import { bcardTab, flyersPageText } from "@/constants";
import { Wrapper } from "@/reutilisables";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BcardProps } from "@/types";
import SelectedBcardView from "./selected_bcard_view";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const bcardByFinish: BcardProps[] = bcardTab.filter(
  (bcard) => bcard.type == "BY FINISH"
);
const bcardByType: BcardProps[] = bcardTab.filter(
  (bcard) => bcard.type == "BY TYPE"
);

const BusinessCardView = () => {
  const [selectedBcard, setSelectedBcard] = useState<BcardProps | undefined>(
    undefined
  );
  const handleMenuChanges = (bcard: BcardProps) => {
    setSelectedBcard(bcard);
  };

  if (selectedBcard) {
    return (
      <SelectedBcardView
        selectedBcard={selectedBcard}
        setSelectedFlyer={setSelectedBcard}
      />
    );
  }

  return (
    <>
      <div className="bannerss relative flex justify-center items-center">
        <div className=" max-w-[100rem] w-full">
          <BannerContainer />
        </div>
      </div>
      {/* Banner  */}
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>CARTES DE VISITE PAR FINITION</h2>
            <small className="subtitle">
              {bcardByFinish.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {bcardByFinish.map((bcard, index) => (
              <div
                key={index}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(bcard)}
              >
                <div className="test">
                  <Image src={bcard.cover} alt={bcard.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{bcard.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      {/* unfolded  flyers */}
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>CARTES DE VISITE PAR TYPE</h2>
            <small className="subtitle">
              {bcardByFinish.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {bcardByType.map((bcard, index) => (
              <div
                key={index}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(bcard)}
              >
                <div className="test">
                  <Image src={bcard.cover} alt={bcard.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{bcard.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      {/* Folded flyers */}
      <div className="text-container w-full">
        <Wrapper>
          <div className="text-content flex flex-col  gap-4 text-start">
            {flyersPageText.map((text) => (
              <div>
                <h4 className="font-bold text-[16px]">{text.title}</h4>
                <small
                  dangerouslySetInnerHTML={{ __html: text.desc }}
                  className=" font-light text-[14px]"
                />
              </div>
            ))}
          </div>
        </Wrapper>
      </div>
      {/* text container */}
    </>
  );
};
const BannerContainer = () => {
  return (
    <div className="banner business-card-view w-full max-h-[20rem]">
      <Wrapper>
        <small className="small-text">
          Nos services de confection et d'impression sur mesure
        </small>{" "}
        <br />
        <h1 className="text-[2rem]">Cartes de visite sur mesure</h1>
        <div className="banner-demo-container opacity-0">
          <div className="flex items-center justify-center">
            <i className="ri-play-fill text-[1.9em]"></i>
          </div>
          <p>How Graphikaz Works</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default BusinessCardView;

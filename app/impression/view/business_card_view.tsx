import { flyersPageText } from "@/constants";
import { Wrapper } from "@/reutilisables";
import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const BusinessCardView = () => {
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
          <h2>FLYERS SANS VOLETS</h2>
          {/*  <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        className=" justify-normal"
        itemClass="carou-items"
      >
        {unfoldedFlyers.map((flyer, index) => (
          <div
            className="carou-item w-full h-full flex justify-center items-center"
            onClick={() => handleMenuChanges(flyer)}
          >
            <div className="test">
             
              <Image src={flyer.cover} alt={flyer.title} />
            </div>
            <p className="w-full h-full text-center pt-1">{flyer.title}</p>
          </div>
        ))}
      </Carousel> */}
        </div>
      </Wrapper>
      {/* unfolded  flyers */}
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <h2>FLYERS AVEC VOLETS</h2>
          {/* <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        className=" justify-normal"
        itemClass="carou-items"
      >
        {foldedFlyers.map((flyer, index) => (
          <div
            className="carou-item w-full h-full flex justify-center items-center"
            onClick={() => handleMenuChanges(flyer)}
          >
            <div className="test">
              
              <Image src={flyer.cover} alt={flyer.title} />
            </div>
            <p className="w-full h-full text-center pt-1">{flyer.title}</p>
          </div>
        ))}
      </Carousel> */}
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

import { FlyersTab, flyersPageText } from "@/constants";
import { Wrapper } from "@/reutilisables";
import { FlyersProps } from "@/types";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import SecletedFlyerView from "./selected_flyer_view";

const unfoldedFlyers: FlyersProps[] = FlyersTab.filter(
  (flyer) => flyer.type == "UNFOLDED"
);
const foldedFlyers: FlyersProps[] = FlyersTab.filter(
  (flyer) => flyer.type == "FOLDED"
);

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

const FlyserView = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<FlyersProps | undefined>(
    undefined
  );
  const handleMenuChanges = (flyer: FlyersProps) => {
    setSelectedFlyer(flyer);
  };

  if (selectedFlyer) {
    return (
      <SecletedFlyerView
        selectedFlyer={selectedFlyer}
        setSelectedFlyer={setSelectedFlyer}
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
            <h2>FLYERS SANS VOLETS</h2>
            <small className="subtitle">
              {unfoldedFlyers.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {unfoldedFlyers.map((flyer, index) => (
              <div
                key={flyer.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(flyer)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={flyer.cover} alt={flyer.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{flyer.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      {/* unfolded  flyers */}
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>FLYERS AVEC VOLETS</h2>
            <small className="subtitle">
              {unfoldedFlyers.length} resultats affichés
            </small>
          </div>
          <Carousel
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
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={flyer.cover} alt={flyer.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{flyer.title}</p>
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

export default FlyserView;

const BannerContainer = () => {
  return (
    <div className="banner flyers-view w-full max-h-[20rem]">
      <Wrapper>
        <br />
      </Wrapper>
    </div>
  );
};

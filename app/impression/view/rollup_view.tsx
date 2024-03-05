import { FlyersTab, flyersPageText, rollups } from "@/constants";
import { Wrapper } from "@/reutilisables";
import { FlyersProps, RollupProps } from "@/types";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import SecletedFlyerView from "./selected_flyer_view";
import SelectedRollupView from "./selected_rollup_view";

/* const unfoldedFlyers: FlyersProps[] = FlyersTab.filter(
  (flyer) => flyer.type == "UNFOLDED"
);
const foldedFlyers: FlyersProps[] = FlyersTab.filter(
  (flyer) => flyer.type == "FOLDED"
); */

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

const RollupView = () => {
  const [selectedRollup, setSelectedRollup] = useState<RollupProps | undefined>(
    undefined
  );
  const handleMenuChanges = (rollup: RollupProps) => {
    setSelectedRollup(rollup);
  };

  if (selectedRollup) {
    return (
      <SelectedRollupView
        selectedRollup={selectedRollup}
        setSelectedRollup={setSelectedRollup}
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
            <h2>KEKEMONO & ROLL UP</h2>
            <small className="subtitle">
              {rollups.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {rollups.map((rollup) => (
              <div
                key={rollup.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(rollup)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={rollup.cover} alt={rollup.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{rollup.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      {/* unfolded  flyers 
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <h2>FLYERS AVEC VOLETS</h2>
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
                  <Image src={flyer.cover} alt={flyer.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{flyer.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      */}
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

export default RollupView;

const BannerContainer = () => {
  return (
    <div className="banner rollup-view w-full max-h-[20rem]">
      <Wrapper>
        <br />
      </Wrapper>
    </div>
  );
};

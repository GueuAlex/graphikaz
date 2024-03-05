import { FlyersTab, flyersPageText, menusResto } from "@/constants";
import { Wrapper } from "@/reutilisables";
import { FlyersProps, RestoProps } from "@/types";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import SecletedFlyerView from "./selected_flyer_view";
import SecletedRestoView from "./selected_resto_view";

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

const RestoView = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<RestoProps | undefined>(
    undefined
  );
  const handleMenuChanges = (resto: RestoProps) => {
    setSelectedFlyer(resto);
  };

  if (selectedFlyer) {
    return (
      <SecletedRestoView
        selectedResto={selectedFlyer}
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
            <h2>RESTAURATION</h2>
            <small className="subtitle">
              {menusResto.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {menusResto.slice(0, 6).map((resto) => (
              <div
                key={resto.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(resto)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={resto.cover} alt={resto.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{resto.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
      {/* unfolded  flyers */}

      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>LES INDÉCHIRABLES</h2>
            <small className="subtitle">
              {menusResto.slice(5, 8).length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={false}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {menusResto.slice(5, 8).map((resto) => (
              <div
                key={resto.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(resto)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={resto.cover} alt={resto.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{resto.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>LES SETS DE TABLE</h2>
            <small className="subtitle">
              {menusResto.slice(8, 12).length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={false}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {menusResto.slice(8, 12).map((resto) => (
              <div
                key={resto.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(resto)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={resto.cover} alt={resto.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{resto.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </Wrapper>

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

export default RestoView;

const BannerContainer = () => {
  return (
    <div className="banner resto-view w-full max-h-[20rem]">
      <Wrapper>
        <br />
      </Wrapper>
    </div>
  );
};

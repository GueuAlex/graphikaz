import { FlyersTab, flyersPageText, promostionals } from "@/constants";
import { Wrapper } from "@/reutilisables";
import { FlyersProps, PromotionalProps } from "@/types";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import SecletedFlyerView from "./selected_flyer_view";
import SecletedPromoView from "./selected_promo_view";

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

const PromoView = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<
    PromotionalProps | undefined
  >(undefined);
  const handleMenuChanges = (promo: PromotionalProps) => {
    setSelectedFlyer(promo);
  };

  if (selectedFlyer) {
    return (
      <SecletedPromoView
        selectedPromo={selectedFlyer}
        setSelectedPromo={setSelectedFlyer}
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
            <h2>PRODUITS PROMOTIONNELS</h2>
            <small className="subtitle">
              {promostionals.length} resultats affichés
            </small>
          </div>

          <div className="flex  items-flex">
            {promostionals.map((promo) => (
              <div
                key={promo.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(promo)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={promo.cover} alt={promo.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{promo.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      {/* unfolded  flyers */}

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

export default PromoView;

const BannerContainer = () => {
  return (
    <div className="banner promo-view w-full max-h-[20rem]">
      <Wrapper>
        <br />
      </Wrapper>
    </div>
  );
};

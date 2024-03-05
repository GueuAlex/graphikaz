import { FlyersTab, brochures, flyersPageText } from "@/constants";
import { Wrapper } from "@/reutilisables";
import { BrochureProps } from "@/types";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import SecletedBrochureView from "./selected_brochure_view";

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

const BrochureView = () => {
  const [selectedBrochure, setSelectedBrochure] = useState<
    BrochureProps | undefined
  >(undefined);
  const handleMenuChanges = (brochure: BrochureProps) => {
    setSelectedBrochure(brochure);
  };

  if (selectedBrochure) {
    return (
      <SecletedBrochureView
        selectedBrochure={selectedBrochure}
        setSelectedFlyer={setSelectedBrochure}
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
      {/* Product home */}
      <div className="product-home best-sell">
        <Wrapper>
          <div className="title-container mb-4">
            <h2>LES PLUS COMMANDER</h2>
            <small className="subtitle">{2} resultats affichés</small>
          </div>
          <ProductHome setSelectedBrochure={setSelectedBrochure} />
        </Wrapper>
      </div>

      {/* Banner  */}
      <Wrapper>
        <div className="unfolded-flyers best-sell">
          <div className="title-container">
            <h2>BROCHURES</h2>
            <small className="subtitle">
              {brochures.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {brochures.map((brochure) => (
              <div
                key={brochure.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(brochure)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={brochure.cover} alt={brochure.title} />
                </div>
                <p className="w-full h-full text-center pt-1">
                  {brochure.title}
                </p>
              </div>
            ))}
          </Carousel>
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

export default BrochureView;

const BannerContainer = () => {
  return (
    <div className="banner brochure-view w-full max-h-[20rem]">
      <Wrapper>
        <br />
      </Wrapper>
    </div>
  );
};

interface ProductHomeProps {
  setSelectedBrochure: (selectedBrochure: BrochureProps | undefined) => void;
}

const ProductHome: React.FC<ProductHomeProps> = ({ setSelectedBrochure }) => {
  /* function getRandomNumber() {
    return Math.floor(Math.random() * (brochures.length - 0 + 1)) + 0;
  } */
  /*  const 0 = getRandomNumber();
  const 3 = getRandomNumber(); */
  return (
    <div className="product-home-items">
      <div
        className="product-home-item relative"
        onClick={() => setSelectedBrochure(brochures[0])}
      >
        <div className="product-home-img-overlay w-full h-full absolute">
          <p className="labelle">{brochures[0].title}</p>
          <p className="labelle begin-price">
            A partir de <span>{brochures[0].base_price} ₣</span> les{" "}
            {brochures[0].format}
          </p>
        </div>
        <Image
          src={brochures[0].cover}
          alt={brochures[0].title}
          className="image"
        />
      </div>
      <div
        className="product-home-item relative"
        onClick={() => setSelectedBrochure(brochures[3])}
      >
        <div className="product-home-img-overlay w-full h-full absolute">
          <p className="labelle">{brochures[3].title}</p>
          <p className="labelle begin-price">
            A partir de <span>{brochures[3].base_price} ₣</span> les{" "}
            {brochures[3].format}
          </p>
        </div>
        <Image
          src={brochures[3].cover}
          alt={brochures[3].title}
          className="image"
        />
      </div>
    </div>
  );
};

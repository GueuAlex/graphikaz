import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const CatCarou = () => {
  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      className=" justify-normal"
      itemClass="carou-items"
    >
      <div className="carou-item w-full h-full flex justify-center items-center">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/10/depliants-3-volets-300x300.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Depliants <br /> A partir de <span>55 000 ₣</span> les 5000 A5
        </p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/08/Carte-de-visite-Dorure-a-chaud.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Cartes de visite <br /> A partir de <span>55 000 ₣</span> les 5000 A5
        </p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/03/PVC-contrecoll%C3%A9-300x300.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Panneaux PVC <br /> A partir de <span>55 000 ₣</span> les 5000 A5
        </p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center ">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2022/08/roll-up-moustache-300x300-1.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Roll up <br /> A partir de <span>55 000 ₣</span> les 5000 A5
        </p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center ">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2019/11/Stickers-1-300x300.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Stickers <br /> A partir de <span>55 000 ₣</span> les 5000 A5
        </p>
      </div>
    </Carousel>
  );
};

export default CatCarou;

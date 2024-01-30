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

const Carou = () => {
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
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">Flyers A5 Standard</p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center ">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/ticket-1.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">Ticket Couleur</p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center ">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/08/CDV-Classique-1-1-300x300.webp" />
        </div>
        <p className="w-full h-full text-center pt-1">
          Cartes de Visite Classique
        </p>
      </div>
      <div className="carou-item w-full h-full flex justify-center items-center">
        <div className="test">
          <img src="https://facimprimeur.fr/wp-content/uploads/2018/03/Rollup-85x200-01-Copie.jpg" />
        </div>
        <p className="w-full h-full text-center pt-1">Roll Up 85 x 200 cm</p>
      </div>
    </Carousel>
  );
};

export default Carou;

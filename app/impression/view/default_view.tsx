import { Affiche, Flyers } from "@/public";
import { Wrapper } from "@/reutilisables";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import CatCarou from "../cat-carou";
import Carou from "../carou";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { impressCategories, products } from "@/constants";
import {
  BcardProps,
  BrochureProps,
  FlyersProps,
  ProductLibelle,
  RestoProps,
  RollupProps,
} from "@/types";
import SecletedFlyerView from "./selected_flyer_view";
import SelectedBcardView from "./selected_bcard_view";
import SecletedBrochureView from "./selected_brochure_view";
import SelectedRollupView from "./selected_rollup_view";
import SecletedRestoView from "./selected_resto_view";

const tags = [
  {
    icon: <i className="ri-road-map-fill"></i>,
    text: "Imprimeur Ivoirien depuis 1997",
  },
  {
    icon: <i className="ri-team-line"></i>,
    text: "Une équipe à votre écoute 04 93 55 20 20",
  },
  {
    icon: <i className="ri-wallet-3-fill"></i>,
    text: "Paiement sécurisé avec CinetPay",
  },
  {
    icon: <i className="ri-file-edit-fill"></i>,
    text: "Vérification gratuite des fichiers",
  },
];

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

const someProducts = products.sort(() => Math.random() - 0.5);

const DefaultView = () => {
  const [selectedProduct, setSelectedProduct] = useState<
    | FlyersProps
    | BcardProps
    | BrochureProps
    | RollupProps
    | RestoProps
    | undefined
  >(undefined);
  const handleMenuChanges = (
    product: FlyersProps | BcardProps | BrochureProps | RollupProps | RestoProps
  ) => {
    setSelectedProduct(product);
  };

  if (selectedProduct) {
    switch (selectedProduct.product) {
      case ProductLibelle.FLYER:
        return (
          <SecletedFlyerView
            selectedFlyer={selectedProduct as FlyersProps}
            setSelectedFlyer={setSelectedProduct}
          />
        );
      case ProductLibelle.BUSINESS_CARD:
        return (
          <SelectedBcardView
            selectedBcard={selectedProduct as BcardProps}
            setSelectedFlyer={setSelectedProduct}
          />
        );
      case ProductLibelle.BROCHURE:
        return (
          <SecletedBrochureView
            selectedBrochure={selectedProduct as BrochureProps}
            setSelectedFlyer={setSelectedProduct}
          />
        );
      case ProductLibelle.ROLLUP:
        return (
          <SelectedRollupView
            selectedRollup={selectedProduct as RollupProps}
            setSelectedRollup={setSelectedProduct}
          />
        );

      case ProductLibelle.MENU_RESTORE:
        return (
          <SecletedRestoView
            selectedResto={selectedProduct as RestoProps}
            setSelectedFlyer={setSelectedProduct}
          />
        );
      default:
        break;
    }
  }

  return (
    <>
      <div className="bannerss relative flex justify-center items-center">
        <div className=" max-w-[100rem] w-full">
          <BannerContainer />
        </div>
      </div>
      {/* banners */}
      {/* tags */}
      {/*  <div className="tags w-full h-full">
        <Wrapper>
          <div className="tags-container w-full">
            {tags.map((tag) => (
              <div className="flex flex-col justify-center items-center tag w-full h-full">
                {tag.icon}
                <span>{tag.text}</span>
              </div>
            ))}
          </div>
        </Wrapper>
      </div> */}
      {/* Meilleur vente */}
      <div className="best-sell">
        <Wrapper>
          <div className="title-container">
            <h2>MEILLEURS VENTES</h2>
            <small className="subtitle">
              {someProducts.length} resultats affichés
            </small>
          </div>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            className=" justify-normal"
            itemClass="carou-items"
          >
            {someProducts.map((produc, index) => (
              <div
                key={produc.title}
                className="carou-item w-full h-full flex justify-center items-center"
                onClick={() => handleMenuChanges(produc)}
              >
                <div className="test">
                  {/* <img src="https://facimprimeur.fr/wp-content/uploads/2018/05/Flyer-A5-imprime.jpg" /> */}
                  <Image src={produc.cover} alt={produc.title} />
                </div>
                <p className="w-full h-full text-center pt-1">{produc.title}</p>
              </div>
            ))}
          </Carousel>
        </Wrapper>
      </div>

      {/* Product home */}
      <div className="product-home">
        <Wrapper>
          <div className="product-home-items">
            <div
              className="product-home-item relative"
              onClick={() => setSelectedProduct(someProducts[6])}
            >
              <div className="product-home-img-overlay w-full h-full absolute">
                <p className="labelle">
                  {someProducts[6].product.toLowerCase()}
                </p>
                <p className="labelle begin-price">
                  A partir de <span>{someProducts[6].base_price} ₣</span>
                </p>
              </div>
              <Image src={someProducts[6].cover} alt="" className="image" />
            </div>
            <div
              className="product-home-item relative"
              onClick={() => setSelectedProduct(someProducts[0])}
            >
              <div className="product-home-img-overlay w-full h-full absolute">
                <p className="labelle">
                  {someProducts[0].product.toLowerCase()}
                </p>
                <p className="labelle begin-price">
                  A partir de <span>{someProducts[0].base_price} ₣</span>
                </p>
              </div>
              <Image src={someProducts[0].cover} alt="" className="image" />
            </div>
          </div>
        </Wrapper>
      </div>

      {/* Meilleur vente */}
      <div className="best-sell">
        <Wrapper>
          <div className="title-container">
            <h2>PRODUITS A LA UNE</h2>
            <small className="subtitle">{""}</small>
          </div>
          <Carou />
        </Wrapper>
      </div>

      {/* Meilleur vente */}
      <div className="best-sell our-categories">
        <Wrapper>
          <div className="title-container">
            <h2>NOS CATEGORIES</h2>
            <small className="subtitle">{""}</small>
          </div>
          <CatCarou />
        </Wrapper>
      </div>

      {/* Textt bloc */}
      <div className="text-bloc w-full">
        <Wrapper>
          <TextBloc />
        </Wrapper>
      </div>
      {/* Textt bloc */}
    </>
  );
};

const BannerContainer = () => {
  return (
    <div className="banner default-view w-full max-h-[20rem]">
      <Wrapper>
        <small className="small-text">
          Nos services de confection et d'impression sur mesure
        </small>{" "}
        <br />
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Confection & Impression de Carte de visite ",
            1000,
            "Confection & Impression de Flyers ",
            1000,
            "Confection & Impression de Depliants",
            1000,
            "Confection & Impression de Panneaux PVC",
            1000,
            "Confection & Impression de Stickers",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        <div className="banner-demo-container">
          <div className="flex items-center justify-center">
            <i className="ri-play-fill text-[1.9em]"></i>
          </div>
          <p>How Graphikaz Works</p>
        </div>
      </Wrapper>
    </div>
  );
};

const ProductHome = () => {
  return (
    <div className="product-home-items">
      <div className="product-home-item relative">
        <div className="product-home-img-overlay w-full h-full absolute">
          <p className="labelle">Affiches</p>
          <p className="labelle begin-price">
            A partir de <span>15 000 ₣</span> le A3
          </p>
        </div>
        <Image src={Affiche} alt="" className="image" />
      </div>
      <div className="product-home-item relative">
        <div className="product-home-img-overlay w-full h-full absolute">
          <p className="labelle">Flyers</p>
          <p className="labelle begin-price">
            A partir de <span>55 000 ₣</span> les 5000 A5
          </p>
        </div>
        <Image src={Flyers} alt="" className="image" />
      </div>
    </div>
  );
};

const TextBloc = () => {
  return (
    <div className="text-bloc-bloc flex flex-col gap-2 items-center justify-center">
      <h1>Imprimerie en ligne 100% Ivoirien</h1>
      <p>
        Fac Imprimeur, votre partenaire privilégié de la conception à
        l’impression, est établi depuis 1987 au cœur de Nice, dans les
        splendides Alpes Maritimes.
      </p>
      <p>
        Fort de notre expérience, nous vous offrons une gamme étendue de
        produits fusionnant savoir-faire et qualité. Notre imprimerie met à
        votre disposition une expertise pointue dans le domaine de l’impression
        numérique et offset, couvrant un large éventail de produits tels que des
        brochures , des flyers, des cartes de visite et des dépliants. De plus,
        notre section dédiée au grand format vous propose une panoplie d’options
        pour l’impression d’affiches saisissantes, d’autocollants imposants et
        de bâches impressionnantes.
      </p>
      <p>
        Outre notre savoir-faire dans les supports traditionnels, nous sommes
        équipés pour réaliser des impressions sur des matériaux rigides de
        premier ordre, tels que le PVC, le Dibond ou l’Akilux. Cette capacité
        d’adaptation nous permet de répondre à une grande variété de besoins
        créatifs.
      </p>
      <p>
        En outre, afin de renforcer votre présence lors d’événements marquants,
        nous mettons à votre disposition une vaste sélection de produits de PLV
        et de signalétique. Cette collection soigneusement élaborée vous
        permettra de communiquer de manière percutante et mémorable.
      </p>
      <p>
        Nous nous engageons à vous offrir une expérience exceptionnelle, où
        chaque projet est traité avec le plus grand soin et le souci du détail.
        Votre confiance est notre moteur, et nous sommes impatients de continuer
        à accompagner vos initiatives avec notre expertis
      </p>
    </div>
  );
};

export default DefaultView;

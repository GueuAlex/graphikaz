"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { Wrapper } from "@/reutilisables";
import { PathnameComponent } from "@/components";
import {
  ContextSelection,
  ContextSelectionSetters,
  ContextSeletecdPackProps,
  ContextServiceProps,
  ExecutionDeadlineProps,
  GraphicServPack,
  GraphicServPackType,
  GraphicServProps,
  ItemSelectedOnProps,
  PriceData,
  PriceFunctions,
  apiServiceProps,
} from "@/types";

import PaiementCardBody from "@/reutilisables/paiement_card_body";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import "./service_detail.scss";
import "../creation_graphique_category.scss";
import "../../../../styles/checkout_side_bar.scss";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { MyAppContext } from "@/reutilisables/app_context";
import { colorTab, graphic_serv_test } from "@/constants/data";
import { IconBoxText } from "@/reutilisables/icon_box_text";
import ImageCarousel from "@/reutilisables/image_carousel";
import { ServiceDescription } from "@/reutilisables/service_description";
import { OffersTable } from "@/reutilisables/offers_table";
import { LocalContext } from "@/reutilisables/local_context";
import PricingCard from "@/reutilisables/price_card";
import { Faq } from "@/reutilisables/faq";
import { RattingReviwComponent } from "@/reutilisables/ratting_review_component";
import SimilarService from "@/reutilisables/similar_service";

export default function Page({ params }: { params: Params }) {
  //s'assurer que le context est bien utilisables
  const context = useContext(MyAppContext);
  if (!context) {
    throw new Error("ComponentY must be used within a MyProvider");
  } else {
    console.log("context ok in navbar component");
  }
  // get context data
  const { categories, servicesList, isLoading } = context;

  // initialize session
  const session = useSession();

  // get service title parsed as param to the url
  const { slug } = params;

  // decode slug to get service title
  const title = decodeURIComponent(slug);

  // use context serviceList to find service that matche with the title
  const service: apiServiceProps | undefined = servicesList.find(
    (serv) => serv.libelle === title
  );

  // nouveu données des services (sera utilisé a la place de service)
  const test_service: GraphicServProps = graphic_serv_test[0];

  /* ************************************************************************************
   ************************* ALL HOOKS IN THIS PAGE************************************* */
  const [rating, setRating] = useState(0);

  const [height, setHeight] = useState<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  /* allow to show paiement side bar */
  const [toggleCheckout, setToggleCheckout] = useState(false); // permet d'aaficher le side bar de paiement des pack par défaut

  /*  */

  const [basicTotalPrice, setBasicTotalPrice] =
    useState<number>(
      0
    ); /* doit prendre pardefaut le total des prix de tous les items basique */
  const [standardTotalPrice, setStandardTotalPrice] =
    useState<number>(
      0
    ); /* doit prendre pardefaut le total des prix de tous les items standard + basicTotalPrice */
  const [premiumTotalPrice, setPremiumTotalPrice] =
    useState<number>(
      0
    ); /* doit prendre pardefaut le total des prix de tous les items premium + basicTotalPrice + standardTotalPrice */
  const [seletedOptionalItems, setSeletedOptionalItems] = useState<
    ItemSelectedOnProps | undefined
  >(undefined);
  const [selectedDeliveryDelay, setSelectedDeliveryDelay] =
    useState<ExecutionDeadlineProps>(
      test_service.packs[0].normal_execution_deadline
    );

  const [contextPack, setContextPack] = useState<GraphicServPack>(
    test_service.packs[0]
  );

  /* ************************************************************************************
   ************************************************************************************** */

  // Valeurs du contexte (les données dont on a besoin dans les composants enfants)
  const localContextValues: PriceData &
    PriceFunctions &
    ContextServiceProps &
    ContextSelection &
    ContextSelectionSetters &
    ContextSeletecdPackProps = {
    basicTotalPrice,
    setBasicTotalPrice,
    standardTotalPrice,
    setStandardTotalPrice,
    premiumTotalPrice,
    setPremiumTotalPrice,
    test_service,
    seletedOptionalItems,
    selectedDeliveryDelay,
    setSeletedOptionalItems,
    setSelectedDeliveryDelay,
    contextPack,
    setContextPack,
  };

  ///// fonctions de mise à jour des boolean permettants l'affichage des side bars
  const updateToggle = () => {
    setToggleCheckout(!toggleCheckout);
  };

  /* display sticky config */
  useEffect(() => {}); // Plus besoin de dépendance

  /* use to set display sticky height */
  const style = height ? { height: `${height}px` } : {};
  console.log(height);

  useEffect(() => {
    // Fonction pour calculer le total des prix d'un type donné
    const calculateTotalPrice = (type: GraphicServPackType): number => {
      return test_service.items
        .filter((item) => item.type === type)
        .reduce((total, currentItem) => total + currentItem.price, 0);
    };

    // Mettre à jour les états des totaux des prix
    setBasicTotalPrice(calculateTotalPrice(GraphicServPackType.BASIQUE));
    setStandardTotalPrice(
      calculateTotalPrice(GraphicServPackType.BASIQUE) +
        calculateTotalPrice(GraphicServPackType.STANDARD)
    );
    setPremiumTotalPrice(
      calculateTotalPrice(GraphicServPackType.BASIQUE) +
        calculateTotalPrice(GraphicServPackType.STANDARD) +
        calculateTotalPrice(GraphicServPackType.PREMIUM)
    );

    const measureHeight = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Mesure de la hauteur après le premier rendu
    measureHeight();

    // Écouter le redimensionnement de la fenêtre pour mettre à jour la hauteur
    window.addEventListener("resize", measureHeight);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", measureHeight);
    };
  }, []);
  ///////////////////////////////////////////////////////////////////////////
  console.log("is loading ..." + isLoading);
  if (isLoading) {
    return <div className="loading">chargement ...</div>;
  }

  /*  if (service && service.pack_services.length <= 0) {
    return <OnEditing />;
  } */

  if (/* service && service.pack_services.length > 0 */ test_service) {
    //

    // console.log(graphic_serv_test[0]);

    return (
      <LocalContext.Provider value={localContextValues}>
        <div className="single_service_details">
          <ToastContainer />
          <div
            className={`${toggleCheckout ? "show-overlay" : ""} overlay`}
          ></div>

          {/* Default packs paiement side bar */}
          <aside
            className={`${
              toggleCheckout
                ? "show-paiement-side-bar"
                : "hide-paiement-side-bar"
            } paiement-side-bar`}
          >
            <div className="paiement-side-bar-container">
              {session.status === "unauthenticated" ? (
                <div className="register-or-login-invitation container flex justify-center items-center mt-8">
                  <div className="p-3 font-light text-[12px]">
                    Veuillez vous{" "}
                    <a href="/auth?et=login" className=" text-blue-700">
                      connecter
                    </a>{" "}
                    ou{" "}
                    <a href="/auth?et=signin" className=" text-blue-700">
                      créez un compte
                    </a>{" "}
                    c'est simple et rapide{" "}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {/* paiement card body */}
              <PaiementCardBody updateToggle={updateToggle} />
              {/* end paiement card body */}
            </div>
          </aside>
          {/* end paiement side bar */}

          {/* end custom pack paiement side bar */}
          <Wrapper>
            <div className="flex justify-between mobile-col">
              <PathnameComponent />
              {/* share, save and repport area */}
              <div className="icon-container">
                <div className="share-container">
                  <div
                    className="share-with shadow-sm rounded-[5px] "
                    onClick={() => toast("Fonctionnalité bientôt disponible")}
                  >
                    <div className="icon-small">
                      <i className="ri-facebook-line"></i>
                    </div>
                    <div className="icon-small">
                      <i className="ri-twitter-line"></i>
                    </div>
                    <div className="icon-small">
                      <i className="ri-linkedin-line"></i>
                    </div>
                    <div className="icon-small">
                      <i className="ri-instagram-line"></i>
                    </div>
                  </div>
                  <div className="icon-small d">
                    <i className="ri-share-box-fill"></i>
                  </div>
                  <small>Partager</small>
                </div>

                <div
                  className="tooltip save-container"
                  data-tip="ajouter aux favoris"
                  onClick={() => toast("Fonctionnalité bientôt disponible")}
                >
                  <div className="icon-small d">
                    <i className="ri-heart-3-line"></i>
                  </div>
                  <small>Sauvegarder</small>
                </div>

                {/* You can open the modal using ID.showModal() method */}
                {/* SERVICE REPORTER BUTTON */}
                {/*  <div
                className=" cursor-pointer"
                onClick={() => window.my_modal_3.showModal()}
              >
                <i className="ri-alert-fill text-yellow-500"></i>
              </div>
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Report this service</h3>
                  <input required type="text" placeholder="Subject" />
                  <textarea
                    required
                    name=""
                    id=""
                    rows={3}
                    placeholder="Message *"
                  ></textarea>
                  <button type="submit">
                    Send report <i className="ri-arrow-right-up-line"></i>
                  </button>
                </form>
              </dialog> */}

                {/* Open the modal using ID.showModal() method */}
              </div>
            </div>
          </Wrapper>
          {/* heading with fil d'ariane */}
          {/* banner */}
          <div className="bannerss relative flex justify-center items-center">
            <div className=" max-w-[110rem] w-full">
              <BannerContainer
                service={graphic_serv_test[0]} //prestator={prestator}
              />
            </div>
          </div>
          {/* banner container */}
          <Wrapper>
            <div className="single-service-details-page">
              <div className="right-part">
                <div className="locates-pictures-descriptions-offers-comments">
                  {/* icon box text */}
                  <div className="locates mb-5">
                    <IconBoxText
                      color={colorTab[7]}
                      label="Delais de livraison"
                      details={
                        test_service.packs[0].normal_execution_deadline
                          .number_of_day + " jours"
                      }
                      icon_class="bi bi-calendar-range-fill"
                    />
                    <IconBoxText
                      color={colorTab[9]}
                      label="Localisation"
                      details="Abidjan"
                      icon_class="bi bi-geo-alt-fill"
                    />
                  </div>

                  {/* image carousel */}
                  <div className="pictures">
                    <ImageCarousel
                      imageList={test_service.covers}
                      serviceLabel={test_service.libelle}
                      showMiiniature
                    />
                  </div>

                  {/* service description buidl with a text editor */}
                  <div className="descriptions">
                    <ServiceDescription
                      description={test_service.full_description}
                    />
                  </div>
                  {/* offers comparaison table */}
                  <div className="offers w-full">
                    <OffersTable service={test_service} />
                  </div>

                  {/* FAQ */}
                  <div className="faqs py-8">
                    <div className="faqs-head">
                      <h1>FAQ</h1>
                    </div>
                    <Faq faq={test_service.faq} />
                  </div>

                  {/* Rattings and reviw */}
                  <RattingReviwComponent service={test_service} />
                </div>
              </div>
              <div className="left-part ">
                <div className="packs-getcontact">
                  <PricingCard updateToggle={updateToggle} />
                </div>
              </div>
            </div>
          </Wrapper>
          {/* services similaire au context service */}
          <div className="similar-services">
            <Wrapper>{/*  <SimilarService /> */} </Wrapper>
          </div>
        </div>
      </LocalContext.Provider>
    );
  }
}

const BannerContainer = ({
  service,
}: // prestator,
{
  service: GraphicServProps;
  // prestator: PrestatorProps;
}) => {
  return (
    <div className="banner w-full max-h-[18rem]">
      <Wrapper>
        {/* {service.image_services.map((img, idex) => {
          return (
            <Image
              src={
                "https://graphikaz.digifaz.com/api/photo_service/" + img.libelle
              }
              alt=""
              width={500}
              height={300}
            />
          );
        })} */}
        <h2 className="banner-title text-[2em]">{service.libelle}</h2>
        <div className="subtitle flex gap-7 items-center mt-5">
          {/* THIS SERVICE PROVIDER */}
          {/* <div className="prestator flex items-center gap-2">
            <div className="h-[3em] w-[3em] border rounded-full object-contain">
              <Image
                //src={prestator.profilPic}
                src={Digifaz}
                //alt={prestator.fullName}
                alt={"digifaz"}
                className="rounded-full"
              />
            </div>
            <h4>{"Digifaz"}</h4>
          </div> */}
          <div className="reviews">
            <i className="ri-star-fill text-yellow-500"></i> {4.9} {`(`}
            {998}
            {` Avis)`}
          </div>
          <div className="views">
            <i className="ri-eye-line"></i> 4578 vues
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

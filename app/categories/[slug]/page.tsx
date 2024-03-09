"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@/reutilisables";
import { PathnameComponent } from "@/components";
import { OptionsProps, apiServiceProps, packProps } from "@/types";
import Image from "next/image";

import Rate from "@/reutilisables/rate";
import { fetchAllData } from "@/types/api_services";
import { Imgold } from "@/public";
import PaiementCardBody from "@/reutilisables/paiement_card_body";
import PaiementCardBody2 from "@/reutilisables/paiement_card_body2";
import Error404 from "@/reutilisables/404";
import OnEditing from "@/reutilisables/on_editing";
import Loader from "@/reutilisables/laoder";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import "./service_detail.scss";
import "../categories.scss";
import "../../../styles/checkout_side_bar.scss";

export default function Page({ params }: { params: { slug: string } }) {
  const session = useSession();
  ///////////// fetching data from api ///////////////:
  async function fetchAndUseData() {
    try {
      const data = await fetchAllData();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  const [isLaoding, setIsloadin] = useState(true);
  const [services, setData] = useState<apiServiceProps[]>([]);
  useEffect(() => {
    fetchAndUseData()
      .then((data) => {
        const services: apiServiceProps[] = data!;
        setData(services);
        if (services !== undefined) {
          // Maintenant, vous pouvez utiliser les données ici
          console.log(services);
          setIsloadin(false);
        }
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        setIsloadin(false);
      });
  }, []);
  /////////////////////
  //const montant = 0;
  const title = decodeURIComponent(params.slug);
  const service: apiServiceProps | undefined = services.find(
    (serv) => serv.libelle === title
  );
  ////////////////////

  /////////////////////////
  //console.log(service?.libelle);

  const [rating, setRating] = useState(0);
  const coverList = [Imgold, Imgold, Imgold, Imgold];
  /////

  const [height, setHeight] = useState<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  /* allow to show paiement side bar */
  const [toggle, setToggle] = useState(false); // permet d'aaficher le side bar de paiement des pack par défaut
  const [toggle1, setToggle1] = useState(false); // permet d'afficher side de paiement d'un service personnalisé
  //
  ///// fonctions de mise à jour des boolean permettants l'affichage des side bars
  const updateToggle = () => {
    setToggle(!toggle);
  };
  const updateToggle1 = () => {
    setToggle1(!toggle1);
  };

  useEffect(() => {
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
  }); // Plus besoin de dépendance

  const style = height ? { height: `${height}px` } : {};
  console.log(height);

  ////////////////////////////////:::: pack selectionné //////////////////////
  const [selectedPack, setSelectedPack] = useState<packProps | undefined>(); // envoyé a "PaiementCardBody" pour effectuer le paaiement d'un pack proposé par defaut

  const [selectedPackList, setSelectedPackList] = useState<
    packProps[] | undefined
  >(); // // envoyé a "PaiementCardBody2" pour effectuer le paiement d'une list de pack personnalisé
  const [selectedOptionsList, setSelectedOptionsList] = useState<
    OptionsProps[] | undefined
  >(); // // envoyé a "PaiementCardBody2" pour effectuer le paiement d'une list d' options personnalisé

  ///////////////////////////////////////////////////////////////////////////
  if (isLaoding) {
    return (
      <AnimatePresence>
        {" "}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
        >
          <Loader />
        </motion.div>
      </AnimatePresence>
    );
  }
  if (service && service.pack_services.length <= 0) {
    return <OnEditing />;
  }

  if (service && service.pack_services.length > 0) {
    //
    //const service: apiServiceProps = pack.service;
    const packs: packProps[] = service.pack_services;
    console.log("this service", service);
    console.log("paaacks", packs);
    console.log("custom packs", selectedPackList);
    console.log("custom options", selectedOptionsList);
    /* rechecher le prestataire correspondant */
    /* const prestator: PrestatorProps | undefined = prestators.find(
      (prestator) => prestator.id === service.prestatorId
    ); */
    /// si prestator existe alors --->
    //if (prestator) {

    return (
      <div className="single_service_details">
        <ToastContainer />
        <div className={`${toggle ? "show-overlay" : ""} overlay`}></div>
        <div className={`${toggle1 ? "show-overlay" : ""} overlay`}></div>
        {/* Default packs paiement side bar */}
        <aside
          className={`${
            toggle ? "show-paiement-side-bar" : "hide-paiement-side-bar"
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
            <PaiementCardBody
              updateToggle={updateToggle}
              defaultPack={selectedPack}
              service={service}
            />
            {/* end paiement card body */}
          </div>
        </aside>
        {/* end paiement side bar */}
        {/* custom pack paiement side bar */}
        <aside
          className={`${
            toggle1 ? "show-paiement-side-bar" : "hide-paiement-side-bar"
          } paiement-side-bar`}
        >
          <div className="paiement-side-bar-container">
            {session.status === "unauthenticated" ? (
              <div className="register-or-login-invitation container flex justify-center items-center mt-8">
                <div className="p-3 font-light text-[12px]">
                  Veuillez vous{" "}
                  <a href="auth?et=login" className=" text-blue-700">
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
            <PaiementCardBody2
              updateToggle={updateToggle1}
              seletedOptionsList={selectedOptionsList}
              seletedPackList={selectedPackList}
              servce={service}
            />
            {/* end paiement card body */}
          </div>
        </aside>
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
              service={service} //prestator={prestator}
            />
          </div>
        </div>
        {/* banner container */}
        <Wrapper>
          <div className="sigle-service-body relative">
            <div className="rigth" ref={elementRef}>
              <div className="service-description">
                <div className="desc-head flex gap-14">
                  <div className="desc mobile-col2 flex items-center gap-8">
                    <div className="icon-large relative">
                      <i className="ri-calendar-2-line text-[2.8em] text-primary"></i>{" "}
                      <div className="transparant absolute"></div>
                    </div>
                    <div className="desc-text mobile-col2 flex flex-col">
                      <span>Delais de livraison</span>

                      <small>
                        {packs.length > 0
                          ? packs[0].delais_livraison + " jours"
                          : ""}
                      </small>
                    </div>
                  </div>

                  {/*  <div className="desc flex items-center gap-8">
                    <div className="icon-large relative">
                      <i className="ri-bar-chart-grouped-fill text-[2.8em] text-primary"></i>{" "}
                      <div className="transparant absolute"></div>
                    </div>
                    <div className="desc-text">
                      <span>English level</span>
                      <br />
                      <small>Conversational</small>
                    </div>
                  </div> */}

                  <div className="mobile-col2 desc flex items-center gap-8">
                    <div className="icon-large relative">
                      <i className="ri-map-pin-2-line text-[2.8em] text-primary"></i>{" "}
                      <div className="transparant absolute"></div>
                    </div>
                    <div className="desc-text mobile-col2 flex flex-col">
                      <span>Location</span>

                      <small>Abidjan</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* delivey time, language level, location */}

              {/* service carousel img */}
              <div className="service-carousel">
                <div className="carousel-slider">
                  <Carousel className=" w-full" showThumbs={false}>
                    {service.image_services.length > 0
                      ? service.image_services.map((cover, index) => (
                          <div
                            id={`item${index + 1}`}
                            className="carousel-item relative w-full"
                          >
                            <img
                              src={
                                "https://graphikaz.digifaz.com/api/photo_service/" +
                                cover.libelle
                              }
                              /* width={576}
                              height={768} */
                              alt={"service.title"}
                              className="internet-img w-full rounded-[5px]"
                            />
                          </div>
                        ))
                      : coverList.map((cover, index) => (
                          <div
                            id={`item${index + 1}`}
                            className="carousel-item relative w-full"
                          >
                            <Image
                              src={cover}
                              alt={"service.title"}
                              className="w-full rounded-[5px]"
                            />
                          </div>
                        ))}
                  </Carousel>
                </div>
                {/* service miniature img */}
                <div className="carousel-miniature flex justify-start w-full py-2 gap-2 mt-2">
                  {/* service images */}
                  {/* {service.coverList.map((cover, index) => (
                    <div className="carousel-item relative w-[9em] h-[7.5em]">
                      <Image
                        src={cover}
                        alt={service.title}
                        className="w-full rounded-[5px]"
                      />
                    </div>
                  ))} */}
                  {service.image_services.length > 0
                    ? service.image_services.map((cover, index) => (
                        <div
                          className="carousel-item relative w-[9em] h-[7.5em]"
                          key={index}
                        >
                          <img
                            src={
                              "https://graphikaz.digifaz.com/api/photo_service/" +
                              cover.libelle
                            }
                            /*  width={576}
                            height={768} */
                            alt={"service.title"}
                            className="internet-img w-full rounded-[5px]"
                          />
                        </div>
                      ))
                    : coverList.map((cover, index) => (
                        <div className="carousel-item relative w-[9em] h-[7.5em]">
                          <Image
                            key={index}
                            src={cover}
                            alt={"service.title"}
                            className="w-full rounded-[5px]"
                          />
                        </div>
                      ))}
                </div>
              </div>
              {/* service carousel */}
              <div className="service-description">
                <div className="descriptions">
                  <h2>Service Description</h2>
                  <p className="text-small">
                    {service.description} <br />
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                  </p>
                  {/* pack accordeon */}
                  <div className="other-provide-services">
                    <div className="accordeon bg-slate-50 rounded">
                      {packs.map((pack, index) => {
                        return (
                          <div
                            className="collapse collapse-plus rounded-none"
                            key={index}
                          >
                            <input type="radio" name="my-accordion-3" checked />
                            <div className="collapse-title  text-[16px] font-[500]">
                              <span className="text-[16px] font-[500]">
                                {pack.libelle + " "}
                              </span>
                              <span className="text-[15px] font-[700] underline decoration-yellow-600">
                                {" " + pack.montant + " FCFA"}
                              </span>
                            </div>
                            <div className="collapse-content">
                              <ul className="text-small">
                                <li>Bénéficier de :</li>
                                {pack.ligne_services.map((ligne, index) => {
                                  return (
                                    <li>
                                      <i className="ri-check-fill"></i>{" "}
                                      {ligne.libelle}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* end pack accordeon */}
                </div>

                {/* small screen only */}
                <div className="small-screen-only">
                  <div className="left sticky-r">
                    <div className=" ">
                      <DefaultPacks
                        packs={packs}
                        setOrderPack={setSelectedPack}
                        updateToggle={updateToggle}
                      />
                      {/* THIS SERVICE PROVIDER INFOS */}
                      {/* <div className="prestator-infos shadow">
                  <h3>À propos du vendeur</h3>
                  <div className="pretator-profil items-center flex gap-3 mt-3">
                    <div className=" object-cover w-[30%] h-[6em]  rounded-full">
                      <Image
                        //src={prestator.profilPic}
                        src={Digifaz}
                        //alt={prestator.fullName}
                        alt={"digifaz"}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <h3>{"Digifaz"}</h3>
                      <small>{"Entreprise de services informatique"}</small>
                      <div className="reviews">
                        <i className="ri-star-fill text-yellow-500"></i> {4.9}{" "}
                        {`(`}
                        {567}
                        {` Reviews)`}
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between meta">
                    <div className="location">
                      <span>Location</span>
                      <br />
                      <small>Abidjan</small>
                    </div>
                    <div className="rate">
                      <span>Rate:</span>
                      <br />
                      <small>$55 - $60 / hr</small>
                    </div>
                  </div>
                  <button type="button">
                    Contact Me <i className="ri-arrow-right-up-line"></i>
                  </button>
                </div> */}
                    </div>
                  </div>
                </div>

                {/* customisation part */}
                <div className="customisation" id="customisation">
                  <div className="customisation-content">
                    <div className="customisation-header py-3 px-2 bg-slate-800">
                      <p className="text-slate-100 font-semibold text-[20px]">
                        Personnaliser ce service
                      </p>
                      <small className=" text-slate-300 font-light">
                        Pour une meilleure précision des résultats, nous
                        suggérons d'explorer les options présentées ci-dessous
                      </small>
                    </div>
                    {/* end header */}
                    <div className="customisation-body">
                      <div className=" mobile-col service-base py-5 flex justify-between">
                        <div className="flex  gap-3 items-start">
                          <input
                            type="checkbox"
                            className="checkbox w-[15px] h-[15px] rounded-[1px] mt-[0.4rem]"
                            disabled
                            checked
                          />
                          <div className="service-base-libelle text-[18px] font-[600]">
                            <p>{service.libelle}</p>
                            <small className="text-gray-500 font-[300]">
                              {packs[0].delais_livraison +
                                " jours de réalisation"}
                            </small>
                          </div>
                        </div>
                        <span className="text-[18px] font-[600]">
                          {packs[0].montant + " FCFA"}
                        </span>
                      </div>

                      <p className=" sup font-semibold text-[20px]">
                        Options supplémentaires
                      </p>

                      {/* use map */}
                      <ServiceOptions
                        service={service}
                        updateToggle={updateToggle1}
                        setPacksList={setSelectedPackList}
                        setOptionsList={setSelectedOptionsList}
                      />
                    </div>
                  </div>
                </div>
                {/* end customisation part */}
                {/* <div className="divider" /> */}
              </div>
              {/* service description */}
              <div className="ratting-area">
                {/* <RatingStates ratings={[29, 125, 50, 70, 93]} /> */}
                {/* rating statistic */}
                <div className="divider" />
                {/* comment area */}
                <div className="review-comment">
                  <span className="text-bold">
                    Soyez le premier à noter “{title}”
                  </span>
                  <form action="">
                    <span className="text-small">
                      Votre évaluation pour ce service
                    </span>

                    <Rate
                      rating={rating}
                      onRating={(rate: React.SetStateAction<number>) =>
                        setRating(rate)
                      }
                    />

                    <div className="inputs">
                      <div className="comment-input">
                        <span>Votre commentaire</span>
                        <textarea
                          name=""
                          id=""
                          rows={8}
                          placeholder="Commentaire"
                        ></textarea>
                      </div>
                      <div className="name-email-inputs mobile-col-inputs">
                        <div className="name-input">
                          <span>Votre nom</span>
                          <input type="text" placeholder="nom" />
                        </div>
                        <div className="email-input">
                          <span>Votre Email</span>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="check-box">
                        <input type="checkbox" />
                        <span className="text-small">
                          Enregistrer mes informations pour la prochaine fois
                          que je ferai un commentaire.
                        </span>
                      </div>
                      <button type="submit" className="mobile-full">
                        Envoyer
                      </button>
                    </div>
                  </form>
                  {/* rating & comment form */}
                </div>
              </div>

              <div className="related-services-area w-full pt-12">
                {/*  <h2 className="mb-6 font-bold">Related Services</h2> */}
                <div className="related-services">
                  {/* filtrage des service pour recupérer les
                    services simulaires au service actuel
                  */}
                  {/*  {services
                    .filter((serv) => serv.id !== service.id)
                    .slice(0, 3)
                    .map((service, index) => {
                      const prestator = prestators.find(
                        (prestator) => prestator.id === service.prestatorId
                      );
                      return (
                        <TServiceCard
                          service={service}
                          prestator={prestator ? prestator : null}
                        />
                      );
                    })} */}
                </div>
              </div>
              {/* related service */}
            </div>

            <div className="left sticky-r" style={style}>
              <div className="sticky top-0">
                <DefaultPacks
                  packs={packs}
                  setOrderPack={setSelectedPack}
                  updateToggle={updateToggle}
                />
                {/* THIS SERVICE PROVIDER INFOS */}
                {/* <div className="prestator-infos shadow">
                  <h3>À propos du vendeur</h3>
                  <div className="pretator-profil items-center flex gap-3 mt-3">
                    <div className=" object-cover w-[30%] h-[6em]  rounded-full">
                      <Image
                        //src={prestator.profilPic}
                        src={Digifaz}
                        //alt={prestator.fullName}
                        alt={"digifaz"}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <h3>{"Digifaz"}</h3>
                      <small>{"Entreprise de services informatique"}</small>
                      <div className="reviews">
                        <i className="ri-star-fill text-yellow-500"></i> {4.9}{" "}
                        {`(`}
                        {567}
                        {` Reviews)`}
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between meta">
                    <div className="location">
                      <span>Location</span>
                      <br />
                      <small>Abidjan</small>
                    </div>
                    <div className="rate">
                      <span>Rate:</span>
                      <br />
                      <small>$55 - $60 / hr</small>
                    </div>
                  </div>
                  <button type="button">
                    Contact Me <i className="ri-arrow-right-up-line"></i>
                  </button>
                </div> */}
              </div>
            </div>
            {/* sticky asside */}
          </div>
        </Wrapper>
      </div>
    );
    // }
  }

  //////////////: rien de trouvé
  return (
    <Wrapper>
      <Error404 />
    </Wrapper>
  );
}

const BannerContainer = ({
  service,
}: // prestator,
{
  service: apiServiceProps;
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

interface DefaultPacksProps {
  updateToggle: (value: boolean) => void;
  packs: packProps[];
  setOrderPack: React.Dispatch<React.SetStateAction<packProps | undefined>>;
}

const DefaultPacks: React.FC<DefaultPacksProps> = ({
  packs,
  setOrderPack,
  updateToggle,
}) => {
  const [selectedPack, setSelectedPack] = useState<packProps>();
  useEffect(() => {
    setOrderPack(selectedPack);
  }, [selectedPack]);

  if (packs.length === 0) {
    return (
      <div className="options-container shadow">
        {" "}
        Aucun pack n'est disponible pour le moment
      </div>
    );
  }
  if (packs.length === 1) {
    setSelectedPack(packs[0]);

    return (
      <div className="options-container shadow">
        <div className="pack-choice-container">
          <label
            htmlFor={packs[0].id.toString()}
            className=" flex items-start justify-start gap-2 cursor-pointer"
          >
            <input
              id={packs[0].id.toString()}
              type="radio"
              name="radio-5"
              className="radio radio-success w-4 h-4 mt-1"
              checked
            />

            <span className="intro-pack flex flex-col">
              <span className="intro-pack-prince text-[18px] font-[600]">
                {packs[0].montant}{" "}
                <sup className="text-[8px] font-bold">FCFA</sup>
              </span>
              <small className="py-2 text-gray-500 font-[300]">
                {packs[0].delais_livraison} jours de réalisation
              </small>
              {/*  <small>
              Recommandé <i className="ri-quill-pen-line"></i>{" "}
            </small> */}
              <small
                className="text-[14px] font-[400]"
                /* onClick={() => updateToggle(true)} */
              >
                Service basique, sans option : {packs[0].libelle}
              </small>
            </span>
          </label>
        </div>

        <button
          type="button"
          className="first-chirld mt-4"
          onClick={() => updateToggle(true)}
        >
          Acheter ${selectedPack?.montant}{" "}
          <i className="ri-arrow-right-up-line"></i>
        </button>
        <div className="secur-paiement w-full py-2 flex flex-col justify-center items-center">
          <span>
            {" "}
            Securisé par{" "}
            <span className=" text-green-600">
              <i className="ri-lock-fill"></i> CinetPay
            </span>{" "}
          </span>
          <small className="text-gray-500 font-[300]">
            Vos informations sont chiffrées par TLS
          </small>
        </div>
      </div>
    );
  }
  // Utiliser reduce pour obtenir le total
  const totalLigneServices = packs.reduce((acc, pack) => {
    // Ajouter le nombre de lignes de service pour chaque service
    return acc + (pack.ligne_services ? pack.ligne_services.length : 0);
  }, 0);

  useEffect(() => {
    /// selection le pack recommander
    setSelectedPack(packs[1]);
  }, []);
  const [checked, setChecked] = useState(false);

  const handleRadioChange = () => {
    setChecked(!checked);
  };
  const setpack1 = () => {
    setSelectedPack(packs[0]);
  };
  const setpack2 = () => {
    setSelectedPack(packs[1]);
  };
  return (
    <div className="options-container shadow">
      <div className="pack-choice-container">
        {/* pack recommandé */}
        <label
          htmlFor={packs[1].id.toString()}
          className=" flex items-start justify-start gap-2 cursor-pointer"
        >
          <input
            id={packs[1].id.toString()}
            type="radio"
            name="radio-5"
            className="radio radio-success w-4 h-4 mt-1"
            checked={!checked}
            onChange={handleRadioChange}
            onClick={setpack2}
          />

          <span className="intro-pack flex flex-col">
            <span className="intro-pack-prince text-[18px] font-[600]">
              {packs[1].montant}{" "}
              <sup className="text-[8px] font-bold">FCFA</sup>
            </span>
            <small className="py-2 text-gray-500 font-[300]">
              {packs[1].delais_livraison} jours de réalisation
            </small>
            <small className="text-[14px] font-semibold pb-1">
              Recommandé <i className="ri-quill-pen-line"></i>{" "}
            </small>
            <small className="text-[14px] font-[400]">
              Service basique et option recommandée : {packs[1].libelle}
            </small>
          </span>
        </label>
        <div className="divider" />
        {/* pack de base */}
        <label
          htmlFor={packs[0].id.toString()}
          className=" flex items-start justify-start gap-2 cursor-pointer"
        >
          <input
            id={packs[0].id.toString()}
            type="radio"
            name="radio-5"
            className="radio radio-success w-4 h-4 mt-1"
            checked={checked}
            onChange={handleRadioChange}
            onClick={setpack1}
          />

          <span className="intro-pack flex flex-col">
            <span className="intro-pack-prince text-[18px] font-[600]">
              {packs[0].montant}{" "}
              <sup className="text-[8px] font-bold">FCFA</sup>
            </span>
            <small className="py-2 text-gray-500 font-[300]">
              {packs[0].delais_livraison} jours de réalisation
            </small>
            {/*  <small>
              Recommandé <i className="ri-quill-pen-line"></i>{" "}
            </small> */}
            <small className="text-[14px] font-[400]">
              Service basique, sans option : {packs[0].libelle}
            </small>
          </span>
        </label>

        {/* customisation link */}
        <div className="divider" />
        <a href="#customisation">
          <div className="customisation-link w-full cursor-pointer">
            <span className="flex gap-2  items-center justify-start ">
              <i className="ri-equalizer-line text-[12px] font-[600]"></i>{" "}
              <small className="text-[16px] font-[600]">
                Personnalisé ce service
              </small>
            </span>
            <small className="text-gray-500 font-[300]">
              Choissez jusqu'a {totalLigneServices} options
            </small>
          </div>
        </a>
      </div>

      <button
        type="button"
        className="first-chirld mt-4"
        onClick={() => updateToggle(true)}
      >
        Acheter {selectedPack?.montant + "F CFA"}
        <i className="ri-arrow-right-up-line"></i>
      </button>
      <div className="secur-paiement w-full py-2 flex flex-col justify-center items-center">
        <span>
          {" "}
          Securisé par{" "}
          <span className=" text-green-600">
            <i className="ri-lock-fill"></i> CinetPay
          </span>{" "}
        </span>
        <small className="text-gray-500 font-[300]">
          Vos informations sont chiffrées par TLS
        </small>
      </div>
    </div>
  );
};

//import React, { useState } from 'react';

interface ServiceOptionsProps {
  updateToggle: (value: boolean) => void;
  service: apiServiceProps;
  setPacksList: React.Dispatch<React.SetStateAction<packProps[] | undefined>>;
  setOptionsList: React.Dispatch<
    React.SetStateAction<OptionsProps[] | undefined>
  >;
}
const ServiceOptions: React.FC<ServiceOptionsProps> = ({
  service,
  updateToggle,
  setPacksList,
  setOptionsList,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<OptionsProps[]>([]);
  const [selectedPacks, setSelectedPacks] = useState<packProps[]>([]);
  //const basePrice = service.pack_services[0].montant || 0;
  const [basePrice, setPrice] = useState(service.pack_services[0].montant || 0);
  /* const [quantity, setQuantity] = useState(1); */ // État pour suivre la quantité

  useEffect(() => {
    selectedPacks.push(service.pack_services[0]);
  }, []);

  //////////////
  useEffect(() => {
    setPacksList(selectedPacks);
    setOptionsList(selectedOptions);
  }, [selectedPacks, selectedOptions]);
  //////////////
  const handleOptionChange = (option: OptionsProps) => {
    const index = selectedOptions.indexOf(option);

    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      const updatedOptions = [...selectedOptions];
      updatedOptions.splice(index, 1);
      setSelectedOptions(updatedOptions);
    }
  };

  const handlePacksChange = (pack: packProps) => {
    const index = selectedPacks.indexOf(pack);

    if (index === -1) {
      setSelectedPacks([...selectedPacks, pack]);
    } else {
      const updatedPacks = [...selectedPacks];
      updatedPacks.splice(index, 1);
      setSelectedPacks(updatedPacks);
    }
  };

  const calculateTotalPrice = () => {
    console.log("Selected Options:", selectedOptions);

    const optionsTotal = selectedOptions.reduce(
      (total, option) => total + parseInt(option.montant.toString(), 10),
      0
    );

    const packsTotal = selectedPacks.reduce(
      (total, pack) => total + parseInt(pack.montant.toString(), 10),
      0
    );

    console.log("Total Price:", optionsTotal);
    useEffect(() => {
      setPrice(optionsTotal + packsTotal);
    }, [optionsTotal, packsTotal]);
    return parseInt(basePrice.toString(), 10);
    // Reste du code...
  };
  // Utilisez flatMap pour extraire les "ligne_services" de chaque service
  const allOption: OptionsProps[] = service.pack_services.flatMap(
    (pack) => pack.ligne_services
  );
  return (
    <>
      {/* packs map */}
      {service.pack_services
        .slice(1, service.pack_services.length)
        .map((pack, index) => {
          /* const delaiSup =
            service.pack_services[0].delais_livraison - pack.delais_livraison; */
          return (
            <div
              className="mobile-col service-base py-5 flex justify-between"
              key={index}
            >
              <div className="flex  gap-3 items-start">
                <input
                  type="checkbox"
                  className="checkbox w-[15px] h-[15px] rounded-[1px] mt-[0.4rem]"
                  checked={selectedPacks.includes(pack)}
                  onChange={() => handlePacksChange(pack)}
                />
                <div className="service-base-libelle text-[18px] font-[600]">
                  <p>{"PACK " + pack.libelle}</p>
                  <small className="text-gray-500 font-[300]">
                    {pack.delais_livraison > 0
                      ? "Délai supplémentaireon de " +
                        pack.delais_livraison +
                        " jours"
                      : "Pas de délai supplémentaire"}
                  </small>
                </div>
              </div>
              <span className="text-[18px] font-[600]">
                {pack.montant + " FCFA"}
              </span>
            </div>
          );
        })}
      {/* options map */}
      {allOption.map((option, index) => {
        return (
          <div
            className="mobile-col service-base py-5 flex justify-between"
            key={index}
          >
            <div className="flex  gap-3 items-start">
              <input
                type="checkbox"
                className="checkbox w-[15px] h-[15px] rounded-[1px] mt-[0.4rem]"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <div className="service-base-libelle text-[18px] font-[600]">
                <p>{option.libelle}</p>
                <small className="text-gray-500 font-[300]">
                  {" Pas de délai supplémentaire"}
                </small>
              </div>
            </div>
            <span className="text-[18px] font-[600]">
              {option.montant + " FCFA"}
            </span>
          </div>
        );
      })}
      {/* lot */}
      {/*  <div className="lot-config">
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <input
          type="number"
          name=""
          id=""
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div> */}

      <div className="flex">
        <button
          type="button"
          className=" mobile-full first-chirld mt-4]"
          onClick={() => updateToggle(true)}
        >
          Acheter {calculateTotalPrice()} FCFA{" "}
          <i className="ri-arrow-right-up-line"></i>
        </button>
        <div className="mobile-hidden w-[90%]"></div>
      </div>
      {/*  <p>Total Price: {}</p> */}

      {/* paiement side bar */}

      {/* end paiement side bar */}
    </>
  );
};

//export default ServiceOptions;

//export default DefaultPacks

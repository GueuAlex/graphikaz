import React, { useState } from "react";
import { EmptyCart, Service1, Service2, Service3 } from "@/public";
import Image, { StaticImageData } from "next/image";
import { payMethodsTab } from "@/constants";
import CreditCardForm from "./credit_card_paiement";
import MobileMoneyForm from "./mobile_money_form";
import { DefaultOrderProps, apiServiceProps, packProps } from "@/types";

interface PaiementCardBodyProps {
  updateToggle: (value: boolean) => void;
  defaultPack: packProps | undefined;
  service: apiServiceProps;
}

const PaiementCardBody: React.FC<PaiementCardBodyProps> = ({
  updateToggle,
  defaultPack,
  service,
}) => {
  const [selectedMetohd, setSelectedMetohd] = useState("Carte de Crédit");
  //const imgTab: StaticImageData[] = [Service1, Service2, Service3];
  /// UI returned if defaultPack ==== undefined

  if (defaultPack === undefined) {
    return (
      <div className="content-body flex  w-full h-full">
        <div className="commande-details">
          <div className="details-content">
            <div className="details-content-header flex items-center gap-2">
              <i
                className="ri-arrow-left-line cursor-pointer"
                onClick={() => updateToggle(true)}
              ></i>
              <div className="p-logo">P</div>
              <span className=" text-stone-500">Pay Powdur</span>
              <small>TEST MODE</small>
            </div>
          </div>
          <div className="not-selected-item w-full h-full justify-center items-center flex flex-col gap-4">
            <Image src={EmptyCart} alt="graphikaz-empty-cart" width={350} />
            <div className="text-container flex flex-col gap-2 text-center">
              <span className="text-[20px] font-semibold">Oops !</span>
              <small className="text-[13px] font-light">
                Avant de procéder au paiement, veuillez sélectionner le service
                désiré
                <br />
                pour une expérience optimale.
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //// eles -----
  const defaultOrder: DefaultOrderProps = {
    numero_commande: undefined,
    reference_paiement: undefined,
    service_id: service.id,
    pack_service_id: defaultPack.id,
    status_paiement: "EN ATTENTE",
    status: "EN ATTENTE",
  };
  console.log(defaultOrder);
  return (
    <div className="content-body flex  w-full h-full gap-3">
      <div className="commande-details">
        <div className="detail-content">
          <div className="details-content-header flex items-center gap-2">
            <i
              className="ri-arrow-left-line cursor-pointer"
              onClick={() => updateToggle(true)}
            ></i>
            <div className="p-logo">P</div>
            <span className=" text-stone-500">Pay Powdur</span>
            <small>TEST MODE</small>
          </div>
          <div className="details-content-body">
            <div className="commande-total flex flex-col ">
              <small>TOTAL</small>
              <span>{defaultPack.montant} FCFA</span>
            </div>
            {/* showing service, pack and option */}
            {/*  <p className="title-of-this-service pb-2 text-[1.2rem]  font-normal">
              Je vais créer un logo qui traduit fidèlement votre activité
            </p> */}
            <div className="img-container flex gap-1">
              {service.image_services.map((img, index) => (
                <Image
                  src={`https://graphikaz.digifaz.com/api/photo_service/${img.libelle}`}
                  alt={index.toString()}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            {/* service title */}

            <div className="comande-list mt-2">
              <p className="py-3 text-stone-500">Votre commande</p>
              {/* use map */}
              <div className="custome-timeline w-full flex flex-col">
                <small className="this-option-price">
                  {defaultPack.montant} FCFA
                </small>
                <span className="this-option-tilte">
                  PACK {defaultPack.libelle.toUpperCase()}{" "}
                  {defaultPack.libelle.toLowerCase().includes("initial")
                    ? "service basique, sans option"
                    : "service basique et option - recommandée"}
                </span>
                <small className="py-2 text-gray-500 font-[300]">
                  {defaultPack.delais_livraison} jours de réalisation
                </small>
              </div>
              <div className="dot">
                <i className="ri-check-line"></i>
              </div>
            </div>
          </div>
          <div className="mobile-hidden copy-right-terms w-full ">
            <span className="text-[13px] font-light text-slate-600">
              Powered by <span className="font-semibold">Digifaz</span> |{" "}
              <span>Terms {"  "} Privacy</span>
            </span>
          </div>
        </div>
      </div>
      <div className="paiement-informatios flex justify-center ">
        <div className="paiement-infos-content">
          <div className="paiement-infos-header">
            <div className="pay-methods w-full  flex small-screen">
              {payMethodsTab.map((method, index) => (
                <div
                  onClick={() => setSelectedMetohd(method.libelle)}
                  className={`img-container relative ${
                    selectedMetohd === method.libelle ? "active" : ""
                  } cursor-pointer`}
                  key={index}
                >
                  {selectedMetohd === method.libelle ? (
                    <div className="pay-overlay w-full h-full   absolute">
                      <div className="selected-check">
                        <i className="ri-check-fill"></i>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <Image
                    src={method.img}
                    alt={method.libelle}
                    className="img"
                    width={100}
                    height={50}
                  />
                </div>
              ))}
            </div>
            <div className="title-top flex items-center justify-center py-4">
              <div className="line"></div>
              <span className="text-[13px] font-semibold">
                {selectedMetohd}
              </span>
              <div className="line"></div>
            </div>
          </div>
          <div className="paiement-info-body">
            {/* <CreditCardForm /> */}
            {/* <MobileMoneyForm method={selectedMetohd} />      */}
            {selectedMetohd === "Carte de Crédit" ? (
              <CreditCardForm
                montant={defaultPack.montant}
                method={selectedMetohd}
              />
            ) : (
              <MobileMoneyForm
                method={selectedMetohd}
                montant={defaultPack.montant}
                defaultOrder={defaultOrder}
                customeOrder={undefined}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mobile-show-pay-copy hidden copy-right-terms w-full items-center justify-center ">
        <span className="text-[13px] font-light text-slate-600">
          Powered by <span className="font-semibold">Digifaz</span> |{" "}
          <span>Terms {"  "} Privacy</span>
        </span>
      </div>
    </div>
  );
};

export default PaiementCardBody;

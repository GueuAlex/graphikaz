import React, { useState } from "react";
import Image from "next/image";
import {
  BcardProps,
  BrochureProps,
  FlyersProps,
  ImpressOrderProps,
  RollupProps,
  deliZoneProps,
  RestoProps,
  PromotionalProps,
} from "@/types";
import { payMethodsTab } from "@/constants";
import CheckoutMobileForm from "./checkout_mobile_form";
import CheckoutCreditCardForm from "./checkout_credit_card_form";

interface CheckoutComponentProps {
  updateToggle: (value: boolean) => void;
  order: ImpressOrderProps;
  impressable:
    | FlyersProps
    | BcardProps
    | BrochureProps
    | RollupProps
    | RestoProps
    | PromotionalProps;
  delizone: deliZoneProps | undefined;
}

const CheckoutComponent: React.FC<CheckoutComponentProps> = ({
  updateToggle,
  impressable,
  order,
  delizone,
}) => {
  const [selectedMetohd, setSelectedMetohd] = useState("Carte de Crédit");
  //const metaData = JSON.parse(order.meta_data.toString());
  return (
    <div className="content-body flex  w-full h-full gap-3">
      <div className="commande-details">
        <div className="detail-content">
          <div className="details-content-header flex items-center gap-2">
            <i
              className="ri-arrow-left-line cursor-pointer"
              onClick={() => updateToggle(false)}
            ></i>
            <div className="p-logo">P</div>
            <span className=" text-stone-500">Pay Powdur</span>
            <small>TEST MODE</small>
          </div>
          <div className="details-content-body">
            <div className="commande-total flex flex-col ">
              <small>TOTAL</small>
              <span>{order.amount} F CFA</span>
            </div>
            {/* showing service, pack and option */}
            {/*  <p className="title-of-this-service pb-2 text-[1.2rem]  font-normal">
            Je vais créer un logo qui traduit fidèlement votre activité
          </p> */}
            <div className="img-container flex gap-1">
              <Image
                src={impressable.cover}
                alt={impressable.title}
                width={80}
                height={80}
                className=""
              />
              <div className="flex-1 h-full title-caption">
                {impressable.title}
              </div>
            </div>
            {/* service title */}

            <div className="comande-list mt-2">
              <p className="py-3 text-stone-500">Votre commande</p>
              {/* use map */}

              {Object.keys(order.meta_data).map((key, index) => {
                return (
                  <>
                    <div
                      className="custome-timeline w-full flex flex-col"
                      key={index}
                    >
                      {order.meta_data[key] && (
                        <>
                          <small className="this-option-price">
                            {order.meta_data[key].price} FCFA
                          </small>
                          <span className="this-option-tilte">
                            {order.meta_data[key].libelle}
                          </span>
                          <small className="py-1 text-gray-500 font-[300]">
                            {key}
                          </small>
                        </>
                      )}
                    </div>
                    <div className="dot">
                      <i className="ri-check-line"></i>
                    </div>
                  </>
                );
              })}
              {delizone != undefined ? (
                <div
                  className="custome-timeline w-full flex flex-col"
                  key={delizone.commune.commune}
                >
                  <>
                    <small className="this-option-price">
                      {delizone.montant} FCFA
                    </small>
                    <span className="this-option-tilte">
                      {delizone.commune.commune}
                    </span>
                    <small className="py-1 text-gray-500 font-[300]">
                      {`${delizone.city.ville} - ${delizone.country.pays}`}
                    </small>
                  </>
                </div>
              ) : (
                <></>
              )}
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
              <CheckoutCreditCardForm
                montant={order.amount}
                method={selectedMetohd}
              />
            ) : (
              <CheckoutMobileForm order={order} method={selectedMetohd} />
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

export default CheckoutComponent;

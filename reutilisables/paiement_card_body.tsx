import React, { useContext, useState } from "react";
import { EmptyCart } from "@/public";
import Image from "next/image";
import { payMethodsTab } from "@/constants";
import CreditCardForm from "./credit_card_paiement";
import MobileMoneyForm from "./mobile_money_form";
import "@/styles/paiement_card_style.scss";
import {
  ContextSelection,
  ContextSeletecdPackProps,
  ContextServiceProps,
  DefaultOrderProps,
  GraphicServOptionalItemProps,
  GraphicServPackType,
  PriceData,
} from "@/types";
import { LocalContext } from "./local_context";

interface PaiementCardBodyProps {
  updateToggle: (value: boolean) => void;
}

const PaiementCardBody: React.FC<PaiementCardBodyProps> = ({
  updateToggle,
}) => {
  const {
    basicTotalPrice,

    standardTotalPrice,

    premiumTotalPrice,

    test_service,
    seletedOptionalItems,
    selectedDeliveryDelay,

    contextPack,
  } = useContext(LocalContext) as PriceData &
    ContextServiceProps &
    ContextSelection &
    ContextSeletecdPackProps;

  let optionalItems: GraphicServOptionalItemProps[] = [];
  if (seletedOptionalItems) {
    if (contextPack!.libelle === seletedOptionalItems.selectedOn) {
      optionalItems = seletedOptionalItems.optionalItems;
    }
  }
  const [selectedMetohd, setSelectedMetohd] = useState("Carte de Crédit");
  //const imgTab: StaticImageData[] = [Service1, Service2, Service3];
  /// UI returned if defaultPack ==== undefined

  if (!contextPack) {
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
    service_id: test_service!.id,
    pack_service_id: contextPack.id,
    status_paiement: "EN ATTENTE",
    status: "EN ATTENTE",
  };
  console.log(defaultOrder);
  function getPrice(packType: GraphicServPackType): number {
    if (packType === GraphicServPackType.BASIQUE) {
      return basicTotalPrice;
    }
    if (packType === GraphicServPackType.STANDARD) {
      return standardTotalPrice;
    }
    return premiumTotalPrice;
  }
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
              <span>{getPrice(contextPack.libelle)} FCFA</span>
            </div>
            <div className="pack-description  flex flex-col">
              <p className="label">{contextPack.libelle}</p>
              <p className="description">
                <b>{contextPack.subTitle.toLowerCase()} :</b>{" "}
                <small>{contextPack.description}</small>
              </p>

              <div className="delivery-infos py-5 font-bold text-slate-500">
                <i className="bi bi-alarm"></i>{" "}
                {selectedDeliveryDelay!.type === contextPack.libelle ? (
                  <span>
                    Livraison en {selectedDeliveryDelay!.numberOfDay} jour(s)
                  </span>
                ) : (
                  <span>
                    Livraison en{" "}
                    {contextPack.normalExecutionDeadline.numberOfDay} jour(s)
                  </span>
                )}
              </div>
            </div>
            {/* showing service, pack and option */}
            {/*  <p className="title-of-this-service pb-2 text-[1.2rem]  font-normal">
              Je vais créer un logo qui traduit fidèlement votre activité
            </p> */}
            <div className="img-container flex gap-1">
              {test_service!.covers.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={index.toString()}
                  width={80}
                  height={80}
                />
              ))}
            </div>
            {/* service title */}

            <div className="comande-list mt-2 ">
              <p className="py-3 text-stone-500">Votre commande</p>
              {/* use map */}
              <ul>
                {test_service!.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-2 justify-start items-center py-2"
                  >
                    <i className="bi bi-check-lg"></i>
                    <div className="price-label flex flex-col">
                      <small className="this-option-price">
                        {item.price} FCFA
                      </small>
                      <span className="this-option-tilte">
                        {item.libelle}{" "}
                        {item.values &&
                          item.values.map((value, index) => (
                            <b key={index}>
                              {value.valueType === contextPack.libelle &&
                                `(${value.value})`}
                            </b>
                          ))}{" "}
                      </span>
                    </div>
                  </li>
                ))}
                {seletedOptionalItems &&
                  seletedOptionalItems.selectedOn === contextPack.libelle &&
                  seletedOptionalItems.optionalItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2 justify-start items-center py-2"
                    >
                      <i className="bi bi-check-lg"></i>
                      <div className="price-label flex flex-col">
                        <small className="this-option-price">
                          {item.price} FCFA
                        </small>
                        <span className="this-option-tilte">
                          {item.libelle}{" "}
                          {item.values &&
                            item.values.map((value, index) => (
                              <b key={index}>
                                {value.valueType === contextPack.libelle &&
                                  `(${value.value})`}
                              </b>
                            ))}{" "}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
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
                montant={getPrice(contextPack.libelle)}
                method={selectedMetohd}
              />
            ) : (
              <MobileMoneyForm
                method={selectedMetohd}
                montant={getPrice(contextPack.libelle)}
                /* order={defaultOrder} */
                selectedDeliveryDelay={selectedDeliveryDelay!}
                selectedOptionnalITems={optionalItems}
                selectedPackType={contextPack.libelle}
                services={[test_service!]}
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

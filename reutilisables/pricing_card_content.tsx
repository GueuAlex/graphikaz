import "@/styles/pricing_card_content_style.scss";
import {
  ContextSelection,
  ContextServiceProps,
  GraphicServPack,
  GraphicServPackType,
  PriceData,
} from "@/types";
import { useContext, useState } from "react";
import { LocalContext } from "./local_context";
import { AnimatePresence, motion } from "framer-motion";
import { B } from "@vercel/blob/dist/helpers-BfcvAwfQ.cjs";

interface PricingCardContentProps {
  selectePack: GraphicServPack;
}

export const PricingCardContent: React.FC<PricingCardContentProps> = ({
  selectePack,
}) => {
  const {
    basicTotalPrice,
    standardTotalPrice,
    premiumTotalPrice,
    test_service,
    selectedDeliveryDelay,
    seletedOptionalItems,
  } = useContext(LocalContext) as PriceData &
    ContextServiceProps &
    ContextSelection;

  const [toggleDetails, setToggleDetails] = useState(true);

  function getPrice(): number {
    if (selectePack.libelle === GraphicServPackType.BASIQUE) {
      return basicTotalPrice;
    }
    if (selectePack.libelle === GraphicServPackType.STANDARD) {
      return standardTotalPrice;
    }
    return premiumTotalPrice;
  }
  function getClasseName(itemType: GraphicServPackType): string {
    if (selectePack.libelle === GraphicServPackType.BASIQUE) {
      if (selectePack.libelle !== itemType) {
        return "icon-gray-color";
      }
    }

    if (selectePack.libelle === GraphicServPackType.STANDARD) {
      if (
        itemType !== GraphicServPackType.STANDARD &&
        itemType !== GraphicServPackType.BASIQUE
      ) {
        return "icon-gray-color";
      }
    }

    return "";
  }
  return (
    <div className="card-content">
      <h2>{getPrice()} F CFA</h2>
      <p className="discount-info">
        Économisez jusqu'à 20 % lorsque vous{" "}
        <a href="#">Souscrivez pour faire des économies !</a>
      </p>
      <p className="package-details">
        <strong>{selectePack.subTitle.toLowerCase()} : </strong>
        {selectePack.description}
      </p>
      <div className="delivery-info">
        <span>
          <i className="bi bi-alarm"></i> Livraison en{" "}
          {selectePack.normalExecutionDeadline.type ===
          selectedDeliveryDelay!.type
            ? selectedDeliveryDelay!.numberOfDay
            : selectePack.normalExecutionDeadline.numberOfDay}{" "}
          jour(s)
        </span>
        <span>{/* 2 révisions */}</span>
      </div>
      <button
        className="toggle-details"
        onClick={() => setToggleDetails(!toggleDetails)}
      >
        <span>Ce qui est inclus</span>{" "}
        {toggleDetails ? (
          <i className="bi bi-caret-up-fill"></i>
        ) : (
          <i className="bi bi-caret-down-fill"></i>
        )}
      </button>
      {toggleDetails && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectePack.libelle} // Key to ensure correct animation on change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pack-items">
              <ul>
                {" "}
                {test_service!.items.map((item, index) => (
                  <li
                    key={index}
                    className={`${getClasseName(
                      item.type
                    )} flex items-center gap-2`}
                  >
                    <i className={`bi bi-check-lg `}></i>{" "}
                    <span>{item.libelle}</span>{" "}
                    {item.values &&
                      item.values.map((v, indexx) => (
                        <b key={indexx}>
                          {v.valueType === selectePack.libelle &&
                            `(${v.value})`}
                        </b>
                      ))}
                  </li>
                ))}
                {seletedOptionalItems &&
                  seletedOptionalItems.selectedOn === selectePack.libelle &&
                  seletedOptionalItems.optionalItems.map((item, index) => (
                    <li key={index} className={` flex items-center gap-2`}>
                      <i className={`bi bi-check-lg `}></i>{" "}
                      <span>{item.libelle}</span>{" "}
                      {item.values &&
                        item.values.map((v, indexx) => (
                          <b key={indexx}>
                            {v.valueType === selectePack.libelle &&
                              `(${v.value})`}
                          </b>
                        ))}
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

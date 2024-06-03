import React, { useContext, useState } from "react";
import "@/styles/price_card_style.scss";
import { LocalContext } from "./local_context";
import { ContextSeletecdPackProps, ContextServiceProps } from "@/types";
import { PricingCardContent } from "./pricing_card_content";
import { AnimatePresence, motion } from "framer-motion";

interface PricingCardProps {
  updateToggle: (value: boolean) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ updateToggle }) => {
  const { test_service, contextPack, setContextPack } = useContext(
    LocalContext
  ) as ContextServiceProps & ContextSeletecdPackProps;

  console.log("context pack ======>" + contextPack);

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      updateToggle(true);
    }, 3000);
  };

  return (
    <div className="pricing-card">
      <div className="tabs">
        {test_service!.packs.map((pack, index) => {
          return (
            <button
              className={`tab ${
                pack.libelle === contextPack!.libelle && "active"
              }`}
              key={index}
              onClick={() => setContextPack(pack)}
            >
              {pack.libelle.toLowerCase()}
            </button>
          );
        })}
      </div>
      <div className="card-body-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={contextPack!.libelle} // Key to ensure correct animation on change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <PricingCardContent selectePack={contextPack!} />
          </motion.div>
        </AnimatePresence>
        <div className="button-enchor">
          <button
            className="continue-button"
            onClick={handleClick}
            disabled={isLoading}
          >
            <div></div>
            <span>{!isLoading ? "Continuer" : "Chargement"}</span>
            {isLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <i className="bi bi-arrow-right"></i>
            )}
          </button>
          <a href="#offer_table" className="compare-offers">
            Comparer les offres
          </a>
        </div>
        <div className="contact">
          <button>Contactez-nous</button>
          <p>Graphikaz propose des consultations payantes</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

import { miniatureTab } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";

interface CheckoutCreditCardFormProps {
  montant: number;
  method: string;
}

const CheckoutCreditCardForm: React.FC<CheckoutCreditCardFormProps> = ({
  method,
  montant,
}) => {
  // États pour stocker les informations du formulaire
  const [cardNumber, setCardNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [titulaire, setTitulaire] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  ///
  const setCardNumberFormatted = (inputValue: string) => {
    const sanitizedValue = inputValue.replace(/[^0-9]/g, ""); // Supprime tous les caractères non numériques

    // Formate la valeur avec un espace après chaque groupe de 4 chiffres
    const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ").trim(); // Supprime les espaces à la fin

    setCardNumber(formattedValue);
  };

  const setCVCFormatted = (inputValue: string) => {
    // Limite le nombre de caractères à 3
    const formattedValue = inputValue.slice(0, 3);

    setCVC(formattedValue);
  };

  //////
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, ""); // Supprime tous les caractères non numériques

    // Vérifie la longueur de la chaîne
    if (sanitizedValue.length <= 4) {
      // Ajoute automatiquement le "/" après les deux premiers caractères
      setExpiryDate(
        sanitizedValue
          .substring(0, 2)
          .concat(sanitizedValue.length >= 3 ? "/" : "")
          .concat(sanitizedValue.substring(2, 4))
      );
    }
  };
  return (
    <form className="credit-card-form">
      {method === "Carte de Crédit" ? (
        <div className="danger w-full py-2 px-2 text-cente">
          Carte de Crédit est indisponible actuelment
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="card-informations">
        <label htmlFor="">Informatiions de la carte</label>
        <div className="card-infos-container">
          <div className="card-number-container flex items-center">
            <input
              type="text"
              id="cardNumber"
              className="card-number-input"
              value={cardNumber}
              onChange={(e) => setCardNumberFormatted(e.target.value)}
              placeholder="1234 5678 9012 3456"
              required
            />
            <div className="img-list flex">
              {miniatureTab.map((miniature, index) => (
                <div className="h-[100%]">
                  <Image src={miniature} alt="" className="img" />
                </div>
              ))}
            </div>
          </div>
          <div className="expire-date-and-cvc flex">
            <div className="expire-date">
              <input
                className=" input1"
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="cvc">
              <input
                className="input2"
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCVCFormatted(e.target.value)}
                placeholder="CVC"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="titulaire">Nom du titulaire de la carte</label>
        <input
          type="text"
          id="titulaire"
          value={titulaire}
          onChange={(e) => setTitulaire(e.target.value)}
          placeholder="Titulaire"
          required
        />
      </div>
      {/* choice part of paiement */}
      <div className="flex flex-col">
        <label htmlFor="">Methodes de paiement</label>
        <div className="flex gap-4 methods-radios ">
          <div className=" flex gap-1 relative">
            <input
              type="radio"
              name="radio-5"
              className="radio-success my-radio"
              value="Cash"
              checked={paymentMethod === "Cash"}
              onChange={() => setPaymentMethod("Cash")}
            />
            <span>Cash</span>
            <div className="info">
              <div
                className="tooltip"
                data-tip={` Payer la totalité de la commande soit ${montant} FCFA`}
              >
                <i className="ri-question-mark"></i>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" flex gap-1 relative">
            <input
              type="radio"
              name="radio-5"
              className="radio-success my-radio"
              value="Cash"
              checked={paymentMethod === "CinquantPourcent"}
              onChange={() => setPaymentMethod("CinquantPourcent")}
            />
            <span>50%</span>
            <div className="info">
              <div
                className="tooltip"
                data-tip={` Payer 50% de la commande soit ${
                  montant / 2
                } FCFA et payer le
                reste a la livraison`}
              >
                <i className="ri-question-mark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {method === "Carte de Crédit" ? (
        <button className="pay-btn-desable" type="button">
          Passer la commanded
        </button>
      ) : (
        <button className="pay-btn" type="submit">
          Passer la commande
        </button>
      )}
    </form>
  );
};

export default CheckoutCreditCardForm;

// CreditCardForm.tsx

import { miniatureTab } from "@/constants";
import { useState } from "react";
import Image from "next/image";

// Interface pour définir les propriétés attendues par le composant
interface CreditCardFormProps {
  montant: number;
}

const CreditCardForm: React.FC<CreditCardFormProps> = (montant) => {
  // États pour stocker les informations du formulaire
  const [cardNumber, setCardNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [titulaire, setTitulaire] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ajoutez ici la logique de traitement du paiement
    console.log("Email address:", emailAddress);
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVC:", cvc);
    console.log("Titulaire:", titulaire);
    console.log("Payment Method:", paymentMethod);

    // Réinitialisez les champs du formulaire après la soumission
    setEmailAddress("");
    setCardNumber("");
    setExpiryDate("");
    setCVC("");
    setTitulaire("");
    setPaymentMethod("Cash");
  };

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

  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
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
              <i className="ri-question-mark"></i>
              <div className="info-description">
                Payer la totalité de la commande soit {montant.montant} FCFA
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
              <i className="ri-question-mark"></i>
              <div className="info-description">
                Payer 50% de la commande soit {montant.montant / 2} FCFA et
                payer le reste a la livraison
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="pay-btn" type="submit">
        Passer la commande
      </button>
    </form>
  );
};

export default CreditCardForm;

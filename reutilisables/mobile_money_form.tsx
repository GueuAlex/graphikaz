import React, { useState } from "react";

const MobileMoneyForm = ({ method }: { method: string }) => {
  // États pour stocker les informations du formulaire
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvc, setCVC] = useState<string>("");

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ajoutez ici la logique de traitement du paiement
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVC:", cvc);

    // Réinitialisez les champs du formulaire après la soumission
    setCardNumber("");
    setExpiryDate("");
    setCVC("");
  };
  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      {/* <div className="card-informations">
        <label htmlFor="">Informatiions de la carte</label>
        <div className="card-infos-container">
          <div className="card-number-container flex items-center">
            <input
              type="text"
              id="cardNumber"
              className="card-number-input"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
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
                onChange={(e) => setCVC(e.target.value)}
                placeholder="CVC"
                required
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col">
        <label htmlFor="titulaire">Votre numéro {method} </label>
        <input
          type="text"
          id="titulaire"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Numéro"
          required
        />
      </div>
      <button className="pay-btn" type="submit">
        Passer la commande
      </button>
    </form>
  );
};

export default MobileMoneyForm;

import React, { useState } from "react";

const MobileMoneyForm = ({
  method,
  montant,
}: {
  method: string;
  montant: number;
}) => {
  // États pour stocker les informations du formulaire
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  const [paymentToken, setPaymentToken] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ajoutez ici la logique de traitement du paiement
    console.log("Card Number:", phoneNumber);
    console.log("Email adress:", emailAddress);
    console.log("paiement method:", paymentMethod);

    try {
      const response = await fetch("/api/check_out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: paymentMethod === "Cash" ? montant : montant / 2,
          customer_phone_number: "+225" + phoneNumber,
          lock_phone_number: true,
        }),
      });

      const responseData = await response.json();

      // Traitez la réponse du serveur ici
      console.log(responseData);
      ////////////////
      if (
        response &&
        (responseData.code === "201" || responseData.code === "200")
      ) {
        // Mettez à jour les états avec les informations de paiement
        setPaymentToken(responseData.data.payment_token);
        setPaymentUrl(responseData.data.payment_url);

        // Redirigez l'utilisateur vers l'URL de paiement
        window.location.href = responseData.data.payment_url;
      } else {
        // Gérez les erreurs ou affichez un message à l'utilisateur
        console.error("Erreur lors de la création de la transaction");
      }

      ////////////:
    } catch (error) {
      console.error("Error submitting payment form:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
      {method === "Wave" ? (
        <div className="danger w-full py-2 px-2 text-cente">
          Wave est indisponible actuelment
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          placeholder="Email"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="titulaire">
          Votre numéro {method}
          {" (sans indicatif)"}
        </label>
        <input
          type="text"
          id="titulaire"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Numéro"
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
                Payer la totalité de la commande soit {montant} FCFA
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
                Payer 50% de la commande soit {montant / 2} FCFA et payer le
                reste a la livraison
              </div>
            </div>
          </div>
        </div>
      </div>
      {method === "Wave" ? (
        <button className="pay-btn-desable" type="button">
          Passer la commande
        </button>
      ) : (
        <button className="pay-btn" type="submit">
          Passer la commande
        </button>
      )}
    </form>
  );
};

export default MobileMoneyForm;

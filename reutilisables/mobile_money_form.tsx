import React, { useContext, useEffect, useState } from "react";
import AlertDialog from "./alert";
import {
  CheckoutType,
  deliZoneProps,
  ExecutionDeadlineProps,
  ExpressExecutionDeadlineProps,
  GraphicServOptionalItemProps,
  GraphicServProps,
} from "@/types";
//import { services } from "@/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { MyAppContext } from "./app_context";
import { GraphicServPackType } from "@prisma/client";

interface MobileMoneyFormProps {
  method: string;
  montant: number;
  /* order: DefaultOrderProps; */
  selectedPackType: GraphicServPackType;
  selectedDeliveryDelay: ExpressExecutionDeadlineProps | ExecutionDeadlineProps;
  selectedOptionnalITems: GraphicServOptionalItemProps[];
  services: GraphicServProps[];
}

const MobileMoneyForm: React.FC<MobileMoneyFormProps> = ({
  method,
  montant,
  /* order, */
  selectedPackType,
  selectedDeliveryDelay,
  selectedOptionnalITems,
  services,
}) => {
  // session
  const session = useSession();
  // États pour stocker les informations du formulaire
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<CheckoutType>(
    CheckoutType.CASH
  );
  //const [paymentToken, setPaymentToken] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [checkoutLoadin, setCheckoutLoadin] = useState(false);
  const { v4: uuidv4 } = require("uuid");
  //const [msg, setMsg] = useState("");

  const context = useContext(MyAppContext);

  if (!context) {
    throw new Error("ComponentY must be used within a MyProvider");
  } else {
    console.log("context ok in navbar component");
  }
  const { deliveryZones } = context;

  const [selecteddeliZone, setSelectedDeliZone] = useState<deliZoneProps>(
    deliveryZones[0]
  );

  //////:: delizone //////////
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedZone = deliveryZones.find((zone) => zone.id === selectedId);

    if (selectedZone) {
      setSelectedDeliZone(selectedZone);
    }
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    ///// prevent browser submission event
    e.preventDefault();

    /////// check if user is unauthenticated
    if (!session) {
      toast(
        "Veuillez vous connecter ou créer un compte. C'est simple et rapide"
      );
      //notify();
      return;
    }
    if (session.status === "unauthenticated") {
      toast(
        "Veuillez vous connecter ou créer un compte. C'est simple et rapide"
      );
      //notify();
      return;
    }

    // je vérifier l'existance de la zone de livraison
    if (!selecteddeliZone) {
      toast("Veuillez selectionner une zone de livaison");
      setCheckoutLoadin(false);
      return;
    }

    // sinon montrer le chagerment spirale et continuer le process
    setCheckoutLoadin(true);

    function calculAmont(mode: CheckoutType): number {
      if (mode === CheckoutType.CASH) {
        return (
          parseFloat(montant.toString()) +
          parseFloat(selecteddeliZone.montant.toString())
        );
      }

      return (
        parseFloat(montant.toString()) / 2 +
        parseFloat(selecteddeliZone.montant.toString())
      );
    }

    // preparer les données neccessaire a la creation d'une commande
    const postData = {
      packType: selectedPackType,
      deliveryDelay: selectedDeliveryDelay.numberOfDay,
      userId: session.data?.user.id,
      optionalItems: selectedOptionnalITems,
      services: services,
      delizeId: selecteddeliZone.id,
      email: emailAddress,
      phone: phoneNumber,
      totalAmount: calculAmont(paymentMethod),
      lockPhoneNumber: method === "Wave" ? false : true,
      channels: method === "Wave" ? "WALLET" : "MOBILE_MONEY",
      operator: method,
      paieMode: paymentMethod,
    };

    //créer une nouvelle commande
    try {
      // create new  order
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}g-orders`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const paymentUrl = data.paymentUrl;

        setCheckoutLoadin(false);

        if (paymentUrl) {
          window.location.href = paymentUrl;
        } else {
          toast(
            "Erreur lors de l'initialisation du paiement. Veuillez réessayer !"
          );
        }
      } else {
        setCheckoutLoadin(false);
        toast(
          "Erreur lors de la création de la commande. Veuillez réessayer !"
        );
      }

      ////////////:
    } catch (error) {
      //console.error("Error submitting payment form:", error);
      setCheckoutLoadin(false);
      toast("Une erreur s'est produite. Veuillez réessayer !");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="credit-card-form small-screen">
      <ToastContainer />
      <AlertDialog msg="Erreur lors de la création de la transaction. Vérifier vos informations et reéssayer" />
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
      <label htmlFor="delizone">Zone de livraison</label>
      <select
        name=""
        id="delizone"
        className="select select-div"
        value={selecteddeliZone?.id || ""}
        onChange={(e) => handleSelectChange(e)}
      >
        {deliveryZones.map((zone, index) => (
          <option value={zone.id} key={index}>
            {zone.commune.commune +
              " - " +
              zone.city.ville +
              " - " +
              zone.country.pays +
              " (+" +
              zone.montant +
              " F CFA)"}
          </option>
        ))}
      </select>

      {/* choice part of paiement */}
      <div className="flex flex-col">
        <label htmlFor="">Mode de paiement</label>
        <div className="flex gap-4 methods-radios ">
          <div className=" flex gap-1 relative">
            <input
              type="radio"
              name="radio-5"
              className="radio-success my-radio"
              value="Cash"
              checked={paymentMethod === CheckoutType.CASH}
              onChange={() => setPaymentMethod(CheckoutType.CASH)}
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
              checked={paymentMethod === CheckoutType.HALF}
              onChange={() => setPaymentMethod(CheckoutType.HALF)}
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
      {checkoutLoadin ? (
        <button className="pay-btn" type="button">
          Chargement ...
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

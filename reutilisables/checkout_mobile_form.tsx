import {
  CheckoutStatus,
  CheckoutType,
  ImpressOrderProps,
  OrderStatus,
} from "@/types";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { User } from "next-auth";

interface CheckoutMobileFormProps {
  method: string;
  order: ImpressOrderProps;
}

const CheckoutMobileForm: React.FC<CheckoutMobileFormProps> = ({
  method,
  order,
}) => {
  //// testing create with prisma

  // États pour stocker les informations du formulaire
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  //const [paymentToken, setPaymentToken] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [checkoutLoadin, setCheckoutLoadin] = useState(false);
  const { v4: uuidv4 } = require("uuid");

  // Étap end
  const session = useSession();

  function generateUuid() {
    const transactionId = uuidv4();
    return transactionId;
  }

  ////////////////////////////////////////////////////////////////

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

    ////////////generate transaction_id and numero_commande ///////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    const transaction_id = generateUuid();
    const order_ref = generateUuid();

    const orderDate = new Date();
    ////////////////////////////////////////////////////////////////////////////////

    ///////////// if default order then post default order data to server /////////
    //////////////////////////////////////////////////////////////////////////////

    setCheckoutLoadin(true); // show loading component
    //defaultOrder.numero_commande = order_ref; // set default order number
    //defaultOrder.reference_paiement = transaction_id; // set default order payout reference
    // console.log(defaultOrder);

    // postable data
    const user: User = session.data?.user!;
    const postData: ImpressOrderProps = {
      ...order,
      user_id: parseInt(user.id),
      order_number: order_ref,
      transaction_ref: transaction_id,
      ordering_at: orderDate,
      order_status: OrderStatus.PENDING,
      checkout_type:
        paymentMethod === "Cahs" ? CheckoutType.CASH : CheckoutType.HALF,
      checkout_status: CheckoutStatus.PENDING,
    };

    console.log("<=========== postable order ============>");
    console.log(postData);

    try {
      const doResponse = await fetch(
        // create new default order
        "/api/impress_order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );
      /* console.log(doResponse.status);
  
          const dorData = await doResponse.json();
          console.log(dorData);
          console.log("code" + dorData.status); */
      if (
        // if order created successfully
        doResponse &&
        (doResponse.status === 201 || doResponse.status === 200)
      ) {
        // then create new transaction
        console.log("orders created successfully");
        console.log("lets creat transaction");
        /*   toast("commande created successfully");
        setCheckoutLoadin(false); */
        try {
          // start transaction creation
          const dotResponse = await fetch("/api/check_out", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount:
                paymentMethod === "Cash" ? order.amount : order.amount / 2,
              customer_phone_number: "+225" + phoneNumber,
              lock_phone_number: method === "Wave" ? false : true,
              channels: method === "Wave" ? "WALLET" : "MOBILE_MONEY",
              transaction_id: transaction_id,
              notify_url:
                "https://graphikaz-sqv5.vercel.app/api/impress_notify/" +
                order_ref,
            }),
          });

          const dotrData = await dotResponse.json();

          if (
            // if transaction created successfully
            dotResponse.ok
          ) {
            // Mettez à jour les états avec les informations de paiement
            //setPaymentToken(responseData.data.payment_token);
            setPaymentUrl(dotrData.data.payment_url);

            // Redirigez l'utilisateur vers l'URL de paiement
            setCheckoutLoadin(false);
            // redirect user to payment interface
            //redirect(dotrData.data.payment_url, RedirectType.push);
            //window.open(dotrData.data.payment_url, "_blank");
            window.open(
              dotrData.data.payment_url,
              "_blank",
              "noopener, noreferrer"
            );

            ////////////////////////////////////////
          } else {
            // Gérez les erreurs ou affichez un message à l'utilisateur
            //console.error("Erreur lors de création de la transaction");
            setCheckoutLoadin(false);
            toast("Erreur lors de création de la transaction");
            return;
          }

          ////////////:
        } catch (error: any) {
          // catch transaction creation error
          //console.error("Error submitting payment form:", error);
          setCheckoutLoadin(false);
          // window.my_modal_4.showModal();
          toast("Error submitting payment form" + error.message);
        }
        ////////
      } else {
        // Gérez les erreurs ou affichez un message à l'utilisateur
        //console.error("Erreur lors de création de la commande ");
        setCheckoutLoadin(false);
        toast("Erreur lors de création de la commande. Veuillez réessayer !");
        return;
      }

      ////////////:
    } catch (error) {
      //console.error("Error submitting payment form:", error);
      setCheckoutLoadin(false);
      toast("Une erreur s'est produite. Veuillez réessayer !");
    }
  };
  ////////////////////////////////////////////////////////////////
  return (
    <form className="credit-card-form small-screen" onSubmit={handleSubmit}>
      <ToastContainer />

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
              <div
                className="tooltip"
                data-tip={` Payer la totalité de la commande soit ${order.amount} FCFA`}
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
              checked={paymentMethod === "Partielle"}
              onChange={() => setPaymentMethod("Partielle")}
            />
            <span>50%</span>
            <div className="info">
              <div
                className="tooltip"
                data-tip={` Payer 50% de la commande soit ${
                  order.amount / 2
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

export default CheckoutMobileForm;

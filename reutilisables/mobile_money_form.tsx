import React, { useEffect, useState } from "react";
import AlertDialog from "./alert";
import {
  CustomeOrderProps,
  DefaultOrderProps,
  OptionsProps,
  deliZoneProps,
  packProps,
} from "@/types";
//import { services } from "@/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDeliZone } from "@/types/api_services";
import { useSession } from "next-auth/react";

const MobileMoneyForm = ({
  method,
  montant,
  defaultOrder,
  customeOrder,
}: {
  method: string;
  montant: number;
  defaultOrder: DefaultOrderProps | undefined;
  customeOrder: CustomeOrderProps | undefined;
}) => {
  // session
  const session = useSession();
  // États pour stocker les informations du formulaire
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  //const [paymentToken, setPaymentToken] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string>("");
  const [checkoutLoadin, setCheckoutLoadin] = useState(false);
  const { v4: uuidv4 } = require("uuid");
  //const [msg, setMsg] = useState("");
  const [deliZone, setDeliZone] = useState<deliZoneProps[]>([]);
  const [selecteddeliZone, setSelectedDeliZone] = useState<deliZoneProps>();

  //////:: delizone //////////
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedZone = deliZone.find((zone) => zone.id === selectedId);

    if (selectedZone) {
      setSelectedDeliZone(selectedZone);
    }
  };
  async function getDelizone() {
    try {
      const data = await getDeliZone();
      return data;
      //console.log(data.at(0)?.libelle);
      // Faites quelque chose avec les données ici
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
  useEffect(() => {
    getDelizone()
      .then((data) => {
        const deliZones: deliZoneProps[] = data!;
        setDeliZone(deliZones);
        setSelectedDeliZone(deliZones[0]);
        // Maintenant, vous pouvez utiliser les données ici
        //console.log(packData);
        // setIsloadin(false);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error("Une erreur s'est produite :", error);
        //setIsloadin(false);
      });
  }, []);
  //////: generate translation unique id
  function generateUuid() {
    const transactionId = uuidv4();
    return transactionId;
  }
  //const notify = () => toast(msg);
  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("<=========== custome order =========>");
    console.log(customeOrder),
      ///////
      console.log("<=========== default order =========>");
    console.log("default order" + defaultOrder);

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
    console.log("<=========== loged user id =========>");
    console.log(session.data?.user.id);

    //// checking checkout amount
    /*  if (montant < 100) {
      toast("minimum amount is 100 XOF");
      //notify();
      return;
    }
    if (montant / 2 < 100) {
      toast("minimum amount is 100 XOF");
      //notify();
      return;
    } */

    ////////////generate transaction_id and numero_commande ///////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    const transaction_id = generateUuid();
    const order_ref = generateUuid();
    ////////////////////////////////////////////////////////////////////////////////

    ///////////// if default order then post default order data to server /////////
    //////////////////////////////////////////////////////////////////////////////
    if (defaultOrder) {
      setCheckoutLoadin(true); // show loading component
      defaultOrder.numero_commande = order_ref; // set default order number
      defaultOrder.reference_paiement = transaction_id; // set default order payout reference
      // console.log(defaultOrder);

      // postable data
      const postData = {
        numero_commande: defaultOrder.numero_commande,
        reference_paiement: defaultOrder.reference_paiement,
        status_paiement: defaultOrder.status_paiement,
        method_paiement: paymentMethod,
        zone_livraison_id: selecteddeliZone?.id,
        user_id: session.data?.user.id,
        service_id: defaultOrder.service_id,
        pack_service_id: defaultOrder.pack_service_id,
        status: defaultOrder.status,
      };

      console.log("<=========== postable order ============>");
      console.log(postData);

      try {
        const doResponse = await fetch(
          // create new default order
          "https://graphikaz.digifaz.com/api/commandes",
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
          try {
            // start transaction creation
            const dotResponse = await fetch("/api/check_out", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                amount: paymentMethod === "Cash" ? montant : montant / 2,
                customer_phone_number: "+225" + phoneNumber,
                lock_phone_number: method === "Wave" ? false : true,
                channels: method === "Wave" ? "WALLET" : "MOBILE_MONEY",
                transaction_id: defaultOrder.reference_paiement,
                notify_url:
                  "https://graphikaz-sqv5.vercel.app/api/notify/" +
                  defaultOrder.numero_commande,
              }),
            });

            const dotrData = await dotResponse.json();

            if (
              // if transaction created successfully
              dotResponse &&
              (dotrData.code === "201" || dotrData.code === "200")
            ) {
              // Mettez à jour les états avec les informations de paiement
              //setPaymentToken(responseData.data.payment_token);
              setPaymentUrl(dotrData.data.payment_url);

              // Redirigez l'utilisateur vers l'URL de paiement
              setCheckoutLoadin(false);
              // redirect user to payment interface
              window.location.href = dotrData.data.payment_url;
            } else {
              // Gérez les erreurs ou affichez un message à l'utilisateur
              //console.error("Erreur lors de création de la transaction");
              setCheckoutLoadin(false);
              toast("Erreur lors de création de la transaction");
              return;
            }

            ////////////:
          } catch (error) {
            // catch transaction creation error
            //console.error("Error submitting payment form:", error);
            setCheckoutLoadin(false);
            // window.my_modal_4.showModal();
            toast("Error submitting payment form");
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
    }

    ///////////// if custome order then post default order data to server /////////
    //////////////////////////////////////////////////////////////////////////////
    if (customeOrder) {
      setCheckoutLoadin(true); // show loading component
      customeOrder.numero_commande = order_ref;
      customeOrder.reference_paiement = transaction_id;

      // postable data
      const postData = {
        numero_commande: customeOrder.numero_commande,
        reference_paiement: customeOrder.reference_paiement,
        status_paiement: customeOrder.status_paiement,
        method_paiement: paymentMethod,
        zone_livraison_id: selecteddeliZone?.id,
        user_id: session.data?.user.id,
        service_id: customeOrder.service_id,
        status: customeOrder.status,
        packs: customeOrder.packs.map((pack: packProps) => ({
          pack_service_id: pack.id,
        })),
        lignes_service: customeOrder.options.map((option: OptionsProps) => ({
          ligne_service_id: option.id,
        })),
      };

      console.log(JSON.stringify(postData));

      try {
        // create new custome order
        const coResponse = await fetch(
          "https://graphikaz.digifaz.com/api/commande_persos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );

        //const corData = await coResponse.json();

        if (
          // if custome order created successfully
          coResponse &&
          (coResponse.status === 201 || coResponse.status === 200)
        ) {
          // then create a new transaction
          try {
            const cotResponse = await fetch("/api/check_out", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                amount: paymentMethod === "Cash" ? montant : montant / 2,
                customer_phone_number: "+225" + phoneNumber,
                lock_phone_number: method === "Wave" ? false : true,
                channels: method === "Wave" ? "WALLET" : "MOBILE_MONEY",
                transaction_id: customeOrder.reference_paiement,
                notify_url:
                  "https://graphikaz-sqv5.vercel.app/api/notify/" +
                  customeOrder.numero_commande,
              }),
            });

            const cotrData = await cotResponse.json();

            if (
              cotResponse &&
              (cotrData.code === "201" || cotrData.code === "200")
            ) {
              // Mettez à jour les états avec les informations de paiement
              //setPaymentToken(responseData.data.payment_token);
              setPaymentUrl(cotrData.data.payment_url);

              // Redirigez l'utilisateur vers l'URL de paiement
              setCheckoutLoadin(false);
              window.location.href = cotrData.data.payment_url;
            } else {
              // Gérez les erreurs ou affichez un message à l'utilisateur
              //console.error("Erreur lors de la création de la transaction");
              setCheckoutLoadin(false);
              toast("Erreur lors de la création de la transaction");
            }

            ////////////:
          } catch (error) {
            //console.error("Error submitting payment form:", error);
            setCheckoutLoadin(false);
            //window.my_modal_4.showModal();
            toast("Some things went wrong");
          }
          ////////////////////////////////////////////////////////////////
        } else {
          // catch error
          // catch transaction creation errors
          // Gérez les erreurs ou affichez un message à l'utilisateur
          //console.error("Erreur lors de création de la comnande personalisée");
          setCheckoutLoadin(false);
          //window.my_modal_4.showModal();
          toast("Erreur lors de création de la comnande personalisée");
        }

        ////////////:
      } catch (error) {
        // catch custom order creation error
        //console.error("Error submitting payment form:", error);
        setCheckoutLoadin(false);
        //window.my_modal_4.showModal();
        toast("Some things went wrong");
      }
    }
    /* setCheckoutLoadin(true);

   

    try {
      const response = await fetch("/api/check_out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: paymentMethod === "Cash" ? montant : montant / 2,
          customer_phone_number: "+225" + phoneNumber,
          lock_phone_number: method === "Wave" ? false : true,
          channels: method === "Wave" ? "WALLET" : "MOBILE_MONEY",
        }),
      });

      const responseData = await response.json();

      if (
        response &&
        (responseData.code === "201" || responseData.code === "200")
      ) {
        // Mettez à jour les états avec les informations de paiement
        setPaymentToken(responseData.data.payment_token);
        setPaymentUrl(responseData.data.payment_url);

        // Redirigez l'utilisateur vers l'URL de paiement
        setCheckoutLoadin(false);
        window.location.href = responseData.data.payment_url;
      } else {
        // Gérez les erreurs ou affichez un message à l'utilisateur
        console.error("Erreur lors de la création de la transaction");
        setCheckoutLoadin(false);
        window.my_modal_4.showModal();
      }

      ////////////:
    } catch (error) {
      //console.error("Error submitting payment form:", error);
      setCheckoutLoadin(false);
      window.my_modal_4.showModal();
    } */
  };
  return (
    <form onSubmit={handleSubmit} className="credit-card-form">
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
        {deliZone.map((zone, index) => (
          <option value={zone.id} key={index}>
            {zone.commune.commune +
              " - " +
              zone.city.ville +
              " - " +
              zone.country.pays}
          </option>
        ))}
      </select>

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
              checked={paymentMethod === "Partielle"}
              onChange={() => setPaymentMethod("Partielle")}
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

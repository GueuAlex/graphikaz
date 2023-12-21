// pages/api/notify/[order_id].ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { order_id } = req.query;
      console.log("order_id: " + order_id);
      const { tcpm_trans_id, cpm_site_id /* autres champs */ } = req.body;
      //const tcpm_trans_id = req.body.tcpm_trans_id;
      console.log("transaction_id: " + tcpm_trans_id);
      console.log("site_id: " + cpm_site_id);

      // Effectuez le POST vers cinetpay.com/api/verify
      const postableDataToVerify = {
        apikey: process.env.API_KEY,
        site_id: process.env.SITE_ID,
        transaction_id: tcpm_trans_id,
      };
      console.log(JSON.stringify(postableDataToVerify));
      const verifyResponse = await fetch(
        "https://api-checkout.cinetpay.com/v2/payment/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postableDataToVerify),
        }
      );

      const verifyData = await verifyResponse.json();
      console.log(verifyData);

      // Vérifiez si le statut est "ACCEPTED"
      if (verifyData?.data?.status === "ACCEPTED") {
        // Effectuez le PUT vers mon_autre_domaine.com/api/orders/{order_id}
        const putableData = {
          numero_commande: order_id,
          status_paiement: "VALIDER",
        };
        console.log(JSON.stringify(putableData));
        const putResponse = await fetch(
          "https://graphikaz.digifaz.com/api/commandes/update_statut",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            // Ajoutez les données nécessaires pour la mise à jour ici
            body: JSON.stringify(putableData),
          }
        );

        const putData = await putResponse.json();

        // Vérifiez la réponse du PUT et renvoyez une réponse appropriée
        if (
          putResponse.status === 200 ||
          putResponse.status === 201 ||
          putResponse.ok
        ) {
          res
            .status(200)
            .json({ success: true, message: "Opérations réussies." });
        } else {
          res.status(500).json({
            success: false,
            message: "Échec de la mise à jour de la commande.",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: 'Le statut de la transaction n\'est pas "ACCEPTED".',
        });
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la gestion de la notification :",
        error
      );
      res.status(500).json({
        success: false,
        message:
          "Une erreur s'est produite lors de la gestion de la notification.",
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message:
        "Méthode non autorisée. Seules les requêtes POST sont acceptées.",
    });
  }
}

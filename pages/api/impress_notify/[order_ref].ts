// pages/api/notify/[order_id].ts
import { NextApiRequest, NextApiResponse } from "next";
import myprisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { order_ref } = req.query;
      console.log("order_id: " + order_ref);
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
      if (verifyData?.code !== 404) {
        // Effectuez le update vers prisma
        /* 
        const updateOrder = await myprisma.impressOrder.update({
          where: { order_number: order_ref as string }, // Spécifiez l'identifiant de la ligne à mettre à jour
          data: {
            // Spécifiez les champs que vous souhaitez mettre à jour et leurs nouvelles valeurs
            checkout_status: verifyData?.data?.status,
            // Ajoutez d'autres champs et valeurs à mettre à jour si nécessaire
          },
        }); */
        res.status(201).json("ok");
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

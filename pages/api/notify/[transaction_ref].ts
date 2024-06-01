// pages/api/notify/[order_id].ts

import { sendGOrderEmail } from "@/functions/send_g_order_email";
import { CheckoutStatus, PrismaClient, Transaction } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { transaction_ref } = req.query;
      console.log("order_id: " + transaction_ref);
      /*  const { tcpm_trans_id } = req.body; */

      // Effectuez le POST vers cinetpay.com/api/verify
      const postableDataToVerify = {
        apikey: process.env.API_KEY,
        site_id: process.env.SITE_ID,
        transaction_id: transaction_ref,
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
        // envoyer un eamil au client pour l'informer que nous avons reçu sa commande et son paiment
        // envoyer un email a l'admin pour l'infromer de la nouvelle commande.
        sendGOrderEmail(transaction_ref as string)
          .then((data) => console.log("Order email sent successfully:", data))
          .catch((error) => console.error("Error:", error));

        // Effectuez le PUT vers mon_autre_domaine.com/api/orders/{order_id}
        const transaction = await updateTransactionStatus(
          transaction_ref as string,
          CheckoutStatus.ACCEPTED
        );

        // Vérifiez la réponse du PUT et renvoyez une réponse appropriée
        if (transaction) {
          res
            .status(200)
            .json({ success: true, message: "Opérations réussies." });
        } else {
          res.status(500).json({
            success: false,
            message: "Échec de la mise à jour de la commande.",
          });
        }
      } //
      //
      //
      //

      /////Vérifiez si le statut est "REFUSED"
      else if (verifyData?.data?.status === "REFUSED") {
        // Effectuez le PUT vers mon_autre_domaine.com/api/orders/{order_id}

        const transaction = await updateTransactionStatus(
          transaction_ref as string,
          CheckoutStatus.REFUSED
        );

        // Vérifiez la réponse du PUT et renvoyez une réponse appropriée
        if (transaction) {
          res
            .status(200)
            .json({ success: true, message: "Opérations réussies." });
        } else {
          res.status(500).json({
            success: false,
            message: "Échec de la mise à jour de la commande.",
          });
        }
      } //
      //
      //
      //
      //// Au cas ou le status est toujours PENDING
      /* else if (verifyData?.data?.status === "PENDING") {
        // Effectuez le PUT vers mon_autre_domaine.com/api/orders/{order_id}
        // utilisé timer pour fait un rappel
        const transaction = await updateTransactionStatus(
          transaction_ref as string,
          CheckoutStatus.PENDING
        );

        // Vérifiez la réponse du PUT et renvoyez une réponse appropriée
        if (transaction) {
          res
            .status(200)
            .json({ success: true, message: "Opérations réussies." });
        } else {
          res.status(500).json({
            success: false,
            message: "Échec de la mise à jour de la commande.",
          });
        }
      } */
      /////
      //////
      ///////
      else {
        await updateTransactionStatus(
          transaction_ref as string,
          CheckoutStatus.CANCELLED
        );
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

async function updateTransactionStatus(
  ref: string,
  newStatus: CheckoutStatus
): Promise<Transaction> {
  try {
    const updatedTransaction = await prisma.transaction.update({
      where: {
        transactionRef: ref,
      },
      data: {
        paiementStatus: newStatus,
      },
    });
    return updatedTransaction;
  } catch (error) {
    console.error("Error updating transaction status:", error);
    throw new Error("Unable to update transaction status");
  }
}

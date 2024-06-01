// Importez les modules nécessaires
import { NextApiRequest, NextApiResponse } from "next";

//////: generate translation unique id

// La fonction principale qui gère la requête
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Récupérez les données du formulaire depuis le corps de la requête
      const formData = req.body;

      // Ajoutez ici la logique pour envoyer les données au serveur du partenaire de paiement
      // Utilisez la bibliothèque axios ou fetch pour effectuer la requête

      // Exemple avec fetch
      //const id = generateTransactionId();
      console.log(formData);
      //console.log("transactionId: " + id);
      const partnerPaymentResponse = await fetch(
        "https://api-checkout.cinetpay.com/v2/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Ajoutez d'autres en-têtes requis par le partenaire
          },
          body: JSON.stringify({
            ...formData,
            // Ajoutez d'autres données requises par le partenaire
            apikey: process.env.API_KEY,
            site_id: process.env.SITE_ID,
            //transaction_id: id,
            currency: "XOF",
            description: "test",
            return_url: "https://graphikaz-sqv5.vercel.app/success",
            lang: "fr",
          }),
        }
      );

      // Vérifiez la réponse du partenaire
      const partnerPaymentData = await partnerPaymentResponse.json();

      ////// afficher la reponse de cinetpay
      console.log(partnerPaymentData);

      // Envoyez la réponse du partenaire en tant que réponse à la requête
      res.status(partnerPaymentResponse.status).json(partnerPaymentData);
    } catch (error) {
      console.error("Error handling payment request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Méthode non autorisée
    res.status(405).end();
  }
}

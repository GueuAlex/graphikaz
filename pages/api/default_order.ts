// Importez les modules nécessaires
import { NextApiRequest, NextApiResponse } from "next";

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

      console.log(formData);

      const apiRequest = await fetch(
        "https://graphikaz.digifaz.com/api/default_order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Ajoutez d'autres en-têtes requis par le partenaire
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );
      console.log(apiRequest.status);

      // Vérifiez la réponse du partenaire
      //const apiData = await apiRequest.json();

      // Envoyez la réponse du partenaire en tant que réponse à la requête
      res.status(apiRequest.status);
    } catch (error) {
      console.error("Error handling create order request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Méthode non autorisée
    res.status(405).end();
  }
}

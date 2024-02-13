// Import des modules nécessaires
import { NextApiRequest, NextApiResponse } from "next";
import myprisma from "@/lib/prisma";

// Fonction de gestion de la requête
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Vérifie la méthode de la requête
    if (req.method !== "POST") {
      // Méthode non autorisée
      return res.status(405).end();
    }

    // Récupère les données du formulaire depuis le corps de la requête
    const formData = req.body;

    // Enregistre les données dans la base de données
    const createdOrder = await myprisma.impressOrder.create({ data: formData });
    console.log("commander sauvegardée");

    // Répond avec les données nouvellement créées
    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(
      "Erreur lors de la gestion de la requête de création de commande:",
      error
    );
    // Répond avec une erreur interne du serveur
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}

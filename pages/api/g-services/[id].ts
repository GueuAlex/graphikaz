import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const service = await prisma.graphicServ.findUnique({
        where: { id: Number(id) },
      });
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      return res.status(200).json(service);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "PUT") {
    try {
      // Traiter la mise à jour du service ici
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "DELETE") {
    try {
      // Traiter la suppression du service ici
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default authorize(handler);

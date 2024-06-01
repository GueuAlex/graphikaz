import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const order = await prisma.graphicServOrder.findUnique({
        where: { id: Number(id) },
      });
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: "Commande non trouvée" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la commande" });
    }
  } else if (req.method === "PUT") {
    try {
      const { orderStatus } = req.body;
      const updatedOrder = await prisma.graphicServOrder.update({
        where: { id: Number(id) },
        data: { orderStatus },
      });
      res.status(200).json(updatedOrder);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erreur lors de la mise à jour de la commande" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default authorize(handler);

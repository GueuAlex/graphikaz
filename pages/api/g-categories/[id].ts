// pages/api/graphic-serv-categories/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const category = await prisma.graphicServCategory.findUnique({
        where: { id: Number(id) },
      });
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "PUT") {
    try {
      const { libelle, type, icon, cover } = req.body;
      const updatedCategory = await prisma.graphicServCategory.update({
        where: { id: Number(id) },
        data: { libelle, type, icon, cover },
      });
      return res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default authorize(handler);

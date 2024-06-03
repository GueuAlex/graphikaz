// pages/api/graphic-serv-categories.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const categories = await prisma.graphicServCategory.findMany({
        include: {
          services: {
            select: {
              id: true,
            },
          },
        },
      });

      // Map the retrieved categories to include service_count
      const categoriesWithServiceCount = categories.map((category) => ({
        ...category,
        service_count: category.services.length,
      }));

      res.setHeader(
        "Cache-Control",
        "s-maxage=3600, stale-while-revalidate=59"
      ); // Cache for 1 hour
      return res.status(200).json(categoriesWithServiceCount);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" + error });
    }
  } else if (req.method === "POST") {
    try {
      const { libelle, type, icon, cover } = req.body;
      const newCategory = await prisma.graphicServCategory.create({
        data: { libelle, type, icon, cover },
      });
      return res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default authorize(handler);

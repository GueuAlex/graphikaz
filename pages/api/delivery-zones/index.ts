import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const deliZones = await prisma.deliZone.findMany({
          include: {
            country: true,
            city: true,
            commune: true,
          },
        });
        res.status(200).json(deliZones);
      } catch (error) {
        res.status(500).json({ error: "Error fetching delivery zones" });
      }
      break;
    case "POST":
      try {
        const { countryId, cityId, communeId, montant } = req.body;
        const newDeliZone = await prisma.deliZone.create({
          data: {
            countryId,
            cityId,
            communeId,
            montant,
          },
        });
        res.status(201).json(newDeliZone);
      } catch (error) {
        res.status(500).json({ error: "Error creating delivery zone" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default authorize(handler);

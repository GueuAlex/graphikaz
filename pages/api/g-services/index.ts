import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const services = await prisma.graphicServ.findMany({
        include: {
          packs: {
            include: {
              expressExecutionDeadlines: true,
              normalExecutionDeadline: true,
            },
          },
          items: {
            include: {
              values: { select: { id: true, value: true, valueType: true } },
            },
          },
          optionalItems: {
            include: {
              values: { select: { id: true, value: true, valueType: true } },
            },
          },
          faq: true,
        },
      });
      return res.status(200).json(services);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      // Traiter la création d'un nouveau service ici
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default authorize(handler);

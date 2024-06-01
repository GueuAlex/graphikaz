// utils/auth.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const AUTH_KEY = process.env.AUTH_KEY || "default_secret_key";

export const authorize =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || authHeader !== `Bearer ${AUTH_KEY}`) {
      return res.status(403).json({ error: "Unauthorized" });
    }
    return handler(req, res);
  };

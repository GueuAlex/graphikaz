import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";
var bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  const { name, email, type_user, password, agreement } = req.body;

  if (req.method === "POST") {
    if (!name || !email || !type_user || !password || !agreement) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }

      // Hash the password
      var salt = bcrypt.genSaltSync(10);

      const hashedPassword = bcrypt.hashSync(password, salt);
      console.log(hashedPassword);

      // Create the user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          typeUser: type_user,
          password: hashedPassword,
        },
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ message: "Bad request method" });
  }
};

export default authorize(handler);

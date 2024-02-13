import { PrismaClient } from "@prisma/client";

declare global {
  var myprisma: PrismaClient;
}
if (process.env.NODE_ENV === "production") {
  myprisma = new PrismaClient();
} else {
  if (!global.myprisma) {
    global.myprisma = new PrismaClient();
  }
  myprisma = global.myprisma;
}

export default myprisma;

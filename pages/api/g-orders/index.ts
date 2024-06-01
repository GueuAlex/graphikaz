import { NextApiRequest, NextApiResponse } from "next";
import { GraphicServ, PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";
import { generateRefString } from "@/functions/generate_ref";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const orders = await prisma.graphicServOrder.findMany({
        include: {
          user: true,
          transactions: true,
          optionalItems: true,
          services: true,
        },
      });
      res.setHeader(
        "Cache-Control",
        "s-maxage=3600, stale-while-revalidate=59"
      );
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    const ref = generateRefString();
    try {
      const {
        packType,
        deliveryDelay,
        userId,
        optionalItems,
        services,
        delizeId,
        totalAmount,
        email,
        phone,
        lockPhoneNumber,
        channels,
        paieMode,
        operator,
      } = req.body;

      const newOrder = await prisma.graphicServOrder.create({
        data: {
          orderRef: ref,
          packType,
          delizeId,
          deliveryDelay,
          orderStatus: "PENDING",
          userId,
          optionalItems: {
            create: optionalItems.map(
              (item: { libelle: any; price: any; values: any }) => ({
                libelle: item.libelle,
                price: item.price,
                value: item.values,
              })
            ),
          },
          services: {
            create: services.map((graphicServId: GraphicServ) => ({
              service: {
                connect: {
                  id: graphicServId.id,
                },
              },
            })),
          },
        },
      });
      // si newOrder est créer avec sucess
      // on crée une nouvelle transaction

      const transaction = await prisma.transaction.create({
        data: {
          amount: totalAmount /* spécifiez le montant de la transaction ici */,
          transactionRef: generateRefString(), // Générer une référence unique pour la transaction
          paiementType: paieMode, // Remplacez par le type de paiement réel
          paiementStatus: "PENDING", // Statut initial de la transaction
          orderId: newOrder.id,
          userId,
          paiementEmail: email,
          paiementPhoneNumber: phone,
          operator,
        },
      });
      // si la nouvelle transaction est create avec success
      // on initilse une nouveau paiement via l'api de notre partenaire de paiement mobile (cela fera par post dans un fichier separer sur la route  "/api/check-out")
      const paymentUrl = await initiatePayment({
        amount: totalAmount,
        phone: phone,
        channels: channels,
        lock_phone_number: lockPhoneNumber,
        transaction_ref: transaction.transactionRef,
      });
      console.log(paymentUrl);
      // si l'initialisation est un success le partenaire renvoie des données dans lesquelles se trouve une url de paiement
      // on return cet url coté client et on redirige le client vers cet url pour faire son paiement

      res.status(201).json({ newOrder, paymentUrl });
      res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    const errDetails = res.statusMessage;
    console.log(errDetails);
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default authorize(handler);

async function initiatePayment({
  amount,
  phone,
  channels,
  lock_phone_number,
  transaction_ref,
}: {
  amount: number;
  phone: string;
  lock_phone_number: any;
  channels: string;
  transaction_ref: string;
}) {
  /*  console.log("\n");
  console.log(
    JSON.stringify({
      customer_phone_number: "+225" + phone,
      lock_phone_number,
      channels,
      transaction_id: transaction_ref,
      amount,
      notify_url: `http://localhost:3000/api/notify/${transaction_ref}`,
      
      apikey: process.env.API_KEY,
      site_id: process.env.SITE_ID,
     
      currency: "XOF",
      description: "test",
      return_url: "https://graphikaz-sqv5.vercel.app/success",
      lang: "fr",
    })
  ); */
  const response = await fetch("https://api-checkout.cinetpay.com/v2/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer_phone_number: "+225" + phone,
      lock_phone_number,
      channels,
      transaction_id: transaction_ref,
      amount,
      notify_url: `http://localhost:3000/api/notify/${transaction_ref}`,
      //
      apikey: process.env.API_KEY,
      site_id: process.env.SITE_ID,
      //transaction_id: id,
      currency: "XOF",
      description: "test",
      return_url: "https://graphikaz-sqv5.vercel.app/success",
      lang: "fr",
    }),
  });

  const data = await response.json();

  if (response.ok && data.code === "201") {
    return data.data.payment_url;
  } else {
    throw new Error(
      `\nPayment initialization failed: ${data.message} - ${data.description} - code: ${data.code}\n ${data}\n `
    );
  }
}

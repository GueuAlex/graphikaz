import type { NextApiRequest, NextApiResponse } from "next";
//import { NewGraphicServOrderEmail } from "@/emails/new_graphicserv_order_email";
/* import { Resend } from "resend"; */
import { render } from "@react-email/render";
const nodemailer = require("nodemailer");

import {
  CheckoutType,
  GraphicServItemProps,
  GraphicServOptionalItemProps,
  GraphicServPackType,
} from "@/types";
import { PrismaClient } from "@prisma/client";
import { authorize } from "@/utils/api_auth";
import { formatDate } from "@/functions/date_formater";
import NewGraphicServOrderEmail from "@/emails/new_graphicserv_order_email";
import GOrderInfo from "@/emails/admin/g-order-info";

/* const resend = new Resend(process.env.RESEND_API_KEY); */
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Récupérez les données necessaire a l'envoie de l'email depuis le corps de la requête
    const { transaction_ref } = req.body;
    // utilisé transaction_ref avec prisma pour return  transaction et toutes les autres données qui sont lié

    // Récupérer la transaction et les données associées
    const transaction = await prisma.transaction.findUnique({
      where: { transactionRef: transaction_ref },
      select: {
        amount: true,
        transactionRef: true,
        operator: true,
        paiementPhoneNumber: true,
        paiementEmail: true,
        paiementType: true,
        createdAt: true,
        order: {
          select: {
            orderRef: true,
            packType: true,
            deliveryDelay: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                typeUser: true,
              },
            },
            services: {
              select: {
                service: {
                  select: {
                    libelle: true,
                    covers: true,
                    items: {
                      select: {
                        libelle: true,
                        price: true,
                        type: true,
                        values: { select: { value: true, valueType: true } },
                      },
                    },
                  },
                },
              },
            },
            optionalItems: {
              select: {
                libelle: true,
                price: true,
                values: {
                  select: {
                    value: true,
                    valueType: true,
                  },
                },
              },
            },
            delizone: {
              select: {
                montant: true,
                city: {
                  select: {
                    ville: true,
                  },
                },
                commune: {
                  select: {
                    commune: true,
                  },
                },
                country: {
                  select: {
                    pays: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    //console.log(transaction);
    // Afficher les résultats en format JSON lisible
    console.log(JSON.stringify(transaction, null, 2));
    // decomposition du resultat

    if (transaction) {
      let totalAmount = 0;
      let resteApayer = 0;
      //RECCUPERER LES DONNEES NECESSAIRE A L'ENVOI DE L'EMAIL DE CONFIRMATION
      //les données  direct de la transaction
      const {
        amount,
        transactionRef,
        operator,
        paiementPhoneNumber,
        paiementEmail,
        paiementType,
        createdAt,
        order: {
          orderRef,
          packType,
          deliveryDelay,
          user,
          services: [
            {
              service: { libelle, covers, items },
            },
          ],
          optionalItems,
          delizone: { city, country, commune, montant },
        },
      } = transaction;

      if (paiementType === CheckoutType.CASH) {
        totalAmount = amount - montant;
      }
      if (paiementType === CheckoutType.HALF) {
        totalAmount = (amount - montant) * 2;
        resteApayer = totalAmount / 2;
      }

      let operator_img =
        "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/operator_img/operator-snuWMvuj0GxrQQIMcxiDX7x6GJ0cRp.jpg";
      if (operator.toUpperCase() === "ORANGE MONEY") {
        operator_img =
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/operator_img/om-trYLw5JFOo1wAHs8QKTgs1GXNFHN0L.png";
      }
      if (operator.toUpperCase() === "MTN MOBILE MONEY") {
        operator_img =
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/operator_img/MTN-vRFqSlh6T6SOa1FTo6u5pvI0smJKV1.webp";
      }
      if (operator.toUpperCase() === "MOOV AFRICA") {
        operator_img =
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/operator_img/moow-7aSwMqTIrG5znyGWLJZ5oXuFJg2kCJ.webp";
      }
      if (operator.toUpperCase() === "WAVE") {
        operator_img =
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/operator_img/wave-o4dKdfOjPtdTTVnxxo35VyNBSRZ3Gr.png";
      }

      // selection les services items correspondant au pack acheter
      let filteredItems: GraphicServItemProps[] = [];

      switch (packType) {
        case GraphicServPackType.BASIQUE:
          filteredItems = items
            .filter((item) => item.type === GraphicServPackType.BASIQUE)
            .map((item) => ({
              id: 0,
              libelle: item.libelle,
              price: item.price,
              type: item.type as GraphicServPackType,
              values: item.values.map((v) => ({
                id: 0,
                value: v.value,
                valueType: v.valueType as GraphicServPackType,
              })),
            }));
          break;
        case GraphicServPackType.STANDARD:
          filteredItems = items
            .filter((item) => item.type !== GraphicServPackType.PREMIUM)
            .map((item) => ({
              id: 0,
              libelle: item.libelle,
              price: item.price,
              type: item.type as GraphicServPackType,
              values: item.values.map((v) => ({
                id: 0,
                value: v.value,
                valueType: v.valueType as GraphicServPackType,
              })),
            }));
          break;
        case GraphicServPackType.PREMIUM:
          filteredItems = items.map((item) => ({
            id: 0,
            libelle: item.libelle,
            price: item.price,
            type: item.type as GraphicServPackType,
            values: item.values.map((v) => ({
              id: 0,
              value: v.value,
              valueType: v.valueType as GraphicServPackType,
            })),
          }));
          break;
        default:
          // Gérer le cas où aucun des types ne correspond
          break;
      }

      const itemsOptionnel: GraphicServOptionalItemProps[] = optionalItems.map(
        (item) => ({
          id: 0,
          libelle: item.libelle,
          price: item.price,
          values: item.values.map((v) => ({
            id: 0,
            value: v.value,
            valueType: v.valueType as GraphicServPackType,
          })),
        })
      );

      // envoi de l'email
      // trying nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const emailHtml = render(
        GOrderInfo({
          items: filteredItems,
          packType: packType as GraphicServPackType,
          serviceTitle: libelle,
          image: covers[0],
          orderNumber: orderRef,
          transactionRef: transactionRef,
          date: formatDate(createdAt),
          optionalItems: itemsOptionnel,
          deliveryZone: `${commune.commune}, ${city.ville}`,
          deliveryZonePrice: montant.toString(),
          pendingPay: resteApayer.toString(),
          pay: (amount - montant).toString(),
          total: totalAmount.toString(),
          phone: paiementPhoneNumber,
          paiementMethod: operator.toUpperCase(),
          paiementType: paiementType === CheckoutType.CASH ? "100%" : "50%",
          payMethodImage: operator_img,
          paiementEmail: user.email,
          paiementPhoneNumber: paiementPhoneNumber,
          userName: user.name,
          deliveryDelai: deliveryDelay.toString(),
        })
      );

      const options = {
        from: "GRAPHIKAZ <axe.y.2310@gmail.com>",
        to: "digifaz.ci@gmail.com",
        subject: "Accusé de reception",
        html: emailHtml,
      };

      const response = await transporter.sendMail(options);

      //console.log(JSON.stringify(response));
      res.status(200).json(response);
    }

    res.status(500).json("non implementer !");
  }
};

export default authorize(handler);

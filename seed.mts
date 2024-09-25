import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // User
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      typeUser: "Regular",
      password: "password123",
    },
  });

  // GraphicServCategory
  const category = await prisma.graphicServCategory.createMany({
    data: [
      {
        libelle: "Design & Creativ",
        type: "CREATION_GRAPHIQUE",
        icon: "bi bi-bezier",
        cover:
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/creative-graphic-design-agency-hire-pSTV9THhIFAhiO51U08RIWqfZUhlyD.jpg",
      },
      {
        libelle: "Development & IT",
        type: "CREATION_GRAPHIQUE",
        icon: "bi bi-code-slash",
        cover:
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/programmation-informatique-1536x1024-1-fiWvqGU6PWEBz24eGt1WKbiMEsCadz.jpeg",
      },
      {
        libelle: "Digital Marketing",
        type: "CREATION_GRAPHIQUE",
        icon: "bi bi-megaphone-fill",
        cover:
          "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/marketing-digital-Iz8htIxBSAfp1QQGnK14NSDxkvk5vv.webp",
      },
    ],
  });

  // GraphicServ
  const graphicServ = await prisma.graphicServ.create({
    data: {
      libelle: "Je concevrai votre logo créatif en 24 heures",
      categoryId: 1,
      fullDescription: `<div>✨🔥</div><p>Bonjour🙌🏼 🙌🏼, je m'appelle Vivek, un graphiste chevronn&eacute; avec plus de<span style="background: #ffecd1; text-decoration: underline;">&nbsp;</span><strong><span style="background: #ffecd1;">13 ans d'exp&eacute;rience.</span></strong>&nbsp;Avec une passion pour la cr&eacute;ativit&eacute; et un sens aigu du design, j'ai cr&eacute;&eacute; des visuels captivants qui laissent une impression durable.</p>
            <p>&nbsp;</p>
            <p>"Collaborons pour &eacute;lever votre marque et faire briller votre id&eacute;e"</p>
            <p>&nbsp;</p>
            <p><strong><span style="background: #ffecd1;">n'h&eacute;sitez pas &agrave; parcourir mon portfolio en direct pr&eacute;sentant les commentaires &eacute;logieux des clients.</span></strong></p>
            <p>&nbsp;</p>
            <p><strong>Veuillez s&eacute;lectionner le pack STANDARD ou PREMIUM pour obtenir les meilleurs r&eacute;sultats similaires &agrave; mon portfolio.</strong></p>
            <p>&nbsp;</p>
            <p><strong>Types de logos que je cr&eacute;e</strong></p>
            <p>&nbsp;</p>
            <p><strong><span style="background: #ffecd1;">Minime | Bas&eacute; sur du texte | Silhouettes | Mascotte | Personnage/Dessin anim&eacute; | Caricature| Conceptions personnalis&eacute;es | podcasts | Tik Tok | Vous tube | jeux | Tic</span></strong></p>
            <p>&nbsp;</p>
            <p><strong>Pourquoi moi?</strong></p>
            <p>&nbsp;</p>
            <ol style="list-style-type: none;">
            <li style="list-style-type: decimal;">prestataire Exp&eacute;riment&eacute;</li>
            <li style="list-style-type: decimal;">Concepteur polyvalent</li>
            <li style="list-style-type: decimal;">Communication rapide (&nbsp;<strong><span style="background: #ffecd1;">disponible 24h/24 et 7j/7</span></strong>&nbsp;)</li>
            <li style="list-style-type: decimal;">Fichiers imprimables/Fichiers vectoriels</li>
            <li style="list-style-type: decimal;">Des cr&eacute;ations originales et uniques</li>
            <li style="list-style-type: decimal;">Maquette 3D</li>
            <li style="list-style-type: decimal;">Kit de m&eacute;dias sociaux</li>
            <li style="list-style-type: decimal;">Transparence du logo</li>
            <li style="list-style-type: decimal;">Mod&egrave;les de papeterie</li>
            <li style="list-style-type: decimal;">Propri&eacute;t&eacute; compl&egrave;te de votre conception avec droits d'auteur</li>
            </ol>
            <p>&nbsp;</p>
            <p><strong><span style="background: #ffecd1;">Je propose des r&eacute;visions illimit&eacute;es jusqu'&agrave; ce qu'un client soit satisfait jusqu'&agrave; ce que la commande soit termin&eacute;e.</span></strong></p>
            <br/>
            <p><strong>NOTE :</strong></p>
            <p>&nbsp;</p>
            <ul style="list-style-type: none;">
            <li style="list-style-type: disc;">Les conceptions pr&eacute;sent&eacute;es dans mon &eacute;chantillon de service sont des packages Standard ou Premium, veuillez s&eacute;lectionner le package en fonction de vos besoins.</li>
            </ul>
            <p>&nbsp;</p>
            <ul style="list-style-type: none;">
            <li style="list-style-type: disc;">Vous devez finaliser 1 logo pour la livraison finale.</li>
            </ul>
            <p>&nbsp;</p>
            <ul style="list-style-type: none;">
            <li style="list-style-type: disc;">Le dimanche est jour de repos.</li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>Obtenez une CONSULTATION GRATUITE. Allez-y et laissez un message.</p> <br/> 
            <table style="border-collapse: collapse; width: 100.161%; height: 72.3438px;" border="1"><colgroup><col style="width: 22.7638%;"><col style="width: 77.2362%;"></colgroup>
            <tbody>
            <tr style="height: 36.1719px;">
            <td><span style="color: #7e8c8d;">Style de logo</span></td>
            <td><span style="color: #7e8c8d;">Format de fichier</span></td>
            </tr>
            <tr style="height: 36.1719px;">
            <td>Minimaliste</td>
            <td>AI, JPG, JPEG, PNG, PSD, PDF, ESP, SVG</td>
            </tr>
            </tbody>
            </table>`,
      covers: [
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%204_mbsv7v.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d/do-minimalist-logo-design.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/110928855/original/7ca6bdb0455fd2b541a96b9e7c566da52930168a/do-minimalist-logo-design.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/110928855/original/8b65c55172f99d57b28fe8030a9d6695f2f21a6f/do-minimalist-logo-design.jpg",
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%206_qvi1ab.jpg",
      ],
      createdAt: new Date(),
    },
  });

  // GraphicServItem
  const item = await prisma.graphicServItem.createMany({
    data: [
      {
        libelle: "Transparence de logo",
        price: 500,
        type: "BASIQUE",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Fichier vectoriel",
        price: 600,
        type: "STANDARD",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Fichier imprimable",
        price: 700,
        type: "BASIQUE",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Maquette 3D",
        price: 800,
        type: "STANDARD",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Conceptions de papeterie",
        price: 1500,
        type: "PREMIUM",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Kit réseaux sociaux",
        price: 1500,
        type: "STANDARD",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Nombre de concepts inclus",
        price: 2000,
        type: "BASIQUE",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Revision",
        price: 3000,
        type: "BASIQUE",
        graphicServId: graphicServ.id,
      },
    ],
  });

  // GraphicServOptionalItem
  const optionalItem = await prisma.graphicServOptionalItem.createMany({
    data: [
      {
        libelle: "Fichier source",
        price: 1000,
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Offre optionnel 1",
        price: 4000,
        graphicServId: graphicServ.id,
      },
      {
        libelle: "Offre optionnel 2",
        price: 3000,
        graphicServId: graphicServ.id,
      },
    ],
  });

  // GraphicServItemValue for graphic item
  const itemValueForGraphicItem = await prisma.graphicServItemValue.createMany({
    data: [
      {
        value: "2",
        valueType: "BASIQUE",
        graphicServItemId: 7,
      },
      {
        value: "4",
        valueType: "STANDARD",
        graphicServItemId: 7,
      },
      {
        value: "6",
        valueType: "PREMIUM",
        graphicServItemId: 7,
      },

      {
        value: "2",
        valueType: "BASIQUE",
        graphicServItemId: 8,
      },
      {
        value: "4",
        valueType: "STANDARD",
        graphicServItemId: 8,
      },
      {
        value: "Illimité",
        valueType: "PREMIUM",
        graphicServItemId: 8,
      },
    ],
  });

  // GraphicServPack

  const pack = await prisma.graphicServPack.createMany({
    data: [
      {
        libelle: "BASIQUE",
        subTitle: "PAQUET DE BASE",
        description:
          "Conceptions de logo minimales (logo de type texte avec conception minimale) au format de fichier jpeg et png",
        graphicServId: graphicServ.id,
      },
      {
        libelle: "STANDARD",
        subTitle: "FORFAIT STANDARD",
        description:
          "Conception de mascotte illustrative avec fichier source (AUCUN caractère) ai, png, jpeg, svg",

        graphicServId: graphicServ.id,
      },
      {
        libelle: "PREMIUM",
        subTitle: "FORFAIT CRÉATIF",
        description:
          "1 Caricature de personnage ou dessin animé (haute résolution, droits d'auteur complets ai, png, jpeg, svg)",

        graphicServId: graphicServ.id,
      },
    ],
  });

  // ExecutionDeadline
  const normalDeadline = await prisma.executionDeadline.createMany({
    data: [
      {
        numberOfDay: 3,
        price: 0,
        type: "BASIQUE",
        graphicServPackId: 1,
      },
      {
        numberOfDay: 4,
        price: 0,
        type: "STANDARD",
        graphicServPackId: 2,
      },
      {
        numberOfDay: 6,
        price: 0,
        type: "PREMIUM",
        graphicServPackId: 3,
      },
    ],
  });

  // ExpressExecutionDeadline (optional)
  const expressDeadline = await prisma.expressExecutionDeadline.createMany({
    data: [
      {
        graphicServPackId: 3,
        numberOfDay: 2,
        price: 20000,
        type: "PREMIUM",
      },

      {
        graphicServPackId: 3,
        numberOfDay: 3,
        price: 15000,
        type: "PREMIUM",
      },
      {
        graphicServPackId: 2,
        numberOfDay: 1,
        price: 10000,
        type: "STANDARD",
      },
      {
        graphicServPackId: 2,
        numberOfDay: 2,
        price: 7000,
        type: "BASIQUE",
      },
      {
        graphicServPackId: 1,
        numberOfDay: 1,
        price: 5000,
        type: "BASIQUE",
      },
      {
        graphicServPackId: 1,
        numberOfDay: 2,
        price: 2500,
        type: "BASIQUE",
      },
    ],
  });

  // FAQ
  const faq = await prisma.faq.createMany({
    data: [
      {
        graphicServId: graphicServ.id,
        question: "Comment pouvons-nous commencer?",
        answer:
          "C'est très facile! Après avoir commandé mon service , vous verrez quelques questions de base où je déterminerai vos besoins exacts et vous fournirai des conceptions basées sur celui-ci.",
      },
      {
        graphicServId: graphicServ.id,
        question:
          "Qu'est-ce que les fichiers sources et en quoi sont-ils utiles ?",
        answer:
          "Les fichiers source sont les fichiers originaux de la conception du logo grâce auxquels vous pouvez modifier/redimensionner le logo à n'importe quelle taille sans perte de qualité à l'aide du logiciel Adobe Illustrator. Ils sont disponibles aux formats Ai, EPS, PSD, PDF, PNG, SVG. Je recommanderais de sélectionner un forfait Standard/Premium pour cet avantage.",
      },
      {
        graphicServId: graphicServ.id,
        question: "Qu'est-ce qu'un kit de médias sociaux ?",
        answer:
          "Le kit de médias sociaux est des couvertures pour différentes plates-formes de médias sociaux comme Facebook, Twitter, YouTube et GooglePlus. Le logo que je conçois sera présenté sur ces couvertures et ils sont dans une taille et des dimensions adaptées aux plateformes de médias sociaux. Il est proposé en forfait Standard et Premium.",
      },
      {
        graphicServId: graphicServ.id,
        question: "Qu'est-ce que les conceptions stationnaires ?",
        answer:
          "Les conceptions de papeterie sont l'ensemble de la carte de visite et du papier à en-tête qui est conçu de manière symétrique au thème général et aux couleurs de la conception de votre logo. Il est livré dans des fichiers prêts à imprimer directs en RVB/CMJN selon vos besoins. Il est proposé uniquement dans le FORFAIT PREMIUM.",
      },
      {
        graphicServId: graphicServ.id,
        question:
          "Quel package dois-je choisir pour obtenir un logo exceptionnel ?",
        answer:
          "Pour obtenir un logo exceptionnel, je vous recommande de choisir le forfait standard/premium car il comprend un processus de conception unique qui offre le meilleur concept esthétique.",
      },
      {
        graphicServId: graphicServ.id,
        question: "Fournissez-vous d'autres services graphiques ?",
        answer:
          "C'est une excellente question ! Je fournis la conception d'étiquettes, la conception de guides de style de marque, la conception de publications Instagram et bien plus encore. N'hésitez pas à en savoir plus :)",
      },
    ],
  });

  console.log("Data has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

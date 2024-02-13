import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  Service6,
  Hc1,
  Hc2,
  Hc3,
  Hc4,
  Hc5,
  Hc6,
  Hc7,
  Hc8,
  F1,
  F2,
  F3,
  F4,
  F5,
  F6,
  F7,
  F8,
  F9,
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  OM,
  Cartes,
  Wave,
  Moov,
  MTN,
  Miniature1,
  Miniature3,
  Miniature2,
} from "@/public";
import {
  Flyers15x15,
  Flyers21x21,
  FlyersA3,
  FlyersA4,
  FlyersA5,
  FlyersA6,
  FlyersA7,
  FlyersDL,
  Folded10x21,
  Folded10x21_3,
  Folded10x29,
  Folded15x15,
  Folded21x21_3,
  FoldedA4,
  FoldedA4_3,
  FoldedA5,
  FoldedA5_3,
  FoldedA6,
  FoldedMap,
} from "@/public/flyers_img";
import {
  BlogProps,
  CahtDefaultOrderProps,
  CategoryProps,
  ChatMessageProps,
  ChatProps,
  DefaultOrderProps,
  FlyersProps,
  ImpressCategoryProps,
  ImpressMetadataNameProps,
  MetaDataProps,
  PayProps,
  PrestatorProps,
  ServiceProps,
  userMenuProps,
  userProps,
} from "@/types";
import { now } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import { StaticImageData } from "next/image";
import { title } from "process";

const date = new Date();

const services: ServiceProps[] = [
  {
    id: 1,
    title: "Embadded Android & AOSP customizations on app mobile",
    category: "Design & Creative",
    cover: Service1,
    reviewScore: 4.5,
    totalReview: 2,
    startPrice: 120,
    additionnalOptions: [
      {
        id: 1,
        libelle:
          "2000 Words (+3 days) I will professionally translate english to german",
        montant: 42,
        pourcentage_remuneration: 10,
      },
      {
        id: 2,
        libelle:
          "1000 Words (+3 days) I will professionally translate english to german",
        montant: 25,
        pourcentage_remuneration: 10,
      },
    ],
    prestatorId: 1,
    coverList: [Service1, Service2, Service3],
  },
  {
    id: 2,
    title: "PHP framework that you can use to create your own custom",
    category: "Design & Creative",
    cover: Service3,
    reviewScore: 3.8,
    totalReview: 8,
    startPrice: 199,
    additionnalOptions: [
      /* some additinnal options with price  */
    ],
    prestatorId: 3,
    coverList: [Service3, Service1, Service3],
  },
  {
    id: 3,
    title: "Developers drop the framework folder into a new parent",
    category: "Design & Creative",
    cover: Service2,
    reviewScore: 4.0,
    totalReview: 23,
    startPrice: 59,
    additionnalOptions: [
      {
        id: 1,
        libelle:
          "2000 Words (+3 days) I will professionally translate english to german",
        montant: 42,
        pourcentage_remuneration: 4,
      },
      {
        id: 2,
        libelle:
          "1000 Words (+3 days) I will professionally translate english to german",
        montant: 25,
        pourcentage_remuneration: 4,
      },
    ],
    prestatorId: 4,
    coverList: [Service4, Service2, Service1],
  },
  {
    id: 4,
    title: "Custom iOS and Android apps development for your project",
    category: "Design & Creative",
    cover: Service4,
    reviewScore: 4.8,
    totalReview: 13,
    startPrice: 159,
    additionnalOptions: [
      /* some additinnal options with price  */
    ],
    prestatorId: 2,
    coverList: [Service6, Service5, Service3],
  },
  {
    id: 5,
    title: "Power management, notification and geofencing for host serve",
    category: "Design & Creative",
    cover: Service5,
    reviewScore: 4.8,
    totalReview: 53,
    startPrice: 125,
    additionnalOptions: [
      {
        id: 1,
        libelle:
          "2000 Words (+3 days) I will professionally translate english to german",
        montant: 42,
        pourcentage_remuneration: 5,
      },
      {
        id: 2,
        libelle:
          "1000 Words (+3 days) I will professionally translate english to german",
        montant: 25,
        pourcentage_remuneration: 5,
      },
    ],
    prestatorId: 1,
    coverList: [Service5, Service1, Service3],
  },
  {
    id: 6,
    title: "I will often turn to a  PHP framework to compose My code",
    category: "Design & Creative",
    cover: Service6,
    reviewScore: 4.8,
    totalReview: 100,
    startPrice: 69,
    additionnalOptions: [
      /* some additinnal options with price  */
    ],
    prestatorId: 3,
    coverList: [Service3, Service2, Service4],
  },
];

const prestators: PrestatorProps[] = [
  {
    id: 1,
    fullName: "John Powell",
    profilPic: F1,
    profilLink: "/freelancers/" /* prestator/john_powell */,
    competence: ["Sass", "HTML5", "Design Writing", "Figma"],
    post: "Nursing Assistant",
  },
  {
    id: 2,
    fullName: "Robert Fox",
    profilPic: F2,
    profilLink: "/freelancers/" /* prestator/john_powell */,
    competence: ["PHP7 +", "Laravel", "NodeJs", "TypeScript"],
    post: "Product Manager",
  },
  {
    id: 3,
    fullName: "Ali Tufan",
    profilPic: F3,
    profilLink: "/freelancers/" /* prestator/john_powell */,
    competence: ["Animation", "Creative", "UI/UX", "Adob XD"],
    post: "UI/UX Designer",
  },
  {
    id: 4,
    fullName: "Tom Wilson",
    profilPic: F4,
    profilLink: "/freelancers/" /* prestator/john_powell */,
    competence: ["C++", "Unreal Engine", "Web design"],
    post: "Marketing Manager",
  },
  {
    id: 4,
    fullName: "Thomas Powell",
    profilPic: F5,
    profilLink: "/freelancers/" /* prestator/john_powell */,
    competence: ["APIs", "ExpressJs", "Cloud computing"],
    post: "Web developer",
  },
];

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "New Apartment Nice in the Best Canadian Cities",
    subtitle: "Bringing the culture of sharing to everyone",
    postAt: date,
    cover: Blog1,
    blogLink: "",
  },
  {
    id: 2,
    title: "Diamond Manor Apartment in the New York and Service",
    subtitle: "Bringing the culture of sharing to everyone",
    postAt: date,
    cover: Blog2,
    blogLink: "",
  },
  {
    id: 2,
    title: "Diamond Manor Apartment in the New York and Service",
    subtitle: "Bringing the culture of sharing to everyone",
    postAt: date,
    cover: Blog4,
    blogLink: "",
  },
  {
    id: 3,
    title: "Unveils the Best Canadian Cities for Biking",
    subtitle: "Bringing the culture of sharing to everyone",
    postAt: date,
    cover: Blog3,
    blogLink: "",
  },
  {
    id: 4,
    title: "Exploring Some of the Cities and Home Services",
    subtitle: "Bringing the culture of sharing to everyone",
    postAt: date,
    cover: Blog4,
    blogLink: "",
  },
];
const categories: CategoryProps[] = [
  {
    id: 1,
    label: "Design & Creative",
    service_count: 8,
    cover: Hc1,
  },
  {
    id: 2,
    label: "Development & IT",
    service_count: 3,
    cover: Hc2,
  },
  {
    id: 3,
    label: "Digital Marketing",
    service_count: 2,
    cover: Hc3,
  },
  {
    id: 4,
    label: "Finance & Accounting",
    service_count: 5,
    cover: Hc4,
  },
  {
    id: 5,
    label: "Lifestyle",
    service_count: 9,
    cover: Hc5,
  },
  {
    id: 6,
    label: "Musique & Audio",
    service_count: 10,
    cover: Hc6,
  },
  {
    id: 7,
    label: "Programming & Tech",
    service_count: 2,
    cover: Hc7,
  },
  {
    id: 8,
    label: "Trending",
    service_count: 1,
    cover: Hc2,
  },
  {
    id: 9,
    label: "Video & Animation",
    service_count: 1,
    cover: Hc8,
  },
  {
    id: 10,
    label: "Writing & Translation",
    service_count: 1,
    cover: Hc4,
  },
];

const p = {
  id: 1,
  title: "libelle du service",
};
export interface catTab {
  id: number;
  label: string;
}
const categoriesTab: catTab[] = [
  {
    id: 1,
    label: "Design & Creative",
  },
  {
    id: 2,
    label: "Development & IT",
  },
  {
    id: 3,
    label: "Digital Marketing",
  },
  {
    id: 4,
    label: "Finance & Accounting",
  },
  {
    id: 5,
    label: "Lifestyle",
  },
  {
    id: 6,
    label: "Musique & Audio",
  },
  {
    id: 7,
    label: "Programming & Tech",
  },
  {
    id: 8,
    label: "Trending",
  },
  {
    id: 9,
    label: "Video & Animation",
  },
  {
    id: 10,
    label: "Writing & Translation",
  },
];

/////
const userMenuTab: userMenuProps[] = [
  {
    label: "Tableau de bord",
    iconClass: "ri-home-6-line",
  },
  /* {
    label: "Bought Service",
    iconClass: "ri-money-dollar-box-line",
  }, */
  {
    label: "Mes favories",
    iconClass: "ri-heart-3-line",
  },
  /*  {
    label: "Meetings",
    iconClass: "ri-megaphone-line",
  }, */
  {
    label: "Messages",
    iconClass: "ri-message-3-line",
  },
  {
    label: "Mon profile",
    iconClass: "ri-user-6-line",
  },
  /*  {
    label: "Delete Profile",
    iconClass: "ri-delete-bin-7-line",
  },
  {
    label: "Change Password",
    iconClass: "ri-lock-unlock-line",
  }, */
  {
    label: "Déconnexion",
    iconClass: "ri-logout-circle-line",
  },
];

const payMethodsTab: PayProps[] = [
  {
    libelle: "Carte de Crédit",
    img: Cartes,
  },
  {
    libelle: "Orange Money",
    img: OM,
  },
  {
    libelle: "MTN Mobile Money",
    img: MTN,
  },
  {
    libelle: "Moov Africa",
    img: Moov,
  },
  {
    libelle: "Wave",
    img: Wave,
  },
];

const miniatureTab: StaticImageData[] = [Miniature1, Miniature2, Miniature3];

/* dashboard chat */
const chatters: userProps[] = [
  {
    id: 2,
    name: "Gueu Alexander",
    email: "gueu@gmail.com",
    type_user: "seller",
  },
  {
    id: 1,
    name: "Administrator",
    email: "admin@gmail.com",
    type_user: "admin",
  },
];

const defaultOders: CahtDefaultOrderProps[] = [
  {
    numero_commande: "345567GFV56788",
    pack_service_id: 1,
    reference_paiement: "345RFD4544TY",
    service_id: 1,
    status: "In Progress",
    status_paiement: "Done",
    service_name: "Je vais développer un élément de votre site web",
  },
  {
    numero_commande: "345567GFKJ56788",
    pack_service_id: 5,
    reference_paiement: "345RMMD4544TY",
    service_id: 3,
    status: "Complete",
    status_paiement: "Done",
    service_name: "I will provide professional business card design services",
  },
  {
    numero_commande: "345567GFNVB6788",
    pack_service_id: 6,
    reference_paiement: "345RQW24544TY",
    service_id: 156,
    status: "In Progress",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "345GFKL4FV56788",
    pack_service_id: 156,
    reference_paiement: "0095RFD4PO04TY",
    service_id: 451,
    status: "Cancelled",
    status_paiement: "Cancelled",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "605567GFVRTG788",
    pack_service_id: 45,
    reference_paiement: "045RFD4544TF",
    service_id: 12,
    status: "Complete",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "4T5567GFV56788",
    pack_service_id: 15,
    reference_paiement: "00OI5RFD4544Y",
    service_id: 145,
    status: "Complete",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "345567GFV5ED488",
    pack_service_id: 1,
    reference_paiement: "E4545RFD4544TY",
    service_id: 34,
    status: "In Progress",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "56545567GFV56767",
    pack_service_id: 1,
    reference_paiement: "125RFD4544RTG",
    service_id: 1,
    status: "In Progress",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "RRTGGFV56788",
    pack_service_id: 134,
    reference_paiement: "345RFD4544TYRF",
    service_id: 110,
    status: "Suspended",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
  {
    numero_commande: "DDRF567GFV56788",
    pack_service_id: 31,
    reference_paiement: "RFFCVD4544TY",
    service_id: 991,
    status: "In Progress",
    status_paiement: "Done",
    service_name: "Lorem Ipsum dolor sit amet et al.",
  },
];

const messages: ChatMessageProps[] = [
  {
    id: 1,
    sender: chatters[0],
    receiver: chatters[1],
    message_text: "bonjour",
    unread: false,
    date: new Date("2024-01-17T12:00:00"),
  },
  {
    id: 2,
    sender: chatters[1],
    receiver: chatters[0],
    message_text: "Bonjour comment allez vous",
    unread: false,
    date: new Date("2024-01-17T12:02:00"),
  },
  {
    id: 3,
    sender: chatters[1],
    receiver: chatters[0],
    message_text: "Et comment puisse-je vous aider aujourd'hui ?",
    unread: false,
    date: new Date("2024-01-17T12:02:10"),
  },
  {
    id: 4,
    sender: chatters[0],
    receiver: chatters[1],
    message_text: "Je vais très bien merci et vous également j'espère !",
    unread: false,
    date: new Date("2024-01-17T12:03:00"),
  },
  {
    id: 5,
    sender: chatters[0],
    receiver: chatters[1],
    message_text:
      "J'ai besoin  d'apporté quelques modification à cette commande !",
    unread: false,
    date: new Date("2024-01-17T12:03:05"),
  },
  {
    id: 6,
    sender: chatters[1],
    receiver: chatters[0],
    message_text:
      "Bien dite nous lesqueles s'il vous plait\n Veuillez noté l'apport de modification entrainera un délai de livraison plus long que prévu",
    unread: false,
    date: new Date("2024-01-17T12:03:35"),
  },
  {
    id: 7,
    sender: chatters[0],
    receiver: chatters[1],
    message_text: "Bien pas de souci a ce niveau",
    unread: false,
    date: new Date("2024-01-17T12:04:00"),
  },
  {
    id: 8,
    sender: chatters[0],
    receiver: chatters[1],
    message_text:
      "What is Lorem Ipsum ? \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
    unread: false,
    date: new Date("2024-01-17T12:04:50"),
  },
  {
    id: 9,
    sender: chatters[0],
    receiver: chatters[1],
    message_text:
      "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    unread: false,
    date: new Date("2024-01-17T12:05:40"),
  },
  {
    id: 10,
    sender: chatters[0],
    receiver: chatters[1],
    message_text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
    unread: false,
    date: new Date("2024-01-17T12:06:10"),
  },

  {
    id: 11,
    sender: chatters[1],
    receiver: chatters[0],
    message_text: "D'accord bien reçu, ces modifications seront appotées",
    unread: true,
    date: new Date("2024-01-17T12:07:00"),
  },
];

const chats: ChatProps[] = [
  {
    id: 1,
    concerned_order: defaultOders[0],
    participants: chatters,
    messages: messages,
  },
  {
    id: 2,
    concerned_order: defaultOders[1],
    participants: chatters,
    messages: [],
  },
  {
    id: 3,
    concerned_order: defaultOders[2],
    participants: chatters,
    messages: [],
  },
  {
    id: 4,
    concerned_order: defaultOders[3],
    participants: chatters,
    messages: [],
  },
  {
    id: 5,
    concerned_order: defaultOders[4],
    participants: chatters,
    messages: [],
  },
  {
    id: 6,
    concerned_order: defaultOders[5],
    participants: chatters,
    messages: [],
  },
  {
    id: 7,
    concerned_order: defaultOders[6],
    participants: chatters,
    messages: [],
  },
];

/* impressi demo data */
const impressCategories: ImpressCategoryProps[] = [
  {
    id: 1,
    libelle: "All Products A-Z",
  },
  {
    id: 2,
    libelle: "Flyers & Leaflets",
  },
  {
    id: 3,
    libelle: "Business Cards",
  },
  {
    id: 4,
    libelle: "Brochures",
  },
  {
    id: 5,
    libelle: "Roller Banners",
  },
  {
    id: 6,
    libelle: "Posters",
  },
  {
    id: 7,
    libelle: "Stickers",
  },
  {
    id: 8,
    libelle: "Menus Restau",
  },
  {
    id: 9,
    libelle: "Promotional",
  },
];

/* const impressMetadataNames: ImpressMetadataNameProps [] = [
  {
    id:1,
    data_name: "",
    additional_price: 0,
    decsription: undefined
  }
]; */
const FlyersTab: FlyersProps[] = [
  {
    id: 1,
    title: "A7 Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersA7,
    format: "A7",
    isFolded: false,
    short_description:
      "If you need to get the word out about an upcoming event, promote a new menu in your restaurant or advertise a service on behalf of your business, our A7 Flyers & Leaflets are the ideal marketing tool. All A7 Flyers are trimmed to 105 x 74 mm. Every time you order from Solopress, you'll benefit from low prices, rapid turnarounds, and trustworthy UK delivery. White label packaging comes as standard, and the option for carbon offsetting lets you do your bit for the environment.",
    full_description: [
      {
        title: "",
        desc: `Chez Digifaz, nous tenons à vous aider à faire entendre la voix de votre entreprise et c'est pourquoi nous nous spécialisons dans une gamme d'options d'impression. Les flyers et dépliants A7 sont idéalement dimensionnés pour l'impression de menus ou la publicité d'événements si vous recherchez un outil promotionnel très pratique.

        Livraison gratuite en France pour toute commande de Flyers et Dépliants A7 !
        
        Notre équipe d'impression est à votre disposition pour vous aider à concrétiser votre vision du marketing et à faire en sorte que votre maquette et vos messages finis de haute qualité sortent et vous parviennent le plus rapidement possible, afin que vous ne soyez pas retardé. Ce service d'impression de flyers A7 est parfait pour les promotions ou les menus de restaurants ou pour faire passer le message d'un nouveau produit ou d'un événement - son format pratique (105 x 74 mm) le rend extrêmement pratique. Si vous travaillez dans le commerce de détail, vous pouvez même créer de petites notes pour les paquets cadeaux.
        
        Disponible dans une gamme de papiers et avec l'option d'impression recto-verso, nous sommes convaincus que vous serez satisfaits de votre achat.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format A5 (14,85 x 21 cm)",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
      "Pelliculage mat ou brillant  – recto ou recto / verso",
    ],
  },
  {
    id: 2,
    title: "A6 Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersA6,
    format: "A6",
    isFolded: false,
    short_description: `If you want to showcase photography or promote an event, A6 Flyers & Leaflets are a great way to do it. All you need to do is create an eye-catching design and choose your paper type, then we’ll do the rest.

    All A6 Flyers are trimmed to 148 x 105 mm.
    
    Ordering from Solopress entitles you to budget-friendly prices, free UK delivery, and speedy turnarounds. White label packaging comes as standard, while our carbon offsetting option helps you support sustainable printing.`,
    full_description: [
      {
        title: "Imprimer Un Flyer A6",
        desc: `Le flyer A6 se distingue comme un outil promotionnel compact et économique, grâce à son format de petite taille. Malgré ses dimensions modestes, ce tract offre une plateforme efficace pour transmettre une variété d’informations pertinentes liées à un événement, une annonce spécifique ou une promotion en lien avec votre entreprise.

      Cet outil publicitaire polyvalent, largement distribué dans les boîtes aux lettres ou déployé lors d’initiatives de street marketing, se trouve également en libre service sur des comptoirs ou des présentoirs. Le flyer A6 se révèle ainsi être le support idéal pour tenir informés vos prospects sur les dernières actualités de votre activité.
      
      Grâce à sa compacité et à son coût abordable, le flyer A6 offre une visibilité accrue lorsqu’il s’agit de faire passer des messages impactants. Que ce soit pour promouvoir un événement à venir, diffuser une annonce cruciale ou mettre en avant une offre spéciale, ce support de communication permet de toucher un large public, renforçant ainsi la présence et la notoriété de votre enseigne. Optez pour le flyer A6 afin d’optimiser votre stratégie marketing et rester en tête des esprits de vos clients potentiels.
      
      `,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format A6 (10,5 x 14,85 cm)",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
      "Pelliculage mat ou brillant  – recto ou recto / verso",
    ],
  },
  {
    id: 3,
    title: "A5 Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersA5,
    format: "A5",
    isFolded: false,
    short_description: `If you need some must-see messaging to attract customers, you can count on A5 Flyers & Leaflets to do the job. Whether handing them out on the streets or packaging into a customer’s order, we can help provide you with the means to create something special.

    All A5 Leaflets are trimmed to 210 x 148 mm.
    
    With each order from Solopress, you'll experience cost-effective prices, dependable UK delivery, and fast turnarounds. Enjoy white label packaging and the option to offset carbon emissions for eco-friendly printing.`,
    full_description: [
      {
        title:
          "Décupler Votre Impact Avec L’impression De Flyer A5 : Une Stratégie Visuelle Puissante",
        desc: `Le flyer format A5 (14,85 x 21 cm) se positionne comme une solution publicitaire stratégique, offrant une généreuse surface pour mettre en avant votre entreprise de manière impactante. Distribuer vos flyers A5 dans les zones à forte fréquentation constitue une approche de communication de proximité inégalée. Les passants auront accès à une mine d’informations sur votre entreprise à portée de main, établissant ainsi une connexion instantanée avec votre marque. Les flyers A5 peuvent être distribués dans des endroits stratégiques du quartier, tels que les zones commerçantes, les campus universitaires, les centres d’activités sociales, et les bureaux. Ils peuvent également être inclus dans les boîtes aux lettres locales.`,
      },
      {
        title:
          "Un Avantage Économique Évident : Rapport Qualité-Prix Exceptionnel",
        desc: `Parmi les atouts majeurs des flyers A5, soulignons leur excellent rapport qualité-prix. de fait, Ce format publicitaire de flyer vous permet de bénéficier d’une visibilité percutante sans nécessiter des investissements conséquents dans la production. Les prospectus A5 se distinguent par leur économie d’impression, répondant parfaitement aux besoins des entreprises soucieuses de maîtriser leur budget publicitaire.`,
      },
      {
        title:
          "Service D’Impression Numérique : Qualité Et Rapidité Au Rendez-Vous",
        desc: `Notre service d’impression numérique garantit une qualité d’impression exceptionnelle et une rapidité d’exécution remarquable. Grâce à notre atelier doté des dernières technologies, votre commande de flyers A5 sera traitée en un temps record, prête à être expédiée en seulement 1 à 2 jours. Cette réactivité offre à votre entreprise la flexibilité nécessaire pour s’adapter rapidement aux opportunités du marché. Les avantages de la réactivité se manifestent particulièrement dans les secteurs où les promotions éphémères ont un impact significatif. Le flyer A5 permet d’annoncer rapidement des offres spéciales, des réductions flash ou des ventes éclair, générant ainsi un engouement instantané auprès de votre clientèle.`,
      },
      {
        title:
          "Flyers A5 Une Communication Agile : Répondez Rapidement Aux Besoins De Votre Entreprise",
        desc: `Choisir le flyer A5, c’est opter pour une stratégie marketing agile. Vous organisez un événement ou une promotion de dernière minute ? Le flyer A5 devient votre allié incontournable. Son format pratique permet une diffusion rapide, annonçant de manière percutante les détails de l’événement imminent et incitant le public à y participer. La flexibilité du flyer A5 ne se limite pas aux situations d’urgence. Vous pouvez l’utiliser de manière proactive pour renforcer constamment votre présence sur le marché. Que ce soit pour présenter de nouveaux produits, mettre en avant des témoignages clients, ou simplement rappeler votre existence, le flyer A5 offre une opportunité fréquente et efficace de rester dans l’esprit de votre public. Les avantages de la réactivité se manifestent particulièrement dans les secteurs où les promotions éphémères ont un impact significatif.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format A5 (14,85 x 21 cm)",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
      "Pelliculage mat ou brillant  – recto ou recto / verso",
    ],
  },
  {
    id: 4,
    title: "A4 Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersA4,
    format: "A4",
    isFolded: false,
    short_description: `Versatile and reliable, our A4 flyers and leaflets can be distributed to raise awareness of events or special offers, or displayed in-store to let customers know about something special. Use your dazzling design to draw customers in and show them what you’ve got to offer.

    All A4 flyers are trimmed to 297 x 210 mm.
    
    Each order includes low prices, reliable UK delivery, and fast turnarounds. Benefit from unbranded, white label packaging, and the option to offset carbon emissions, promoting eco-conscious printing.`,
    full_description: [
      {
        title:
          "Flyer A4 Imprimé En Numérique : Une Solution Efficace Pour Les Petites Productions",
        desc: `Lorsque vous envisagez de promouvoir un petit événement local ou de diffuser des informations ciblées, le flyer A4 imprimé en numérique est un choix particulièrement judicieux. Cette méthode d’impression est parfaitement adaptée aux besoins de petites productions, généralement comprises entre 50 et 500 exemplaires. Dans ce guide, nous allons explorer les avantages de cette approche et comment elle peut être utilisée pour informer vos prospects de manière efficace.`,
      },
      {
        title: "Informez Vos Prospects Locaux",
        desc: `Les flyers A4 imprimés en numérique sont une option idéale pour informer vos prospects locaux de petits événements ou de promotions spécifiques. Ces supports vous permettent de communiquer des informations pertinentes de manière concise et visuellement attrayante. Vous pouvez les utiliser pour annoncer des événements tels que des ventes locales, des ateliers communautaires, des concerts de quartier et bien plus encore.`,
      },
      {
        title: "La Flexibilité Du Format A4",
        desc: `Le format A4 offre une flexibilité exceptionnelle pour la diffusion d’informations. Il permet de présenter un contenu détaillé, des images de qualité, et même des cartes ou des plans d’accès. Vous pouvez inclure des informations sur les horaires, les emplacements, les offres spéciales et bien d’autres détails importants pour vos prospects. Cela en fait un choix rentable pour maximiser l’impact de votre message.`,
      },
      {
        title: "Placement Stratégique",
        desc: `L’un des avantages des flyers A4 est leur polyvalence en termes de placement. Vous pouvez les mettre en libre-service dans votre boutique, les distribuer dans des zones fréquentées de votre communauté, ou les inclure dans des sacs-cadeaux lors d’événements locaux. Cette accessibilité permet de toucher un public ciblé et d’accroître la notoriété de votre entreprise ou de votre événement.`,
      },
      {
        title: "La Solution Bon Marché Et Efficace",
        desc: `L’impression numérique de flyers A4 est également une solution rentable pour les petites productions. Vous pouvez économiser sur les coûts d’impression tout en obtenant des résultats de haute qualité. Cela signifie que même avec un budget limité, vous pouvez créer des supports publicitaires professionnels et percutants.
        Le flyer A4 imprimé en numérique est une option de choix pour les petites productions visant à informer et à engager un public local. Sa flexibilité de format, son placement stratégique et son coût abordable en font un outil de marketing puissant pour promouvoir efficacement vos événements ou vos offres spéciales auprès de votre communauté. N’hésitez pas à explorer cette option pour tirer parti de ses nombreux avantages.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format A4 (21 x 29,7 cm)",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
      "Pelliculage mat ou brillant  – recto ou recto / verso",
    ],
  },
  {
    id: 5,
    title: "A3 Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersA3,
    format: "A3",
    isFolded: false,
    short_description: `You can rely on our A3 Flyers and Leaflets for indoor placement to promote an event or items from your restaurant menu, or to spread the word about your products or services. Make a big impression with great designs on high-quality paper to really get your business’ message out there.

    All A3 Flyers are trimmed to 420 x 297 mm.
    
    Included with each order is competitive pricing, fast turnarounds, and free UK delivery. Enjoy white label packaging and the option for carbon offsetting, ensuring sustainable printing solutions.`,
    full_description: [
      {
        title:
          "Démarquez-Vous Avec Nos Flyers A3 : Impression De Qualité Et Impact Garanti",
        desc: `Dans le monde moderne axé sur la communication visuelle, les Flyers A3 offrent une opportunité unique de faire passer votre message de manière percutante et mémorable. Que vous souhaitiez promouvoir un événement spécial, présenter vos produits ou simplement créer une annonce accrocheuse, le Flyer A3 est un choix incontournable pour attirer l’attention de votre public cible.`,
      },
      {
        title:
          "Faites Briller Votre Communication Avec Un Flyer A3 De Haute Qualité",
        desc: `Lorsque vous choisissez nos services d’impression de Flyers A3, vous optez pour la qualité supérieure qui fait vraiment la différence. Nos techniques d’impression de pointe garantissent des couleurs éclatantes, des images nettes et un rendu exceptionnel de vos designs. Chaque détail est méticuleusement reproduit pour créer un flyer qui se démarque et laisse une impression durable.`,
      },
      {
        title: "Le Prospectus A3 : Une Créativité Sans Limites",
        desc: `Nous croyons en la puissance de la créativité pour transmettre efficacement un message. Avec les Flyers A3, vous bénéficiez d’une toile spacieuse pour exprimer vos idées de manière créative et percutante. Que vous souhaitiez jouer avec les images, le texte ou les deux, le Flyer A3 offre l’espace nécessaire pour laisser libre cours à votre imagination et créer un design qui reflète parfaitement votre vision.`,
      },
      {
        title: "Polyvalence Pour Tous Vos Besoins",
        desc: `Le Flyer A3 est polyvalent et s’adapte à une grande variété d’utilisations. Du marketing d’entreprise à la promotion d’événements, en passant par les annonces spéciales, ces prospectus gaand format  sont le support idéal pour communiquer avec efficacité. Grâce à leur grande taille, ils garantissent une visibilité maximale, ce qui en fait un choix judicieux pour capter l’attention dans n’importe quel environnement.
        Les Flyers A3 sont bien plus qu’un simple outil promotionnel. Ils sont une toile vierge pour vos idées, une opportunité de laisser une impression mémorable et de créer un impact durable. Découvrez notre gamme de Flyer A3 et laissez-nous vous aider à créer un design qui fera briller votre message. Avec une qualité d’impression exceptionnelle et une créativité sans limites, nos tracts A3 sont votre ticket pour attirer l’attention et inspirer votre public.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format A3 (29,7 x 42 cm)",
      "135 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
    ],
  },

  {
    id: 6,
    title: "DL Flyers & Leaflets",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FlyersDL,
    format: "10 x 21 cm",
    isFolded: false,
    short_description: `Si vous avez besoin d'attirer l'attention sur un événement à venir ou de faire connaître un nouveau service, l'impression de dépliants DL pourrait être le moyen de le faire. Avec un design haut et fin, ils sont parfaits pour être ajoutés à des stands de table et attireront rapidement l'attention des clients.

    Tous les dépliants DL sont découpés au format 10 x 21 cm.
    
    Chaque commande est assortie de prix bas et d'une livraison gratuite au Royaume-Uni. Profitez de délais d'exécution rapides et d'un emballage en marque blanche. Profitez de notre option de compensation carbone pour prouver votre engagement écologique.`,
    full_description: [
      {
        title: "Flyer DL : La Puissance De La Communication Compacte",
        desc: `Le Flyer DL (10×21cm) est un outil de communication compact et percutant, offrant une surface idéale pour transmettre un message clair et concis. Leur format compact, équivalent à un tiers d’une feuille A4, les rend faciles à distribuer et à transporter. Ces flyers sont largement utilisés dans le marketing pour promouvoir des événements, des produits, des services ou même pour diffuser des informations spécifiques.`,
      },
      {
        title: "Polyvalence Et Adaptabilité",
        desc: `La polyvalence des Flyers DL leur permet de s’adapter à diverses stratégies marketing. Leur taille compacte n’entrave en rien leur capacité à véhiculer un contenu impactant. Que ce soit pour des offres promotionnelles, des invitations, des menus ou des annonces publicitaires, ces flyers offrent un espace suffisant pour captiver l’attention tout en restant facilement lisibles.`,
      },
      {
        title: "Conception Et Impression : Dimension D’un Flyer DL",
        desc: `La conception des Flyers DL requiert une approche minutieuse pour maximiser leur efficacité. Le choix du texte, des visuels et de la mise en page est crucial pour transmettre le message de manière claire et attrayante. Les technologies d’impression modernes permettent une reproduction nette des couleurs et des détails, offrant ainsi des flyers de qualité professionnelle qui attirent l’œil et incitent à la lecture.`,
      },
      {
        title: "Distribuer Un Flyer DL",
        desc: `La distribution des Flyers DL peut se faire de différentes manières, que ce soit par distribution en main propre, insertion dans des enveloppes, affichage sur des présentoirs ou distribution lors d’événements. Leur compacité en fait des alliés précieux pour toucher un large public, que ce soit dans les rues, dans les commerces ou lors de salons et foires commerciales.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presses numérique",
      "Format 10 x 21 cm",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto ou recto / verso",
      "Pelliculage mat ou brillant  – recto ou recto / verso",
    ],
  },

  {
    id: 7,
    title: "Flyers Express 15 x 15 cm",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Flyers15x15,
    format: "15 x 15 cm",
    isFolded: false,
    short_description:
      "If you need to get the word out about an upcoming event, promote a new menu in your restaurant or advertise a service on behalf of your business, our A7 Flyers & Leaflets are the ideal marketing tool. All A7 Flyers are trimmed to 105 x 74 mm. Every time you order from Solopress, you'll benefit from low prices, rapid turnarounds, and trustworthy UK delivery. White label packaging comes as standard, and the option for carbon offsetting lets you do your bit for the environment.",
    full_description: [
      {
        title:
          "Le Flyer Carré : Envisagez Un Nouveau Format Pour Votre Prospection!",
        desc: `Le flyer est un moyen incontournable pour faire la promotion d’un événement ou d’un produit. Grâce à son prix attractif et son format, il est facile de choisir un flyer qui répondra à vos attentes. En effet, il est important pour une entreprise, association ou une société de personnaliser un prospectus afin de transmettre efficacement votre message. Chez Fac Imprimeur, nous vous proposons plusieurs formats de <strong>prospectus</strong> dont le <strong>flyer carré en 15 x 15 cm</strong>. Format original, il permet d’intercepter facilement le regard des passants ou de vos clients. De ce fait, le prospectus publicitaire est idéal pour toutes vos opérations de communication.
        En effet, le <strong>prospectus publicitaire personnalisable</strong> est très apprécié par les professionnels pour son efficacité à communiquer les informations principales à votre cible. Il est régulièrement utilisé pour <strong>  lancer un produit, annoncer un événement, promouvoir une fête  </strong> ou une <strong> inauguration</strong>. Pour cela, nous vous conseillons de personnaliser votre visuel et de sélectionner les options qui répondent à vos attentes afin d’optimiser votre message.

De ce fait, durant le processus de personnalisation de votre <strong>flyer carré express</strong> plusieurs options sont mises à votre disposition. En effet, chez Fac Imprimeur nous vous proposons différents critères personnalisables pour rendre votre flyer carré original dans les moindres détails rapidement. Vous avez plusieurs choix du support (300 gr ou 350 gr Mat ou Brillant) ainsi qu’une option laminage pour intensifier le rendu.

`,
      },
    ],
    caracteristics: [
      "Format : 15 x 15 cm",
      "Impression recto ou recto / verso",
      "300 gr ou 350 gr couché Mat ou Brillant",
      "Option de laminage Mat ou Brillant",
    ],
  },

  {
    id: 8,
    title: "Flyers Express 21 x 21 cm",
    type: "UNFOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Flyers21x21,
    format: "21 x 21 cm",
    isFolded: false,
    short_description:
      "If you need to get the word out about an upcoming event, promote a new menu in your restaurant or advertise a service on behalf of your business, our A7 Flyers & Leaflets are the ideal marketing tool. All A7 Flyers are trimmed to 105 x 74 mm. Every time you order from Solopress, you'll benefit from low prices, rapid turnarounds, and trustworthy UK delivery. White label packaging comes as standard, and the option for carbon offsetting lets you do your bit for the environment.",
    full_description: [
      {
        title:
          "Pourquoi Les Flyers Carrés De 21 X 21 Cm Sont La Révolution De La Communication D’Entreprise ?",
        desc: `Un sujet passionnant : Les flyers carrés de 21 x 21 cm. Vous vous demandez peut-être pourquoi ces petits carrés en papier suscitent autant d’engouement dans le monde de la communication d’entreprise. Eh bien, c’est exactement ce que nous allons explorer en profondeur au cours de cette discussion. Alors, attachez vos ceintures, car nous allons découvrir pourquoi ces flyers carrés sont la véritable révolution de la communication`,
      },
      {
        title: "Le Pouvoir Des Flyers Dans La Communication D’Entreprise",
        desc: `Commençons par les bases. Les flyers sont depuis longtemps l’un des outils de communication les plus polyvalents et efficaces. Ils permettent de transmettre rapidement des informations à un large public de manière tangible. C’est comme avoir une mini-affiche que vous pouvez distribuer à la volée, à la fois peu coûteuse et directe. Les entreprises les utilisent pour annoncer des promotions, des événements spéciaux, ou simplement pour renforcer leur présence sur le marché. En somme, les flyers sont comme des messagers, des ambassadeurs de votre message.`,
      },
      {
        title: "Les Flyers Carrés : Une Nouvelle Dimension À Votre Message",
        desc: `Maintenant, entrons dans le vif du sujet : pourquoi opter pour des flyers carrés de 21 x 21 cm ? C’est là que ça devient vraiment intéressant. Imaginez des flyers au format carré. Non seulement ils sont plus grands que les formats traditionnels, mais ils ont cette esthétique unique qui attire l’attention. Vous voyez, la forme carrée se démarque des rectangulaires habituels, et cela intrigue vos prospects. Ils ne peuvent pas s’empêcher de les saisir, de les regarder et de les garder précieusement. En d’autres termes, les flyers carrés créent un impact visuel mémorable.`,
      },
      {
        title: "Facilité De Distribution Et De Publipostage",
        desc: `Une autre caractéristique intéressante est la facilité de distribution. Les flyers carrés de 21 x 21 cm s’insèrent parfaitement dans une enveloppe standard. Cela signifie que vous pouvez les utiliser pour des campagnes de publipostage sans tracas. Imaginez simplement vos clients ou partenaires commerciaux recevant un message personnalisé dans une belle enveloppe contenant un flyer carré – ça a de la classe, non ?`,
      },
      {
        title: "Personnalisation Et Qualité Exceptionnelle",
        desc: `Chez Fac Imprimeur, nous comprenons à quel point il est essentiel de personnaliser vos flyers express pour qu’ils reflètent parfaitement votre entreprise. C’est pourquoi nous imprimons vos flyers carrés dans notre imprimerie à Nice, en mettant l’accent sur la qualité supérieure. Vous pouvez choisir entre un papier de 300 g ou 350 g, selon vos préférences, et même opter pour un laminage mat ou brillant pour un aspect encore plus sophistiqué. Laissez-nous vous dire que tenir un flyer carré personnalisé entre les mains, c’est comme tenir une œuvre d’art.`,
      },
      {
        title: "Éveillez La Curiosité Et L’Engagement",
        desc: `L’un des avantages les plus intéressants des flyers carrés est leur capacité à susciter la curiosité et à maintenir l’engagement. Le format non standard attire l’œil, et c’est précisément ce que vous voulez. Les gens sont plus enclins à regarder de plus près, à lire et à conserver un flyer carré qui sort de l’ordinaire. Cela signifie que votre message a plus de chances d’être mémorisé et d’entraîner une action de la part de vos clients. C’est une manière intelligente d’optimiser l’impact de votre communication.`,
      },
      {
        title: "Délai De Fabrication Rapide Pour Une Communication Réactive",
        desc: `Vous voulez être réactif et répondre rapidement aux besoins de votre entreprise ? Pas de problème. Grâce à nos processus d’impression numérique de pointe, nous pouvons prendre en charge votre commande de flyers carrés en un temps record. En fait, nous vous garantissons que votre tract carré personnalisé sera prêt en seulement 1 à 2 jours. Cela signifie que vous pouvez lancer des campagnes publicitaires à la vitesse de l’éclair, sans compromettre la qualité.`,
      },
      {
        title: "Les Flyers Carrés De 21 X 21 Cm : Votre Signature Visuelle ",
        desc: `En résumé, les flyers carrés de 21 x 21 cm représentent bien plus qu’un simple outil de communication. Ce sont des ambassadeurs de votre message, des porteurs d’information qui attirent l’attention, suscitent la curiosité, et renforcent l’engagement. Chez Fac Imprimeur, nous les personnalisons avec soin pour que chaque flyer soit une œuvre d’art unique. Ils sont faciles à distribuer, parfaits pour le publipostage, et vous permettent de réagir rapidement aux besoins de votre entreprise.

        En choisissant les flyers carrés de 21 x 21 cm, vous investissez dans une signature visuelle qui fera briller votre entreprise. Alors, n’attendez plus, passez à l’action et découvrez la révolution de la communication d’entreprise avec les flyers carrés.`,
      },
    ],
    caracteristics: [
      "Format : 21 x 21 cm      ",
      "Impression recto ou recto / verso",
      "300 gr ou 350 gr couché Mat ou Brillant",
      "Option de laminage Mat ou Brillant",
    ],
  },

  /* FOLDED FLEYERS */
  {
    id: 9,
    title: "Dépliants 2 volets A4",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedA4,
    format: "A3 ouvert - A4 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Les Dépliants A3 Plié En 2",
        desc: `Les dépliants A3 plié en 2 sont des supports papier intéressants pour accroitre la visibilité d’une entreprise. En effet, ils mettent en valeur les informations clés de votre société, comme des descriptions de produits ou des visuels. De ce fait, chez Fac Imprimeur nous proposons l’impression rapide de vos supports.

        Les dépliants sont édités dans notre atelier à Nice, au format A3 (29,7 x 42 cm) avec une pliure centrale. Les impressions de vos dépliants professionnels sont éditées en couleur et en haute-définition. De plus, nous proposons plusieurs grammages pour votre support. En effet, ils vont du 90 gr laser au 350 gr couché brillant/Mat. Enfin, si vous avez choisi un support de 200 gr ou plus, vous avez l’option de pelliculer votre support pub`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A3 (29,7 x 42 cm)",
      "Format fermé A4 (21 x 29,7 cm)",
      "1 pli au centre",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto / verso",
    ],
  },

  {
    id: 10,
    title: "Dépliant 2 volets A5",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedA5,
    format: "A4 ouvert - A5 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "COMMENT FAIRE UN DEPLIANT 2 VOLETS EN A4",
        desc: `Le Dépliant A4 est un support imprimé dont la forme définitive est obtenue par le moyen d’un pliage suivant la longueur de la feuille. Ce prospectus a pour principal objectif la mise en avant de multiples informations. En effet, le dépliant 2 volets en A4 est un format très prisé car il peut contenir une importante quantité d’informations. De ce fait, on s’en sert généralement de dépliant commercial. Son but est de permettre à un vendeur ou un commercial d’avoir toutes les informations en main pour renseigner un client. Par exemple, il indique le plus souvent le détail et le prix d’une prestation.
        `,
      },
      {
        title: "LES AVANTAGES DU DÉPLIANT A4",
        desc: `Pour débuter, le dépliant 2 volets en A4 est un support facile à distribuer et répond rapidement à vos besoins. En effet, ce produit est imprimé en 1-2 jours ouvrés dans notre atelier. C’est un outil pratique pour communiquer sur les caractéristiques d’un service ou d’un produit. De plus le dépliant commercial est facile à imprimer. De ce fait, nous vous proposons une impression personnalisée dans des délais restreint. Pour cela, il vous suffit d’indiquer la quantité exacte que vous souhaitez. La dernière étape consiste à sélectionner le grammage parfait pour votre dépliant 2 volets en A4.

        Le dépliant 2 volets en A4 est simple à administrer. Disposé sur un comptoir ou sur un bureau, il est facile pour un client de récupérer un dépliant commercial. De plus, ce support est un excellent outil pour les commerciaux. En effet, ce support est léger et facile à transporter, notamment pour les déplacements d’affaires et les évènements. D’autant plus qu’il permet d’aider à faire la promotion d’une entreprise. Cet outil de communication peut aussi servir dans les cas suivant : dépliant touristique, dépliant design, dépliants photo ou encore dépliant publicitaire.
        
        Plusieurs autres formats de dépliant commercial sont disponibles : le A5, A3, 15 x 15 cm
        
        `,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (29,7 x 21 cm)",
      "Format fermé A5 (21 x 14,85 cm) ",
      "1 pli au centre",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },
  {
    id: 11,
    title: "Dépliants 2 volets A6",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedA6,
    format: "A5 ouvert - A6 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Imprimer Un Dépliant",
        desc: `Le <strong>dépliant  A5</strong> est un outil de communication des plus efficaces pour votre stratégie de communication de part son faible coût. De ce fait il permet de diffuser votre message à un large public.
        Ce prospectus plié peut être diffusé en libre service, distribué en boîte aux lettres ou lors d’opérations de street marketing, il permet d’informer vos prospects de l’actualité de votre activité.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A5 (14,85 x 21 cm)",
      "Format fermé A6 (10,5 x 14,85 cm)",
      "1 pli au centre",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },
  {
    id: 12,
    title: "Dépliant 2 volets 10×21 cm",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Folded10x21,
    format: "10x21 cm fermé - 20x21 com ouvert",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title:
          "TOUT SUR LE DÉPLIANT DL : UN GUIDE COMPLET POUR LE MARKETING IMPRIMÉ",
        desc: `Le dépliant DL, également connu sous le nom de prospectus plié, est un support imprimé polyvalent qui prend sa forme finale grâce à un pliage le long de la longueur de la feuille. Destiné à mettre en lumière une variété d’informations, le dépliant DL 2 volets est particulièrement prisé en tant que support commercial en raison de sa capacité à contenir une quantité significative d’informations. Il sert principalement à fournir aux vendeurs ou aux commerciaux toutes les données nécessaires pour informer les clients, notamment les détails et les prix des prestations.`,
      },
      {
        title: "LES ATOUTS INSOLITES DU DÉPLIANT DL",
        desc: `<strong>Découvrez les Points Forts Inattendus du Dépliant DL</strong>

        Le dépliant DL se distingue par sa facilité de distribution, répondant instantanément à vos exigences. Imprimé en seulement 1 à 2 jours ouvrés dans notre atelier, ce produit offre une solution rapide et pratique pour communiquer les caractéristiques d’un service ou d’un produit. L’impression personnalisée, réalisée dans des délais restreints, vous permet de préciser la quantité exacte souhaitée. La dernière étape consiste simplement à choisir le grammage idéal pour votre dépliant DL.
        
        La simplicité d’administration du dépliant DL en fait un outil accessible, idéal pour être disposé sur un comptoir ou un bureau. Facilement accessible pour les clients, ce support léger est également un allié de choix pour les commerciaux, notamment lors des déplacements d’affaires et des événements. Au-delà de son aspect pratique, le dépliant DL contribue efficacement à la promotion de votre entreprise. Que ce soit en tant que dépliant touristique, dépliant design, dépliants photo ou dépliant publicitaire, cet outil de communication polyvalent saura répondre à vos besoins.
        
        Plusieurs autres formats de dépliant commercial sont disponibles : le A5, A3, 15 x 15 cm`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert 20 x 21 cm",
      "Format fermé 10 x 21 cm",
      "1 pli au centre",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },

  {
    id: 13,
    title: "Dépliants 2 volets 15 x 15 cm",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Folded15x15,
    format: "15x15 cm fermé - 30x15 com ouvert",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "",
        desc: `Impression rapide de vos <strong>dépliants carrés 15 x 15 cm personnalisés</strong>.

        Personnalisé à l’effigie de votre entreprise, nous proposons l’impression rapide de vos dépliants. En effet, chez Fac Imprimeur nous savons qu’il est important pour une société d’avoir un dépliant personnalisé rapidement car c’est un outil de communication efficace et rapide pour accroitre votre notoriété. Distribué en masse ou mis en libre-service sur un comptoir, ce support de présentation est idéal pour mettre en valeur vos produits ou vos services. Disponible dans différents formats, le dépliant publicitaire est un support incontournable pour les professionnels de tous secteurs. De ce fait, dans notre imprimerie nous vous proposons l’<strong>impression express</strong> et en <strong>haute définition de vos dépliants</strong> dans un format original : les dépliants <strong>carrés 15 x 15 cm</strong>.
        
        En effet, nous réalisons l’ensemble des supports promotionnels dans notre imprimerie à Nice. Nous disposons de machines professionnelles pour réaliser des dépliants en haute qualité et à des prix attractifs. Cela vous permet d’exposer rapidement à vos clients les produits de votre entreprise, association ou marque. De ce fait, plusieurs options personnalisables sont mises à votre disposition afin de rendre votre dépliant unique. En effet, vous pouvez personnaliser plusieurs présélections comme l’épaisseur du papier de votre dépliant afin de choisir entre un papier de 90 gr, 135 gr, 170 gr, 250 gr ou de 350 gr. De plus vous avez une option laminage (brillant ou Mat) pour les supports de plus de 200 gr.
        
        L’ensemble de ces options personnalisables permettent de rendre votre dépliant carré original. Par conséquent, ce support est idéal pour vous distinguer de vos concurrents.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert 15 x 30 cm",
      "Format fermé 15 x 15 cm",
      "1 pli au centre",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },

  {
    id: 14,
    title: "Dépliant 3 volets 14 x 29,7 cm",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Folded10x29,
    format: "A3 ouvert - A4 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Impression Dépliant 3 Volets En A3",
        desc: `Le <strong>dépliant 3 volets</strong> au format A3 est la solution parfaite pour attirer l’attention sur votre entreprise, association ou votre événement. En effet, ce support papier permet de mettre en valeur vos produits et services grâce à ses 6 faces. L’ impression d’un dépliant 3 volets en A3 a l’avantage d’être un support professionnel accessible et efficace.

        De plus, chez Fac Imprimeur l’impression de votre dépliant 3 volets en A3 est réalisé en seulement 1 à 2 jours. Idéal pour partager rapidement à vos prospects votre offre ou votre actualité. En général, le dépliant avec 2 plis est laissé en libre-service ou distribué durant des opérations de street marketing. Dans tous les cas, ce support reste un des meilleurs choix pour augmenter la visibilité d’une organisation.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A3 (29,7 x 42 cm)",
      "Format fermé  14 x 29,7 cm",
      "2 plis roulés ou accordéon",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },

  {
    id: 15,
    title: "Dépliant 3 volets 10 x 21 cm",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Folded10x21_3,
    format: "A4 ouvert - 10x21 cm fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Dépliant 3 Volets",
        desc: `Le dépliant 3 volets est un document imprimé, composé de trois feuillets. Rabattus entre eux les différents volets permettent à la plaquette de dévoiler petit à petit son contenu. Le Pli roulé 3 volets laisse apparaître au fil de la manipulation les diverses informations qu’il comporte. Ce dépliant publicitaire est composé de texte, d’images ainsi que de schémas pour décrire et présenter au mieux votre domaine d’activité. Cet outil marketing stratégique et détaillé vous permettra de transmettre un message clair pour attirer de nouveaux prospects.`,
      },
      {
        title: "Brochure 3 Volets : Un Média Économique Et Pratique",
        desc: `La brochure trois volets est un outil de communication polyvalent. En effet, le dépliant triptyque est un support qualitatif adapté à la présentation d’un produit ou d’un service. De plus, il peut également faire connaitre une entreprise ou encore énoncer le programme d’un évènement. Ce prospectus sera donc un allié efficace pour le développement de votre société. De fait, les dépliants 3 volets sont souvent utilisés comme plaquette commerciale pour proposer des tarifs de prestations de tous types.

        `,
      },
      {
        title: "Le Flyer 3 Volets : Une Diffusion Facile",
        desc: `En libre service, sur un comptoir, distribué en boîte aux lettres, ou lors d’opérations de street marketing, le dépliant 3 volets permet d’informer votre clientèle sur l’actualité de votre enseigne. Nous proposons deux finitions pour ce produit, le pli roulé ou portefeuille, ainsi que le pli en z ou accordéon. Vous pouvez opter pour différents supports d’impression pour votre flyer 3 volets. Cela dans le but de répondre à toutes vos attentes et de vous proposer le meilleur rapport qualité prix. Cependant ce media reste généralement  imprimé sur papier couché mat ou brillant en 135 gr. Vous pouvez aussi opter pour une finition plus qualitative en 350 gr pour vos plaquettes trois volets.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (29,7 x 21 cm)",
      "Format fermé 10 x 21 cm",
      "2 plis roulés ou accordéon",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto ou recto/verso mat ou brillant",
    ],
  },

  {
    id: 16,
    title: "Dépliants 3 volets 21×21 cm",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: Folded21x21_3,
    format: "63x21 cm  ouvert - 21x21 cm fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Dépliants Format 21 X 21 – 2 plis roulés",
        desc: `Le dépliant cartonné grand format est idéal pour vos plaquettes commerciales et cartes de restaurants, l’impression numérique vous permet d’obtenir des petites quantité à un prix très attractif.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format fermé 21 x21 cm",
      "Format ouvert 63 x 21 cm)",
      "2 plis roulés",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto / verso Mat ou Brillant à partir du 200 gr",
      "Livré rainé à plat à partir du 200 gr",
    ],
  },
  {
    id: 17,
    title: "Dépliants 3 volets A5",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedA5_3,
    format: "45x21 cm  ouvert - A5 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Dépliants Format A5 – 2 plis roulés",
        desc: `Le dépliant cartonné grand format est idéal pour vos plaquettes commerciales et cartes de restaurants, l’impression numérique vous permet d’obtenir des petites quantité à un prix très attractif.        `,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert 45 x 21 cm",
      "Format fermé A5",
      "2 plis roulés",
      "Du 90 gr offset au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto / verso Mat ou Brillant à partir du 200 gr",
      "Livré rainé à plat à partir du 200 gr",
    ],
  },
  {
    id: 18,
    title: "Flyers et dépliants en forme de carte",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedMap,
    format: "A4 (297x210 mm)",
    isFolded: true,
    short_description: `Pour les événements en plein air et les attractions touristiques, un dépliant à pliage cartographique imprimé est un choix idéal. Pour un dépliant à 16 volets, la feuille est pliée en accordéon, puis un dernier pli au centre permet de créer un document maniable, facile à transporter et à ranger.

    L'intérêt de ce format réside dans la surface d'impression importante dont vous disposez une fois qu'il est déplié. Il convient parfaitement comme affiche, tableau mural ou, bien sûr, comme carte !`,

    full_description: [
      {
        title: "Impression de dépliants en pliage de carte par Graphikaz",
        desc: `Si vous avez besoin d'aider les visiteurs à s'orienter, ou si vous souhaitez produire un document compact qui se déplie pour révéler un contenu graphique généreux, l'impression de dépliants en pliage de carte est la solution qu'il vous faut. Explorez notre gamme de types de papier et de grammages pour créer le dépliant plié idéal.

        Nous proposons l'impression de dépliants cartographiques sur du papier soie, brillant, bond ou kraft brun, dans une variété d'épaisseurs. Parcourez toutes les options pour trouver les spécifications idéales pour votre contenu.
        
        Les formats non pliés que nous proposons sont les suivants : A4 qui se plie en un document A6 de 8 pages ; A3 qui se plie en un dépliant A5 de 8 pages ou A6 de 16 pages ; et A2 qui se plie en un dépliant A4 de 8 pages ou A5 de 16 pages.
        
        Ces options de pliage peuvent être difficiles à visualiser, mais nos modèles de fichiers d'impression téléchargeables sont là pour vous aider. Disponibles sous forme de fichiers PDF, Photoshop et Illustrator, ils vous aideront à comprendre comment concevoir un dépliant cartographique efficace.
        
        Si vous préférez que nous nous occupions de la maquette pour vous, contactez-nous et nous mettrons notre équipe de conception au travail sur votre projet.
        
        Une fois l'impression et la finition terminées, nous expédions gratuitement vos dépliants sous forme de carte en France le lendemain.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (63 x 29,7 cm)",
      "Format fermé 21 x 29,7 cm",
      "2 plis roulés",
      "Du 135 gr au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto / verso Mat ou Brillant à partir du 200 gr",
      "Livré rainé à plat à partir du 200 gr",
    ],
  },
  {
    id: 19,
    title: "Dépliants 3 volets A4",
    type: "FOLDED",
    category: impressCategories[1],
    base_price: 1000,
    cover: FoldedA4_3,
    format: "63x29.7 cm  ouvert - A4 fermé",
    isFolded: true,
    short_description: `Lorsqu'un simple prospectus ne suffit pas, l'impression de dépliants en demi-pli vous permet d'exprimer votre message sur quatre pages. La variété des dimensions proposées vous offre un choix de formes et de tailles pour votre dépliant.

    En combinant votre propre contenu et votre maquette avec notre gamme d'options sur les stocks de papier, les grammages et les finitions, vous avez la possibilité de créer un document marketing vraiment unique.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Dépliants Format 21 X 29,7 – 2 plis roulés",
        desc: `Le dépliant cartonné grand format est idéal pour vos plaquettes commerciales et cartes de restaurants, l’impression numérique vous permet d’obtenir des petites quantité à un prix très attractif.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (63 x 29,7 cm)",
      "Format fermé 21 x 29,7 cm",
      "2 plis roulés",
      "Du 135 gr au 350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto / verso Mat ou Brillant à partir du 200 gr",
      "Livré rainé à plat à partir du 200 gr",
    ],
  },
];

const flyersPageText = [
  {
    title: "IMPRESSION DÉPLIANT EN LIGNE",
    desc: `Vous êtes une entreprise et vous souhaitez promouvoir votre magasin ou votre événement ? La saison des soldes arrive ? Vous avez besoin de communiquer pour une fête ? L’ <strong>impression de dépliants</strong> ainsi que les plaquettes commerciales sont les outils parfaits pour donner toutes les informations à votre cible.

    Chez Fac Imprimeur, nous réalisons l’ impression dépliant et des plaquettes commerciales à des prix intéressants pour votre communication d’entreprise. En effet, on réalise l’édition de vos dépliants avec soin dans notre imprimerie à Nice. De ce fait, avec vos dépliants professionnels, vous aurez un résultat de qualité pour exposer à vos clients votre prospectus ou plaquette commerciale. 
    
    Pour l’impression de vos dépliants publicitaires, vous disposez de différents formats et supports. En effet, cet outil de communication dispose de plusieurs combinaisons possibles afin de réaliser le document le plus adapté à vos besoins.`,
  },
  {
    title: "Le Dépliant Publicitaire",
    desc: `Un <strong>dépliant publicitaire</strong>, également connut sous le nom de prospectus, est un document à visé commercial. Ce support est un ensemble de feuille plié. De plus, ce prospectus est un indispensable pour réaliser une communication d’entreprise à petit prix. En effet, il a l’avantage d’être facilement distribué durant des salons professionnels ou lors d’opérations commerciales. Plus exactement, il a pour objectif de promouvoir l’ensemble des éléments caractérisant une entreprise ou un événement. La raison est que le dépliant permet d’offrir une grande capacité de contenu, pour mettre en valeur les produits ou services d’une organisation ou le programme d’un événement.

    De ce fait, il existe différents types de pliages et de formats pour vos dépliants. Ces options permettent de vous différencier de vos concurrents lors du tractage ou de la mise à disposition sur un comptoir commercial.`,
  },
  {
    title: "Les Différents Types De Plis Des Dépliants",
    desc: `Le nombre de plis varie en fonction du format sélectionné et de la finalité du dépliant. Tout d’abord, les dépliants avec 1 pli central sont idéals pour un programme ou pour lister des tarifs par exemple. Si votre entreprise, association ou organisation est experte dans un secteur d’activité, nous vous préconisons un pliage en 3 en accordéon ou en Z (triptic) afin d’avoir assez d’espace pour informer au mieux vos prospects. Le pli en accordéon est obtenu en créant deux plis qui sont proches des extrémités.

    Choisissez les options de votre impression pour rendre vos dépliants uniques et efficaces. Le support standard est le 135 gr couché mat ou brillant pour un dépliant classique, pour obtenir un dépliant premium opté pour le 300 gr. Pratique et léger, le tract plié pourra regrouper les informations de votre entreprise dans un seul document marketing.`,
  },
  {
    title: "Imprimer Vos Dépliants Rapidement Chez Fac Imprimeur",
    desc: `Nous imprimons vos prospectus pliés avec le plus grand soin dans notre atelier à Nice. Nous proposons différentes offres de délais et de productions pour répondre au mieux à vos attentes. Vous avez le choix entre le dépliant express pour une impression rapide en numérique et le dépliant standard pour une impression économique en grande quantité.`,
  },
];

const flyersPaperType: MetaDataProps[] = [
  {
    libelle: "Slik",
    price: 1500,
  },
  {
    libelle: "Gloss",
    price: 500,
  },
  {
    libelle: "Bond (uncoated)",
    price: 2500,
  },
  {
    libelle: "Pulpe",
    price: 3400,
  },
  {
    libelle: "Brown Kraft Paper",
    price: 2000,
  },
  {
    libelle: "Matt Laminated",
    price: 4250,
  },
  {
    libelle: "Gloss Laminated One Side",
    price: 3750,
  },
  {
    libelle: "Gloss Laminated Both Sides",
    price: 4700,
  },
  {
    libelle: "Spot UV Matt Laminated",
    price: 4100,
  },
  {
    libelle: "Recycled Paper (White)",
    price: 5700,
  },
  {
    libelle: "Recycled Board (White",
    price: 6700,
  },
  {
    libelle: "Matt Laminated with Foiling",
    price: 7000,
  },
];
const flyersPrintingSide: MetaDataProps[] = [
  {
    libelle: "Couleur Recto / Verso",
    price: 2250,
  },
  {
    libelle: "Couleur Recto",
    price: 1700,
  },
  {
    libelle: "Blanc-noir Recto / Verso",
    price: 1350,
  },
  {
    libelle: "Blanc-noir Recto",
    price: 650,
  },
];
const flyersPaperWidget: MetaDataProps[] = [
  {
    libelle: "90gsm",
    price: 550,
  },
  {
    libelle: "130gsm",
    price: 1050,
  },
  {
    libelle: "170gsm",
    price: 1500,
  },
  {
    libelle: "200gsm",
    price: 2550,
  },
  {
    libelle: "250gsm",
    price: 3450,
  },
  {
    libelle: "300gsm",
    price: 3750,
  },
  {
    libelle: "350gsm",
    price: 4050,
  },
  {
    libelle: "400gsm",
    price: 4800,
  },
];
const flyersPelliculage: MetaDataProps[] = [
  {
    libelle: "Sans Pelliculage",
    price: 0,
  },
  {
    libelle: "Avec Pelliculage",
    price: 675,
  },
];

export {
  defaultOders,
  chats,
  categoriesTab,
  categories,
  services,
  prestators,
  blogs,
  userMenuTab,
  payMethodsTab,
  miniatureTab,
  impressCategories,
  FlyersTab,
  flyersPageText,
  flyersPaperType,
  flyersPrintingSide,
  flyersPaperWidget,
  flyersPelliculage,
};

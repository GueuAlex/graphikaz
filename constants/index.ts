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
  Bcard1,
  Bcard10,
  Bcard11,
  Bcard12,
  Bcard13,
  Bcard14,
  Bcard15,
  Bcard2,
  Bcard3,
  Bcard4,
  Bcard5,
  Bcard6,
  Bcard7,
  Bcard8,
  Bcard9,
} from "@/public/b_card_img";
import {
  Brochure1,
  Brochure2,
  Brochure3,
  Brochure4,
  Brochure5,
} from "@/public/brochure_img";
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
  Promo1,
  Promo10,
  Promo2,
  Promo3,
  Promo4,
  Promo5,
  Promo6,
  Promo7,
  Promo8,
  Promo9,
} from "@/public/promo";
import {
  Resto1,
  Resto10,
  Resto11,
  Resto2,
  Resto3,
  Resto4,
  Resto5,
  Resto6,
  Resto7,
  Resto8,
  Resto9,
} from "@/public/resto";
import {
  Roller1,
  Roller2,
  Roller3,
  Roller4,
  Roller5,
  Roller6,
  Roller7,
} from "@/public/rollers";
import {
  BcardProps,
  BlogProps,
  BrochureProps,
  CahtDefaultOrderProps,
  CategoryProps,
  ChatMessageProps,
  ChatProps,
  FlyersProps,
  ImpressCategoryProps,
  MetaDataProps,
  PayProps,
  PrestatorProps,
  ProductLibelle,
  PromotionalProps,
  RestoProps,
  RollupProps,
  ServiceProps,
  userMenuProps,
  userProps,
} from "@/types";

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
    type: "IMPRESS",
  },
  {
    id: 2,
    libelle: "Flyers & Leaflets",
    type: "IMPRESS",
  },
  {
    id: 3,
    libelle: "Business Cards",
    type: "IMPRESS",
  },
  {
    id: 4,
    libelle: "Brochures",
    type: "IMPRESS",
  },
  {
    id: 5,
    libelle: "Roller Banners",
    type: "IMPRESS",
  },
  {
    id: 6,
    libelle: "Posters",
    type: "IMPRESS",
  },
  {
    id: 7,
    libelle: "Stickers",
    type: "IMPRESS",
  },
  {
    id: 8,
    libelle: "Menus Restau",
    type: "IMPRESS",
  },
  {
    id: 9,
    libelle: "Promotional",
    type: "IMPRESS",
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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

/*******************************************************
 * ****************** carte de visites config **********
 *******************************************************/

/************* meta data config ************/
const bcardFormats: MetaDataProps[] = [
  {
    libelle: "85 x 55 mm (Standard)",
    price: 750,
  },
  {
    libelle: "85 x 25 mm (Mini)",
    price: 550,
  },
  {
    libelle: "55 x 55 mm (Square)",
    price: 950,
  },
  {
    libelle: "89 x 51 mm (Americain)",
    price: 850,
  },
  {
    libelle: "88 x 55 mm (Alternative)",
    price: 350,
  },
  {
    libelle: "80 x 50 mm (Petite)",
    price: 650,
  },
  {
    libelle: "90 x 55 mm (longue)",
    price: 850,
  },
];

const bcardPaperColors: MetaDataProps[] = [
  {
    libelle: "Or",
    price: 700,
  },
  {
    libelle: "Argenté",
    price: 750,
  },
  {
    libelle: "Or rose",
    price: 1000,
  },
  {
    libelle: "Or brillant",
    price: 1200,
  },
  {
    libelle: "Vert",
    price: 350,
  },
  {
    libelle: "Bleu",
    price: 500,
  },
  {
    libelle: "Rouge",
    price: 550,
  },
  {
    libelle: "Turquoise",
    price: 750,
  },
  {
    libelle: "Noir",
    price: 250,
  },
];

const bcardRadius: MetaDataProps[] = [
  {
    libelle: "Bordures ronds",
    price: 450,
  },
  {
    libelle: "Bordures carrées",
    price: 0,
  },
];

const bcardOptions: MetaDataProps[] = [
  {
    libelle: "Economie",
    price: 0,
  },
  {
    libelle: "Plastifié",
    price: 250,
  },
  {
    libelle: "Pâte à papier",
    price: 350,
  },
  {
    libelle: "Texturé",
    price: 550,
  },
  {
    libelle: "Métallique",
    price: 650,
  },
  {
    libelle: "Spot UV",
    price: 750,
  },
  {
    libelle: "Kraft",
    price: 750,
  },
  {
    libelle: "Feuille d'aluminium",
    price: 1400,
  },
  {
    libelle: "Triple couche",
    price: 900,
  },
];

/************* b-cards ************/
const bcardTab: BcardProps[] = [
  {
    id: 1,
    title: "Cartes de visite bon marché",
    product: ProductLibelle.BUSINESS_CARD,
    formats: bcardFormats,
    type: "BY FINISH",
    base_price: 1500,
    category: impressCategories[2],
    cover: Bcard1,
    short_description: `Obtenir le meilleur retour sur investissement est toujours une priorité pour les entreprises, mais une carte de visite bien conçue et parfaitement imprimée est essentielle pour établir des contacts et développer de nouvelles relations. Heureusement, des cartes de visite bon marché ne sont pas forcément synonymes de mauvaise qualité.

    En proposant une large gamme de formats sur un papier populaire non laminé, nous sommes en mesure de maintenir une qualité d'impression élevée sur une carte de visite abordable qui ne vous décevra pas.
    
    Chaque fois que vous commandez chez Solopress, vous bénéficiez de prix bas, de délais d'exécution rapides et d'une livraison fiable en France. L'emballage en marque blanche est standard, et l'option de compensation carbone vous permet de faire votre part pour l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite à bas prix",
        desc: `Restez à l'esprit de vos clients et ouvrez de nouvelles voies de communication sans vous ruiner grâce à l'impression de cartes de visite à bas prix de Solopress.

      Cette gamme de cartes économiques associe un prix avantageux à une impression de haute qualité, ce qui vous permet d'impressionner vos clients ou de faire passer le message lors d'événements de réseautage sans avoir à dépenser beaucoup d'argent. Vous pouvez ainsi communiquer vos coordonnées en toute confiance, en sachant que vous avez fait un choix judicieux et sans compromis.
      
      Choisissez votre format et votre design pour des cartes de visite bon marché, en recto ou en recto verso. Utilisez les modèles de conception en ligne de notre outil Créez votre propre carte pour produire des cartes de visite personnalisées avec des éléments graphiques et des mises en page éprouvés. Nous pouvons vous aider à créer des designs personnalisés en couleur, afin que vous puissiez être sûr que votre carte est unique.
      
      Si vous êtes en panne d'inspiration, notre équipe de designers internes est là pour vous aider à concrétiser votre vision. Une fois que vous serez satisfait de votre maquette, nous nous mettrons immédiatement au travail pour imprimer votre nouvelle carte de visite.
      
      Pour des cartes de visite britanniques bon marché avec livraison gratuite, il n'y a rien de plus simple que de commander en ligne avec nous.`,
      },
    ],
    caracteristics: [
      "Carte de visite à finition lisse en soie 400gsm",
      "Afficher le texte avec des détails et des couleurs vives",
      "Acheter des tailles standard, mini, carrées ou autres",
    ],
  },

  {
    id: 2,
    title: "Cartes de visite plastifiées",
    product: ProductLibelle.BUSINESS_CARD,
    formats: bcardFormats,
    type: "BY FINISH",
    base_price: 1200,
    category: impressCategories[2],
    cover: Bcard2,
    short_description: `Ajoutez de l'éclat à votre présentation grâce à la gamme de cartes de visite plastifiées de Solopress. Disponibles en différents formats et finitions, nous pouvons vous aider à faire en sorte que votre prochain événement de réseautage se déroule aussi bien que la sensation de ces cartes brillantes qui attirent l'attention.

    <strong>Disponibles en :</strong>
    Pelliculage mat - soyeux et lisse au toucher, il adoucit les images.
    Pelliculage brillant - Finition ultra brillante, les couleurs de l'œuvre d'art apparaissent plus vives.
    Pelliculage Velvet Soft-Touch - Comme une peau de pêche, les couleurs paraissent plus riches.
    
    Des prix avantageux, une livraison gratuite et efficace au Royaume-Uni et des délais d'exécution rapides font partie de l'expérience Solopress. Les emballages en marque blanche sont parfaits pour l'impression par des tiers, et notre option de compensation carbone favorise l'impression respectueuse de l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite plastifiées à bas prix",
        desc: `L'ajout d'un pelliculage lorsque vous imprimez des cartes de visite offre un niveau de protection solide qui garantira leur longévité.

        Le type de pelliculage choisi dépend de l'impact que vous souhaitez avoir sur le destinataire. Les cartes de visite pelliculées brillantes sont brillantes et attirent l'attention, tandis que les cartes de visite pelliculées velours sont très douces au toucher.
        
        Les cartes de visite plastifiées mates restent toutefois notre finition la plus couramment commandée en raison de leur aspect général et de l'équilibre parfait entre performance et présentation.
        
        Quelle que soit l'option choisie, le pelliculage peut être appliqué sur une ou deux faces,
        
        Utilisez l'un de nos modèles de cartes de visite gratuits pour créer votre maquette et soumettez-la nous en ligne lorsque vous passez votre commande. Vous pouvez également faire appel à notre équipe de concepteurs pour vous aider à obtenir un produit de haute qualité, avec une livraison gratuite pour chaque commande, pour couronner notre processus simple.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 3,
    title: "Cartes de visite Spot UV",
    type: "BY FINISH",
    product: ProductLibelle.BUSINESS_CARD,
    formats: bcardFormats,
    base_price: 1400,
    category: impressCategories[2],
    cover: Bcard3,
    short_description: `Add a touch of gloss with Spot UV Business Cards. Our jet varnish process can print details as fine as 0.5mm, enabling raised lettering in a gloss finish, or a logo that shines out from its background.

    Your varnished area doesn't even need to correspond to your printed artwork. A pattern, image or area defined solely in UV varnish can have a subtle yet striking effect on spot gloss Business Cards.
    
    Every time you order from Solopress, you'll benefit from low prices, rapid turnarounds, and trustworthy UK delivery. White label packaging comes as standard, and the option for carbon offsetting lets you do your bit for the environment.
    
    How to supply artwork: Please supply all artwork in one PDF document, with pages for conventional colour print in CMYK, followed by separate pages for spot UV areas indicated by areas in solid black in a vector format. When you come to upload your artwork, please use the NOTES field to let us know how you’ve arranged your PDF (e.g. page 1: Side 1 CMYK, page 2: Side 2 CMYK, page 3: Side 1 Spot UV).`,

    full_description: [
      {
        title: "Impression de cartes de visite Spot Gloss à bas prix",
        desc: `Ajoutez un impact visuel à vos cartes de visite grâce à des éléments UV ponctuels qui font ressortir les éléments clés de votre conception dans un vernis très brillant. L'impression de cartes de visite en UV spot ajoute une touche inoubliable à votre première rencontre.

        Disponible dans une gamme de formats sur papier pelliculé mat de 400 g/m², vous pouvez personnaliser chaque aspect de votre carte de visite, y compris l'effet de pelliculage. Restez simple ou inondez-les d'informations en impression simple ou double face.
        
        Utilisez nos modèles de cartes de visite Spot Gloss en relief pour vous aider à concevoir des maquettes prêtes à être imprimées. Les illustrations Spot UV doivent être fournies sur des couches séparées : notre guide d'assistance et notre vidéo didactique sur ce sujet contiennent des informations utiles pour éviter les pièges les plus courants lors de la création d'illustrations pour Spot UV.
        
        Vous pouvez également demander à notre équipe de concepteurs de vous aider à créer une carte de visite Spot UV en relief sur mesure.
        
        Une fois la maquette finalisée, votre commande imprimée et emballée, la livraison gratuite au Royaume-Uni vient couronner ce processus rapide et pratique.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 4,
    title: "Cartes de visite en pâte à papier",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    formats: bcardFormats,
    base_price: 1700,
    category: impressCategories[2],
    cover: Bcard4,
    short_description: `Si vous ne souhaitez pas transmettre vos coordonnées sur papier glacé, la gamme de cartes de visite en pâte à papier de Solopress pourrait bien être ce qu'il vous faut. Exprimez votre côté accessible avec des cartes de visite à la texture naturelle, imprimées sur un papier 380mic non couché.

    Les cartes de visite en pâte à papier sont disponibles avec un large éventail de possibilités de personnalisation. Vous pouvez choisir parmi plusieurs formats différents, les faire imprimer en simple ou double face, et vous pouvez également choisir entre des coins carrés ou arrondis.
    
    Pour chaque commande passée auprès de Solopress, vous bénéficiez de prix avantageux, d'une livraison fiable au Royaume-Uni et de délais rapides. Profitez d'un emballage en marque blanche et de la possibilité de compenser les émissions de carbone pour une impression respectueuse de l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite en pâte à papier à bas prix",
        desc: `Avec leur texture naturelle et non finie, les cartes de visite en pâte à papier offrent une alternative simple aux cartes de visite plastifiées plus formelles. Cette surface brute est la toile vierge parfaite pour les marques décontractées qui souhaitent exprimer des valeurs alternatives ou sans prétention.

        Ces cartes sont disponibles dans différentes tailles et avec un choix de coins carrés ou arrondis, apportant un sentiment d'individualité. Laissez vos contacts absorber vos coordonnées et votre marque d'un seul coup d'œil grâce à l'impression simple face, ou optez pour le recto-verso afin de maximiser votre message.
        
        Pour faciliter la création de votre carte de visite personnalisée, nous vous proposons des modèles gratuits et téléchargeables à utiliser sur Adobe Creative Cloud, ou sous forme de pdf simple à importer dans votre logiciel de création préféré.
        
        Par ailleurs, si vous êtes pressé par le temps ou si vous voulez quelque chose de très spécial, notre équipe de designers est à votre disposition pour vous aider à produire des illustrations qui reflètent votre marque tout en transmettant vos coordonnées.
        
        Une fois que vous avez décidé de l'aspect et de la convivialité de votre carte de visite en pâte à papier, envoyez-nous votre commande et nous nous mettrons immédiatement au travail pour l'imprimer.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 5,
    title: "Cartes de visite écologiques",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    base_price: 1100,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard5,
    short_description: `Les cartes de visite recyclées reflètent l'essence même de votre marque. Contribuez à la protection de la planète sans compromettre la qualité de l'impression.

    Ces cartes de visite écologiques sont fabriquées à partir de papier 100 % recyclé. Toutes les émissions de carbone produites au cours du processus de fabrication sont compensées par des investissements dans des projets de protection du climat.
    
    En imprimant vert, vous faites une déclaration importante sur les engagements et les valeurs de votre entreprise en matière d'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite en pâte à papier à bas prix",
        desc: `Avec leur texture naturelle et non finie, les cartes de visite en pâte à papier offrent une alternative simple aux cartes de visite plastifiées plus formelles. Cette surface brute est la toile vierge parfaite pour les marques décontractées qui souhaitent exprimer des valeurs alternatives ou sans prétention.

        Ces cartes sont disponibles dans différentes tailles et avec un choix de coins carrés ou arrondis, apportant un sentiment d'individualité. Laissez vos contacts absorber vos coordonnées et votre marque d'un seul coup d'œil grâce à l'impression simple face, ou optez pour le recto-verso afin de maximiser votre message.
        
        Pour faciliter la création de votre carte de visite personnalisée, nous vous proposons des modèles gratuits et téléchargeables à utiliser sur Adobe Creative Cloud, ou sous forme de pdf simple à importer dans votre logiciel de création préféré.
        
        Par ailleurs, si vous êtes pressé par le temps ou si vous voulez quelque chose de très spécial, notre équipe de designers est à votre disposition pour vous aider à produire des illustrations qui reflètent votre marque tout en transmettant vos coordonnées.
        
        Une fois que vous avez décidé de l'aspect et de la convivialité de votre carte de visite en pâte à papier, envoyez-nous votre commande et nous nous mettrons immédiatement au travail pour l'imprimer.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 6,
    title: "Cartes de visite en kraft brun",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    formats: bcardFormats,
    base_price: 1100,
    category: impressCategories[2],
    cover: Bcard6,
    short_description: `Affirmez le style unique de votre marque avec les cartes de visite en kraft brun. Leur charme rustique et leur matériau kraft durable en font un produit robuste, parfait pour toute personne ou entreprise souhaitant se démarquer.

    Disponibles dans une gamme de formats populaires, elles offrent suffisamment d'espace pour les détails essentiels et un design vibrant. Plus qu'une simple carte, elles représentent la conscience environnementale, s'alignant sur les clients soucieux de l'environnement grâce à leurs qualités biodégradables et recyclables.
    
    Bénéficiez de produits à des prix compétitifs, de délais d'exécution rapides et d'une livraison gratuite dans tout le Royaume-Uni. L'emballage en marque blanche est utilisé en standard. Utilisez notre option de compensation carbone pour minimiser notre impact sur l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite en papier kraft à bas prix",
        desc: `Nous vous présentons nos cartes de visite en kraft brun, une union parfaite entre l'attrait organique et la solidité durable. Ces cartes, mesurant 85 x 55 mm, créent une plateforme distinctive pour votre marque, assurant une impression mémorable à chaque rencontre.

        Les cartes de visite Brown Kraft sont dérivées de "kraft", un mot allemand signifiant "force". Ce mot fait référence à l'histoire durable du papier kraft, introduit à la fin du XIXe siècle et toujours réputé pour sa robustesse aujourd'hui. La solidité du matériau garantit la durabilité de votre carte de visite, ce qui permet à votre message de rester intact et percutant.
        
        Ces cartes vont au-delà de la simple fonctionnalité, car elles présentent l'aspect brut et prêt à l'emploi du papier kraft brun non blanchi et non raffiné. Cette allure organique accentue votre design, créant un contraste saisissant avec la toile de fond terreuse. La texture unique ajoute une dimension tactile à vos interactions commerciales et contribue à incarner les aspects naturels et dignes de confiance de votre marque
        
        Le choix d'un papier kraft brun souligne votre engagement en faveur du développement durable. Ces cartes, recyclables et biodégradables, trouvent un écho auprès des publics contemporains sensibles à l'environnement et vous présentent comme une marque consciente et responsable.
        
        Nos options d'impression de haute qualité et l'outil polyvalent "Créez votre propre carte" facilitent votre créativité et vous permettent de réaliser des conceptions en couleur qui se démarquent. Que vous préfériez une conception recto ou recto-verso, notre gamme de modèles en ligne et notre assistance interne à la conception garantissent un aspect professionnel à vos cartes.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 7,
    title: "Cartes de visite en aluminium",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    formats: bcardFormats,
    base_price: 1900,
    category: impressCategories[2],
    cover: Bcard7,
    short_description: `Faites briller votre design sur une carte de visite professionnelle à l'aspect luxueux. Les cartes de visite en aluminium mettent en valeur votre marque tout en ajoutant une couche de texture, de définition et de qualité.

    Cultivez des relations d'affaires à long terme grâce à notre impression sur film solide et durable. Choisissez parmi une grande variété de couleurs d'impression, appliquées avec précision pour que vos cartes aient un statut spécial.
    
    Comme pour tous nos produits, vous bénéficiez de prix compétitifs, de délais d'exécution rapides et d'une livraison gratuite au Royaume-Uni. Choisissez Solopress pour l'emballage en marque blanche et la possibilité de compenser les émissions de carbone, garantissant ainsi des solutions d'impression durables.
    
    <strong>Remarque :</strong> une fois votre commande passée, vous recevrez une épreuve pour approbation. Nous ne pourrons respecter la date de livraison indiquée que si vous nous communiquez votre approbation avant la date limite fixée. Votre date de livraison sera confirmée une fois votre approbation reçue.
    
    <strong>Comment fournir la maquette :</strong> Veuillez fournir toutes les illustrations dans un seul document PDF, avec des pages pour l'impression couleur conventionnelle en CMYK, suivies de pages séparées pour les zones de film indiquées par des zones en noir uni dans un format vectoriel. Lorsque vous téléchargez votre maquette, utilisez le champ NOTES pour nous indiquer comment vous avez agencé votre PDF (par exemple, page 1 : Face 1 CMJN, page 2 : Face 2 CMJN, page 3 : Face 1 Foil).`,

    full_description: [
      {
        title: "Impression de cartes de visite avec film plastique à bas prix",
        desc: `Lorsque vous distribuez vos cartes de visite en aluminium de haute qualité à des cadres ou à des clients potentiels, ils sont immédiatement frappés par le prestige de ce que vous offrez. Elles constituent un excellent moyen d'échanger des coordonnées et de laisser une impression durable qui brille dans l'esprit de ceux qui les reçoivent.

        Ces cartes de visite de luxe montrent à quel point vous prenez les détails au sérieux. Nous prenons également les détails au sérieux, puisque notre dorure peut être appliquée avec une précision allant jusqu'à des lignes fines de 0,5 mm.
        
        Personnalisez vos cartes grâce à un large éventail d'options. Outre les cartes de visite en or rose, en argent et en or, nous proposons une variété d'options de couleurs qui attirent l'attention. Choisissez parmi une large sélection de formats de cartes de visite, avec la possibilité d'imprimer en recto ou en recto-verso pour un effet maximal.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 8,
    title: "Cartes de visite texturées",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    base_price: 1900,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard8,
    short_description: `Allez à contre-courant et donnez à vos cartes de visite un aspect tactile. Les clients et les contacts sentiront la différence et reconnaîtront immédiatement votre souci du détail et votre engagement en faveur de l'originalité.

    Les cartes de visite texturées vous permettent d'exprimer les valeurs de votre marque sans même prononcer un mot, qu'il s'agisse d'une texture rustique ou d'un motif technique précis. Choisissez parmi notre large gamme de formats pour montrer à quel point votre marque est unique.
    
    Chaque commande est assortie de prix bas et d'une livraison gratuite en France. Profitez de délais d'exécution rapides et d'un emballage en marque blanche. Profitez de notre option de compensation carbone pour prouver votre engagement écologique.`,

    full_description: [
      {
        title: "Impression de cartes de visite texturées à bas prix",
        desc: `Sentez la différence grâce à la texture forte, cohérente et de haute qualité que donnent ces cartes de visite.

        Les cartes de visite texturées expriment le soin que vous apportez à votre petite entreprise grâce à la nature individuelle de ces cartes. Cette impression unique et complexe ne manquera pas d'être remarquée par vos clients.
        
        Imprimées sur du tweed texturé 400 g/m², ces cartes offrent une solution durable pour communiquer vos coordonnées à vos clients.
        
        Ces cartes sont disponibles en impression simple ou double face dans une large sélection de formats de cartes de visite. Choisissez entre un format standard de 85 x 55 mm et un format mini de 85 x 25 mm pour y étaler vos superbes illustrations en couleur.
        
        Nous vous donnons le contrôle de votre design. Choisissez entre les coins carrés traditionnels et les coins arrondis spéciaux pour compléter vos cartes de visite texturées.
        
        Vous pouvez créer votre propre maquette. Toutefois, n'ayez crainte si la création de vos imprimés n'est pas votre spécialité. Notre équipe de concepteurs internes qualifiés est là pour vous aider si vous avez besoin d'un coup de main.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 9,
    title: "Cartes de visite métalliques",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    base_price: 1900,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard9,
    short_description: `Les cartes de visite métallisées brillantes et audacieuses sont une option énergisante pour une gamme polyvalente de marques. Déployées de manière créative, les cartes de visite à finition métallique peuvent servir de nombreuses ambiances.

    Selon la façon dont vous choisissez de présenter votre design, elles peuvent être audacieuses ou ornées, techniques ou glamour, très professionnelles ou très amusantes.
    
    Explorez notre gamme de papiers irisés qui donnent de la personnalité à vos données personnelles.
    
    Avec des prix bas et une expédition gratuite dans tout le Royaume-Uni, vous bénéficierez d'une livraison rapide et d'un emballage en marque blanche. Chaque commande vous permet de compenser les émissions de carbone associées à votre commande pour une solution d'impression durable.`,

    full_description: [
      {
        title: "Impression de cartes de visite métalliques à bas prix",
        desc: `L'utilisation d'un papier irisé comme toile de fond pour vos cartes de visite métalliques vous donne un avantage, avant même qu'une goutte d'encre ne soit appliquée.

        Les papiers irisés roses et bleus prennent vie en tant qu'arrière-plan ou en tant que support pour une impression contrastée. Vous pouvez même essayer un motif sur toute la surface pour une juxtaposition frappante de couleurs et de textures.
        
        Pour ceux qui souhaitent créer leurs propres illustrations, nous mettons à leur disposition une gamme complète de modèles de cartes de visite téléchargeables à utiliser dans Photoshop, Illustrator ou InDesign. Il existe également une version pdf qui peut être importée dans d'autres programmes de conception graphique.
        
        Si vous préférez, notre outil "Créez votre propre carte" vous permet de concevoir vos propres cartes de visite en ligne, grâce à une série de modèles prêts à l'emploi auxquels vous pouvez ajouter votre propre logo et vos coordonnées.
        
        Pour une expérience de conception professionnelle vraiment personnalisée, vous pouvez choisir de demander à notre équipe de graphistes de créer une carte de visite pour vous à partir de votre cahier des charges.`,
      },
    ],
    caracteristics: [],
  },

  /* *****************************
   * B CARD BY TYPE****************
   ********************************/
  {
    id: 10,
    title: "Cartes de visite à coins arrondis",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY TYPE",
    base_price: 1900,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard10,
    short_description: `Oubliez les coins nets et optez pour le rétro, l'ultra-moderne ou montrez simplement votre côté plus doux avec les cartes de visite à coins arrondis. Nous proposons des coins arrondis sur une large sélection de notre gamme de cartes de visite, depuis les cartes économiques jusqu'à nos cartes plastifiées les plus populaires.

    Choisissez parmi une vaste sélection de types de papier et réalisez votre superbe design en impression simple ou double face.
    
    En commandant chez Solopress, vous bénéficiez de prix avantageux, d'une livraison gratuite au Royaume-Uni et d'un délai d'exécution rapide. L'emballage en marque blanche est standard, et notre option de compensation carbone vous aide à soutenir l'impression durable.`,

    full_description: [
      {
        title: "Impression de cartes de visite à coins arrondis à bas prix",
        desc: `Les cartes de visite Round Corner permettent d'alléger les formalités lors de l'échange d'informations dans le cadre d'événements de réseautage.

        Ces cartes accrocheuses constituent une alternative fantastique pour les marques distinctives qui cherchent à perturber les conventions étouffantes par leur approche originale.
        
        Vos cartes de visite à coins arrondis sont disponibles dans un format généreux de 85 x 55 mm et votre design peut être imprimé en simple ou double face. En outre, vous pouvez choisir d'ajouter des coins arrondis à une sélection de notre gamme existante.
        
        Imprimez sur une vaste sélection de papiers de haute qualité. Notre variété de textures tactiles comprend le laminé mat, la soie et la pâte à papier, le tout sur une large gamme d'épaisseurs de papier.
        
        Vous pouvez imprimer plusieurs versions différentes de vos cartes de visite, de sorte que les collègues sont couverts lorsque vous souhaitez un certain nombre de jeux différents.
        
        Nous disposons d'une équipe exceptionnelle de designers internes prêts à produire votre superbe impression si la conception n'est pas dans vos cordes. Vous pouvez également utiliser notre outil de conception en ligne pour créer gratuitement vos propres cartes de visite avec des coins arrondis.`,
      },
    ],
    caracteristics: [
      "Finition lisse de votre carte de visite",
      "Taille compacte de 85 x 55 mm pour un partage facile",
      "Imprimer des cartes recto ou recto-verso",
    ],
  },

  {
    id: 11,
    title: "Cartes de visite carrées",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY TYPE",
    base_price: 1300,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard11,
    short_description: `Êtes-vous une cheville carrée dans un trou rond ? Les cartes de visite standard ne correspondent pas à votre style ? Les cartes de visite carrées vous offrent l'impression parfaite pour montrer le style unique de votre marque tout en vous présentant sous un jour professionnel.

    Leurs dimensions de 55 x 55 mm vous permettent de vous mettre en valeur tout en laissant de la place aux éléments essentiels. Transformez chaque rencontre en opportunité avec des cartes de visite carrées qui vous démarquent de vos concurrents.
    
    Comme pour tous nos produits, vous bénéficiez de prix compétitifs, de délais d'exécution rapides et d'une livraison gratuite en France. Choisissez Solopress pour l'emballage en marque blanche et la possibilité de compenser les émissions de carbone, garantissant ainsi des solutions d'impression durables.`,

    full_description: [
      {
        title: "Impression de cartes de visite carrées à bas prix",
        desc: `Découvrez un outil de réseautage unique avec nos cartes de visite carrées. D'une taille de 55 x 55 mm, ces cartes s'écartent de la norme et offrent une plateforme distinctive pour exprimer l'identité de votre marque.

        Nos cartes de visite carrées ne sont pas seulement uniques par leur forme, elles font également preuve d'originalité. Elles offrent suffisamment d'espace pour vos coordonnées, votre logo et le message de votre marque, garantissant ainsi une impression mémorable.
        
        Nos cartes se distinguent par une impression de haute qualité, combinée à une gamme variée de papiers, afin que vous puissiez exprimer votre professionnalisme dans les moindres détails. Choisissez le type de papier et la finition qui vous conviennent le mieux pour compléter votre carte de visite carrée.
        
        Consultez les modèles téléchargeables gratuitement ci-dessous pour vous aider à concevoir votre carte dans Photoshop, Illustrator ou InDesign. Vous pouvez également utiliser notre outil "Créez votre propre carte" et concevoir votre carte en ligne avec nous. Si vous avez besoin d'aide pour créer votre maquette, nos concepteurs internes sont prêts à vous aider.
        
        Toutes les adresses au Royaume-Uni bénéficient d'une livraison gratuite, ce qui vous permet de vous procurer encore plus facilement ces cartes uniques.`,
      },
    ],
    caracteristics: [
      "Cartes au format 55 x 55 mm",
      "Coins carrés",
      "Choisissez parmi notre gamme complète de papier",
    ],
  },

  {
    id: 12,
    title: "Mini cartes de visite",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY TYPE",
    formats: bcardFormats,
    base_price: 1350,
    category: impressCategories[2],
    cover: Bcard12,
    short_description: `Petites par leur nom mais pas par leur impact, les mini-cartes de visite sont une option puissante pour tout individu ou entreprise. Leur format réduit unique permet de les ranger facilement, ce qui garantit que votre marque est toujours à portée de main. Les mini-cartes de visite sont une solution rentable qui permet de tirer le meilleur parti de chaque réunion ou rencontre fortuite.

    D'une taille de 85 x 25 mm, leur polyvalence va au-delà du réseautage, puisqu'elles peuvent servir de superbes étiquettes de produits, de rappels de rendez-vous ou de cartes de fidélité, offrant ainsi des possibilités infinies. Choisissez des cartes de visite de petite taille pour faire forte impression.
    
    Chaque commande est assortie de prix compétitifs, de délais d'exécution rapides et d'une livraison gratuite au Royaume-Uni. Profitez de l'emballage en marque blanche et de l'option de compensation carbone, pour des solutions d'impression durables.`,

    full_description: [
      {
        title: "Impression de cartes de visite à bas prix",
        desc: `Découvrez la puissance de nos mini-cartes de visite, où la taille n'a vraiment pas d'importance. Mesurant 85 x 25 mm, ces cartes vous permettent de vous démarquer lors de chaque interaction. Leur format portable permet de les ranger et de les rendre accessibles facilement, ce qui est parfait pour le professionnel moderne.

        Nos mini-cartes de visite sont peut-être petites, mais elles ont un impact énorme. Malgré leur taille, elles offrent suffisamment d'espace pour vos informations essentielles. Leur design encourage la créativité et vous permet de vous concentrer sur l'essence de votre identité de marque.
        
        La combinaison d'une impression de haute qualité et d'options soigneusement sélectionnées en matière de matériaux et de finitions vous permet d'afficher votre professionnalisme au premier coup d'œil. Choisissez parmi notre large sélection de papiers et d'options de pelliculage pour compléter la conception de votre carte de visite.
        
        Créez des designs en couleur vraiment uniques grâce à notre outil convivial "Créez votre propre carte". Que vous préfériez une conception recto ou recto-verso, nos modèles de conception en ligne gratuits comportent des éléments graphiques et des mises en page qui ont fait leurs preuves, garantissant ainsi des résultats professionnels.
        
        Toutes les cartes de visite imprimées sont livrées gratuitement au Royaume-Uni.`,
      },
    ],
    caracteristics: [
      "Cartes élégantes de 85 x 25 mm",
      "Imprimé sur une ou deux faces",
      "Une option élégante et peu encombrante",
    ],
  },

  {
    id: 13,
    title: "Cartes de fidélité",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY TYPE",
    base_price: 1550,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard13,
    short_description: `Fidélisez votre marque en récompensant les clients qui reviennent. Lorsque vous offrez un cadeau, un avantage spécial ou une réduction, vous incitez votre clientèle à revenir encore et encore. En établissant une relation de confiance avec les clients qui gagnent leur prix, vous pouvez également les fidéliser longtemps après que leur carte de fidélité a été tamponnée.

    Nous proposons une large gamme de formats afin que vous puissiez personnaliser le nombre d'achats nécessaires à vos clients avant qu'ils ne gagnent leur récompense. Toutes les cartes de fidélité imprimées sont livrées gratuitement au Royaume-Uni.
    
    <strong>Remarque :</strong> si vous souhaitez tamponner vos cartes de fidélité, nous vous recommandons de choisir notre papier 380mic Pulp. Tout autre type de papier ne retiendra que l'encre permanente.`,

    full_description: [
      {
        title: "Impression de cartes de fidélité à bas prix",
        desc: `Créer une base de clients fidèles peut être un défi. En imprimant des cartes de fidélité, vous rendez ce défi réalisable.

        Si vos clients aiment déjà payer pour quelque chose, fixez-leur un objectif réaliste qui les incite à renouveler leurs achats. Vous constaterez que vous créez ainsi une base de clients fidèles et dévoués, susceptibles de revenir plus souvent.
        
        Après tout, les clients qui consomment de la caféine sont plus susceptibles de rester hyperactifs face à la tentation d'une carte de fidélité pour le café.
        
        Nous proposons plusieurs types de papier dans un large choix de formats, ce qui vous permet de personnaliser le nombre d'achats que vos clients doivent effectuer avant de recevoir leur récompense.
        
        Choisissez le format de votre carte de fidélité, de la carte standard 85 x 55 mm à la carte mini 85 x 25 mm.
        
        Imprimez-la en recto ou en recto-verso pour encourager la fidélité de vos clients et maximiser les chances que votre entreprise ou votre café devienne un élément incontournable de leur routine.
        
        N'hésitez pas à concevoir votre propre maquette. Toutefois, si vous avez besoin d'aide pour créer votre design, notre talentueuse équipe de designers internes est tout à fait capable de donner vie à votre vision en utilisant la même structure de prix que lorsqu'ils conçoivent des cartes de visite.
        
        Chaque commande de cartes de fidélité professionnelles est livrée gratuitement à toutes les adresses au Royaume-Uni.`,
      },
    ],
    caracteristics: [
      "Cartes de timbres de qualité pour la fidélisation de la clientèle",
      "Parfait pour les cafés et les détaillants",
      "Impression simple ou double face",
    ],
  },

  {
    id: 14,
    title: "Cartes de visite pliées",
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY TYPE",
    base_price: 1550,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard14,
    short_description: `Pour les marques distinctives qui ont beaucoup à dire, les cartes de visite pliées offrent deux fois plus d'espace pour travailler, et un point de différence pour vous distinguer de vos concurrents.

    La structure pliée offre la possibilité de faire une grande révélation. Vous pouvez utiliser cet espace de manière créative pour introduire un élément surprise, fournir un texte supplémentaire ou afficher un composant graphique étendu qui aide à exprimer le message de votre marque.
    
    Chaque commande est assortie de prix bas et d'une livraison gratuite au Royaume-Uni. Profitez de délais d'exécution rapides et d'un emballage en marque blanche. Profitez de notre option de compensation carbone pour prouver votre engagement écologique.`,

    full_description: [
      {
        title: "Cartes de visite pliées à bas prix",
        desc: `Avec deux fois plus de surface imprimable, l'impression de cartes de visite pliées vous offre tout l'espace supplémentaire dont vous avez besoin pour présenter votre offre et exprimer les valeurs de votre marque.

        Cet espace supplémentaire est inestimable lorsque vous avez beaucoup de choses à dire en plus de vos coordonnées. Si vos arguments de vente ont besoin d'être expliqués, vous disposez de beaucoup d'espace pour allonger le texte. Si votre secteur d'activité met l'accent sur l'aspect visuel, vous pouvez donner à vos concepteurs une plus grande marge de manœuvre pour enrichir votre carte d'une illustration attrayante.
        
        Si vous préférez vous charger vous-même de la conception, nous vous proposons de télécharger des modèles de cartes de visite pliées à ouvrir dans Photoshop, Illustrator et InDesign, ou au format PDF.
        
        Vous pouvez également consulter notre outil "Créez votre propre carte" et choisir l'un de nos modèles prêts à l'emploi pour créer votre propre carte.
        
        Pour l'impression de cartes de visite sur mesure, Solopress dispose également d'une équipe de designers talentueux qui sont toujours prêts à travailler sur votre projet.
        
        Nos cartes de visite pliables de haute qualité sont pliées avant l'expédition, prêtes à être pliées. Elles sont fournies à plat et livrées gratuitement au Royaume-Uni.`,
      },
    ],
    caracteristics: [
      "Différents plis et tailles disponibles",
      "Fourni à plat et plié en place",
      "Plus d'espace pour des informations supplémentaires sur votre carte",
    ],
  },

  {
    id: 15,
    title: "Cartes de visite perforées",
    type: "BY TYPE",
    product: ProductLibelle.BUSINESS_CARD,
    base_price: 1150,
    formats: bcardFormats,
    category: impressCategories[2],
    cover: Bcard15,
    short_description: `Créez un impact important en combinant le matériel promotionnel de votre marque avec vos propres coordonnées. Utilisez les cartes de visite perforées à deux volets, à la fois pour inspirer les clients avec des illustrations détaillées sur votre entreprise et pour les encourager à vous contacter.

    Chaque commande comprend des prix bas, une livraison fiable au Royaume-Uni et des délais d'exécution rapides. Bénéficiez d'un emballage sans marque, en marque blanche, et de l'option de compensation des émissions de carbone, afin de promouvoir une impression respectueuse de l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite perforées à bas prix",
        desc: `Chez Solopress, notre mission est de vous faire connaître, vous et votre entreprise. Alors pourquoi se contenter d'une carte standard pour faire votre promotion alors qu'un peu de créativité peut faire beaucoup avec une carte de visite perforée ?

        Nos cartes perforées sont imprimées sur les deux faces, découpées au format 110 x 55 mm et coupées au milieu pour créer deux pièces de 55 x 55 mm. Vous pouvez inclure le logo de votre entreprise sur une face, ou promouvoir une offre spéciale, et vous assurer que vos coordonnées sont clairement imprimées sur l'autre face.
        
        Utilisez-les pour détailler des concours, des tirages au sort ou des événements spéciaux, et incluez votre carte de visite détachable pour que les clients aient quelque chose à mettre dans leur portefeuille.
        
        Si vous êtes en panne d'inspiration, notre équipe de designers peut vous aider à concevoir une carte de visite unique qui fera passer votre message et laissera vos clients avec une carte détachable contenant vos coordonnées. Si vous savez exactement ce que vous voulez dire, essayez notre modèle facile à utiliser pour concevoir vos propres cartes, et profitez de notre livraison gratuite le lendemain.d`,
      },
    ],
    caracteristics: [
      "Choisissez une à quatre perforations",
      "Idéal pour attacher des bons et des tickets",
      "Large choix de types de cartes de visite",
    ],
  },
];

/* *********** Brochures **************** */
const brochures: BrochureProps[] = [
  /* brochure type EXPRESS */
  {
    id: 1,
    title: "Brochure A4 fermée – Paysage",
    product: ProductLibelle.BROCHURE,
    base_price: 2500,
    format: "59.4x21 cm ouvert - A4 fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure1,
    short_description: `Découvrez notre service d'impression de brochures haut de gamme pour mettre en valeur votre entreprise ou votre événement. Avec notre option "Brochure A4 fermée – Paysage", au format 59.4x21 cm ouvert et A4 fermé, démarquez-vous avec un support visuel élégant et professionnel. 

    Que ce soit pour présenter vos produits, promouvoir vos services ou communiquer sur un événement spécial, notre impression de brochure garantit une qualité irréprochable et un rendu visuel saisissant. Confiez-nous votre projet et laissez-nous transformer vos idées en une brochure qui fera sensation.
    
    Faites bonne impression dès le premier coup d'œil avec notre service d'impression de brochures sur mesure.`,
    full_description: [],
    caracteristics: [],
  },
  {
    id: 2,
    title: "Brochure Express 21 x 21 cm fermé",
    product: ProductLibelle.BROCHURE,
    base_price: 1000,
    format: "42 x 21 cm ouvert - 21 x 21 cm fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure2,
    short_description: `Découvrez notre service d'impression de brochures ultra-rapide, le "Brochure Express 21 x 21 cm fermé". Avec des dimensions parfaites de 42 x 21 cm ouvert et 21 x 21 cm fermé, cette brochure est idéale pour présenter votre entreprise, vos produits ou vos événements de manière professionnelle et percutante.

    Grâce à notre technologie d'impression de pointe, nous garantissons une qualité exceptionnelle pour mettre en valeur vos contenus. Commandez dès maintenant et bénéficiez d'une livraison rapide pour vous démarquer avec style !`,
    full_description: [
      {
        title: "",
        desc: `La <strong>brochure</strong> est un outil de communication indispensable pour présenter vos produits ou votre activité en détail.

        La brochure 21 x 21 est idéale pour l’impression de vos documents de présentation de vos produits et services. <strong>Le brochage 2 points métal</strong> est une confection permettant d’assembler vos documents par le centre. Cela permet d’ouvrir facilement votre brochure imprimée. A destination de vos clients professionnels ou particuliers, il est  facile de le transporter et de le distribuer.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert 42 x 21 cm",
      "Format fermé 21 x 21 cm",
      "Plié agraphé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },

  {
    id: 3,
    title: "Brochure Express A4 fermée",
    product: ProductLibelle.BROCHURE,
    base_price: 1500,
    format: "A3 ouvert - A4 fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure3,
    short_description: `Offrez à votre entreprise une visibilité exceptionnelle avec notre service d'impression de brochures "Brochure Express A4 fermée". 

    Conçue pour captiver l'attention de vos clients, cette brochure au format A3 ouvert et A4 fermé offre un support idéal pour présenter vos produits, services ou événements de manière percutante et professionnelle. Grâce à notre processus d'impression rapide et de haute qualité, vous pouvez obtenir des brochures impeccables en un temps record.
    
    Démarquez-vous de la concurrence et faites briller votre entreprise avec notre solution d'impression de brochures de qualité supérieure !`,
    full_description: [
      {
        title: "Pourquoi Opter Pour L’impression De Brochures En Express ?",
        desc: `Les brochures s’avèrent être un moyen efficace pour promouvoir votre entreprise ou vos produits, mais il peut parfois être délicat d’être préparé à temps pour des événements cruciaux ou des présentations importantes. C’est précisément là que l’impression express de brochures entre en jeu. En choisissant cette solution, vous garantissez une préparation rapide de vos brochures, répondant ainsi avec célérité à vos impératifs les plus pressants.`,
      },
      {
        title: "Quels Sont Les Avantages De L’impression De Brochures En A4 ?",
        desc: `L’impression de brochures en A4 peut offrir de nombreux avantages par rapport à d’autres formats. Le format A4 est un choix populaire car il est facile à lire et à manipuler, et il peut être imprimé à un coût raisonnable. De plus, les brochures en A4 peuvent être facilement pliées pour s’adapter à vos besoins de présentation.
        `,
      },
      {
        title:
          "Comment Préparer Votre Fichier Pour L’impression De Brochures En Express ?",
        desc: `Pour préparer votre fichier pour l’impression de brochures en express, il est important de fournir un fichier numérique de haute qualité. Ainsi, vous pouvez vous assurer que votre brochure sera imprimée rapidement et avec la qualité souhaitée. L’impression de brochures en express peut être un moyen efficace de promouvoir votre entreprise ou votre produit de manière rapide et professionnelle. En optant pour l’impression en A4, vous pouvez bénéficier d’un format facile à lire et à manipuler, ainsi que d’un coût raisonnable. Assurez-vous de préparer correctement votre fichier pour l’impression pour garantir un produit final de qualité.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert A3 (42 x 29,7 cm)",
      "Format fermé A4 (21 x 29,7 cm)",
      "Plié agrafé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },

  {
    id: 4,
    title: "Brochure Express A5 fermé",
    product: ProductLibelle.BROCHURE,
    base_price: 1250,
    format: "A4 ouvert - A5 fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure4,
    short_description: `Découvrez notre service d'impression de brochures rapide et efficace avec notre nouvelle offre, la "Brochure Express A5 fermé". Avec des dimensions parfaites de A4 ouvert et A5 fermé, cette brochure compacte est parfaite pour présenter vos produits, services ou événements de manière professionnelle et impactante. Grâce à notre processus d'impression de haute qualité, vos designs seront reproduits avec une netteté exceptionnelle et des couleurs éclatantes. 

    Commandez dès maintenant pour une communication visuelle qui fera sensation et attirera l'attention de vos clients potentiels !`,
    full_description: [
      {
        title: "",
        desc: `<strong>Brochure A5 fermé</strong> imprimée à votre image. Ce support de communication est idéal pour faire connaitre votre entreprise auprès de professionnels ou particuliers. La brochure personnalisée est composée de brochage 2 points métal qui permet d’assembler vos documents au centre. Ce système permet une ouverture facile de votre document.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert A4 (21 x 14,85 cm)",
      "Format fermé A5 (10,5 x 21 cm)",
      "Plié agrafé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },

  {
    id: 5,
    title: "Brochure Express A6 fermé",
    product: ProductLibelle.BROCHURE,
    base_price: 1250,
    format: "A5 ouvert - A6 fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure5,
    short_description: `Découvrez notre service d'impression de brochures rapide et efficace avec notre nouvelle offre, la "Brochure Express A6 fermé". Avec des dimensions parfaites de A4 ouvert et A5 fermé, cette brochure compacte est parfaite pour présenter vos produits, services ou événements de manière professionnelle et impactante. Grâce à notre processus d'impression de haute qualité, vos designs seront reproduits avec une netteté exceptionnelle et des couleurs éclatantes. 

    Commandez dès maintenant pour une communication visuelle qui fera sensation et attirera l'attention de vos clients potentiels !`,
    full_description: [
      {
        title: "",
        desc: `<strong>La brochure</strong> est un outil de communication indispensable pour présenter vos produits ou votre activité en détail.
        Imprimez une brochure 100% personnalisable pour vos documents commerciaux et pour présenter vos produits.Ce support de communication est idéal pour présenter vos produits auprès de professionnels ou de particuliers. Il est relié par un brochage de 2 points métal avec une confection permettant d’assembler vos documents au centre. Cela permet une ouverture facile de votre brochure imprimée.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert A5 (21 cm x 14,85 cm)",
      "Format fermé A6 (14,85 cm x 10,5)",
      "Plié agrafé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },
  /* brochure type STANDARD */
];

const brochurePageNumber: MetaDataProps[] = [
  {
    price: 1200,
    libelle: "8 pages (2 feuilles recto/verso)",
  },
  {
    price: 2000,
    libelle: "12 pages (3 feuilles recto/verso)",
  },
  {
    price: 2520,
    libelle: "16 pages (4 feuilles recto/verso)",
  },
  {
    price: 2920,
    libelle: "20 pages (5 feuilles recto/verso)",
  },
  {
    price: 3100,
    libelle: "24 pages (6 feuilles recto/verso)",
  },
  {
    price: 3300,
    libelle: "28 pages (7 feuilles recto/verso)",
  },
  {
    price: 3500,
    libelle: "32 pages (8 feuilles recto/verso)",
  },
  {
    price: 3800,
    libelle: "36 pages (9 feuilles recto/verso)",
  },
];

const brochurePrintingSide: MetaDataProps[] = [
  {
    libelle: "Couleur Recto / Verso",
    price: 2250,
  },
  {
    libelle: "Blanc-noir Recto / Verso",
    price: 1350,
  },
];

/* roll up */
const rollups: RollupProps[] = [
  {
    id: 1,
    title: "Roll Up 85 x 200 cm",
    product: ProductLibelle.ROLLUP,
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller1,
    format: "85 x 200 cm",
    base_price: 12500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 85×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "Le Roll Up 85×200 Est L’outil De Communication Idéal",
        desc: `<strong>Le roll up 85×200</strong> est un véritable moyen de communication à lui tout seul. Économique et efficace, il est idéal pour tous types d’entreprises ou d’organisations. Ainsi, généralement imprimé pour des événements en extérieur ou en intérieur. Le roll up est une <strong>grande affiche</strong> qui impacte directement votre clientèle ou vos prospects. C’est pourquoi, Il permet de mettre en avant facilement une <strong>offre promotionnelle</strong> sur vos produits. D’autre part, le roll-up personnalisé est également apprécié par les entreprises pour lancer un nouveau produit. Grâce à ça structure solide et compacte, le stand est monté en quelques minutes pour une installation rapide de votre publicité sur le lieu de votre manifestation. De plus, le roll up 85×200 a l’avantage de maintenir durablement votre impression.`,
      },
      {
        title: "",
        desc: `Apprécié par les professionnels, il est disponible sous de multiple formats : le 85×200 cm étant le standard de la gamme offrant ainsi le meilleur rapport qualité/prix. Ce <strong>kakemono avec enrouleur</strong> est un outil idéal pour diffuser votre message clairement. Esthétique et efficace, ce support imprimé en recto est solide face aux intempéries (vent, pluie et soleil).`,
      },
      {
        title: "Impression Roll Up Personnalisé En Ligne",
        desc: `Facile et simple, il suffit de fournir votre visuel de roll up 85×200 au format pdf via interface en ligne. Ainsi, notre équipe de professionnel à Nice traitera votre demande pour un résultat en HD dans les plus brefs délais.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 440 gr",
      "Impression recto couleur haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },
  {
    id: 2,
    product: ProductLibelle.ROLLUP,
    title: "Roll Up 100×200 cm",
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller2,
    format: "100 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 100×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title:
          "Le Roll-Up : La Solution Idéale Pour Les Entreprises En Déplacement",
        desc: `Un roll up 100×200 cm est un support de communication visuelle portable et pratique. Il se compose d’un support enroulable sur lui-même, généralement en aluminium, sur lequel est fixée une bâche imprimée à votre image. Le rollup est facile à installer et à déplacer, ce qui en fait un choix populaire pour les expositions, les foires commerciales, les événements promotionnels et les présentations de produits.La bannière du roll up est imprimée en haute résolution pour offrir une qualité d’image professionnelle. Elle peut être personnalisée selon les besoins de chaque client, avec le logo, les images et le texte de leur choix.`,
      },
      {
        title:
          "La Solution Du Roll-Up Publicitaire Pratique Pour Tous Vos Besoins",
        desc: `Le roll up est équipé d’un mécanisme de tendeur qui permet de tendre la bannière pour qu’elle soit parfaitement tendue lors de l’utilisation. Il est également équipé d’un système de verrouillage pour maintenir la bannière enroulée lors du transport et de la rangement.
        En résumé, le roll up est un outil de communication visuelle pratique, portable et facile à utiliser, idéal pour les expositions, les foires commerciales et les événements promotionnels. Il permet d’afficher des images de qualité professionnelle de manière simple et rapide.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 440 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 3,
    product: ProductLibelle.ROLLUP,
    title: "Roll Up 120 x 200 cm",
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller3,
    format: "120 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 120×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "ROLL UP PUBLICITAIRE : UN OUTIL DE COMMUNICATION EFFICACE",
        desc: `Le roll-up publicitaire est un outil de communication efficace pour promouvoir votre entreprise ou votre événement. Faciles à installer et à transporter, les roll-up sont des supports publicitaires pratiques qui attirent l’attention de votre public cible. Que vous soyez une petite entreprise ou une grande entreprise, les roll-up publicitaires sont un choix judicieux pour maximiser votre visibilité et votre impact. En effet, il permet de diffuser un message publicitaire de manière rapide et simple. Grâce à leur format compact et léger, les roll-up peuvent être utilisés dans de nombreuses situations différentes, que ce soit lors d’un salon professionnel, d’une conférence, d’une exposition ou d’un événement public.`,
      },
      {
        title: "CRÉER SON UN ROLL UP PUBLICITAIRE",
        desc: `Pour créer un roll-up publicitaire infaillible, il est important de choisir le bon format et le bon design. Le format doit être adapté à l’emplacement dans lequel vous prévoyez d’afficher le roll-up, tandis que le design doit refléter votre image de marque et attirer l’attention de votre clientèle. Les couleurs, les polices et les images doivent être soigneusement choisies pour créer un visuel attractif et facile à lire. Il est également important d’inclure des informations claires et concises sur le roll-up publicitaire. Les messages doivent être simples et directs pour que le public puisse facilement comprendre ce que vous offrez et ce que vous attendez d’eux. N’oubliez pas d’inclure votre logo et vos coordonnées pour que les gens puissent vous contacter facilement.`,
      },
      {
        title:
          "LE KAKEMONO PUBLICITAIRE : UN SUPPORT IDÉAL POUR UNE VISIBILITÉ OPTIMALE",
        desc: `Ainsi, pour maximiser l’impact de votre roll-up publicitaire, assurez-vous de l’afficher dans un endroit stratégique où les prospects sont susceptibles de le voir. Quel que soit l’événement, un roll-up publicitaire bien conçu peut faire la différence et attirer l’attention. Les roll-up publicitaires sont particulièrement intéressants pour les petites entreprises, car ils permettent de maximiser leur visibilité sans avoir à investir des sommes importantes dans des campagnes publicitaires coûteuses. Ils peuvent également être utilisés par les grandes entreprises pour compléter leur stratégie de communication et pour renforcer leur image de marque. Dans tous les cas, les roll-up publicitaires permettent de toucher un large public et de diffuser efficacement un message publicitaire.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 4,
    title: "Roll Up 150 x 200 cm",
    product: ProductLibelle.ROLLUP,
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller4,
    format: "150 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 150×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "",
        desc: `Facile à installer et à déployer le roll up est léger, compact et robuste, idéal pour des utilisations fréquentes lors de vos événements.
        Le visuel de l’enrouleur imprimé en couleur mesure 2 mètres de haut sur 1,5 mètres de large, il est fixé par rail clippant sur la partie haute et amorce adhésive à la base.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 5,
    product: ProductLibelle.ROLLUP,
    title: "Roll Up 200 x 200 cm",
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller5,
    format: "200 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 200×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title:
          "Découvrez L’Impact Visuel Exceptionnel Avec Le Roll Up 200×200 !",
        desc: `À la recherche d’une solution publicitaire compacte et percutante ? Ne cherchez pas plus loin ! Notre Roll Up 200×200 est la réponse parfaite pour mettre en valeur votre message de manière efficace tout en conservant un format pratique. Avec ses dimensions optimales de 200×200 centimètres, ce roll up offre une visibilité exceptionnelle sans compromettre l’espace. Vous cherchez à faire une déclaration audacieuse ? Optez pour ce Roll Up Grand format, un moyen puissant de mettre en avant votre marque de manière spectaculaire. Avec des dimensions imposantes, ce support publicitaire est idéal pour créer une présence remarquable lors d’événements de grande envergure. Donnez de la visibilité à votre message et faites en sorte que votre entreprise se démarque avec ce média de qualité.        `,
      },

      {
        title: "Les Avantages Du Roll Up Grand Format :",
        desc: `1. <strong>Espace Généreux :</strong> Profitez d’une surface de 4 mètres carrés pour afficher vos visuels, messages promotionnels ou produits phares.
        2. <strong>Facilité de Transport :</strong> Malgré leur taille, les Roll Up 200×200 sont facilement transportables et peuvent être installés en quelques minutes, offrant ainsi une solution pratique pour vos événements.
        3. <strong>Personnalisation Totale :</strong> Exprimez pleinement votre identité visuelle grâce à la personnalisation complète de votre Roll Up. Choisissez des couleurs vibrantes, des graphiques percutants et des messages clairs pour un impact maximal.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 6,
    product: ProductLibelle.ROLLUP,
    title: "Roll Up 240 x 200 cm",
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller5,
    format: "240 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 240×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "Le Rollup grande taille",
        desc: `Le roll-up 240×200 cm est une solution pratique et polyvalente pour répondre à vos besoins en matière de présentation et d’affichage. Avec ses dimensions généreuses de 240 centimètres de largeur sur 200 centimètres de hauteur, il offre une surface d’affichage spacieuse qui captivera l’attention de votre public.Que vous organisiez une exposition, une conférence, un salon professionnel ou tout autre événement, le roll 240×200 cm est idéal pour mettre en valeur vos informations, vos graphiques et vos visuels. Son format étendu permet d’afficher du contenu détaillé avec clarté et lisibilité, assurant ainsi l’impact souhaité.`,
      },

      {
        title: "Un enrouleur de conception robuste et durable",
        desc: `La conception du rollup 240×200 cm est également très pratique. Il est équipé d’un système de rouleau intégré qui permet de l’enrouler et de le dérouler facilement. Cela facilite le transport et le rangement, vous offrant une solution portable et peu encombrante pour vos besoins d’affichage. De plus, le stand sur enrouleur 240×200 cm est imprimé sur de la bâche M1 pour offrir une grande durabilité. Fabriqué avec des matériaux de haute qualité, il résiste aux manipulations fréquentes et conserve son apparence professionnelle au fil du temps. Sa structure solide et stable assure une présentation sans faille, sans risque de s’affaisser ou de se renverser.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 7,
    title: "Roll Up 300 x 200 cm",
    product: ProductLibelle.ROLLUP,
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller6,
    format: "300 x 200 cm",
    base_price: 15000,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 300×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "",
        desc: `Facile à installer, léger et compact, un Roll-Up robuste, idéal pour des utilisations fréquentes lors vos événements ou manifestation.
La taille du visuel imprimé en couleur est de 3 mètres  sur  2, fixé par amorce adhésive à la base et rail clippant sur la partie haute.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },
  {
    id: 8,
    product: ProductLibelle.ROLLUP,
    title: "Roll Up recto/verso",
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller7,
    format: "85 x 200 cm",
    base_price: 15000,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 85×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "",
        desc: `Le roll-up est un moyen de communication économique pour accentuer votre visibilité. En effet, que ce soit pour votre communication interne ou externe, le roll up recto/verso est un support performant. Visible sur les 2 faces, ce support est un outil idéal pour transmettre un message dans votre entreprise ou dans un salon professionnel.`,
      },
      {
        title: "",
        desc: `De plus le roll up est un outil de qualité et facile à installer. Léger et compact, le roll up double face est parfait pour une utilisation fréquente. De plus, ce support à l’avantage d’avoir un double impact sur votre cible. En effet, le roll up recto/ verso permet de maintenir vos affiches sur la face avant et arrière du support. En plus selon vos objectifs, vous avez le choix de mettre des visuels identiques ou différents sur votre roll up. Enfin nous sécurisons les impressions de 2 mètres par amorce adhésive à la base et rail clippant sur la partie haute.`,
      },

      {
        title: "",
        desc: `Chez Fac Imprimeur nous réalisons dans notre atelier à Nice votre roll up double face personnalisé selon vos critères afin d’optimiser votre visibilité.`,
      },
    ],
    caracteristics: [
      "Les visuels sur bâche 440 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },
];

const rollupSupport: MetaDataProps[] = [
  {
    price: 2300,
    libelle: "Bâche 440 gr",
  },
  {
    price: 5000,
    libelle: "Bâche 510 gr",
  },
  {
    price: 5300,
    libelle: "Bâche 510 gr M1",
  },
];

/* Menus resto */
const menusResto: RestoProps[] = [
  {
    id: 1,
    title: "Set de table plastifié",
    product: ProductLibelle.MENU_RESTORE,
    format: "A4",
    base_price: 15700,
    category: impressCategories[7],
    cover: Resto1,
    type: "MENU RESTO",
    short_description: `<strong>Élégance Pratique : Découvrez notre Set de Table Plastifié Personnalisable</strong>
Optez pour un set de table plastifié, alliant praticité et style. Imperméable et facile à nettoyer, il offre une protection tout en ajoutant une touche esthétique à votre table. Un ajout pratique et stylisé pour chaque repas.`,
    full_description: [
      {
        title: "Set De Table Plastique",
        desc: `Un set de table plastifié est un set de table en papier qui est recouvert d’une couche de plastique à chaud. Cette dernière sert à le protéger de l’eau et de la saleté. De plus, c’est un excellent moyen de décorer et protéger vos tables. En effet ce support plastifié peut être personnalisé selon vos envie pour s’adapté au mieux avec la décoration de votre intérieur. C’est une très bonne alternative pour remplacer une nappe. Vous pouvez donc profiter du design de votre table tout en la protégeant. Les sets de table plastifiés sont souvent utilisés dans les restaurants, les cantines, les cafétérias, etc., car ils sont faciles à nettoyer et à remplacer. Les restaurateurs ont l’habitude de jeter les sets de table en papier après chaque fin de service alors que la ils sont réutilisable plusieurs fois.`,
      },
      {
        title: "Imprimez Vos Set De Table Plastifié",
        desc: `Les sets de tables plastifiés peuvent être imprimés en utilisant différentes techniques d’impression, comme l’offset ou l’impression numérique à partir de 1 exemplaire. L’impression peut être uniquement recto mais aussi recto verso, sur support 90g et au format A3. La plastification à chaud des sets de table les rends 100% étanches et très résistant grâce à son encapsulage. Cette méthode permet de rendre votre support résistant et lui garantit une durée de vie optimale. La finition brillante de la plastification rendra votre produit unique.`,
      },
      {
        title: "L’encapsulage À Chaud De Vos Sets De Table",
        desc: `L’emcapsulage à chaud est une technique qui consiste à recouvrir les sets de table d’une couche protectrice en plastique. Cette méthode permet de protéger et prolonger la durée de vie de votre produit. En effet, une fine couche de plastique offre une importante résistance à la chaleur et celle-ci est facile à nettoyer. Ainsi, ce type de plastification permet une protection efficace contre les taches, les rayures et les déchirures. Par exemple, dans les restaurants ou les bars, les sets de table sont très souvent manipulés et salis. L’emcapsulage à chaud permet d’accentuer les couleurs de votre set de table en améliorant le contraste de lumière. Alors, cela apportera un gage de qualité supplémentaire à votre établissement.`,
      },
    ],
    caracteristics: [
      "Format A3",
      "Support en 90 g",
      "Impression recto ou recto / verso",
    ],
  },

  {
    id: 2,
    title: "Porte Addition",
    product: ProductLibelle.MENU_RESTORE,
    format: "21x10 cm fermé - 21x20 cm ouvert",
    base_price: 15900,
    category: impressCategories[7],
    cover: Resto2,
    type: "MENU RESTO",
    short_description: `Porte addition personnalisé : impression de porte addition format 10×21 avec encoche pour glisser la note`,
    full_description: [
      {
        title:
          "L’Élégance Personnalisée : Découvrez Nos Porte-Additions Uniques Signés Facimprimeur",
        desc: `Au cœur de la quête incessante pour une expérience client exceptionnelle dans le domaine culinaire, nos porte-additions se démarquent en tant que supports plaquettes raffinés, spécialement conçus pour présenter discrètement l’addition à la fin de chaque repas. Chez Facimprimeur, notre engagement envers la personnalisation va au-delà, vous permettant de choisir parmi une gamme de matériaux haut de gamme. Optez pour le papier 300g couché brillant ou recyclé satiné, ou explorez notre version premium en simili cuir, disponible dans cinq coloris exclusifs.`,
      },
      {
        title:
          "Personnalisation Sans Limite : Exprimez L’Identité De Votre Restaurant",
        desc: `Chez Facimprimeur, nous mettons à votre disposition une palette d’options pour personnaliser votre porte-addition. Affichez fièrement le logo et le nom de votre restaurant, ajoutant ainsi une touche distinctive à cet accessoire essentiel. Cette personnalisation sans limite offre une opportunité exceptionnelle de communiquer l’identité unique de votre établissement et de créer une dernière impression mémorable.`,
      },
      {
        title:
          "Support De Qualité Supérieure Pour Une Durabilité Exceptionnelle",
        desc: `Nous sommes fiers de vous proposer des support d’impression de qualité supérieure qui définissent nos porte-additions. Que vous optiez pour le papier 300g couché brillant, le recyclé satiné ou le simili cuir haut de gamme, chaque choix garantit une durabilité exceptionnelle et une esthétique qui perdure dans le temps.`,
      },
      {
        title:
          "Choisissez Votre Style : Une Palette De Matériaux Et De Couleurs Uniques",
        desc: `Facimprimeur vous offre la possibilité de choisir votre style parmi notre palette de matériaux et de couleurs uniques. Du classique au luxueux, personnalisez votre porte-addition pour refléter l’ambiance et le caractère distinctif de votre établissement, tout en optimisant votre visibilité en ligne grâce à notre solution SEO.`,
      },
      {
        title: "Osez La Différence Avec Un Porte-Addition Unique",
        desc: `Faites de chaque détail une occasion de distinction avec des porte-additions uniques et personnalisés qui s’inscrivent dans notre engagement à vous offrir bien plus qu’un simple accessoire. Découvrez comment notre expertise en matière de personnalisation peut transformer votre service client et renforcer la réputation de votre restaurant. Optez pour l’excellence avec Facimprimeur et osez la différence.`,
      },
    ],
    caracteristics: [
      "Impression couleur recto / verso",
      "Support 300 gr couché brillant",
      "Pelliculage mat ou brillant en option",
      "Format 10×21 fermé / 20×21 ouvert",
      "encoche pour l’addition",
    ],
  },

  {
    id: 3,
    title: "Menus depliants 21 X 30 – 2 plis roulés",
    product: ProductLibelle.MENU_RESTORE,
    format: "63x29.7 cm ouvert A4 fermé",
    base_price: 15900,
    category: impressCategories[7],
    cover: Resto3,
    type: "MENU RESTO",
    short_description: `Le menu grand format à prix réduit`,
    full_description: [
      {
        title:
          "Menu De Restaurant 2 Plis Roulés : L’Élégance Dépliée Sur Votre Table",
        desc: `Les menus à 2 plis roulés représentent une solution idéale pour présenter avec élégance et praticité les cartes de votre restaurant. Cette conception ingénieuse offre plusieurs avantages qui contribuent à améliorer l’expérience de vos clients tout en mettant en valeur l’identité visuelle de votre établissement. Tout d’abord, les menus à 2 plis roulés sont particulièrement attractifs visuellement. Lorsqu’ils sont déployés, ils offrent une surface généreuse pour afficher vos sélections de plats, boissons et formules de manière claire et organisée. La disposition en 2 plis permet de diviser le contenu de manière stratégique, facilitant la lecture et la navigation pour vos clients. Cela garantit une expérience agréable et fluide lorsqu’ils explorent les options disponibles, renforçant ainsi la probabilité qu’ils découvrent et choisissent des plats qui correspondent à leurs préférences.`,
      },
      {
        title: "Naviguer Avec Style : L’Attractivité Des Menus À 2 Plis Roulés",
        desc: `De plus, le format à 2 plis roulés ajoute une touche de sophistication à la présentation de vos menus. Lorsqu’ils sont roulés, ces menus créent une esthétique élégante et compacte, idéale pour être placée sur les tables de votre restaurant sans encombrer l’espace. Cette compacité est particulièrement avantageuse dans les environnements où l’espace est limité, tout en permettant aux clients de manipuler facilement le menu sans se sentir dépassés.La praticité des menus à 2 plis roulés se manifeste également lorsqu’il s’agit de mettre à jour les sélections. Ce format offre une flexibilité accrue pour ajuster et modifier le contenu de manière rapide et efficace. Vous pouvez facilement actualiser les plats du jour, les promotions spéciales ou les changements de saison sans compromettre la lisibilité ou l’esthétique globale du menu.`,
      },
      {
        title: "Charme Déroulé D’un Menu De Restaurant",
        desc: `Par ailleurs, la durabilité est un élément clé des menus à 2 plis roulés. Grâce à des matériaux de qualité et à une impression soignée, ces menus résistent bien à l’usure quotidienne. Cela signifie que vos menus conservent leur apparence attrayante même après une utilisation fréquente, assurant ainsi une représentation constante de la qualité et du professionnalisme de votre établissement.

        En conclusion, opter pour des menus à 2 plis roulés constitue une stratégie judicieuse pour présenter vos cartes de restaurant. Entre l’attrait visuel, la praticité, la sophistication et la durabilité, ce format offre une combinaison équilibrée d’éléments essentiels pour influencer positivement l’expérience culinaire de vos clients et renforcer l’image de votre établissement.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (63 x 29,7 cm)",
      "Format fermé 21 x 29,7 cm",
      "2 plis roulés",
      "350 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto / verso Mat ou Brillant",
    ],
  },

  {
    id: 4,
    title: "Menu restaurant 8 pages A3",
    product: ProductLibelle.MENU_RESTORE,
    format: "A3 ouvert A4 fermé",
    base_price: 16900,
    category: impressCategories[7],
    cover: Resto4,
    type: "MENU RESTO",
    short_description: ``,
    full_description: [
      {
        title: "Un Menu De Restaurant Économique Et Résistant",
        desc: `MENU 8 pages A3 – plié/agrafé personnalisé. Ce grand support est idéal pour votre restaurant car il permet de présenter facilement vos spécialités. En effet, le menu 8 pages A3 permettre en valeur les photos et le descriptif de vos entrées, plats et desserts.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A3 (42 x 29,7 cm)",
      "Format fermé A4 (21 x 29,7 cm)",
      "lié/agrafé à cheval",
      "350 gr couché mat",
      "Impression recto / verso",
      "Pelliculage recto/verso mat ou brillan",
    ],
  },

  {
    id: 5,
    title: "Menu dépliant A4 ouvert A5 fermé",
    product: ProductLibelle.MENU_RESTORE,
    format: "A4 ouvert - A5 fermé",
    base_price: 17900,
    category: impressCategories[7],
    cover: Resto5,
    type: "MENU RESTO",
    short_description: ``,
    full_description: [
      {
        title: "",
        desc: `Le <strong>menu restaurant</strong> est un outil de communication des plus efficace.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A4 (29,7 x 21 cm)",
      "Format fermé A5 (14,85 x 21 cm)",
      "1 pli au centre",
      "350 gr couché mat",
      "Impression recto / verso",
      "Pelliculage recto/verso mat ou brillan",
    ],
  },

  {
    id: 6,
    title: "Menu 4 pages indéchirable",
    product: ProductLibelle.MENU_RESTORE,
    format: "A3 ouvert - A4 fermé",
    base_price: 18500,
    category: impressCategories[7],
    cover: Resto6,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title:
          "Pour des menus un support de qualité qui résiste à des utilisations intenses.",
        desc: ``,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Support polyester blanc 195 ou 350 micron",
      "coins arrondis",
      "1 pli au centre",
      "350 gr couché mat",
      "Livré rainé & plié",
    ],
  },

  {
    id: 7,
    title: "Menu simple indéchirable",
    product: ProductLibelle.MENU_RESTORE,
    format: "A4",
    base_price: 15500,
    category: impressCategories[7],
    cover: Resto7,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title: "",
        desc: `Le <strong>menu indéchirable</strong>, un support de qualité qui résiste à des utilisations intenses. Imprimez vos <strong>cartes restaurant</strong>, bar, café et brasserie avec Fac Imprimeur.
        Cette carte de qualité supérieur, résiste aux déchirures et au temps.  En effet, le papier indéchirable a été conçu spécialement pour une qualité d’impression optimale. Cette caractéristique permet de manipuler le menu sans crainte. De plus, la <strong>carte indéchirable</strong> est prévue pour résister à toutes contraintes extérieures comme l’eau, les taches et les UV. Par conséquent, ce support est une réelle avancé pour vos menus. Puis, l’avantage de ce menu indéchirable c’est qu’il sera apprécié par les plus grands comme les plus petits.
        
        • Les avantages de la <strong>carte restaurant indéchirable</strong> :
            • Bonne tenue de main
            • Résistant aux taches, à l’eau et aux déchirures.
            • Usage intérieur et extérieur
            • Durabilité, fiabilité et super qualité d’impression
        `,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Support polyester blanc 195 ou 350 micron",
      "Plusieurs formats menus restaurant :  A3, portrait (15×42) et A4",
    ],
  },

  {
    id: 8,
    title: "Pvc indéchirable",
    product: ProductLibelle.MENU_RESTORE,
    format: "A4",
    base_price: 18500,
    category: impressCategories[7],
    cover: Resto8,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title: "",
        desc: `Le <strong>PVC indéchirable</strong>, un support de qualité qui résiste à des utilisations intenses. En effet, le papier indéchirable a été conçu spécialement pour obtenir une qualité d’impression optimale. Cette caractéristique permet de manipuler votre document sans l’abimer. De plus, l’impression de documents indéchirables est conçue pour résister aux contraintes extérieures comme l’eau et les UV. Par conséquent, ce support est une réelle sécurité.
        
        • L’avantage du support indéchirable :
            • Bonne tenue de main
            • Résistant aux taches, à l’eau et aux déchirures.
            • Usage intérieur et extérieur
            • Durabilité, fiabilité et super qualité d’impression
        `,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Support polyester blanc 195 ou 350 micron",
      "Plusieurs formats menus restaurant :  A3, portrait (15×42) et A4",
    ],
  },
  {
    id: 9,
    title: "Menu dépliant A3 ouvert A4 fermé",
    product: ProductLibelle.MENU_RESTORE,
    format: "A3 ouvert A4 fermé",
    base_price: 16500,
    category: impressCategories[7],
    cover: Resto9,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title: "",
        desc: `Le menu est un outil de communication des plus efficace.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Format ouvert A3 (42 x 29,7 cm)",
      "Format fermé A4 (21 x 29,7 cm)",
      "1 rainage au centre",
      "350 gr couché mat",
      "Impression recto / verso",
      "Pelliculage recto/verso Mat ou Brillant",
    ],
  },
  {
    id: 10,
    title: "Set de table restaurant",
    product: ProductLibelle.MENU_RESTORE,
    format: "A3",
    base_price: 16500,
    category: impressCategories[7],
    cover: Resto10,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title: "SET DE TABLE RESTAURANT",
        desc: `L’ <strong>impression de set de table</strong> restaurant en tant que support de communication est un choix original. C’est un élément de décoration fonctionnel souvent utilisé pour protéger les tables des tâches et des rayures. Ils sont généralement placés sur la table pour accueillir les assiettes, les couverts et les verres. Ainsi, cela ajoutera une touche d’élégance et de sophistication à l’ambiance du restaurant. En effet, vous avez la possibilité de personnaliser vos sets de table restaurant en fonction du thème ou d’une occasion. Également, vous pouvez ajouter votre impression menu directement sur le papier. Cela vous permettra d’avoir un seul support polyvalent. Ainsi le set de table papier peut aussi être utilisé comme objet publicitaire. En partenariat avec des entreprises ou des associations locales, vous pouvez promouvoir leurs activités tout en y gagnant un avantage. Votre client aura le loisir de lire les différentes annonces durant toute la durée du repas. Pour divertir les plus petits, il est aussi possible d’intégrer des jeux ludiques à votre set de table restaurant.`,
      },
      {
        title: "IMPRESSION SET DE TABLE : UNE ALTERNATIVE EFFICACE",
        desc: `Le set de table restaurant est une alternative efficace à la nappe traditionnelle. Économique et efficace, l’impression de set de table menu permet de mettre en valeur votre carte. Ce support à usage jetable garantit la sécurité de vos employés et de vos clients dans votre établissement. En effet, il est plus hygiénique qu’un tissu lavable et réutilisable. Le set de table restaurant permet de débarrasser et dresser vos tables en un clin d’oeil.

        Chez Fac Imprimeur nous vous proposons des sets de table personnalisés pour refléter au mieux l’identité de votre établissement. Ces jolis décorations de table sont disponibles au format A3. Pour s’adapter à tous les budgets nous vous proposons un tarif dégressif pour les commandes de grandes quantités. Pour un plus petit budget, vous pouvez également opter pour l’impression set de table N&B.`,
      },
      {
        title: "CHOISIR LE SET DE TABLE PAPIER POUR SON RESTAURANT",
        desc: `L’impression de sets de table en papier représente une alternative moderne et efficace à la nappe traditionnelle. Non seulement économiques, ces sets personnalisés offrent une mise en valeur optimale de votre carte tout en garantissant l’hygiène et la praticité. Jetables, ils assurent la sécurité des clients et du personnel, se montrant bien plus hygiéniques que les nappes lavables. En un instant, ils facilitent la préparation et le nettoyage des tables, offrant une solution pratique et esthétique pour votre restaurant.`,
      },
    ],
    caracteristics: [
      "Format A3",
      "Recto ou recto verso",
      "Impression Quadri HD sur presse offset",
      "Support 90 gr offset ou 135 gr couché brillant",
    ],
  },

  {
    id: 11,
    title: "Set de table N&B",
    format: "A3",
    product: ProductLibelle.MENU_RESTORE,
    base_price: 16500,
    category: impressCategories[7],
    cover: Resto11,
    type: "MENU RESTO",
    short_description: `Impression numérique HD en N&B, rapide et économique`,
    full_description: [
      {
        title:
          "Le Set De Table N&B : Une Communication Bon Marché Pour Les Restaurateu",
        desc: `Le set de table est un élément incontournable de la communication en restauration. Il joue un rôle bien plus important que de simplement protéger la table des éclaboussures et des éraflures. De plus, il constitue un support de communication efficace pour les restaurants qui souhaitent véhiculer leur image, promouvoir leurs plats, ou tout simplement offrir une expérience agréable à leurs clients.`,
      },
      {
        title: "Flexibilité Et Personnalisation Avec L’Impression Numérique",
        desc: `Parmi les diverses options disponibles, la version imprimée en noir et blanc (N&B) émerge comme une solution économique et versatile pour les établissements de restauration. C’est pourquoi, l’impression numérique offre une grande flexibilité en matière de personnalisation des sets de table. Les restaurants peuvent ainsi renouveler régulièrement leur offre visuelle en fonction des saisons, des événements spéciaux, ou des promotions en cours. Cette capacité à changer le visuel de vos sets de table permet de maintenir l’intérêt des clients, tout en renforçant l’identité de votre établissement.`,
      },
      {
        title: "Économie Et Praticité Avec Des Sets De Table Jetables",
        desc: `L’un des avantages majeurs des sets de table imprimés en noir et blanc réside dans leur caractère jetable. De fait, ils sont idéaux pour les établissements qui privilégient la facilité d’entretien et la réduction des coûts liés aux articles réutilisables. Vous pouvez ainsi imprimer la quantité de sets de table dont vous avez réellement besoin, éliminant ainsi les coûts liés au stockage et à l’entretien. De plus, en optant pour une version N&B, vous économisez sur les coûts d’impression par rapport aux modèles en couleur, tout en conservant un aspect élégant et épuré.`,
      },
      {
        title: "Une Solution Rentable Pour Une Communication Efficace",
        desc: `Le set de table imprimé en noir et blanc est une solution pratique, économique et polyvalente pour les restaurants soucieux de leur image et de leur budget. Grâce à l’impression numérique, vous pouvez personnaliser vos sets de table en fonction de vos besoins, tout en minimisant les coûts de stockage et d’entretien. Cette approche vous permet de rester flexible et de surprendre agréablement vos clients tout en renforçant la notoriété de votre établissement. Il s’agit d’un investissement judicieux pour les restaurants qui cherchent à offrir une expérience mémorable à leurs convives tout en préservant leur rentabilité.`,
      },
    ],
    caracteristics: [
      "Format A3",
      "Recto ou recto verso",
      "Impression Quadri HD sur presse offset",
      "Papier 80 gr Laser",
    ],
  },
];

const plastifications: MetaDataProps[] = [
  {
    price: 5700,
    libelle: "Plastification encapsulée à chaud brillante",
  },
];
const restoSupport: MetaDataProps[] = [
  {
    price: 500,
    libelle: "80 gr Laser",
  },
  {
    price: 1000,
    libelle: "90 gr Ofset Laser",
  },
  {
    price: 500,
    libelle: "300 gr C. Brillant rainé à plat",
  },
  {
    price: 800,
    libelle: "350 gr C. Brillant rainé à plat",
  },
  {
    price: 1000,
    libelle: "350 gr C. Mat rainé à plat",
  },
  {
    price: 800,
    libelle: "350 gr Couché Mat",
  },
  {
    price: 2800,
    libelle: "Polyester blanc 190 micron (indéchirable)",
  },
  {
    price: 1800,
    libelle: "Polyester blanc 350 micron (indéchirable)",
  },
];

const restoMenuPelliclage: MetaDataProps[] = [
  {
    price: 450,
    libelle: "Recto Brillant",
  },
  {
    price: 550,
    libelle: "Recto Mat",
  },
  {
    price: 5650,
    libelle: "Recto / verso brillant",
  },
  {
    price: 1450,
    libelle: "Recto / Verso Mat",
  },
];

/* promotional */
const promostionals: PromotionalProps[] = [
  {
    id: 1,
    title: "Stylos à bille",
    category: impressCategories[10],
    format: "",
    base_price: 1200,
    cover: Promo1,
    type: "PEN",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Ces stylos en plastique aux formes harmonieuses apportent de la couleur et du confort à un format promotionnel classique. Avec des courbes ergonomiques et une prise en main douce, ils sont aussi agréables à toucher qu'à regarder. Le corps blanc et frais est la plateforme parfaite pour accueillir votre logo en quatre couleurs maximum.

    La zone de préhension est disponible dans un choix de neuf couleurs pour compléter votre marque. Le mécanisme d'encliquetage et le clip solide signifient qu'ils sont toujours prêts pour l'appel à l'action.`,

    full_description: [
      {
        title: "",
        desc: `Le Looe est un stylo élégant avec des détails métalliques, un corps en plastique imprimable et un mécanisme d'actionnement par clic.`,
      },
      {
        title: "Graphiques vectoriels",
        desc: `Pour que votre maquette soit imprimée à la plus haute résolution possible, elle doit être fournie sous forme de graphique vectoriel. Veuillez fournir votre maquette sous la forme d'un fichier EPS, PDF vectoriel ou SVG avec des polices intégrées, ce qui signifie que nous pouvons mettre votre maquette à l'échelle à n'importe quelle taille sans que l'image apparaisse pixélisée. Nous ne pouvons pas utiliser les formats de fichiers suivants : JPEG, GIF, PNG ou TIFF, ni aucun fichier contenant ces types de fichiers.`,
      },
      {
        title: "Informations sur les couleurs d'accompagnement",
        desc: `Nous pouvons imprimer une couleur Pantone unie sur certains produits. La couleur Pantone unie choisie doit être unie à 100 %, car nous ne pouvons malheureusement pas imprimer deux nuances différentes de la couleur choisie. Nous ne pouvons pas non plus imprimer des couleurs métalliques ou néon.`,
      },
      {
        title: "Couleurs des produits",
        desc: `Ce produit est disponible dans une gamme de couleurs d'accentuation pour compléter la couleur principale. Si vous ne pouvez pas sélectionner l'une des couleurs présentées dans l'image du produit à partir de l'option déroulante, nous avons malheureusement épuisé ce produit pour le moment. Cependant, nous ferons de notre mieux pour le réapprovisionner et le rendre disponible bientôt !
        
        Veuillez noter que ce produit est imprimé par tampographie et que le matériau de support peut transparaître lors de l'impression à l'encre blanche. La couleur du produit peut varier légèrement par rapport aux échantillons en ligne.

Une fois imprimés et emballés, nous vous enverrons vos stylos partout au Royaume-Uni sans frais supplémentaires.`,
      },
    ],
    caracteristics: [
      "Matériau : Plastique",
      "Longueur : 14 cm",
      "Diamètre : 1,3 cm",
      "Poids : 12g",
      "Couleur de l'encre : noir",
      "Méthode d'impression : Tampographie",
      "Lieu d'impression : Barre",
      "Largeur d'impression : 60 mm",
      "Hauteur d'impression : 8 mm",
      "Impression d'un maximum de couleurs : 4",
    ],
  },

  {
    id: 2,
    title: "Cahiers A5",
    category: impressCategories[10],
    format: "A5",
    base_price: 1200,
    cover: Promo2,
    type: "BOOK",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Ce n'est pas pour rien que le format A5 est un format de carnet classique. Il est suffisamment grand pour les croquis imaginatifs et les notes détaillées, tout en étant suffisamment compact pour se ranger dans les tiroirs et les sacs.

    Nous proposons des carnets A5 personnalisés dans une large gamme de couleurs, de couvertures et de styles. Réservez votre place à la table de chaque réunion à laquelle ils participent avec des carnets A5 de marque.
    `,

    full_description: [
      {
        title: "",
        desc: `De nombreux professionnels ne se déplacent pas sans leur ordinateur portable, et l'impression d'un ordinateur portable A5 vous permet d'apposer votre marque sur cet objet indispensable.

        Pourquoi ne pas associer les carnets A5 à nos stylos de marque pour créer des sets d'écriture pratiques pour les clients, les délégués ou les nouveaux arrivants ?
        
        Si vous n'êtes pas sûr de savoir comment produire votre design ou comment le fournir dans le bon format, notre équipe de designers est toujours disponible pour vous aider.`,
      },
      {
        title: "Informations sur les couleurs d'accompagnement",
        desc: `Nous sommes en mesure d'imprimer une couleur Pantone unie sur ce produit. Les couleurs Pantone unies que vous avez choisies doivent être 100% unies. Nous ne pouvons pas non plus imprimer des couleurs métalliques ou néon.`,
      },
    ],
    caracteristics: [
      "Longeur: 210 mm",
      "Largeur : 140 mm",
      "Poids : 270g",
      "Pages : 96 pages, papier ligné 60gsm",
      "Surface d'impression : 90 mm x 190 mm",
      "Méthode d'impression : Sérigraphie",
      "Couleurs d'impression maximales : 1",
    ],
  },

  {
    id: 3,
    title: "Mugs en céramique de 330ml",
    category: impressCategories[10],
    format: "Hauteur : 97 mm - Diamètre : 82 mm",
    base_price: 1200,
    cover: Promo3,
    type: "CUP",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `D'un design classique à faces droites, ces tasses en céramique seront parfaitement à leur place sur le bureau de vos clients. Inscrivez un message chaleureux sur votre tasse qui les accueillera tous les matins lorsqu'ils auront besoin d'un petit coup de pouce.

    Ces tasses en céramique sont robustes, lavables au lave-vaisselle et faciles à transporter, parfaites pour supporter les tournées quotidiennes de thé et de café. Fabriquées en céramique et dotées d'une poignée solide, ces tasses de 330 ml protègeront les mains de vos clients contre les boissons brûlantes.`,

    full_description: [
      {
        title: "",
        desc: `La zone d'impression mesure 60 mm de haut lorsque le Mug est debout. Elle peut être ajoutée au recto, au verso ou aux deux endroits.`,
      },
      {
        title: "Informations sur les couleurs d'accompagnement",
        desc: `Nous pouvons imprimer 2 couleurs Pantone unies sur ce produit. Les couleurs Pantone unies que vous avez choisies doivent être 100% solides. Nous ne pouvons pas non plus imprimer des couleurs métalliques ou néon.

        Une fois imprimés et emballés, nous vous enverrons vos mugs partout au Royaume-Uni sans frais supplémentaires.`,
      },
    ],
    caracteristics: [
      "Hauteur : 97 mm",
      "Diamètre : 82 mm",
      "Poids : 340g",
      "Surface d'impression : 45 x 60 mm (l x h)",
      "Couleurs d'impression maximales : 2",
    ],
  },

  {
    id: 4,
    title: "Parapluies de golf 30 pouces",
    category: impressCategories[10],
    format: "Hauteur : 960 mm - Diamètre : 1 300 mm",
    base_price: 5000,
    cover: Promo4,
    type: "UMBRELLAS",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Ces parapluies géants renforceront votre marque grâce à la couverture la plus large que notre gamme puisse offrir. Avec une protection de 30 pouces, votre logo sera bien visible sur le fairway. C'est un compagnon idéal pour vos clients, qu'ils pourront emporter lors d'événements en plein air ou garder dans le coffre de leur voiture en cas d'urgence.

    Ces parapluies de golf sont suffisamment grands pour abriter deux personnes, tout en étant légers et faciles à transporter jusqu'à ce que le temps s'améliore. Vous pouvez utiliser jusqu'à deux couleurs d'accompagnement pour imprimer votre dessin sur un, deux ou quatre panneaux.`,

    full_description: [
      {
        title: "",
        desc: `La zone d'impression mesure 60 mm de haut lorsque le Mug est debout. Elle peut être ajoutée au recto, au verso ou aux deux endroits.`,
      },
      {
        title: "Informations sur les couleurs d'accompagnement",
        desc: `Nous pouvons imprimer 2 couleurs Pantone unies sur ce produit. Les couleurs Pantone unies que vous avez choisies doivent être 100% solides. Nous ne pouvons pas non plus imprimer des couleurs métalliques ou néon.

        Une fois imprimés et emballés, nous vous enverrons vos mugs partout au Royaume-Uni sans frais supplémentaires.`,
      },
    ],
    caracteristics: [
      "Hauteur : 960 m",
      "Diamètre : 1 300 mm",
      "Poids : 480g",
      "Surface d'impression en sérigraphie : 310 x 250 mm (l x h)",
      "Sérigraphie couleurs d'impression maximales : 2",
    ],
  },

  {
    id: 5,
    title: "chapeaux et casquettes",
    category: impressCategories[10],
    format: "110 x 45 mm",
    base_price: 5000,
    cover: Promo5,
    type: "CASQUESTTE",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Les casquettes de baseball de marque sont un excellent moyen de maintenir votre entreprise au premier plan de l'esprit des gens. Elles sont parfaites pour les marques de fitness, les styles de vie actifs, les supporters d'équipes ou pour représenter l'ambiance décontractée d'une entreprise.

    Disponibles dans un large éventail de couleurs, ces casquettes de baseball offrent une grande surface d'impression pour que votre marque se démarque vraiment. Vos motifs, mis en valeur dans un maximum de quatre couleurs vives, ne passeront pas inaperçus.`,

    full_description: [
      {
        title: "",
        desc: `Les casquettes de baseball marquées offrent à vos clients un accessoire à la mode qui a un impact important. Parfaites pour les marques de fitness et de loisirs, les entreprises qui bravent les grands espaces ou celles qui cherchent à ajouter un cachet unique à leur marque.

        Vos casquettes de baseball sont le parfait mélange de style et de confort pour toutes les occasions. Conçues pour une respirabilité maximale, nos casquettes sont dotées d'œillets brodés qui assurent une bonne ventilation, même lors des journées les plus chaudes.
        
        La fermeture auto-agrippante en tissu garantit un ajustement sûr et réglable, s'adaptant à toutes les tailles de tête avec une circonférence confortable.
        
        Grâce à l'impression nette et vibrante par transfert numérique, votre motif prendra vie en couleur sur le devant, sur une surface d'impression généreuse de 110 x 45 mm.
        
        Fabriquées à partir du meilleur sergé 100 % coton, d'un poids de 175 g/m2, ces casquettes offrent une durabilité exceptionnelle et un toucher haut de gamme. Notre engagement en faveur de la haute qualité garantit que votre casquette résistera à l'épreuve du temps et conservera son design robuste pendant des années.
        
        Que vous cherchiez à promouvoir votre marque, à mettre en valeur vos œuvres d'art ou simplement à ajouter une touche de sophistication à votre tenue, nos casquettes promotionnelles sont le choix idéal.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 6,
    title: "Lanières en tissu",
    category: impressCategories[10],
    format: "10 mm, 15 mm, 20 mm et 25 mm",
    base_price: 5000,
    cover: Promo6,
    type: "LANIERES",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Créez une reconnaissance instantanée et renforcez la sécurité avec des lanières en tissu imprimées de manière vivante qui représentent ce que vous êtes. Ces lanières en couleur sont imprimées par sublimation, ce qui est idéal pour reproduire avec précision des motifs complexes. Pour une sécurité accrue contre l'étouffement ou les blessures, choisissez un cordon doté d'une rupture de sécurité qui se libère sous l'effet de la tension.

    Chaque lanière est munie d'un crochet métallique à ressort pivotant pour que vous puissiez toujours garder vos informations d'identification face à l'avant et bien en vue.`,

    full_description: [],
    caracteristics: [
      "<strong>Matière : </strong>  Polyester",
      "<strong>Longueur :</strong> 900 mm sans rupture de sécurité, 930 mm avec rupture de sécurité",
      "<strong>Largeur :</strong> 10 mm, 15 mm, 20 mm et 25 mm",
      "<strong>Couleurs d'impression maximales :</strong> Pleine couleur",
    ],
  },

  {
    id: 7,
    title: "T-shirts",
    category: impressCategories[10],
    format: "10 mm, 15 mm, 20 mm et 25 mm",
    base_price: 5000,
    cover: Promo7,
    type: "TSHIRTS",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Doux pour la peau et agréables à porter, ces tee-shirts sont un excellent moyen de diffuser votre message auprès d'un public plus large. Lorsque vos employés et vos clients porteront fièrement votre marque, vous saurez qu'ils n'ont rien d'ordinaire !

    Diffusez votre marque avec un design éblouissant grâce à l'impression par transfert numérique en quadrichromie.
    
    Ces tee-shirts 100 % coton sont disponibles dans une vaste gamme de couleurs pour aider votre marque à se démarquer sur le lieu de travail ou lors d'événements.`,

    full_description: [
      {
        title: "",
        desc: `Faites l'expérience d'un confort imbattable et d'un style intemporel avec nos T-shirts à coupe régulière. Conçus pour être les incontournables de votre garde-robe, ces T-shirts unisexes sont parfaits pour toutes les occasions. Que vous recherchiez une tenue d'affaires, une tenue décontractée ou une marchandise personnalisée, les possibilités sont infinies.

        Les couleurs disponibles sont les suivantes : Blanc, Kaki, Jaune, Rose, Rose clair, Bourgogne, Rouge, Orange, Prune, Bleu clair, Bleu, Marine, Aqua, Forêt, Vert pomme, Fougère, Vert armée, Gris clair, Anthracite, Gris mélangé, et Noir, vous trouverez la nuance parfaite pour correspondre à vos goûts personnels et à l'identité de votre marque.
        
        Fabriqués avec une attention méticuleuse aux détails, nos T-shirts à coupe régulière sont dotés d'un col côtelé en tricot plat et d'un col ras-du-cou classique, offrant un look propre et sophistiqué. Les détails de piqûre ajoutent une touche de raffinement, tandis que la bande de satin d'une épaule à l'autre renforce la durabilité et le confort.
        
        Évitez les étiquettes qui démangent grâce à notre étiquette principale à transfert thermique, qui assure un confort sans étiquette tout au long de la journée. Fabriqués en coton 160 g/m², ces t-shirts offrent un équilibre parfait entre douceur et respirabilité.
        
        En matière d'entretien, ces t-shirts ne nécessitent que peu de soins. Il suffit de suivre les instructions de lavage pour qu'ils conservent leur fraîcheur et leur éclat plus longtemps.
        
        Commandez dès aujourd'hui vos T-shirts à coupe régulière et profitez de la qualité et du service exceptionnels offerts par Solopress. Que vous en ayez besoin pour votre équipe, pour des événements ou à des fins promotionnelles, nos T-shirts imprimés sur mesure dépasseront vos attentes.`,
      },
    ],
    caracteristics: [
      "Jersey simple tricoté en 100% coton peigné ringspun",
      "160 g/m2",
      "Col côtelé en tricot plat",
      "Etiquette principale à transfert thermique pour un confort sans étiquette",
    ],
  },

  {
    id: 8,
    title: "Sacs",
    category: impressCategories[10],
    format: "10 mm, 15 mm, 20 mm et 25 mm",
    base_price: 5000,
    cover: Promo8,
    type: "SACS",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `De haute qualité et durables, ces sacs en jute imprimés incarnent véritablement l'expression "sac pour la vie". Ils contribuent à éliminer le besoin de sacs à provisions à usage unique et sont fabriqués à partir d'une fibre naturelle résistante qui est heureuse de supporter des voyages sans fin dans les magasins, à la plage et au-delà.

    Grâce à leur bordure élégante et à leur grande surface d'impression, ces sacs en jute seront très appréciés de votre public et véhiculeront votre message haut et fort, année après année.`,

    full_description: [
      {
        title: "",
        desc: `Les sacs en jute imprimés offrent une alternative durable et abordable aux sacs à provisions en papier ou en plastique. Durables et pratiques, votre public voudra garder ces sacs pour les vacances à la plage, les sorties au parc, les courses alimentaires et bien d'autres choses encore, grâce à leurs poignées confortables et à leur volume accommodant.

        Fabriqués en fibre de jute naturelle et résistante et conçus pour survivre à des courses et des sorties sans fin, ces sacs en jute personnalisés offrent une alternative viable aux solutions à usage unique,
        
        La bordure contrastée, disponible dans un choix de couleurs, donne à votre sac une touche d'originalité et crée un contraste rafraîchissant avec le brun naturel de la toile de jute elle-même.
        
        Ce sac se transporte facilement grâce à ses larges poignées de 170 mm. Nous avons prévu une généreuse surface de 280 x 220 mm pour décorer votre marque. Choisissez entre une, deux, trois ou quatre sérigraphies en couleur pour faire ressortir des motifs audacieux aux yeux des passants.
        
        Créez votre propre design à l'aide de nos modèles téléchargeables gratuitement, ou laissez notre équipe de designers incroyables s'en charger pour vous.
        
        Une fois votre design finalisé et votre commande confirmée, notre livraison gratuite dans tout le Royaume-Uni signifie que vos sacs passeront la caisse sans frais supplémentaires.
        
        La zone d'impression mesure 230 mm de haut lorsque le sac est debout, et 300 mm de large.`,
      },
    ],
    caracteristics: [
      "Hauteur : 320 mm",
      "Longueur : 425 mm",
      "Largeur : 190 mm",
      "Poids : 228g",
      "Matière : Toile, 320 g/m2, jute, 330 g/m2",
      "Surface d'impression : 300 x 230 mm",
      "Couleurs d'impression maximales : 4",
    ],
  },

  {
    id: 9,
    title: "Ticket standard",
    category: impressCategories[10],
    format: "10 mm, 15 mm, 20 mm et 25 mm",
    base_price: 5000,
    cover: Promo9,
    type: "TICKETS",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Démontrez le professionnalisme et la crédibilité de votre événement en imprimant des billets en couleur de haute qualité.

    Les billets standard sont disponibles en deux formats pratiques, avec une sélection de papiers pour compléter votre design et fournir la preuve d'achat dont vous avez besoin.
    
    Rendez votre billet unique grâce à une illustration distinctive, un support solide et une impression recto ou recto-verso.
    `,

    full_description: [
      {
        title: "",
        desc: `Lorsqu'il s'agit d'assurer un accès fluide et sécurisé à vos événements, Solopress vous couvre avec ses billets standard de première qualité. Ces billets d'entrée sont l'incarnation de la fiabilité et de la qualité, conçus pour répondre aux besoins des entreprises, des organisateurs d'événements, etc.

        Nos billets standard sont disponibles en deux formats qui conviennent parfaitement aux besoins de votre événement : 210 x 105 mm et 148 x 50 mm. Choisissez l'impression recto ou recto-verso pour présenter les détails de votre événement de la manière la plus captivante possible.
        
        Nous proposons une large gamme de types de papier et de grammages différents, ce qui vous permet d'adapter vos billets à vos besoins spécifiques.
        
        Personnalisez vos billets en y ajoutant une marque attrayante, des informations essentielles et un code QR ou un système de numérotation pour une sécurité et une conservation des données accrues. Choisissez l'alignement horizontal ou vertical et la surface minimale de numérotation.
        
        Avec une résolution de 300 dpi, vos billets afficheront des graphiques et du texte d'une grande clarté.
        
        Profitez de la liberté d'impression en quadrichromie au recto et au verso de vos billets, pour faire ressortir votre marque. L'application maximale des couleurs est de 300 %, ce qui permet d'obtenir des conceptions vives et accrocheuses.
        
        Nous ne laissons aucune place à l'erreur. Vos billets comporteront une marge minimale de 5 mm entre le bord et la zone de numérotation.`,
      },
    ],
    caracteristics: [],
  },

  {
    id: 10,
    title: "Sticker sur mesure",
    category: impressCategories[10],
    format: "10 mm, 15 mm, 20 mm et 25 mm",
    base_price: 5000,
    cover: Promo10,
    type: "TICKETS",
    product: ProductLibelle.PROMOTIONAL,
    short_description: `Tous les messages n'ont pas besoin d'être éternels. Lorsque les étiquettes doivent être retirées, il est important qu'elles ne soient pas endommagées et qu'elles ne laissent pas de résidus collants.

    C'est pourquoi nous proposons des autocollants amovibles qui se fixent solidement mais se décollent proprement et facilement pour l'utilisateur final.
    
    Choisissez entre une finition non couchée ou brillante pour compléter votre design personnalisé.
    
    Veuillez noter que la quantité que vous sélectionnez doit correspondre au nombre total d'autocollants amovibles individuels dont vous avez besoin, et non au nombre de feuilles.`,

    full_description: [
      {
        title:
          "LE STICKER SUR MESURE : UN SUPPORT INDISPENSABLE POUR VOS CAMPAGNES DE COMMUNICATION",
        desc: `Le sticker sur mesure est un support moderne et modulable selon vos besoins de communication. De fait, l’autocollant sur mesure s’avère idéal pour répondre à une variété d’utilisations. Cet outil promotionnel offre une facilité de distribution qui en fait un moyen efficace pour véhiculer l’image de votre entreprise. En outre, ces étiquettes sur mesure se révèlent être une option économique pour concrétiser vos stratégies de marketing. Il est intéressant de les distribuer en grand nombre lors de rassemblements comme des salons, évènements ou foires. C’est un goodie très apprécié de la clientèle. Qu’il s’agisse d’un sticker informatif ou destiné à diffuser votre marque, cet outil peut avoir de multiples informations. Par exemple, ils peuvent servir à indiquer une direction ou personnaliser un produit. Le sticker sur mesure peut être appliqué sur vos packagings, colis ou même des cadeaux. Effectivement, il convient parfaitement à un support comme une bouteille de vin, un produit alimentaire ou encore un produit cosmétique.`,
      },
      {
        title: "PERSONNALISEZ VOS STICKERS SUR MESURE",
        desc: `Personnalisez votre sticker sur mesure avec un motif de votre choix. Imprimé en HD et découpé à la forme de votre choix, il s’adapte parfaitement à vos besoins. Ainsi, il existe des formes standards différentes mais vous avez aussi la possibilité de les créer sur-mesure. Différentes finitions sont disponibles pour vos jolies étiquettes. Bien sûr, vous pouvez choisir un vinyle brillant ou mat pour donner un aspect fini à votre produit. Pour protéger votre support, optez pour sa plastification. Cette option est nécessaire si vos autocollants peuvent se retrouver en contact avec du liquide. Les stickers sur mesure sont imprimés sous forme de planche ou peuvent être découpés à l’unité.

        Ces autocollants peuvent avoir différents formats : grand format ou petit format. En effet, si vous voulez un sticker en XL pour une vitrine, un mur ou encore un véhicule il faudra s’orienter vers du vinyle adhésif : vitrophanie vitrine, lettrage adhésif et sticker voiture. Facimprimeur propose également des stickers mariage pour décorer le plus beau jour de votre vie.`,
      },
    ],
    caracteristics: [
      "Impression quadri recto haute définition",
      "Découpe numérique suivant un tracé vectoriel",
      "Rond, carré, rectangulaire ou ovale",
      "Livré en planche ou à l’unité",
    ],
  },
];

const products: (
  | FlyersProps
  | BcardProps
  | BrochureProps
  | RollupProps
  | RestoProps
)[] = [
  {
    id: 1,
    title: "A7 Flyers & Leaflets",
    type: "UNFOLDED",
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    id: 9,
    title: "Dépliants 2 volets A4",
    product: ProductLibelle.FLYER,
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
    product: ProductLibelle.FLYER,
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
    id: 1,
    title: "Cartes de visite bon marché",
    product: ProductLibelle.BUSINESS_CARD,
    formats: bcardFormats,
    type: "BY FINISH",
    base_price: 1500,
    category: impressCategories[2],
    cover: Bcard1,
    short_description: `Obtenir le meilleur retour sur investissement est toujours une priorité pour les entreprises, mais une carte de visite bien conçue et parfaitement imprimée est essentielle pour établir des contacts et développer de nouvelles relations. Heureusement, des cartes de visite bon marché ne sont pas forcément synonymes de mauvaise qualité.

    En proposant une large gamme de formats sur un papier populaire non laminé, nous sommes en mesure de maintenir une qualité d'impression élevée sur une carte de visite abordable qui ne vous décevra pas.
    
    Chaque fois que vous commandez chez Solopress, vous bénéficiez de prix bas, de délais d'exécution rapides et d'une livraison fiable en France. L'emballage en marque blanche est standard, et l'option de compensation carbone vous permet de faire votre part pour l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite à bas prix",
        desc: `Restez à l'esprit de vos clients et ouvrez de nouvelles voies de communication sans vous ruiner grâce à l'impression de cartes de visite à bas prix de Solopress.

      Cette gamme de cartes économiques associe un prix avantageux à une impression de haute qualité, ce qui vous permet d'impressionner vos clients ou de faire passer le message lors d'événements de réseautage sans avoir à dépenser beaucoup d'argent. Vous pouvez ainsi communiquer vos coordonnées en toute confiance, en sachant que vous avez fait un choix judicieux et sans compromis.
      
      Choisissez votre format et votre design pour des cartes de visite bon marché, en recto ou en recto verso. Utilisez les modèles de conception en ligne de notre outil Créez votre propre carte pour produire des cartes de visite personnalisées avec des éléments graphiques et des mises en page éprouvés. Nous pouvons vous aider à créer des designs personnalisés en couleur, afin que vous puissiez être sûr que votre carte est unique.
      
      Si vous êtes en panne d'inspiration, notre équipe de designers internes est là pour vous aider à concrétiser votre vision. Une fois que vous serez satisfait de votre maquette, nous nous mettrons immédiatement au travail pour imprimer votre nouvelle carte de visite.
      
      Pour des cartes de visite britanniques bon marché avec livraison gratuite, il n'y a rien de plus simple que de commander en ligne avec nous.`,
      },
    ],
    caracteristics: [
      "Carte de visite à finition lisse en soie 400gsm",
      "Afficher le texte avec des détails et des couleurs vives",
      "Acheter des tailles standard, mini, carrées ou autres",
    ],
  },

  {
    id: 2,
    title: "Cartes de visite plastifiées",
    formats: bcardFormats,
    product: ProductLibelle.BUSINESS_CARD,
    type: "BY FINISH",
    base_price: 1200,
    category: impressCategories[2],
    cover: Bcard2,
    short_description: `Ajoutez de l'éclat à votre présentation grâce à la gamme de cartes de visite plastifiées de Solopress. Disponibles en différents formats et finitions, nous pouvons vous aider à faire en sorte que votre prochain événement de réseautage se déroule aussi bien que la sensation de ces cartes brillantes qui attirent l'attention.

    <strong>Disponibles en :</strong>
    Pelliculage mat - soyeux et lisse au toucher, il adoucit les images.
    Pelliculage brillant - Finition ultra brillante, les couleurs de l'œuvre d'art apparaissent plus vives.
    Pelliculage Velvet Soft-Touch - Comme une peau de pêche, les couleurs paraissent plus riches.
    
    Des prix avantageux, une livraison gratuite et efficace au Royaume-Uni et des délais d'exécution rapides font partie de l'expérience Solopress. Les emballages en marque blanche sont parfaits pour l'impression par des tiers, et notre option de compensation carbone favorise l'impression respectueuse de l'environnement.`,

    full_description: [
      {
        title: "Impression de cartes de visite plastifiées à bas prix",
        desc: `L'ajout d'un pelliculage lorsque vous imprimez des cartes de visite offre un niveau de protection solide qui garantira leur longévité.

        Le type de pelliculage choisi dépend de l'impact que vous souhaitez avoir sur le destinataire. Les cartes de visite pelliculées brillantes sont brillantes et attirent l'attention, tandis que les cartes de visite pelliculées velours sont très douces au toucher.
        
        Les cartes de visite plastifiées mates restent toutefois notre finition la plus couramment commandée en raison de leur aspect général et de l'équilibre parfait entre performance et présentation.
        
        Quelle que soit l'option choisie, le pelliculage peut être appliqué sur une ou deux faces,
        
        Utilisez l'un de nos modèles de cartes de visite gratuits pour créer votre maquette et soumettez-la nous en ligne lorsque vous passez votre commande. Vous pouvez également faire appel à notre équipe de concepteurs pour vous aider à obtenir un produit de haute qualité, avec une livraison gratuite pour chaque commande, pour couronner notre processus simple.`,
      },
    ],
    caracteristics: [],
  },
  {
    id: 2,
    title: "Brochure Express 21 x 21 cm fermé",
    base_price: 1000,
    product: ProductLibelle.BROCHURE,
    format: "42 x 21 cm ouvert - 21 x 21 cm fermé",
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure2,
    short_description: `Découvrez notre service d'impression de brochures ultra-rapide, le "Brochure Express 21 x 21 cm fermé". Avec des dimensions parfaites de 42 x 21 cm ouvert et 21 x 21 cm fermé, cette brochure est idéale pour présenter votre entreprise, vos produits ou vos événements de manière professionnelle et percutante.

    Grâce à notre technologie d'impression de pointe, nous garantissons une qualité exceptionnelle pour mettre en valeur vos contenus. Commandez dès maintenant et bénéficiez d'une livraison rapide pour vous démarquer avec style !`,
    full_description: [
      {
        title: "",
        desc: `La <strong>brochure</strong> est un outil de communication indispensable pour présenter vos produits ou votre activité en détail.

        La brochure 21 x 21 est idéale pour l’impression de vos documents de présentation de vos produits et services. <strong>Le brochage 2 points métal</strong> est une confection permettant d’assembler vos documents par le centre. Cela permet d’ouvrir facilement votre brochure imprimée. A destination de vos clients professionnels ou particuliers, il est  facile de le transporter et de le distribuer.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert 42 x 21 cm",
      "Format fermé 21 x 21 cm",
      "Plié agraphé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },

  {
    id: 3,
    title: "Brochure Express A4 fermée",
    base_price: 1500,
    format: "A3 ouvert - A4 fermé",
    product: ProductLibelle.BROCHURE,
    category: impressCategories[3],
    type: "EXPRESS",
    cover: Brochure3,
    short_description: `Offrez à votre entreprise une visibilité exceptionnelle avec notre service d'impression de brochures "Brochure Express A4 fermée". 

    Conçue pour captiver l'attention de vos clients, cette brochure au format A3 ouvert et A4 fermé offre un support idéal pour présenter vos produits, services ou événements de manière percutante et professionnelle. Grâce à notre processus d'impression rapide et de haute qualité, vous pouvez obtenir des brochures impeccables en un temps record.
    
    Démarquez-vous de la concurrence et faites briller votre entreprise avec notre solution d'impression de brochures de qualité supérieure !`,
    full_description: [
      {
        title: "Pourquoi Opter Pour L’impression De Brochures En Express ?",
        desc: `Les brochures s’avèrent être un moyen efficace pour promouvoir votre entreprise ou vos produits, mais il peut parfois être délicat d’être préparé à temps pour des événements cruciaux ou des présentations importantes. C’est précisément là que l’impression express de brochures entre en jeu. En choisissant cette solution, vous garantissez une préparation rapide de vos brochures, répondant ainsi avec célérité à vos impératifs les plus pressants.`,
      },
      {
        title: "Quels Sont Les Avantages De L’impression De Brochures En A4 ?",
        desc: `L’impression de brochures en A4 peut offrir de nombreux avantages par rapport à d’autres formats. Le format A4 est un choix populaire car il est facile à lire et à manipuler, et il peut être imprimé à un coût raisonnable. De plus, les brochures en A4 peuvent être facilement pliées pour s’adapter à vos besoins de présentation.
        `,
      },
      {
        title:
          "Comment Préparer Votre Fichier Pour L’impression De Brochures En Express ?",
        desc: `Pour préparer votre fichier pour l’impression de brochures en express, il est important de fournir un fichier numérique de haute qualité. Ainsi, vous pouvez vous assurer que votre brochure sera imprimée rapidement et avec la qualité souhaitée. L’impression de brochures en express peut être un moyen efficace de promouvoir votre entreprise ou votre produit de manière rapide et professionnelle. En optant pour l’impression en A4, vous pouvez bénéficier d’un format facile à lire et à manipuler, ainsi que d’un coût raisonnable. Assurez-vous de préparer correctement votre fichier pour l’impression pour garantir un produit final de qualité.`,
      },
    ],
    caracteristics: [
      "Impression couleur HD",
      "Format ouvert A3 (42 x 29,7 cm)",
      "Format fermé A4 (21 x 29,7 cm)",
      "Plié agrafé au centre",
      "90 gr offset, 135 et 170 gr couché mat ou brillant",
      "Impression recto / verso",
      "Pelliculage recto sur la couverture",
    ],
  },
  {
    id: 1,
    title: "Roll Up 85 x 200 cm",
    category: impressCategories[4],
    product: ProductLibelle.ROLLUP,
    type: "ROLLUP",
    cover: Roller1,
    format: "85 x 200 cm",
    base_price: 12500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 85×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "Le Roll Up 85×200 Est L’outil De Communication Idéal",
        desc: `<strong>Le roll up 85×200</strong> est un véritable moyen de communication à lui tout seul. Économique et efficace, il est idéal pour tous types d’entreprises ou d’organisations. Ainsi, généralement imprimé pour des événements en extérieur ou en intérieur. Le roll up est une <strong>grande affiche</strong> qui impacte directement votre clientèle ou vos prospects. C’est pourquoi, Il permet de mettre en avant facilement une <strong>offre promotionnelle</strong> sur vos produits. D’autre part, le roll-up personnalisé est également apprécié par les entreprises pour lancer un nouveau produit. Grâce à ça structure solide et compacte, le stand est monté en quelques minutes pour une installation rapide de votre publicité sur le lieu de votre manifestation. De plus, le roll up 85×200 a l’avantage de maintenir durablement votre impression.`,
      },
      {
        title: "",
        desc: `Apprécié par les professionnels, il est disponible sous de multiple formats : le 85×200 cm étant le standard de la gamme offrant ainsi le meilleur rapport qualité/prix. Ce <strong>kakemono avec enrouleur</strong> est un outil idéal pour diffuser votre message clairement. Esthétique et efficace, ce support imprimé en recto est solide face aux intempéries (vent, pluie et soleil).`,
      },
      {
        title: "Impression Roll Up Personnalisé En Ligne",
        desc: `Facile et simple, il suffit de fournir votre visuel de roll up 85×200 au format pdf via interface en ligne. Ainsi, notre équipe de professionnel à Nice traitera votre demande pour un résultat en HD dans les plus brefs délais.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 440 gr",
      "Impression recto couleur haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },
  {
    id: 2,
    title: "Roll Up 100×200 cm",
    product: ProductLibelle.ROLLUP,
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller2,
    format: "100 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 100×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title:
          "Le Roll-Up : La Solution Idéale Pour Les Entreprises En Déplacement",
        desc: `Un roll up 100×200 cm est un support de communication visuelle portable et pratique. Il se compose d’un support enroulable sur lui-même, généralement en aluminium, sur lequel est fixée une bâche imprimée à votre image. Le rollup est facile à installer et à déplacer, ce qui en fait un choix populaire pour les expositions, les foires commerciales, les événements promotionnels et les présentations de produits.La bannière du roll up est imprimée en haute résolution pour offrir une qualité d’image professionnelle. Elle peut être personnalisée selon les besoins de chaque client, avec le logo, les images et le texte de leur choix.`,
      },
      {
        title:
          "La Solution Du Roll-Up Publicitaire Pratique Pour Tous Vos Besoins",
        desc: `Le roll up est équipé d’un mécanisme de tendeur qui permet de tendre la bannière pour qu’elle soit parfaitement tendue lors de l’utilisation. Il est également équipé d’un système de verrouillage pour maintenir la bannière enroulée lors du transport et de la rangement.
        En résumé, le roll up est un outil de communication visuelle pratique, portable et facile à utiliser, idéal pour les expositions, les foires commerciales et les événements promotionnels. Il permet d’afficher des images de qualité professionnelle de manière simple et rapide.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 440 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  {
    id: 3,
    title: "Roll Up 120 x 200 cm",
    product: ProductLibelle.ROLLUP,
    category: impressCategories[4],
    type: "ROLLUP",
    cover: Roller3,
    format: "120 x 200 cm",
    base_price: 14500,
    short_description: `<strong>La Bannière Déroulante Standard Pour Vos Événements</strong>
    Le roll-up 120×200 est un support publicitaire portable et compact. Il offre une surface généreuse pour afficher des visuels percutants. Idéal pour les événements, salons ou présentations, ce dispositif se déploie facilement et peut être rapidement installé.`,
    full_description: [
      {
        title: "ROLL UP PUBLICITAIRE : UN OUTIL DE COMMUNICATION EFFICACE",
        desc: `Le roll-up publicitaire est un outil de communication efficace pour promouvoir votre entreprise ou votre événement. Faciles à installer et à transporter, les roll-up sont des supports publicitaires pratiques qui attirent l’attention de votre public cible. Que vous soyez une petite entreprise ou une grande entreprise, les roll-up publicitaires sont un choix judicieux pour maximiser votre visibilité et votre impact. En effet, il permet de diffuser un message publicitaire de manière rapide et simple. Grâce à leur format compact et léger, les roll-up peuvent être utilisés dans de nombreuses situations différentes, que ce soit lors d’un salon professionnel, d’une conférence, d’une exposition ou d’un événement public.`,
      },
      {
        title: "CRÉER SON UN ROLL UP PUBLICITAIRE",
        desc: `Pour créer un roll-up publicitaire infaillible, il est important de choisir le bon format et le bon design. Le format doit être adapté à l’emplacement dans lequel vous prévoyez d’afficher le roll-up, tandis que le design doit refléter votre image de marque et attirer l’attention de votre clientèle. Les couleurs, les polices et les images doivent être soigneusement choisies pour créer un visuel attractif et facile à lire. Il est également important d’inclure des informations claires et concises sur le roll-up publicitaire. Les messages doivent être simples et directs pour que le public puisse facilement comprendre ce que vous offrez et ce que vous attendez d’eux. N’oubliez pas d’inclure votre logo et vos coordonnées pour que les gens puissent vous contacter facilement.`,
      },
      {
        title:
          "LE KAKEMONO PUBLICITAIRE : UN SUPPORT IDÉAL POUR UNE VISIBILITÉ OPTIMALE",
        desc: `Ainsi, pour maximiser l’impact de votre roll-up publicitaire, assurez-vous de l’afficher dans un endroit stratégique où les prospects sont susceptibles de le voir. Quel que soit l’événement, un roll-up publicitaire bien conçu peut faire la différence et attirer l’attention. Les roll-up publicitaires sont particulièrement intéressants pour les petites entreprises, car ils permettent de maximiser leur visibilité sans avoir à investir des sommes importantes dans des campagnes publicitaires coûteuses. Ils peuvent également être utilisés par les grandes entreprises pour compléter leur stratégie de communication et pour renforcer leur image de marque. Dans tous les cas, les roll-up publicitaires permettent de toucher un large public et de diffuser efficacement un message publicitaire.`,
      },
    ],
    caracteristics: [
      "Le Visuel sur bâche 510 gr",
      "Impression recto quadri haute définition",
      "La structure : corps en Aluminium",
      "Le sac de transport matelassé",
      "Livré avec le visuel monté prêt à l’emploi",
    ],
  },

  /* part two */
  /*  FlyersTab[3],
  bcardTab[8],
  brochures[3],
  brochures[4],
  menusResto[1], */
  {
    id: 11,
    title: "Set de table N&B",
    format: "A3",
    product: ProductLibelle.MENU_RESTORE,
    base_price: 16500,
    category: impressCategories[7],
    cover: Resto11,
    type: "MENU RESTO",
    short_description: `Impression numérique HD en N&B, rapide et économique`,
    full_description: [
      {
        title:
          "Le Set De Table N&B : Une Communication Bon Marché Pour Les Restaurateu",
        desc: `Le set de table est un élément incontournable de la communication en restauration. Il joue un rôle bien plus important que de simplement protéger la table des éclaboussures et des éraflures. De plus, il constitue un support de communication efficace pour les restaurants qui souhaitent véhiculer leur image, promouvoir leurs plats, ou tout simplement offrir une expérience agréable à leurs clients.`,
      },
      {
        title: "Flexibilité Et Personnalisation Avec L’Impression Numérique",
        desc: `Parmi les diverses options disponibles, la version imprimée en noir et blanc (N&B) émerge comme une solution économique et versatile pour les établissements de restauration. C’est pourquoi, l’impression numérique offre une grande flexibilité en matière de personnalisation des sets de table. Les restaurants peuvent ainsi renouveler régulièrement leur offre visuelle en fonction des saisons, des événements spéciaux, ou des promotions en cours. Cette capacité à changer le visuel de vos sets de table permet de maintenir l’intérêt des clients, tout en renforçant l’identité de votre établissement.`,
      },
      {
        title: "Économie Et Praticité Avec Des Sets De Table Jetables",
        desc: `L’un des avantages majeurs des sets de table imprimés en noir et blanc réside dans leur caractère jetable. De fait, ils sont idéaux pour les établissements qui privilégient la facilité d’entretien et la réduction des coûts liés aux articles réutilisables. Vous pouvez ainsi imprimer la quantité de sets de table dont vous avez réellement besoin, éliminant ainsi les coûts liés au stockage et à l’entretien. De plus, en optant pour une version N&B, vous économisez sur les coûts d’impression par rapport aux modèles en couleur, tout en conservant un aspect élégant et épuré.`,
      },
      {
        title: "Une Solution Rentable Pour Une Communication Efficace",
        desc: `Le set de table imprimé en noir et blanc est une solution pratique, économique et polyvalente pour les restaurants soucieux de leur image et de leur budget. Grâce à l’impression numérique, vous pouvez personnaliser vos sets de table en fonction de vos besoins, tout en minimisant les coûts de stockage et d’entretien. Cette approche vous permet de rester flexible et de surprendre agréablement vos clients tout en renforçant la notoriété de votre établissement. Il s’agit d’un investissement judicieux pour les restaurants qui cherchent à offrir une expérience mémorable à leurs convives tout en préservant leur rentabilité.`,
      },
    ],
    caracteristics: [
      "Format A3",
      "Recto ou recto verso",
      "Impression Quadri HD sur presse offset",
      "Papier 80 gr Laser",
    ],
  },
  {
    id: 6,
    title: "Menu 4 pages indéchirable",
    product: ProductLibelle.MENU_RESTORE,
    format: "A3 ouvert - A4 fermé",
    base_price: 18500,
    category: impressCategories[7],
    cover: Resto6,
    type: "MENU RESTO",
    short_description: `Pour des menus un support de qualité qui résiste à des utilisations intenses`,
    full_description: [
      {
        title:
          "Pour des menus un support de qualité qui résiste à des utilisations intenses.",
        desc: ``,
      },
    ],
    caracteristics: [
      "Impression couleur HD sur presse numérique",
      "Support polyester blanc 195 ou 350 micron",
      "coins arrondis",
      "1 pli au centre",
      "350 gr couché mat",
      "Livré rainé & plié",
    ],
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

  /* flyers */
  FlyersTab,
  flyersPageText,
  flyersPaperType,
  flyersPrintingSide,
  flyersPaperWidget,
  flyersPelliculage,

  /* Bcards */
  bcardTab,
  bcardFormats,
  bcardPaperColors,
  bcardRadius,
  bcardOptions,

  /* brochure */
  brochures,
  brochurePageNumber,
  brochurePrintingSide,

  /* rollup */
  rollups,
  rollupSupport,

  /* menu resto */
  menusResto,
  plastifications,
  restoSupport,
  restoMenuPelliclage,

  /* promotionals */
  promostionals,
  /* All products */
  products,
};

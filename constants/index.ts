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
} from "@/public";
import {
  BlogProps,
  CategoryProps,
  PrestatorProps,
  ServiceProps,
} from "@/types";

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

export { categoriesTab, categories, services, prestators, blogs };

import {
  ExecutionDeadlineProps,
  FaqProps,
  GraphicServItemProps,
  GraphicServOptionalItemProps,
  GraphicServPack,
  GraphicServPackType,
  GraphicServProps,
} from "@/types";
import { FadeProps } from "react-slideshow-image";

export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },

  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    isOpen: true,
    isHide: true,
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "analytics",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
      },
      {
        childtitle: "Project  Dashbaord",
        childlink: "project",
      },
      {
        childtitle: " CRM Dashbaord",
        childlink: "crm",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
      },
    ],
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    isHide: false,
    badge: "1.0.0",
  },
  {
    isHeadr: true,
    title: "apps",
  },

  {
    title: "Chat",
    isHide: true,
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    isHide: true,
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    isHide: true,
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    isHide: true,
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    isHide: true,
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/reg",
      },
      {
        childtitle: "Signup Two",
        childlink: "/reg2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/reg3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    isHide: false,
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      // {
      //   childtitle: "Testimonial",
      //   childlink: "testimonial",
      // },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },
      {
        childtitle: "Blank page",
        childlink: "blank-page",
      },
      {
        childtitle: "Prfoile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "error-page",
      },

      {
        childtitle: "Coming Soon",
        childlink: "coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "under-construction",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },

      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badges",
        childlink: "badges",
      },
      {
        childtitle: "Paginatins",
        childlink: "paginations",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Table",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
  {
    title: "Multi Level",
    icon: "heroicons:share",
    link: "#",
    child: [
      {
        childtitle: "Level 1.1",
        childlink: "icons",
      },
      {
        childtitle: "Level 1.2",
        childlink: "Level-1",
        multi_menu: [
          {
            multiTitle: "Level 2.1",
            multiLink: "Level-2",
          },
          {
            multiTitle: "Level 2.2",
            multiLink: "Level-2.3",
          },
        ],
      },
    ],
  },
];

export const topMenu = [
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "dashboard",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },

          // {
          //   m_childtitle: "Testimonial",
          //   m_childlink: "testimonial",
          // },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blank page",
            m_childlink: "blank-page",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "error-page",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "under-construction",
          },
        ],
      },
    ],
  },

  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",

    image: "/assets/images/all-img/user.png",
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",

    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",

    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: "/assets/images/all-img/user1.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: "/assets/images/all-img/user2.png",
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: "/assets/images/all-img/user3.png",
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: "/assets/images/all-img/user4.png",
    link: "#",
  },
];

export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export const hexToRGB = (hex: string, alpha: string) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const topFilterLists = [
  {
    name: "Inbox",
    value: "all",
    icon: "uil:image-v",
  },
  {
    name: "Starred",
    value: "fav",
    icon: "heroicons:star",
  },
  {
    name: "Sent",
    value: "sent",
    icon: "heroicons-outline:paper-airplane",
  },

  {
    name: "Drafts",
    value: "drafts",
    icon: "heroicons-outline:pencil-alt",
  },
  {
    name: "Spam",
    value: "spam",
    icon: "heroicons:information-circle",
  },
  {
    name: "Trash",
    value: "trash",
    icon: "heroicons:trash",
  },
];

export const bottomFilterLists = [
  {
    name: "personal",
    value: "personal",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Social",
    value: "social",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Promotions",
    value: "promotions",
    icon: "heroicons:chevron-double-right",
  },
  {
    name: "Business",
    value: "business",
    icon: "heroicons:chevron-double-right",
  },
];

export const meets = [
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
  {
    img: "/assets/images/svg/path.svg",
    title: "Design meeting (team)",
    date: "01 Nov 2021",
    meet: "Skyp meeting",
  },
  {
    img: "/assets/images/svg/dc.svg",
    title: "Background research",
    date: "01 Nov 2021",
    meet: "Google meeting",
  },
  {
    img: "/assets/images/svg/sk.svg",
    title: "Meeting with client",
    date: "01 Nov 2021",
    meet: "Zoom meeting",
  },
];

export const files = [
  {
    img: "/assets/images/icon/file-1.svg",
    title: "Dashboard.fig",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-1.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/zip-1.svg",
    title: "Job portal_app.zip",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/pdf-2.svg",
    title: "Ecommerce.pdf",
    date: "06 June 2021 / 155MB",
  },
  {
    img: "/assets/images/icon/scr-1.svg",
    title: "Screenshot.jpg",
    date: "06 June 2021 / 155MB",
  },
];

export const date_interval = [
  "Dernières Heures",
  "Dernières 24 heures",
  "7 derniers jours",
  "14 derniers jours",
  "30 derniers jours",
  "Tout",
];

export const response_time = [
  "1 Hour",
  "2 Hours",
  "3 hours",
  "4 Hours",
  "5 Hours",
  "6 Hours",
  "7 Hours",
];

export const delivery_time = [
  "1 Jour",
  "2 Jous",
  "3 Jours",
  "4 Jourss",
  "5 Jourss",
  "6 Jourss",
  "7 Jourss",
];

export const english_level = [
  "Basic",
  "Conversational",
  "Fluent",
  "Native Or Bilingual",
  "Professional",
];
export const cities = [
  "Abidjan",
  "Man",
  "Biankouman",
  "Yakro",
  "Daloa",
  "Sans-Pédro",
  "Divo",
  "Gagnoa",
  "et etc ...",
];

export const iconTab: string[] = [
  "bi bi-bezier",
  "bi bi-code-slash",
  "bi bi-megaphone-fill",
  "bi bi-laptop",
  "bi bi-megaphone-fill",
  "bi bi-bezier",
  "bi bi-laptop",
  "bi bi-megaphone-fill",
  "bi bi-bezier",
  "bi bi-laptop",
];

export const colorTab = [
  "bg-color-black",

  "bg-color-green",

  "bg-color-purple",
  "bg-color-red",

  "bg-color-orange",

  "bg-color-yellow",

  "bg-color-blue",

  "bg-color-pink",

  "bg-color-brown",

  "bg-color-cyan",

  "bg-color-lime",

  "bg-color-teal",

  "bg-color-gray",

  "bg-color-deep-orange",

  "bg-color-indigo",

  "bg-color-light-blue",

  "bg-color-light-green",

  "bg-color-deep-purple",

  "bg-color-blue-gray",

  "bg-color-light-gray",
];

export const executable_deadline: ExecutionDeadlineProps[] = [
  {
    id: 1,
    numberOfDay: 1,
    price: 5000,
    type: GraphicServPackType.BASIQUE,
  },
  {
    id: 2,
    numberOfDay: 2,
    price: 2500,
    type: GraphicServPackType.BASIQUE,
  },
  {
    id: 3,
    numberOfDay: 3,
    price: 0,
    type: GraphicServPackType.BASIQUE,
  },
];

export const graphic_serv_packs: GraphicServPack[] = [
  {
    id: 1,
    libelle: GraphicServPackType.BASIQUE,
    subTitle: "PAQUET DE BASE",
    description:
      "Conceptions de logo minimales (logo de type texte avec conception minimale) au format de fichier jpeg et png",
    normalExecutionDeadline: executable_deadline[2],
    expressExecutionDeadlines: executable_deadline.slice(0, 2),
  },
  {
    id: 2,
    subTitle: "FORFAIT STANDARD",
    description:
      "Conception de mascotte illustrative avec fichier source (AUCUN caractère) ai, png, jpeg, svg",
    libelle: GraphicServPackType.STANDARD,
    normalExecutionDeadline: {
      id: 232,
      numberOfDay: 4,
      price: 0,
      type: GraphicServPackType.STANDARD,
    },
    expressExecutionDeadlines: [
      {
        id: 3232,
        numberOfDay: 1,
        price: 10000,
        type: GraphicServPackType.STANDARD,
      },
      {
        id: 232,
        numberOfDay: 2,
        price: 7000,
        type: GraphicServPackType.STANDARD,
      },
    ],
  },
  {
    id: 3,
    subTitle: "FORFAIT CRÉATIF",
    description:
      "1 Caricature de personnage ou dessin animé (haute résolution, droits d'auteur complets ai, png, jpeg, svg)",
    libelle: GraphicServPackType.PREMIUM,
    normalExecutionDeadline: {
      id: 23342,
      numberOfDay: 6,
      price: 0,
      type: GraphicServPackType.PREMIUM,
    },
    expressExecutionDeadlines: [
      {
        id: 232342,
        numberOfDay: 2,
        price: 20000,
        type: GraphicServPackType.PREMIUM,
      },
      {
        id: 232342,
        numberOfDay: 3,
        price: 15000,
        type: GraphicServPackType.PREMIUM,
      },
    ],
  },
];

export const graphic_serv_optional_items: GraphicServOptionalItemProps[] = [
  {
    id: 5,
    libelle: "Fichier source",
    price: 1000,
    values: null,
  },
  {
    id: 6,
    libelle: "Offre optionnel 1",
    price: 4000,
    values: null,
  },
  {
    id: 7,
    libelle: "Offre optionnel 2",
    price: 3000,
    values: null,
  },
];
export const graphic_serv_items: GraphicServItemProps[] = [
  {
    id: 1,
    libelle: "Transparence de logo",
    price: 500,
    type: GraphicServPackType.BASIQUE,
    values: null,
  },
  {
    id: 2,
    libelle: "Fichier vectoriel",
    price: 600,
    type: GraphicServPackType.STANDARD,
    values: null,
  },
  {
    id: 3,
    libelle: "Fichier imprimable",
    price: 700,
    type: GraphicServPackType.BASIQUE,
    values: null,
  },
  {
    id: 4,
    libelle: "Maquette 3D",
    price: 800,
    type: GraphicServPackType.STANDARD,
    values: null,
  },

  {
    id: 6,
    libelle: "Conceptions de papeterie",
    price: 1500,
    type: GraphicServPackType.PREMIUM,
    values: null,
  },
  {
    id: 7,
    libelle: "Kit réseaux sociaux",
    price: 1500,
    type: GraphicServPackType.STANDARD,
    values: null,
  },
  {
    id: 8,
    libelle: "Nombre de concepts inclus",
    price: 2000,
    type: GraphicServPackType.BASIQUE,
    values: [
      {
        id: 1,
        value: "2",
        valueType: GraphicServPackType.BASIQUE,
      },
      {
        id: 2,
        value: "4",
        valueType: GraphicServPackType.STANDARD,
      },
      {
        id: 3,
        value: "6",
        valueType: GraphicServPackType.PREMIUM,
      },
    ],
  },
  {
    id: 9,
    libelle: "Revision",
    price: 3000,
    type: GraphicServPackType.BASIQUE,
    values: [
      {
        id: 1,
        value: "2",
        valueType: GraphicServPackType.BASIQUE,
      },
      {
        id: 2,
        value: "4",
        valueType: GraphicServPackType.STANDARD,
      },
      {
        id: 3,
        value: "Illimité",
        valueType: GraphicServPackType.PREMIUM,
      },
    ],
  },
];

const faqTab: FaqProps[] = [
  {
    question: "Comment pouvons-nous commencer?",
    answer:
      "C'est très facile! Après avoir commandé mon service , vous verrez quelques questions de base où je déterminerai vos besoins exacts et vous fournirai des conceptions basées sur celui-ci.",
  },
  {
    question: "Qu'est-ce que les fichiers sources et en quoi sont-ils utiles ?",
    answer:
      "Les fichiers source sont les fichiers originaux de la conception du logo grâce auxquels vous pouvez modifier/redimensionner le logo à n'importe quelle taille sans perte de qualité à l'aide du logiciel Adobe Illustrator. Ils sont disponibles aux formats Ai, EPS, PSD, PDF, PNG, SVG. Je recommanderais de sélectionner un forfait Standard/Premium pour cet avantage.",
  },
  {
    question: "Qu'est-ce qu'un kit de médias sociaux ?",
    answer:
      "Le kit de médias sociaux est des couvertures pour différentes plates-formes de médias sociaux comme Facebook, Twitter, YouTube et GooglePlus. Le logo que je conçois sera présenté sur ces couvertures et ils sont dans une taille et des dimensions adaptées aux plateformes de médias sociaux. Il est proposé en forfait Standard et Premium.",
  },
  {
    question: "Qu'est-ce que les conceptions stationnaires ?",
    answer:
      "Les conceptions de papeterie sont l'ensemble de la carte de visite et du papier à en-tête qui est conçu de manière symétrique au thème général et aux couleurs de la conception de votre logo. Il est livré dans des fichiers prêts à imprimer directs en RVB/CMJN selon vos besoins. Il est proposé uniquement dans le FORFAIT PREMIUM.",
  },
  {
    question:
      "Quel package dois-je choisir pour obtenir un logo exceptionnel ?",
    answer:
      "Pour obtenir un logo exceptionnel, je vous recommande de choisir le forfait standard/premium car il comprend un processus de conception unique qui offre le meilleur concept esthétique.",
  },
  {
    question: "Fournissez-vous d'autres services graphiques ?",
    answer:
      "C'est une excellente question ! Je fournis la conception d'étiquettes, la conception de guides de style de marque, la conception de publications Instagram et bien plus encore. N'hésitez pas à en savoir plus :)",
  },
];

export const graphic_serv_test: GraphicServProps[] = [
  {
    id: 1,
    libelle: "Je concevrai votre logo créatif en 24 heures",
    categoryId: 1,
    covers: [
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%204_mbsv7v.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d/do-minimalist-logo-design.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/110928855/original/7ca6bdb0455fd2b541a96b9e7c566da52930168a/do-minimalist-logo-design.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/110928855/original/8b65c55172f99d57b28fe8030a9d6695f2f21a6f/do-minimalist-logo-design.jpg",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%206_qvi1ab.jpg",
    ],
    createdAt: new Date(),
    items: graphic_serv_items,
    optionalItems: graphic_serv_optional_items,
    packs: graphic_serv_packs,
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
    faq: faqTab,
  },
];

export const options = [
  "Trier par (Défaut)",
  "Les plus récentes",
  "Les plus anciens",
  "Aléatoire",
];

export const categories_placeholder =
  "https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/category-placeholder-0UaNUIbd7O845uDA7wUH3J1pzESjEA.png";

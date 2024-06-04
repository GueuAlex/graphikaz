import { StaticImageData } from "next/image";

export interface ServiceProps {
  id: number;
  title: string;
  category: string;
  cover: StaticImageData;
  reviewScore: number;
  totalReview: number;
  startPrice: number;
  additionnalOptions: OptionsProps[];
  prestatorId: number;
  coverList: StaticImageData[];
}

export interface PayProps {
  libelle: string;
  img: StaticImageData;
}

export interface apiServiceProps {
  id: number;
  libelle: string;
  description: string;
  category_id: number;
  create_at: Date;
  image_services: ImageProps[];
  pack_services: packProps[];
}

export interface packProps {
  id: number;
  libelle: string;
  montant: number;
  delais_livraison: number;
  service_id: number;
  type_paiement_id: number;
  pourcentage_remuneration: number;
  create_at: Date;
  ligne_services: OptionsProps[];
}

export interface OptionsProps {
  id: number;
  libelle: string;
  montant: number;
  pourcentage_remuneration: number;
}

export interface PrestatorProps {
  id: number;
  fullName: string;
  profilPic: StaticImageData;
  competence: String[];
  profilLink: string;
  post: string;
}

export interface userProps {
  id: number;
  name: string;
  email: string;
  type_user: string;
}

export interface userMenuProps {
  label: string;
  iconClass: string;
}

export interface BlogProps {
  id: number;
  title: string;
  subtitle: string;
  postAt: Date;
  cover: StaticImageData;
  blogLink: string;
}

export interface CategoryProps {
  id: number;
  label: string;
  service_count: number;
  cover: StaticImageData;
}

export interface ApiCategoryProps {
  id: number;
  libelle: string;
  type: "CREATION GRAPHIQUE";
  cover: string;
  icon: string;
  service_count: number;
}

export interface ImageProps {
  id: number;
  libelle: string;
  service_id: number;
}

export interface DefaultOrderProps {
  numero_commande: string | undefined;
  service_id: number;
  pack_service_id: number;
  status: string;
  reference_paiement: string | undefined;
  status_paiement: string;
}

export interface CustomeOrderProps {
  numero_commande: string | undefined;
  reference_paiement: string | undefined;
  service_id: number;
  options: OptionsProps[];
  packs: packProps[];
  status: string;
  status_paiement: string;
}

export interface communeProps {
  id: number;
  commune: string;
}
export interface cityProps {
  id: number;
  ville: string;
}
export interface countryProps {
  id: number;
  pays: string;
}

export interface deliZoneProps {
  id: number;
  country_id: number;
  city_id: number;
  commune_id: number;
  montant: number;
  country: countryProps;
  city: cityProps;
  commune: communeProps;
}

export interface ChatMessageProps {
  id: number;
  sender: userProps;
  receiver: userProps;
  message_text: string;
  unread: boolean;
  date: Date;
}

export interface ChatProps {
  id: number;
  participants: userProps[];
  concerned_order: CahtDefaultOrderProps;
  messages: ChatMessageProps[];
}
export interface CahtDefaultOrderProps {
  numero_commande: string | undefined;
  service_id: number;
  service_name: string;
  pack_service_id: number;
  status: string;
  reference_paiement: string | undefined;
  status_paiement: string;
}

/* impression data props */
export interface ImpressCategoryProps {
  id: number;
  libelle: string;
  type: "IMPRESS";
  cover: string;
}

export interface ImpressMetadataProps {
  id: number;
  metadata_libelle: string;
  decsription: string | undefined;
  data: ImpressMetadataNameProps[];
}

export interface ImpressMetadataNameProps {
  id: number;
  data_name: string;
  decsription: string | undefined;
  additional_price: number;
}

export interface ImpressableProps {
  id: number;
  title: string;
  product: ProductLibelle;
  category: ImpressCategoryProps;
  base_price: number;
  cover: StaticImageData;
  short_description: string;
  /* metadata: ImpressMetadataProps[]; */
}
interface Fulldescription {
  title: string;
  desc: string;
}
export interface FlyersProps extends ImpressableProps {
  isFolded: boolean;
  format: string;
  type: "UNFOLDED" | "FOLDED";
  full_description: Fulldescription[];
  caracteristics: string[];
}

export interface PromotionalProps extends ImpressableProps {
  format: string;
  type: string;
  full_description: Fulldescription[];
  caracteristics: string[];
}

export interface BcardProps extends ImpressableProps {
  formats: MetaDataProps[];
  full_description: Fulldescription[];
  caracteristics: string[];
  type: "BY FINISH" | "BY TYPE";
}

export interface BrochureProps extends ImpressableProps {
  full_description: Fulldescription[];
  format: string;
  caracteristics: string[];
  type: "EXPRESS" | "STANDARD" | "N&B";
}

export interface RollupProps extends ImpressableProps {
  full_description: Fulldescription[];
  format: string;
  caracteristics: string[];
  type: "ROLLUP";
}

export interface RestoProps extends ImpressableProps {
  full_description: Fulldescription[];
  format: string;
  caracteristics: string[];
  type: "MENU RESTO";
}

export interface ImpressOrderProps {
  order_number: string | null;
  user_id: number | null;
  transaction_ref: string | null;
  amount: number;
  ordering_at: Date | null;
  impressable: string;
  impressable_type: string | null;
  impressable_format: string | null;
  quantity: number;
  checkout_type: CheckoutType | null;
  checkout_status: CheckoutStatus | null;
  order_status: OrderStatus | null;
  meta_data: { [key: string]: MetaDataProps };
}

export interface MetaDataProps {
  libelle: string;
  price: number;
}

export enum CheckoutType {
  CASH = "CASH",
  HALF = "HALF",
}

export enum CheckoutStatus {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  REFUSED = "REFUSED",
}

export enum ProductLibelle {
  FLYER = "FLYER",
  BUSINESS_CARD = "BUSINESS_CARD",
  BROCHURE = "BROCHURE",
  ROLLUP = "ROLLUP",
  MENU_RESTORE = "MENU_RESTORE",
  PROMOTIONAL = "PROMOTIONAL",
}

export enum OrderStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  IN_PROCESS = "IN_PROCESS",
  CANCELLED = "CANCELLED",
}

/* CREATION GRAPHIC INTERFACES */
export interface GraphicServProps {
  id: number;
  libelle: string;
  categoryId: number;
  fullDescription: string;
  covers: string[];
  items: GraphicServItemProps[];
  optionalItems: GraphicServOptionalItemProps[];
  packs: GraphicServPack[];
  faq: FaqProps[];
  createdAt: Date;
}

export interface GraphicServItemValueProps {
  id: number;
  value: string;
  valueType: GraphicServPackType;
}

export interface GraphicServOptionalItemProps {
  id: number;
  libelle: string;
  values: GraphicServItemValueProps[] | null;
  price: number;
}
export interface GraphicServItemProps extends GraphicServOptionalItemProps {
  type: GraphicServPackType;
}

export interface GraphicServPack {
  id: number;
  libelle: GraphicServPackType;
  subTitle: string;
  description: string;
  expressExecutionDeadlines: ExecutionDeadlineProps[];
  normalExecutionDeadline: ExecutionDeadlineProps;
}

export interface ExecutionDeadlineProps {
  id: number;
  numberOfDay: number;
  price: number;
  type: GraphicServPackType;
}
export interface ExpressExecutionDeadlineProps {
  id: number;
  numberOfDay: number;
  price: number;
  type: GraphicServPackType;
}

export enum GraphicServPackType {
  BASIQUE = "BASIQUE",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}

export interface FaqProps {
  question: string;
  answer: string;
}

export interface GraphicServOrderProps {
  id: number;
  order_ref: string;
  pack_type: GraphicServPackType;
  delivery_delay: number;
  optional_items: GraphicServOptionalItemProps[];
  order_status: OrderStatus;
  created_at: Date;
}

export interface TransactionProps {
  id: number;
  amount: number;
  transaction_ref: string;
  paiement_type: CheckoutType;
  paiement_status: CheckoutStatus;
  created_at: Date;
}

/* *******************************************************************
 ** UTILISER DANS LE CONTEXT LOCAL /creationgraphique/category/slug **/

// Types des données de prix
export interface PriceData {
  basicTotalPrice: number;
  standardTotalPrice: number;
  premiumTotalPrice: number;
}

// Types des fonctions de mise à jour des prix
export interface PriceFunctions {
  setBasicTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setStandardTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setPremiumTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

// service du context
export interface ContextServiceProps {
  test_service: GraphicServProps | undefined;
}

// context seletected pack
export interface ContextSeletecdPackProps {
  contextPack: GraphicServPack | null;
  setContextPack: React.Dispatch<React.SetStateAction<GraphicServPack | null>>;
}

export interface ItemSelectedOnProps {
  optionalItems: GraphicServOptionalItemProps[];
  selectedOn: GraphicServPackType;
}
// lignes de service optionnel selectionné
// temps de livraison selectionné
export interface ContextSelection {
  seletedOptionalItems: ItemSelectedOnProps | undefined;
  selectedDeliveryDelay: ExecutionDeadlineProps | null;
}

// fonction de mise a jour des context selections
export interface ContextSelectionSetters {
  setSeletedOptionalItems: React.Dispatch<
    React.SetStateAction<ItemSelectedOnProps | undefined>
  >;
  setSelectedDeliveryDelay: React.Dispatch<
    React.SetStateAction<ExecutionDeadlineProps | null>
  >;
}

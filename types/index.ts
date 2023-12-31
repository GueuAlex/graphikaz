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

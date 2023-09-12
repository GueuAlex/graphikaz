import { StaticImageData } from "next/image";

export interface ServiceProps {
    id: number,
    title: string,
    category: string,
    cover: StaticImageData,
    reviewScore: number,
    totalReview: number,
    startPrice: number,
    additionnalOptions : OptionsProps[],
    prestatorId: number,
    coverList: StaticImageData [],
}

export interface OptionsProps {
  id:number,
  slug: string,
  quota: number,
}

export interface PrestatorProps {
    id: number;
    fullName: string;
    profilPic: StaticImageData;
    profilLink: string;
  }

  export interface BlogProps {
    id: number;
    title: string;
    subtitle: string;
    postAt: Date;
    cover: StaticImageData;
    blogLink: string,
  }

  export interface CategoryProps {
    id: number,
    label: string
  }
  
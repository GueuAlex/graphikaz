import { GraphicServ, GraphicServCategory } from "@prisma/client";
import {
  ApiCategoryProps,
  apiServiceProps,
  deliZoneProps,
  GraphicServProps,
} from ".";

const baseUri = "https://graphikaz.digifaz.com/api/";
//const baseUrl = "http://localhost:3000/api/";
const getHeaders = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    "Content-Type": "application/json",
  },
};
export const fetchServices = async (): Promise<GraphicServProps[]> => {
  //"use server";
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}g-services`,
      getHeaders
    );
    if (!response.ok) {
      //console.log(response.);
      throw new Error("Erreur lors de la récupération des données");
    }
    //console.log("bonjour ici 1");
    //console.log(await response.json());
    //console.log("bonjour ici 2");
    const apiDataList = await response.json();

    // Effectuez le mappage pour chaque élément de la liste
    /* const mappedDataList: GraphicServProps[] = apiDataList.map(
      (apiData: any) => ({
        
        id: apiData.id,
        covers: apiData.covers,
        category_id: apiData.categoryId,
        created_at: apiData.createdAt,
        full_description: apiData.fullDescription,
        optional_items: apiData.optionalItems,
      })
    ); */

    //console.log(mappedDataList.at(0)?.service.libelle);

    return apiDataList;
  } catch (error: any) {
    // Spécifiez ici le type de l'erreur
    throw new Error("Une erreur s'est produite : " + error.message);
  }
};

//////////
//
export const getCategories = async (): Promise<ApiCategoryProps[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}g-categories/`,
      getHeaders
    );

    if (!response.ok) {
      const errorDetails = await response.text();
      console.log(
        `Request failed with status ${response.status}: ${errorDetails}`
      );
      throw new Error(`Request failed with status ${response.status}`);
    }

    const apiDataList = await response.json();

    // Effectuez le mappage pour chaque élément de la liste
    const categories: ApiCategoryProps[] = apiDataList.map((apiData: any) => ({
      id: apiData.id,
      libelle: apiData.libelle,
      type: "CREATION GRAPHIQUE",
      cover: apiData.cover,
      icon: apiData.icon,
    }));

    return categories;
  } catch (error: any) {
    throw new Error("Une erreur s'est produite : " + error.message);
  }
};
///

//////////
export const getDeliZone = async (): Promise<deliZoneProps[]> => {
  //"use server";
  try {
    const response = await fetch(`${baseUri}livraisons`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    //console.log("bonjour ici 1");
    //console.log(await response.json());
    //console.log("bonjour ici 2");
    const apiDataList = await response.json();

    // Effectuez le mappage pour chaque élément de la liste
    const deliZone: deliZoneProps[] = apiDataList.map((apiData: any) => ({
      id: apiData.id,
      country_id: apiData.country_id,
      commune_id: apiData.commune_id,
      city_id: apiData.city_id,
      montant: apiData.montant,
      country: apiData.country,
      city: apiData.city,
      commune: apiData.commune,
    }));

    //console.log(mappedDataList.at(0)?.service.libelle);

    return deliZone;
  } catch (error: any) {
    // Spécifiez ici le type de l'erreur
    throw new Error("Une erreur s'est produite : " + error.message);
  }
};

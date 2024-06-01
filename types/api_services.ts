import { ApiCategoryProps, apiServiceProps, deliZoneProps } from ".";

const baseUri = "https://graphikaz.digifaz.com/api/";
//const baseUrl = "http://localhost:3000/api/";
export const fetchAllData = async (): Promise<apiServiceProps[]> => {
  //"use server";
  try {
    const response = await fetch(`${baseUri}services`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    //console.log("bonjour ici 1");
    //console.log(await response.json());
    //console.log("bonjour ici 2");
    const apiDataList = await response.json();

    // Effectuez le mappage pour chaque élément de la liste
    const mappedDataList: apiServiceProps[] = apiDataList.map(
      (apiData: any) => ({
        id: apiData.id,
        libelle: apiData.libelle,
        description: apiData.description,
        category_id: apiData.category_id,
        /* delais_livrai: apiData.delais_livraison, */
        /* service_id: apiData.service_id, */
        /* type_paiement_id: apiData.type_paiement_id, */
        /* pourcentage_remuneration: apiData.pourcentage_remuneration, */
        create_at: apiData.create_at,
        image_services: apiData.image_services,
        pack_services: apiData.pack_services,
        /* ligne_services: apiData.ligne_services, */
      })
    );

    //console.log(mappedDataList.at(0)?.service.libelle);

    return mappedDataList;
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
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
          "Content-Type": "application/json",
        },
      }
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

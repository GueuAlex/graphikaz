import { ApiCategoryProps, apiServiceProps } from ".";

const baseUri = "https://graphikaz.digifaz.com/api/";
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
export const getCategories = async (): Promise<ApiCategoryProps[]> => {
  //"use server";
  try {
    const response = await fetch(`${baseUri}categories`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    //console.log("bonjour ici 1");
    //console.log(await response.json());
    //console.log("bonjour ici 2");
    const apiDataList = await response.json();

    // Effectuez le mappage pour chaque élément de la liste
    const categories: ApiCategoryProps[] = apiDataList.map((apiData: any) => ({
      id: apiData.id,
      libelle: apiData.libelle,
    }));

    //console.log(mappedDataList.at(0)?.service.libelle);

    return categories;
  } catch (error: any) {
    // Spécifiez ici le type de l'erreur
    throw new Error("Une erreur s'est produite : " + error.message);
  }
};

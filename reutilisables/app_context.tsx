"use client";

import { ApiCategoryProps, deliZoneProps, GraphicServProps } from "@/types";
import {
  fetchServices,
  getCategories,
  getDeliZone,
} from "@/types/api_services";
import React, { useState, createContext, ReactNode, useEffect } from "react";

// Mettre à jour le type du contexte

interface AppContextType {
  state: boolean;
  toggleState: () => void;
  categories: ApiCategoryProps[]; // Liste des catégories
  servicesList: GraphicServProps[];
  deliveryZones: deliZoneProps[];
  isLoading: boolean; // Indicateur de chargement
}

export const MyAppContext = createContext<AppContextType | null>(null);

interface AppContextProviderProps {
  children: ReactNode;
}

// AppContextProvider qui charge les catégories et gère l'état de chargement
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState(false);
  const [categories, setCategories] = useState<ApiCategoryProps[]>([]);
  const [servicesList, setServicesList] = useState<GraphicServProps[]>([]);
  const [deliveryZones, setDeliveryZones] = useState<deliZoneProps[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Indicateur de chargement

  const toggleState = () => {
    setState(!state);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCategories().then((fetchedCategories) =>
          setCategories(fetchedCategories)
        );
        await fetchServices().then((services) => setServicesList(services));
        await getDeliZone().then((zones) => setDeliveryZones(zones));
        setIsLoading(false); // Mise à jour de l'état de chargement
      } catch (error) {
        console.error(
          "Erreur lors du chargement des catégories app context",
          error
        );
      } finally {
        setIsLoading(false); // Mise à jour de l'état de chargement
      }
    };

    fetchData(); // Charger les catégories lors du montage
  }, [servicesList.length, categories.length]);

  return (
    <MyAppContext.Provider
      value={{
        state,
        toggleState,
        categories,
        isLoading,
        servicesList,
        deliveryZones,
      }}
    >
      {children}
    </MyAppContext.Provider>
  );
};

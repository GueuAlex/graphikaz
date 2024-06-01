import {
  ContextSelection,
  ContextSelectionSetters,
  ContextSeletecdPackProps,
  ContextServiceProps,
  PriceData,
  PriceFunctions,
} from "@/types";
import { createContext } from "react";

// context locale permettant de transmetre les données au composant enfant
export const LocalContext = createContext<
  PriceData &
    PriceFunctions &
    ContextServiceProps &
    ContextSelection &
    ContextSelectionSetters &
    ContextSeletecdPackProps
>(
  {} as PriceData &
    PriceFunctions &
    ContextServiceProps &
    ContextSelection &
    ContextSelectionSetters &
    ContextSeletecdPackProps
);

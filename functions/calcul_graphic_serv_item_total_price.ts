import { GraphicServPackType, GraphicServProps } from "@/types";

export const calculateItemsTotalPrice = (
  service: GraphicServProps,
  type: GraphicServPackType
): number => {
  return service.items
    .filter((item) => item.type === type)
    .reduce((total, currentItem) => total + currentItem.price, 0);
};

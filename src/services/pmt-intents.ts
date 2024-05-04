import { api } from "./api";
import type { ItemAndQty } from "../types";

export const pmtIntents = {
  create: async (items: ItemAndQty[], shippingCost: number) => {
    return await api.post("/pmt-intents", {
      items,
      shippingCost,
    });
  },
  update: async (
    pmtIntentId: string,
    items: ItemAndQty[],
    shipping: number
  ) => {
    return await api.put("/pmt-intents", {
      pmtIntentId,
      items,
      shipping,
    });
  },
};

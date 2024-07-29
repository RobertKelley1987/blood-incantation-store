import { api } from "./api";
import type { ItemAndQty } from "../types";

export const pmtIntents = {
  create: async (items: ItemAndQty[], shippingCost: number) => {
    const { data } = await api.post("/pmt-intents", {
      items,
      shippingCost,
    });
    return data;
  },
  update: async (
    pmtIntentId: string,
    items: ItemAndQty[],
    shipping: number
  ) => {
    const { data } = await api.put("/pmt-intents", {
      pmtIntentId,
      items,
      shipping,
    });
    return data;
  },
};

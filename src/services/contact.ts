import { api } from "./api";
import { ContactFormData } from "../types";

export const contact = {
  sendMail: async (formData: ContactFormData) => {
    return await api.post("/contact", formData);
  },
};

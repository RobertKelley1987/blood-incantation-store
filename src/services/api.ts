import axios from "axios";

const baseURL = "https://server.fakebloodstore.xyz";

export const api = axios.create({ baseURL });

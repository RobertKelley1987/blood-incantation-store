import axios from "axios";

// DEV API
const baseURL = "/";

// PRODUCTION API
// const baseURL = "https://server.fakebloodstore.xyz";

export const api = axios.create({ baseURL });

import axios from "axios";

let baseURL = "http://ec2-18-191-228-177.us-east-2.compute.amazonaws.com/";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

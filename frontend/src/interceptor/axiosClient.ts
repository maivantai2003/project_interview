import axios from "axios";
import { config } from "../constant/config";

export const axiosClient = axios.create({
  baseURL: config.URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(config.URL_API)
import axios from "axios";
import { uri } from "./uri";

export const ApiRequest = () => {
  const request = axios.create({
    baseURL: "",
    timeout: 1000000,
    headers: {
      "X-Riot-Token": "RGAPI-ed406459-7c5c-4b38-9106-663c8cac8063",
    },
  });
  return request;
};

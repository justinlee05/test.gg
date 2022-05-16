import axios from "axios";
import { uri } from "./uri";

export const ApiRequest = () => {
  const request = axios.create({
    baseURL: "",
    timeout: 1000000,
    headers: {
      "X-Riot-Token": "RGAPI-d840b3dc-16ef-4593-ab72-e19f04305356",
    },
  });
  return request;
};

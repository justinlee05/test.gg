import axios from "axios";
import { uri } from "./uri";

export const ApiRequest = () => {
  const request = axios.create({
    baseURL: "",
    timeout: 1000000,
    headers: {
      "X-Riot-Token": "RGAPI-fd07bb31-b991-44a1-8396-0367d488c75c",
    },
  });
  return request;
};

import axios from "axios";
import { uri } from "./uri";

export const ApiRequest = () => {
  const request = axios.create({
    baseURL: "https://kr.api.riotgames.com",
    timeout: 1000,
    headers: {
      Authrization: "RGAPI-04932f19-713d-4d81-8be2-71532cde4c02",
    },
  });
  return request;
};

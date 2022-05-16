import {  useQuery } from "react-query";
import { getAllChampMastery, getOneChampMastery } from "../../data/api/getChampionMastery";

export const useOneChampMastery = (playerName:string = "이킵드",ChampionId:string) => {
  const { data , isLoading } = useQuery('one-champ-mastery',()=>getOneChampMastery(playerName,ChampionId))
  console.log(data,isLoading)
  return {data,isLoading}
};

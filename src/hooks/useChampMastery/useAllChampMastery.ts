import { useQueries, useQuery } from "react-query";
import { getAllChampMastery } from "../../data/api/getChampionMastery";

export const useAllChampMastery = (playerName:string = "이킵드") => {
  const { data , isLoading } = useQuery('all-champ-mastery',()=>getAllChampMastery(playerName))
  console.log(data,isLoading)
  return {data,isLoading}
};

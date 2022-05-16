import { ApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { uri } from "./uri";

export const getAllChampMastery = async (playerId: string) => {
  const userid = await getUserId(playerId);
  const response = await ApiRequest().get(uri.champ_mastery_score(userid.id));
  return response;
};

export const getOneChampMastery = async (
  playerId: string,
  ChampionId: string
) => {
  const userid = await getUserId(playerId);
  const response = await ApiRequest().get(
    uri.champ_mastery_champ(userid, ChampionId)
  );
  return response;
};

export const getTotalChampMastery = async (playerId: string) => {
  try {
    const response = await ApiRequest().get(uri.champ_mastery_level(playerId));
    return response.data;
  } catch (err) {
    throw err;
  }
};

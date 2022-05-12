import { ApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { uri } from "./uri";

export const getAllChampMastery = async (playerId: string) => {
  try {
    console.log("getAllchampMastery")
    const userid = await getUserId(playerId);
    const response = await ApiRequest().get(uri.champ_mastery_score(userid.id));
    console.log("response",response);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getOneChampMastery = async (
  playerId: string,
  ChampionId: string
) => {
  try {
    const response = await ApiRequest().get(
      uri.champ_mastery_champ(playerId, ChampionId)
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getTotalChampMastery = async (playerId: string) => {
  try {
    const response = await ApiRequest().get(uri.champ_mastery_level(playerId));
    return response.data;
  } catch (err) {
    throw err;
  }
};

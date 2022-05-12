import { ApiRequest } from "./default";
import { uri } from "./uri";

export const getAllChampMastery = async (playerId: string) => {
  try {
    const response = await ApiRequest().get(uri.champ_mastery_score(playerId));
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
    return response;
  } catch (err) {
    throw err;
  }
};

export const getTotalChampMastery = async (playerId: string) => {
  try {
    const response = await ApiRequest().get(uri.champ_mastery_level(playerId));
    return response;
  } catch (err) {
    throw err;
  }
};

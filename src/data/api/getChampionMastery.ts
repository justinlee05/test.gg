import { RiotApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { rioturi } from "./Rioturi";

export const getAllChampMastery = async (playerId: string) => {
  const userid = await getUserId(playerId);
  const response = await RiotApiRequest().get(rioturi.champ_mastery_score(userid.id));
  return response;
};

export const getOneChampMastery = async (
  playerId: string,
  ChampionId: string
) => {
  const userid = await getUserId(playerId);
  const response = await RiotApiRequest().get(
    rioturi.champ_mastery_champ(userid, ChampionId)
  );
  return response;
};

export const getTotalChampMastery = async (playerId: string) => {
  try {
    const response = await RiotApiRequest().get(rioturi.champ_mastery_level(playerId));
    return response.data;
  } catch (err) {
    throw err;
  }
};

import { RiotApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { rioturi } from "./Rioturi";

//유저의 챔피언 숙련도에 관련된 정보를 가져오는 함수들입니다.

export const getAllChampMastery = async (playerId: string) => {
  const userid = await getUserId(playerId);
  const response = await RiotApiRequest().get(
    rioturi.champ_mastery_score(userid.id)
  );
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
    const response = await RiotApiRequest().get(
      rioturi.champ_mastery_level(playerId)
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

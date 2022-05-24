import { RiotApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { rioturi } from "./Rioturi";

//유저의 챔피언 숙련도에 관련된 정보를 가져오는 함수들입니다.

export const getAllChampMastery = async (playerId: string) => {
  const response = await RiotApiRequest().get(
    rioturi.champ_mastery_score(playerId)
  );
  return response;
};

export const getOneChampMastery = async (
  playerId: string,
  ChampionId: string
) => {
  const response = await RiotApiRequest().get(
    rioturi.champ_mastery_champ(playerId, ChampionId)
  );
  return response;
};

export const getTotalChampMastery = async (playerId: string) => {
  const response = await RiotApiRequest().get(
    rioturi.champ_mastery_level(playerId)
  );
  return response.data;
};

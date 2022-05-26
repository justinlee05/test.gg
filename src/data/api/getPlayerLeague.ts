import { RiotApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { rioturi } from "./Rioturi";

type typeofQueue = {
  leagueId: string;
  losses: number;
  queueType: string;
  rank: string; //VI
  tier: string; //challanger
  veteran: true;
  wins: number;
};

export const getPlayerLeague = async (userId: string) => {
  const response = await RiotApiRequest().get(rioturi.get_league_entry(userId));
  const data: typeofQueue[] = response.data;
  const [RANKED_SOLO] = data.filter(
    //솔랭
    (value: any) => value.queueType === "RANKED_SOLO_5x5"
  );
  const [RANKED_FLEX_SR] = data.filter(
    //자랭
    (value: any) => value.queueType === "RANKED_FLEX_SR"
  );
  /* const [RANKED_SOLO_5x5] = data.filter(
    (value: any) => value.queueType === "RANKED_SOLO_5x5"
  ); */
  const result = [
    RANKED_SOLO
      ? RANKED_SOLO
      : { queueType: "RANKED_SOLO_5x5", rank: "unranked", tier: "" },
    RANKED_FLEX_SR
      ? RANKED_FLEX_SR
      : { queueType: "RANKED_FLEX_SR", rank: "unranked", tier: "" },
  ];

  return result;
};

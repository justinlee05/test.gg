import { RiotApiRequest } from "./default";
import { getUserId } from "./getUserId";
import { rioturi } from "./Rioturi";

type ReturnType = {
  data: [
    {
      freshBlood: boolean;
      hotStreak: boolean;
      inactive: boolean;
      leagueId: "";
      leaguePoints: 0;
      losses: 0;
      queueType: "";
      rank: "";
      summonerId: "";
      summonerName: "";
      tier: "";
      veteran: boolean;
      wins: 0;
    }
  ];
};

export const getPlayerLeague = async (userId: string) => {
  const response: ReturnType = await RiotApiRequest().get(
    rioturi.get_league_entry(userId)
  );
  return response;
};

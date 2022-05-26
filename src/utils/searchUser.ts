import { getPlayerLeague } from "../data/api/getPlayerLeague";
import { getUserId } from "../data/api/getUserId";

export const searchUser = async (name: any) => {
  const summonerInfo = await getUserId(name);
  const leagueInfo = getPlayerLeague(summonerInfo.id);
  const data = {
    icon: summonerInfo.profileIconId,
    name: summonerInfo.name,
    id: summonerInfo.id,
    level: summonerInfo.summonerLevel,
    tiers: (await leagueInfo).map((value) => {
      if (value) {
        return {
          type: value.queueType,
          tier: value.tier,
          rank: value.rank,
        };
      }
    }),
  };
  return data;
};

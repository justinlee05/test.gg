import { RiotApiRequest } from "./default";
import { rioturi } from "./Rioturi";

type IdResponseType = {
  data: {
    accountId: string; //string	Encrypted account ID. Max length 56 characters.
    profileIconId: number; //int	ID of the summoner icon associated with the summoner.
    revisionDate: number; //long	Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
    name: string; //string	Summoner name.
    id: string; //string	Encrypted summoner ID. Max length 63 characters.
    puuid: string; //string	Encrypted PUUID. Exact length of 78 characters.
    summonerLevel: number; //long	Summoner level associated with the summoner.
  };
};

//유저의 닉네임을 통해 id값을 가져오는 함수입니다.

export const getUserId = async (playerName: string) => {
  const response:IdResponseType = await RiotApiRequest().get(
    rioturi.get_summoner_id(playerName)
  );
  return response.data;
};

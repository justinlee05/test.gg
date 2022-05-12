import { ApiRequest } from "./default";
import { uri } from "./uri";

type IdResponseType = {
  accountId: string; //string	Encrypted account ID. Max length 56 characters.
  profileIconId: number; //int	ID of the summoner icon associated with the summoner.
  revisionDate: number; //long	Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
  name: string; //string	Summoner name.
  id: string; //string	Encrypted summoner ID. Max length 63 characters.
  puuid: string; //string	Encrypted PUUID. Exact length of 78 characters.
  summonerLevel: number; //long	Summoner level associated with the summoner.
};

export const getUserId = async (playerName: string) => {
  try {
    const response = await ApiRequest().get(uri.get_summoner_id(playerName));
    console.log("res",response)
    return response.data;
  } catch (err) {
    throw err;
  }
};

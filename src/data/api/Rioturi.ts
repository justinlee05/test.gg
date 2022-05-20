const ChampMasteryByScore = (playerid: string) =>
  `/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerid}`;
const ChampMasteryByChamp = (playerid: string, champid: string) =>
  `/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerid}/by-champion/${champid}`;
const ChampMasteryByLevel = (playerid: string) =>
  `/lol/champion-mastery/v4/scores/by-summoner/${playerid}`;
const GetSummonerId = (playerName: string) =>
  `/lol/summoner/v4/summoners/by-name/${playerName}`;
export const rioturi = {
  champ_mastery_score: ChampMasteryByScore,
  champ_mastery_champ: ChampMasteryByChamp,
  champ_mastery_level: ChampMasteryByLevel,
  get_summoner_id: GetSummonerId,
};

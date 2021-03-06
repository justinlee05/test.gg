//riot api에 요청을 보내기 위해 사용하는 uri입니다.
const ChampMasteryByScore = (playerid: string) =>
  `/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerid}`;
const ChampMasteryByChamp = (playerid: string, champid: string) =>
  `/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerid}/by-champion/${champid}`;
const ChampMasteryByLevel = (playerid: string) =>
  `/lol/champion-mastery/v4/scores/by-summoner/${playerid}`;
const GetSummonerId = (playerName: string) =>
  `/lol/summoner/v4/summoners/by-name/${playerName}`;
const GetLeagueEntry = (playerid:string) => 
`/lol/league/v4/entries/by-summoner/${playerid}`

export const rioturi = {
  champ_mastery_score: ChampMasteryByScore,
  champ_mastery_champ: ChampMasteryByChamp,
  champ_mastery_level: ChampMasteryByLevel,
  get_summoner_id: GetSummonerId,
  get_league_entry:GetLeagueEntry
};

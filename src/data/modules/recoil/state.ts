import { atom } from "recoil";

export const champMasteryState = atom({
  key: "champMasteryState",
  default: {
    ChampionList: [],
    MostScoredChampion: {},
    Score: 0,
  },
});

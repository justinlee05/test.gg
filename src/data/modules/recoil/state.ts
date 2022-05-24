import { atom } from "recoil";

export const champMasteryState = atom({
  key: "champMasteryState",
  default: {
    ChampionList: [],
    MostScoredChampion: {},
    Score: 0,
  },
});

export const searchResult = atom({
  key: "searchResult",
  default:{
    id:"",
    name:"",
    level:0,
    tier:"",
    rank:"",
    icon:0,

  }
})

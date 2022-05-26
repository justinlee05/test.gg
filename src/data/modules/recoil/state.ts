import { atom } from "recoil";

export const champMasteryState = atom({
  key: "champMasteryState",
  default: {
    ChampionList: [],
    MostScoredChampion: {},
    Score: 0,
  },
});

type Tiertype = {
  type: "";
  tier: "";
  rank: "";
};

export const searchResult = atom({
  key: "searchResult",
  default: {
    icon: 0,
    id: "",
    level: 0,
    name: "",
    tiers: [
      {
        type: "",
        tier: "",
        rank: "",
      },
      undefined
    ],
  },
});

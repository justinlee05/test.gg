import { getAllChampMastery } from "../../../../api/getChampionMastery";
import { ChampMasteryActionType } from "../../action/ChampMastery";
import { GET_CHAMPLIST } from "../../action/ChampMastery/interface";
import { IStateOfChampMastery } from "./interface";

const IState: IStateOfChampMastery = {
  championPointsUntilNextLevel: 0,
  chestGranted: false,
  championId: undefined,
  lastPlayTime: 0,
  championLevel: 0,
  summonerId: undefined,
  championPoints: 0,
  championPointsSinceLastLevel: 0,
  tokensEarned: 0,
};

export const ChampMasteryReducer = (
  state = IState,
  action: ChampMasteryActionType
) => {
    switch(action.type){
        case GET_CHAMPLIST : {
            const newState = getAllChampMastery(action.payload)
            return newState
        }
        default : {
            return state
        }
    }
};

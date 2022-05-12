import { getAllChampMastery } from "../../../../api/getChampionMastery";
import { ChampMasteryActionType } from "../../action/ChampMastery";
import { GET_CHAMPLIST } from "../../action/ChampMastery/interface";
import { IStateOfChampMastery } from "./interface";

const IState: IStateOfChampMastery[] = [{
  championId: undefined,
  championLevel: 0,
  championPoints: 0,
  championPointsSinceLastLevel: 0,
  championPointsUntilNextLevel: 0,
  chestGranted: false,
  lastPlayTime: 0,
  summonerId: undefined,
  tokensEarned: 0,
}];

export const ChampMasteryReducer = async (
  state = IState,
  action: ChampMasteryActionType
) => {
  console.log("actiontype",action)
    switch(action.type){
        case GET_CHAMPLIST : {
          const newState = await getAllChampMastery(action.payload)
          console.log("newstate",newState.data)
            return newState.data
        }
        default : {
          console.log(1)
            return state
        }
    }
};

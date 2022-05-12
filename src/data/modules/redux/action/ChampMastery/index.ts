import { createAction } from "typesafe-actions";
import { GET_CHAMPLIST } from "./interface";

export const getChampList = createAction(GET_CHAMPLIST)<string>();

export type ChampMasteryActionType = ReturnType<typeof getChampList>;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../data/modules/redux/store";
import { getChampList } from "../data/modules/redux/action/ChampMastery";

export const useChampMastery = () => {
  const state = useSelector((state: RootState) => state.ChampMasteryReducer);
  const dispatch = useDispatch();

  const getById = (payload: string) => dispatch(getChampList(payload));

  return [
    state,
    getById
  ];
}

import { Reducer } from "redux";
import { filterActionTypes, setFilterType } from "../Actions/filterActions";

const initialState: string = "";
const setFilterReducer: Reducer<string, setFilterType> = (
  state: string = initialState,
  action
): string => {
  if (action.type === filterActionTypes.SET_FILTER) return action.filter;
  return state;
};
export default setFilterReducer;

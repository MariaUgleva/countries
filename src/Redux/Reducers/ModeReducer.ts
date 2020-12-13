import { Reducer } from "redux";
import { changeModeActionTypes, changeModeType } from "../Actions/ModeActions";

const initialState: string = "Dark";
const changeModeReducer: Reducer<string, changeModeType> = (
  state: string = initialState,
  action
): string => {
  if (action.type === changeModeActionTypes.CHANGE_MODE)
    return state === "Dark" ? "Light" : "Dark";
  return state;
};
export default changeModeReducer;
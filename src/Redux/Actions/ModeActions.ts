import { ActionCreator } from "redux";

export enum changeModeActionTypes {
  CHANGE_MODE = "CHANGE_MODE",
}
export type changeModeType = {
  type: changeModeActionTypes.CHANGE_MODE;
};

export const changeModeAction: ActionCreator<changeModeType> = () => ({
  type: changeModeActionTypes.CHANGE_MODE,
});

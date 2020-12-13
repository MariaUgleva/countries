import { ActionCreator } from "redux";

export enum filterActionTypes {
  SET_FILTER = "SET_FILTER",
}
export type setFilterType = {
  type: filterActionTypes.SET_FILTER;
  filter: string;
};

export const setFilterAction: ActionCreator<setFilterType> = (
  filter: string
) => ({
  type: filterActionTypes.SET_FILTER,
  filter: filter,
});

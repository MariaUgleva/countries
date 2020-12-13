import { ActionCreator } from "redux";
import {CardToRender} from '../../type'

export enum allCountriesActionTypes {
  REQUEST_FETCH = "REQUEST_FETCH",
  SET_COUNTRIES_TO_REDUX = "SET_COUNTRIES_TO_REDUX",
}
export type requestFetchType = {
  type: allCountriesActionTypes.REQUEST_FETCH;
};
export type setAllCountriesType = {
  type: allCountriesActionTypes.SET_COUNTRIES_TO_REDUX;
  data: Array<CardToRender>;
};

export type allCountriesActions = requestFetchType | setAllCountriesType;

export const requestFetchAllCountriesAction: ActionCreator<requestFetchType> = () => ({
  type: allCountriesActionTypes.REQUEST_FETCH,
});
export const setAllCountriesAction: ActionCreator<setAllCountriesType> = (
  data: Array<CardToRender>
) => ({
  type: allCountriesActionTypes.SET_COUNTRIES_TO_REDUX,
  data: data,
});

import { ActionCreator } from "redux";
import {CardToRender} from '../../type';

export enum formDataActionTypes {
  SET_DATA = "SET_DATA",
  REQUEST_DATA = "REQUEST_DATA",
}
export type requestDataType = {
  type: formDataActionTypes.REQUEST_DATA;
  country: string;
};
export type setDataType = {
  type: formDataActionTypes.SET_DATA;
  data: Array<CardToRender>;
};

export type formDataCountriesActions = requestDataType | setDataType;

export const requestDataCountriesAction: ActionCreator<requestDataType> = (
  country: string
) => ({
  type: formDataActionTypes.REQUEST_DATA,
  country: country,
});
export const setFormDataCountriesAction: ActionCreator<setDataType> = (
  data: Array<CardToRender>
) => ({
  type: formDataActionTypes.SET_DATA,
  data: data,
});

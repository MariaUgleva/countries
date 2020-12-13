import { Reducer } from "redux";
import {
  allCountriesActions,
  allCountriesActionTypes,
} from "../Actions/AllCountriesActions";
import {CardToRender} from '../../type';

const initialState: Array<CardToRender> = [];
const allCountriesReducer: Reducer<Array<CardToRender>, allCountriesActions> = (
  state: Array<CardToRender> = initialState,
  action
) => {
  switch (action.type) {
    case allCountriesActionTypes.SET_COUNTRIES_TO_REDUX:
      return action.data;
    default:
      return state;
  }
};
export default allCountriesReducer;

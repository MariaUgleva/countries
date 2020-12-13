import { Reducer } from "redux";
import {
  formDataCountriesActions,
  formDataActionTypes,
} from "../Actions/FormDataAction";
import {CardToRender} from '../../type';

const initialState: Array<CardToRender> = [];

const formDataReducer: Reducer<Array<any>, formDataCountriesActions> = (
  state: Array<CardToRender> = initialState,
  action
): Array<CardToRender> => {
  switch (action.type) {
    case formDataActionTypes.SET_DATA:
      console.log(action.data)
      return action.data;
    default:
      return state;
  }
};
export default formDataReducer;

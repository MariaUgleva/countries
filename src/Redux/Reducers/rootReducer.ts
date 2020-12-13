import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import allCountriesReducer from "./allCountriesReducer";
import formDataReducer from "./formDataReducer";
import changeModeReducer from "./ModeReducer";
import setFilterReducer from "./filterReducer";
import { History } from "history";

export type AppState = {
  router: RouterState;
  allCountries: Array<any>;
  mode: string;
  searchResult: Array<any>;
  filter: string;
};
const rootReducer = (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    allCountries: allCountriesReducer,
    mode: changeModeReducer,
    searchResult: formDataReducer,
    filter: setFilterReducer,
  });

export default rootReducer;

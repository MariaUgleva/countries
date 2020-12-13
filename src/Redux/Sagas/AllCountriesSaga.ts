import { put, takeEvery, call } from "redux-saga/effects";
import {
  allCountriesActionTypes,
  setAllCountriesAction,
  requestFetchType,
} from "../Actions/AllCountriesActions";
import {
  setFormDataCountriesAction,
  formDataActionTypes,
  requestDataType,
} from "../Actions/FormDataAction";
async function fetchAllCountries() {
  const resp = await fetch("https://restcountries.eu/rest/v2/all?fields=name;nativeName;currencies;region;population;subregion;capital;topLevelDomain;languages;flag;borders;alpha3Code;");
  return await resp.json();
}
async function fetchFormCountries(country: string) {
  const resp = await fetch(`https://restcountries.eu/rest/v2/name/${country}?fields=name;nativeName;currencies;region;population;subregion;capital;topLevelDomain;languages;flag;borders;alpha3Code;`);
  return await resp.json();
}
function* setAction(action: requestFetchType) {
  try {
    const countries = yield call(fetchAllCountries);
    yield put(setAllCountriesAction(countries));
  } catch (e) {
    console.log(e);
  }
}
function* fetchFormDataAction(action: requestDataType) {
  try {
    const fetchForm = yield call(() => fetchFormCountries(action.country));
    yield put(setFormDataCountriesAction(fetchForm));
  } catch (e) {
    console.log(e);
  }
}
export function* watchReguestAll() {
  yield takeEvery(allCountriesActionTypes.REQUEST_FETCH, setAction);
  yield takeEvery(formDataActionTypes.REQUEST_DATA, fetchFormDataAction);
}

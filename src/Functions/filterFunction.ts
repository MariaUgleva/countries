import { CardToRender } from "../type";
// фильтрует страны по заданной части света
export const filterCountries = (arr: Array<CardToRender>, filter: string) => {
  if (Array.isArray(arr) && filter)
    return arr.filter((item) => item.region === filter);
  return arr;
};
// находит станы, граничащие с конкретной страной
export const findBorders = (
  arrCountries: Array<CardToRender>,
  arrBorders: Array<string>
) => {
    return arrBorders.map((item) => {
      return arrCountries.find((elem) => elem.alpha3Code === item);
    });
};

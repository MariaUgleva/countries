export type CardToRender = {
  name: string;
  nativeName: string;
  region: string;
  population: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: Array<Currencies>;
  languages: Array<Languages>;
  flag: string;
  borders: Array<string>;
  alpha3Code: string;
};
type Currencies = {
  [key: string]: string;
};
type Languages = {
    [key: string]: string;
}

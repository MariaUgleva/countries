import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import { AppState } from "../../Redux/Reducers/rootReducer";
import CountryCard from "../CountryCard";
import { filterCountries } from "../../Functions/filterFunction";
import FormAndFilter from "../FormAndFilter";
import { requestDataCountriesAction } from "../../Redux/Actions/FormDataAction";

// компонент с результатами поиска
const SearchResult: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // id для отправки запроса на api, для подгрузки стран по запросу
  const { id }  = useParams<{ id: string }>();
  let { searchResult, filter } = useSelector((state: AppState) => state);
  // если есть фильтр, фильтруем страны
  searchResult = useMemo(() => filterCountries(searchResult, filter), [
    filter,
    searchResult,
  ]);
  // при изменении id отправляем запрос на подгрузу стран по запросу
  useEffect(() => {
    dispatch(requestDataCountriesAction(id));
  }, [id, dispatch]);
  return (
    <div className="container">
      <FormAndFilter />
      <div className="countries__cards">
        {searchResult.length ? (
          searchResult.map((item) => <CountryCard data={item} key={item.name}/>)
        ) : (
          <div className="no-result">No result</div>
        )}
      </div>
    </div>
  );
};
export default SearchResult;

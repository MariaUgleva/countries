import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../Redux/Reducers/rootReducer";
import CountryCard from "../CountryCard";
import { filterCountries } from "../../Functions/filterFunction";
import FormAndFilter from "../FormAndFilter";

const AllCountries: React.FC = (): JSX.Element => {
  let { allCountries, filter } = useSelector((state: AppState) => state);
  // фильтруем страны, если фильтр не пустой
  allCountries = useMemo(() => filterCountries(allCountries, filter), [
    filter,
    allCountries,
  ]);
  return (
    <div className="container">
      <FormAndFilter />
      <div className="countries__cards">
        {allCountries.map((item) => (
          <CountryCard key={item.name} data={item} />
        ))}
      </div>
    </div>
  );
};
export default AllCountries;

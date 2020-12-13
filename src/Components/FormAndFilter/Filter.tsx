import React, { useState, useCallback, useMemo, useEffect } from "react";
import { setFilterAction } from "../../Redux/Actions/filterActions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../Redux/Reducers/rootReducer";
// компонент фильтра
const Filter: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // получаем состояние фильтра из редакса, чтобы отрисосывать активный фильтр
  const filterRedux = useSelector((state: AppState) => state.filter);
  // состояние открыт/закрыт фльтр
  const [filtersOpen, setVisible] = useState(false);
  // массив фильтров для отрисовки
  const filters: Array<string> = useMemo(
    () => ["Without filter", "Africa", "Americas", "Asia", "Europe", "Oceania"],
    []
  );
  // ф-я открытия/закрытия окошка с фильтрами
  const handleOpenFilters = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      setVisible(!filtersOpen);
    },
    [filtersOpen]
  );
  // ф-я отслеживает нажатие на фильтр и отправляет в редакс нажатый фильтр
  const handleChangeRegion = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      if (event.currentTarget.value === 0) {
        dispatch(setFilterAction(""));
        setVisible(false);
        return;
      }
      setVisible(false);
      dispatch(setFilterAction(filters[event.currentTarget.value]));
    },
    [dispatch, filters]
  );
  return (
    <div className="filter__box">
      <button onClick={handleOpenFilters} className="filter__btn">
        {filterRedux || "Filter by Region"}
      </button>
      <ul className={filtersOpen ? "filter__list" : "filter__list hidden"}>
        {filters.map((item, index) => (
          <li
            className="filter__item"
            key={item}
            value={index}
            onClick={handleChangeRegion}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;

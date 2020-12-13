import React, { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { history } from "../../index";
import { useParams } from "react-router-dom";
import { AppState } from "../../Redux/Reducers/rootReducer";
import { CardToRender } from "../../type";
import { findBorders } from "../../Functions/filterFunction";
// компонент для отрисовки отдельной страны (подробно)
const OneCountry: React.FC = (): JSX.Element => {
  // id, ччтобы понять какую страну отрисовать
  const { id } = useParams<{ id: string }>();
  // все страны 
  const allCountries = useSelector((state: AppState) => state.allCountries);
  // ищем страну для отрисовки по id
  const card: CardToRender = useMemo(
    () => allCountries.find((item) => item.name === id),
    [id, allCountries]
  );
  // ищем страны, граничащие с данной
  const arrBorders = useMemo(() => findBorders(allCountries, card.borders), [
    allCountries,
    card,
  ]);
  // ф-я для возвращения "назад"
  const goBack = useCallback(() => {
    history.goBack();
  }, []);
  // ф-яслушает нажатие по сране, граничащей с данной (если нажали, то переходим на страничку с подробной информацией о нажатой стране)
  const handleBorder = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      history.push(`/${event.currentTarget.value}/extra`);
    },
    []
  );
  return (
    <div className="container">
      <div className="country">
        <button onClick={goBack} className="country__back">
          Back
        </button>
        <div className="country__inner">
          <img src={card.flag} alt="" className="flag" />
          <div className="country__info">
            <h4 className="country__title">{card.name}</h4>
            <ul className="country__list">
              <li className="country__list-item">
                <span className="text-bold">Native Name: </span>
                {card.nativeName}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Population: </span>
                {card.population}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Region: </span>
                {card.region}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Sub Region: </span>
                {card.subregion}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Capital: </span>
                {card.capital}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Top Level Domain: </span>
                {card.topLevelDomain}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Currencies: </span>
                {card.currencies[0].code}
              </li>
              <li className="country__list-item">
                <span className="text-bold">Languages: </span>
                {card.languages.map((item) => item.name).join(", ")}
              </li>
            </ul>
            <div className="country__border">
              <span className="text-bold country__border-title">
                Border Countries:{" "}
              </span>
              {arrBorders.map((item, index) => (
                <button
                  value={item?.name}
                  className="country__border-btn"
                  key={index}
                  onClick={handleBorder}
                >
                  {item?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OneCountry;

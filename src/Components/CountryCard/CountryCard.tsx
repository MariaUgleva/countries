import React from "react";
import { CardToRender } from "../../type";
import { Link } from "react-router-dom";

type CardProp = {
  data: CardToRender;
};
// отрисовка 1 карточки на странице со списком карт
const CountryCard: React.FC<CardProp> = ({ data }): JSX.Element => {
  return (
    <Link to={`/${data.name}/extra`}>
      <div className="card">
        <div
          style={{ backgroundImage: `url(${data.flag})` }}
          className="card__flag"
        ></div>
        <div className="card__info">
          <h4 className="card__name">{data.name}</h4>
          <ul className="card__info-list">
            <li>
              <span className="text-bold">Population: </span>
              {data.population}
            </li>
            <li>
              <span className="text-bold">Region: </span>
              {data.region}
            </li>
            <li>
              <span className="text-bold">Capital: </span>
              {data.capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
export default CountryCard;

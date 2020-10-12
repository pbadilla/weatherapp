import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { getCity } from "../../redux/actions";
import { setStatus } from "../../redux/actions/StatusActions";

import { getListCities } from "../../components/cardCity/cardCity.selectors";

import ls from "local-storage";

import Card from "../../components/card";

import Skeleton from "react-loading-skeleton";
import LazyLoad from "react-lazyload";

import { CardListWrapper, CardListItem, LinkCity } from "./cardList.styles";

const CardList = (cities) => {
  const [listCities, setListCities] = useState(null);
  const [chosen, setChosen] = useState(null);

  const listSelectedCities = useSelector(getListCities);

  const dispatch = useDispatch();

  useEffect(() => {
    setListCities(listSelectedCities);
  }, [listSelectedCities]);

  function handleCardCityDetail(id, item, name) {
    setChosen(item);
    dispatch(setStatus("cityFromList", item, name));
    dispatch(getCity(id));
    // storage in Local
  }

  return (
    <>
      {!listCities ? (
        <Skeleton count={12} height={40} width={180} />
      ) : (
        <LazyLoad height={200}>
          <CardListWrapper data-testid="CardList-Test">
            {listCities.map((city, item) => (
              <CardListItem key={city.id} id={item} data-chosen={chosen}>
                <LinkCity
                  key={city.id}
                  title={city.name}
                  order={item}
                  onClick={() => handleCardCityDetail(city.id, item, city.name)}
                >
                  <Card
                    order={item}
                    name={city.name}
                    temperature={city.weather.temp}
                    icon={city.description.id}
                    bg={item % 2 === 0 ? "odd" : "even"}
                    clicked={chosen === item ? true : false}
                  />
                </LinkCity>
              </CardListItem>
            ))}
          </CardListWrapper>
        </LazyLoad>
      )}
    </>
  );
};

const CardListConnected = connect((state) => ({
  cities: state.se,
}))(CardList);

export default CardListConnected;

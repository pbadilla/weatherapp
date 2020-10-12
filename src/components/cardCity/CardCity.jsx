import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListSelected } from "../../redux/actions/ListSelectedActions";

import { getListCities } from "./cardCity.selectors";

import {
  CardCityDetailWrapper,
  IconWeather,
  Name,
  Status,
  WaterMark,
} from "./cardCity.styles";

import { ButtonDelete } from "../common/buttons/delete/Delete.styles";

const CardCity = ({
  isVisible,
  data,
  hasDeleteButton = false,
  idCard,
  cityName,
}) => {
  const listCities = useSelector(getListCities);
  const dispatch = useDispatch();

  function handleDelete() {
    const newList = listCities.filter((item) => item.name !== cityName);
    dispatch(setListSelected(newList));
  }

  return (
    <CardCityDetailWrapper
      isVisible={isVisible}
      data-testid="CardCityDetail-Test"
    >
      <Name role="name-city-weather">
        {data.name}, {parseInt(data.main.temp)}&deg;C
      </Name>
      <IconWeather role="icon-city-weather">
        <i className={`wi wi-owm-${data.weather[0].id}`} />
      </IconWeather>
      <Status role="status-city-weather">{data.weather[0].description}</Status>
      <span role="range-temperature-city-weather">
        Min. {parseInt(data.main.temp_min)}&deg;C / Máx.{" "}
        {parseInt(data.main.temp_max)}&deg;C
      </span>
      <span role="wind-city-weather">Viento: {data.wind.speed} m/s</span>
      <span role="humidity-city-weather">
        Humedad: {parseInt(data.main.humidity)}%
      </span>
      <span role="pressure-city-weather">
        Presión Atm: {parseInt(data.main.pressure)}hPa
      </span>
      {hasDeleteButton && (
        <ButtonDelete type="button" onClick={() => handleDelete(idCard)}>
          Eliminar
        </ButtonDelete>
      )}
      <WaterMark>
        <i className={`wi wi-owm-${data.weather[0].id}`} />
      </WaterMark>
    </CardCityDetailWrapper>
  );
};

export default CardCity;

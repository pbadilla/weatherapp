import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setListSelected } from "../../redux/actions/ListSelectedActions";

import { getListCities } from "../../components/cardCity/cardCity.selectors";

import { CardWrapper, Name, Temperature } from "./card.styles";

const Card = ({ order, name, temperature, icon, bg, clicked }) => {
  return (
    <>
      <CardWrapper bg={clicked ? "selected" : bg} data-testid="Card" id={order}>
        <Name data-testid="Card-Name">{name}</Name>
        <Temperature
          data-testid="Card-Temperature"
          value={parseInt(temperature)}
        >
          {parseInt(temperature)} &#8451;
        </Temperature>
        <i role="weather-icon" className={`wi wi-owm-${icon}`} />
      </CardWrapper>
    </>
  );
};

export default Card;

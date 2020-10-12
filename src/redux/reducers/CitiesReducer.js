import {
  FETCH_CITIES_BEGIN,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from "../actions/action-types";

const initialState = {
  listCities: null,
  loading: false,
  error: null,
};

const annexState = {
  listSelected: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  function extractDataCities(arrayCities) {
    let citiesListData = [];

    const updatedItems = arrayCities.map((city) => {
      const cityData = {
        id: city.id,
        name: city.name,
        weather: city.main,
        description: city.weather[0],
        clicked: false,
      };
      citiesListData.push(cityData);
    });

    return citiesListData;
  }

  switch (type) {
    case FETCH_CITIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        loading: false,
        listCities: payload.cities.list,
        ...annexState,
        listSelected: extractDataCities(payload.cities.list),
      };
    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cities: {},
      };
    default:
      return state;
  }
}

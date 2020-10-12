import {
  FETCH_CITIES_BEGIN,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
  FETCH_CITY_BEGIN,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from "../actions/action-types";

export function getCities(cities) {
  return (dispatch) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${cities}&appid=e1d70298724201910991d8d7746da004&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch(fetchCitiesSuccess(data));
      })
      .catch(function (err) {
        dispatch(fetchCitiesFailure(err));
        console.error(err);
      });
  };
}
export function getCity(cityId) {
  return (dispatch) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=e1d70298724201910991d8d7746da004&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.error(data);
        dispatch(fetchCitySuccess(data));
      })
      .catch(function (err) {
        console.error(err);
        dispatch(fetchCityFailure(err));
      });
  };
}

export const fetchCitiesBegin = () => ({
  type: FETCH_CITIES_BEGIN,
});

export const fetchCitiesSuccess = (cities) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: { cities },
});

export const fetchCitiesFailure = (error) => ({
  type: FETCH_CITIES_FAILURE,
  payload: { error },
});

export const fetchCityBegin = () => ({
  type: FETCH_CITY_BEGIN,
});

export const fetchCitySuccess = (city) => ({
  type: FETCH_CITY_SUCCESS,
  payload: { city },
});

export const fetchCityFailure = (error) => ({
  type: FETCH_CITY_FAILURE,
  payload: { error },
});

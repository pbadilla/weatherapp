import {
  FETCH_SEARCH_CITY_BEGIN,
  FETCH_SEARCH_CITY_SUCCESS,
  FETCH_SEARCH_CITY_FAILURE,
} from "../actions/action-types";

export function getSearchCity(search) {
  return (dispatch) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e1d70298724201910991d8d7746da004&units=metric`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.cod === 200) {
          dispatch(fetchSearchSuccess(data));
        } else {
          dispatch(fetchSearchFailure(data));
        }
      })
      .catch(function (err) {
        dispatch(fetchSearchFailure(err));
        console.error(err);
      });
  };
}

export const fetchSearchBegin = () => ({
  type: FETCH_SEARCH_CITY_BEGIN,
});

export const fetchSearchSuccess = (search) => ({
  type: FETCH_SEARCH_CITY_SUCCESS,
  payload: { search },
});

export const fetchSearchFailure = (error) => ({
  type: FETCH_SEARCH_CITY_FAILURE,
  payload: { error },
});

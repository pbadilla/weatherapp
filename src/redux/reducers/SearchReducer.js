import {
  FETCH_SEARCH_CITY_BEGIN,
  FETCH_SEARCH_CITY_SUCCESS,
  FETCH_SEARCH_CITY_FAILURE,
} from "../actions/action-types";

const initialState = {
  isVisible: false,
  loading: false,
  loaded: null,
  error: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SEARCH_CITY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SEARCH_CITY_SUCCESS:
      return {
        city: payload.search,
        isVisible: true,
        loaded: true,
      };
    case FETCH_SEARCH_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        isVisible: true,
        error: true,
        city: {},
        code: payload.error.cod,
        message: payload.error.message,
      };
    default:
      return state;
  }
}

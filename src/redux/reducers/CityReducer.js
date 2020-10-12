import {
  FETCH_CITY_BEGIN,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from "../actions/action-types";

const initialState = {
  isVisible: false,
  loading: true,
  loaded: null,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CITY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CITY_SUCCESS:
      return {
        city: payload.city,
        isVisible: true,
        loaded: true,
      };
    case FETCH_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        city: {},
      };
    default:
      return state;
  }
}

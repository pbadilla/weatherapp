import { FETCH_LIST_SELECTED } from "../actions/action-types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_LIST_SELECTED:
      return {
        listCities: [...payload],
      };
    default:
      return state;
  }
}

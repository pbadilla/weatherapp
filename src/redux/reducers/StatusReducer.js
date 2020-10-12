import { FETCH_STATUS } from "../actions/action-types";

const initialState = {
  status: null,
  id: null,
  name: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STATUS:
      return {
        ...state,
        status: payload.status,
        id: payload.id,
        name: payload.name,
      };
    default:
      return state;
  }
}

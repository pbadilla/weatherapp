import { FETCH_STATUS } from "../actions/action-types";

export function setStatus(status, id, name) {
  return (dispatch) => {
    return dispatch(fetchStatus(status, id, name));
  };
}

export const fetchStatus = (status, id, name) => ({
  type: FETCH_STATUS,
  payload: { status, id, name },
});

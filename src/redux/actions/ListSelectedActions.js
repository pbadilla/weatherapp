import { FETCH_LIST_SELECTED } from "./action-types";

export function setListSelected(list) {
  return (dispatch) => {
    return dispatch(fetchListSelected(list));
  };
}

export const fetchListSelected = (list) => ({
  type: FETCH_LIST_SELECTED,
  payload: list,
});

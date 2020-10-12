import * as actions from "./index";
import ListSelectedAction from "./ListSelectedActions";
import SearchActions from "./SearchActions";
import StatusAction from "./StatusActions";
import * as types from "./action-types";

import MockCities from "../../../tests/mocks/cities.json";
import MockCity from "../../../tests/mocks/city.json";
import SelectedCities from "../../../tests/mocks/listadoCities.json";

describe("actions CITIES", () => {
  it("should create an action to fetch Cities", () => {
    const cities = MockCities;
    const expectedAction = {
      type: types.FETCH_CITIES_SUCCESS,
      payload: { cities },
    };

    expect(actions.fetchCitiesSuccess(MockCities)).toEqual(expectedAction);
  });
});

describe("actions CITY", () => {
  it("should create an action to fetch City", () => {
    const city = MockCity;
    const expectedAction = {
      type: types.FETCH_CITY_SUCCESS,
      payload: { city },
    };

    expect(actions.fetchCitySuccess(MockCity)).toEqual(expectedAction);
  });
});

describe("actions CITY SELECTED list", () => {
  it("should create an action to fetch city selected list", () => {
    const listCities = SelectedCities;
    const expectedAction = {
      type: types.FETCH_LIST_SELECTED,
      payload: { listCities },
    };

    expect(ListSelectedAction.fetchListSelected(SelectedCities)).toEqual(
      expectedAction
    );
  });
});

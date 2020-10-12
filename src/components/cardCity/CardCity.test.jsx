import React from "react";
import {
  render,
  getByText,
  getByTestId,
  cleanup,
} from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

import { getListCities } from "./cardCity.selectors";
import CardCity from "./CardCity";

import MockedSelectedCities from "../../../tests/mocks/selectedCitiesList.json";

const initialState = () => ({
  cities: [],
  selectedCities: [],
  status: [],
  city: [],
  search: [],
});

const mockStore = configureMockStore();
const store = mockStore;

const mockLocal = {
  id: 3128760,
  name: "Barcelona",
  weather: {
    temp: 23.26,
    feels_like: 21.78,
    temp_min: 22.78,
    temp_max: 24,
    pressure: 1022,
    humidity: 73,
  },
  description: {
    id: 801,
    main: "Clouds",
    description: "few clouds",
    icon: "02d",
  },
};

describe.only("Load Home Component wrapped with Redux", () => {
  const { container, getByTestId, getByText, getByRole } = render(
    <Provider store={store}>
      <CardCity
        isVisible={true}
        data={mockLocal}
        hasDeleteButton={false}
        idCard={1}
        cityName="Barcelona"
      />
    </Provider>
  );

  afterEach(cleanup);

  test("CardCity component", () => {
    const temperature = `${parseInt(mockLocal.weather.temp)} ℃`;

    expect(getByTestId("CardCityDetail-Test")).toBeInTheDocument();
    expect(getByRole("name-city-weather")).toBeInTheDocument();
    expect(getByText(mockLocal.name)).toBeInTheDocument();
    expect(getByRole("icon-city-weather")).toBeInTheDocument();
    expect(getByText(temperature)).toBeInTheDocument();

    expect(getByRole("status-city-weather")).toBeInTheDocument();
    expect(getByRole("range-temperature-city-weather")).toBeInTheDocument();
    expect(getByRole("wind-city-weather")).toBeInTheDocument();
    expect(getByRole("humidity-city-weather")).toBeInTheDocument();
    expect(getByRole("pressure-city-weather")).toBeInTheDocument();
  });
});

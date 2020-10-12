import React from "react";
import { render, getByText, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

import Card from "./Card";

import MockCard from "../../../tests/mocks/_cityWeather.json";

const mockStore = configureMockStore();
const store = mockStore({});

const mockLocal = {
  name: "Barcelona",
  weather: {
    temp: 23.26,
  },
  description: {
    id: 801,
  },
};

const { weather, name, main, sys } = MockCard;

describe("Load Home Component wrapped with Redux", () => {
  const { getByTestId, getByText, getByRole } = render(
    <Provider store={store}>
      <Card
        bg="odd"
        icon={mockLocal.description.id}
        name={mockLocal.name}
        order={1}
        temperature={mockLocal.weather.temp}
      />
    </Provider>
  );

  test("Card into Home", () => {
    const temperature = `${parseInt(mockLocal.weather.temp)} ℃`;

    expect(getByTestId("Card")).toBeInTheDocument();
    expect(getByTestId("Card-Name")).toBeInTheDocument();
    expect(getByText(mockLocal.name)).toBeInTheDocument();
    expect(getByTestId("Card-Temperature")).toBeInTheDocument();
    expect(getByText(temperature)).toBeInTheDocument();
    expect(getByRole("weather-icon")).toBeInTheDocument();
  });
});

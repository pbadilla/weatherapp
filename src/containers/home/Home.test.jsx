import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

import Home from "./index";

const idCities = [
  3128760, // Barcelona
  2988507, // Paris
  2643743, // London
  2950159, // Berlin
  4062577, // Florence
  2267057, // Lisbon
  2673730, // Stockholm
  3378644, // Geneve
  5128581, // New York
  524901, // Moscow
  1850147, // Tokyo
];

const mockStore = configureMockStore();
const store = mockStore({});

describe.only("Load Home Component wrapped with Redux", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  test("Home-Test", () => {
    expect(getByTestId("Home-Test")).toBeInTheDocument();
  });
});

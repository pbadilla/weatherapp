import React from "react";
import { render, getByText, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

import Search from "./Search";

import MockCard from "../../../tests/mocks/_cityWeather.json";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Load Search Component", () => {
  const { getByTestId, getByText, getByRole } = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  test("Form component", () => {
    // expect(getByTestId("search-form-test")).toBeInTheDocument();
    // expect(getByRole("name-city-weather")).toBeInTheDocument();
  });
});

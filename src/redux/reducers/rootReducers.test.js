import { reducer as CitiesReducer } from "./CitiesReducer";
import * as types from "../actions/action-types";

describe("Inital CITIES and CITY reducers", () => {
  it("should return the initial state", () => {
    //   expect(reducer(undefined, {})).toEqual([
    //     {
    //       text: "Use Redux",
    //       completed: false,
    //       id: 0,
    //     },
    //   ]);
    // });
    // it("should handle ADD_TODO", () => {
    //   expect(
    //     reducer([], {
    //       type: types.ADD_TODO,
    //       text: "Run the tests",
    //     })
    //   ).toEqual([
    //     {
    //       text: "Run the tests",
    //       completed: false,
    //       id: 0,
    //     },
    //   ]);
    //   expect(
    //     reducer(
    //       [
    //         {
    //           text: "Use Redux",
    //           completed: false,
    //           id: 0,
    //         },
    //       ],
    //       {
    //         type: types.ADD_TODO,
    //         text: "Run the tests",
    //       }
    //     )
    //   ).toEqual([
    //     {
    //       text: "Run the tests",
    //       completed: false,
    //       id: 1,
    //     },
    //     {
    //       text: "Use Redux",
    //       completed: false,
    //       id: 0,
    //     },
    //   ]);
  });
});

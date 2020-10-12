import { combineReducers } from "redux";
import cities from "./CitiesReducer";
import city from "./CityReducer";
import search from "./SearchReducer";
import selectedCities from "./ListSelectedReducer";
import status from "./StatusReducer";

const rootReducer = combineReducers({
  cities,
  selectedCities,
  status,
  city,
  search,
});

export default rootReducer;

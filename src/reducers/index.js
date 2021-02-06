import { combineReducers } from "redux";
import layers from "./layers";
import sources from "./sources";
import filters from "./filters";

export default combineReducers({
  sources,
  layers,
  filters,
});

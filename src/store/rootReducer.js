import { combineReducers } from "redux";
import { positionsReducers } from "./positions/positions-reducers";
import { filterReducer } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
  positions: positionsReducers,
  filters: filterReducer,
});

import { ADD_POSITIONS } from "./positions-actions";

export { ADD_POSITIONS } from "./positions-actions";

export const positionsReducers = (state = [], actions) => {
  switch (actions.type) {
    case ADD_POSITIONS:
      return actions.positions;
    default:
      return state;
  }
};

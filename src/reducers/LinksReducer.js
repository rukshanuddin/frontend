import { SET_LINKS, SET_ALL_LINKS } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case SET_LINKS:
      return [...action.payload];
    case SET_ALL_LINKS:
      return [...action.payload];
    default:
      return state;
  }
};

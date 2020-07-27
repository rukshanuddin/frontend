export default (state = [], action) => {
  switch (action.type) {
    case "SET_TOPICS":
      return [...action.payload];
    default:
      return state;
  }
};

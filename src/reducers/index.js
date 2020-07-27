import { combineReducers } from "redux";

import link from "./LinkReducer";
import links from "./LinksReducer";
import topics from "./TopicsReducer";

export default combineReducers({
  link,
  links,
  topics,
});

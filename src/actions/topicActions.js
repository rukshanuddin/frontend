  
import { SET_TOPICS } from "./actionTypes";

export const fetchTopics = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/topics")
      .then((resp) => resp.json())
      .then((topics) => {
        dispatch({ type: SET_TOPICS, payload: topics });
      });
  };
};

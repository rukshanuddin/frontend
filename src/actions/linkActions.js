import { SET_LINK, SET_LINKS, SET_ALL_LINKS } from "./actionTypes";

export const fetchLink = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/${id}`)
      .then((resp) => resp.json())
      .then((link) => {
        dispatch({ type: SET_LINK, payload: link });
      });
  };
};

export const fetchLinks = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/topics/${id}`)
      .then((resp) => resp.json())
      .then((links) => {
        dispatch({ type: SET_LINKS, payload: links });
      });
  };
};

export const fetchAllLinks = () => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/links/`)
      .then((resp) => resp.json())
      .then((links) => {
        dispatch({ type: SET_ALL_LINKS, payload: links });
      });
  };
};

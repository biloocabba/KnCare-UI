import BestPracticeService from "../services/BestPracticeService";

import {
  CREATE_BEST_PRACTICE,
  UPDATE_BEST_PRACTICE,
  ADD_ATTACHMENT_TO_BEST_PRACTICE,
  DELETE_ATTACHMENT_FROM_BEST_PRACTICE,
  DELETE_BEST_PRACTICE,
  SEARCH_BEST_PRACTICE,
  RATE_BEST_PRACTICE,
  TAG_BEST_PRACTICE,
  SHARE_BEST_PRACTICE,
  RETRIEVE_BEST_PRACTICES,
  API_SEND_START,
  API_SEND_END,
} from "./types/index";

export const createBestPractice = (title, description, content) => async dispatch => {
  try {
    const res = await BestPracticeService.create({
      title,
      description,
      content,
    });

    dispatch({
      type: CREATE_BEST_PRACTICE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveBestPractices = () => async dispatch => {
  try {
    dispatch({
      type: API_SEND_START,
      payload: "",
    });

    const res = await BestPracticeService.getAll();

    dispatch({
      type: RETRIEVE_BEST_PRACTICES,
      payload: res.data.content,
    });

    dispatch({
      type: API_SEND_END,
      payload: "",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateBestPractice = (id, data) => async dispatch => {
  try {
    const res = await BestPracticeService.update(id, data);

    dispatch({
      type: UPDATE_BEST_PRACTICE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteBestPractice = id => async dispatch => {
  try {
    await BestPracticeService.remove(id);

    dispatch({
      type: DELETE_BEST_PRACTICE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchBestPractices = searchFilters => async dispatch => {
  try {
    // convert object to a query string
    const queryParams = new URLSearchParams(searchFilters);

    const res = await BestPracticeService.search(queryParams);

    console.log(res);
    dispatch({ type: RETRIEVE_BEST_PRACTICES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

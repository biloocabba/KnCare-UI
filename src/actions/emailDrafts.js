import emailDraftService from "../services/emailDraftService";

import { RETRIEVE_EMAIL_DRAFTS } from "./types";

export const retrieveEmailDrafts = () => async dispatch => {
  try {
    const res = await emailDraftService.getAll();
    dispatch({ type: RETRIEVE_EMAIL_DRAFTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const searchEmailDrafts = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    const res = await emailDraftService.searchEmailDrafts(queryParams);

    console.log(res);

    dispatch({
      type: RETRIEVE_EMAIL_DRAFTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

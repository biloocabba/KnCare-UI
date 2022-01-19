import { RETRIEVE_EMAIL_DRAFTS } from "actions/types";

const emailDraftReducer = (emailDrafts = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_EMAIL_DRAFTS:
      return payload;

    default:
      return emailDrafts;
  }
};

export default emailDraftReducer;

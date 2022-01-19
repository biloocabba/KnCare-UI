import http from "./http-common";

const getAllEmailDrafts = () => {
  return http.get("/emailDrafts");
};

const searchEmailDrafts = queryParams => {
  return http.get(`/emailDrafts?${queryParams}`);
};

const emailDraftService = {
  getAllEmailDrafts,
  searchEmailDrafts,
};

export default emailDraftService;

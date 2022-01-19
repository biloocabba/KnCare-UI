import http from "./http-common";

const getAll = () => {
  return http.get("/emails");
};

const getOne = id => {
  return http.get("/emails/" + id);
};

const sendMail = () => {
  console.log("sending not yet implemented at the backend");
};

const saveAsDraft = emailState => {
  return http.post("emails", emailState);
};

export const emailService = {
  getAll,
  getOne,
  saveAsDraft,
  sendMail,
};

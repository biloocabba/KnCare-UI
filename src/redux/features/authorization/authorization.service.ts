import { LoginBody } from "types";

import { httpCommon, HttpResponseType } from "../utils";

const login = (body: LoginBody): HttpResponseType => {
  console.log("body", body);

  return httpCommon.post(`/login`, body);
};

const logout = (): HttpResponseType => {
  return httpCommon.post(`/logout`, {});
};

export const authorizationService = {
  login,
  logout,
};

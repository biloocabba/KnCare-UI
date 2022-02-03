import { LoginBody } from "types";
import { toFormData } from "types/utils";

import { httpCommon, HttpResponseType } from "../utils";

const login = (body: LoginBody): HttpResponseType => {
  const bodyAsFormData = toFormData(body);
  return httpCommon.post(`/login`, bodyAsFormData);
};

const logout = (): HttpResponseType => {
  return httpCommon.post(`/logout`, {});
};

export const authorizationService = {
  login,
  logout,
};

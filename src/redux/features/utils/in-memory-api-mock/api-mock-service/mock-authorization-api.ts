import { AxiosResponse } from "axios";

import { LoginBody, Principal } from "types";

import { arrayOfLoggedInUsers } from "../api-mock-data/authorization";

import { wrapIntoResponse } from ".";

export const login = async (url: string, body: LoginBody): Promise<AxiosResponse<Principal>> => {
  const user = arrayOfLoggedInUsers.find(user => user.email === body.email) as Principal;

  const loginResponse = {
    ...user,
  };

  const response = wrapIntoResponse(loginResponse);
  return Promise.resolve(response);
};

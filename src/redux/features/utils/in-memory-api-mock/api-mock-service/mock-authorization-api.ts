import { AxiosResponse } from "axios";

import { LoginBody, Principal } from "types";

import { arrayOfLoggedInUsers, loggedInUsers } from "../api-mock-data/authorization";

import { wrapIntoResponse } from ".";

export const login = async (url: string, body: LoginBody): Promise<AxiosResponse<Principal>> => {
  // checks if email is in the array of mock data users
  const user = arrayOfLoggedInUsers.find(user => user.email === body.email);

  let loginResponse = user as Principal;
  if (user === undefined) {
    loginResponse = loggedInUsers.sponsorUser;
  }

  const response = wrapIntoResponse(loginResponse);
  return Promise.resolve(response);
};

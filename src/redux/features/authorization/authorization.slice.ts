import { createSlice } from "@reduxjs/toolkit";

import { Principal } from "types";
import { Role } from "types/security";

import { StateType } from "..";

const testPrincipal: Principal = {
  fullName: "Stefano Fiorenza",
  username: "stefanofiorenza",
  email: "stefano.fiorenza@kuehne-nagel.com",
  jwtToken: "abracadabra",
  countryCode3: "ITA",
  authRole: Role.RegionalManager,
  role: "RegionalTransformationManager",
};

const initialState: StateType<Principal> = {
  entities: [],
  entity: testPrincipal,
  isLoading: false,
  isSuccess: false,
  error: {},
};

//@todo:
//thunks and actions to manage:
//1) login
//2) logout

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {},
});

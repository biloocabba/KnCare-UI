import { createSelector } from "@reduxjs/toolkit";

import { Principal } from "types";
import { Role } from "types/security";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

export const selectPrincipalState = (rootState: RootState): StateType<Principal> =>
  rootState.authorization;

export const selectLoggedUser = createSelector(
  [selectPrincipalState],
  authorizationState => authorizationState.entity
);

export const selectLoggedUserRole = createSelector([selectLoggedUser], principal =>
  principal ? principal.authRole : Role.Anonymous
);

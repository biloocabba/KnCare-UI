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

export const selectLoggedUserDefaultCountry = createSelector([selectLoggedUser], principal => {
  if (!principal) {
    return "NO COUNTRY";
  }
  const { authRole, countryCode3 } = principal as Principal;
  return authRole !== Role.RegionalManager ? countryCode3 : "";
});

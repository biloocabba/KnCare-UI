import { createSelector } from "@reduxjs/toolkit";

import { Role } from "types/security";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

import { Principal, SelectOption } from "types";

import { selectAllCountriesDataAsSelectOptions } from "../countries";

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
  const { authRole, countryCode3 } = principal as Principal;
  return authRole !== Role.RegionalManager ? countryCode3 : "";
});

export const selectLoggedUserDefaultCountryAsSelection = createSelector(
  [selectLoggedUserDefaultCountry, selectAllCountriesDataAsSelectOptions],
  (isoCode3, countriesAsSelections: SelectOption[]) => {
    const countrySelectOption = countriesAsSelections.find(
      countryOption => countryOption.value === isoCode3
    );
    return countrySelectOption as SelectOption;
  }
);

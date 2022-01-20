import { createSelector } from "@reduxjs/toolkit";

import { SelectOption } from "types";
import { Country } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

const ALL = { value: "", label: "ALL" };

export const selectCountryState = (rootState: RootState): StateType<Country> => rootState.country;

export const selectAllCountryData = createSelector(
  [selectCountryState],
  countryState => countryState.entities
);

export const selectAllCountryDataAsSelectOptions = createSelector(
  [selectAllCountryData],
  (countries): SelectOption[] => {
    const countriesOptions: SelectOption[] = countries.map(country => {
      return { value: country.code, label: country.name };
    });
    return [ALL, ...countriesOptions];
  }
);

export const selectCountryByIsoCode3 = (code3: string) =>
  createSelector([selectAllCountryData], countries =>
    countries.find(country => country.code3 === code3)
  );

export const selectCountryByIsoCode = (code: string) =>
  createSelector([selectAllCountryData], countries =>
    countries.find(country => country.code === code)
  );

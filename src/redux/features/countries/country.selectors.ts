import { createSelector } from "@reduxjs/toolkit";

import { Country } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

import { SelectOption } from "types";

const ALL: SelectOption = { value: "", label: "ALL" };

export const selectCountryState = (rootState: RootState): StateType<Country> => rootState.country;

export const selectAllCountryData = createSelector([selectCountryState], countryState => {
  return countryState.entities;
});

export const selectAllCountriesDataAsSelectOptions = createSelector(
  [selectAllCountryData],
  (countries): SelectOption[] => {
    const countriesOptions = countries.map(country => ({
      value: country.code3,
      label: country.name,
    }));

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

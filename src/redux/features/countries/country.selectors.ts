import { createSelector } from "@reduxjs/toolkit";

import { SelectOption } from "types";
import { Country } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

const ALL: SelectOption = { value: "", label: "ALL" };

export const selectCountryState = (rootState: RootState): StateType<Country> => rootState.country;

export const selectAllCountryData = createSelector([selectCountryState], countryState => {
  return countryState.entities;
});

export const selectAllCountryDataAsSelectOptions = (countryCode3: string, role: string) =>
  createSelector([selectAllCountryData], (countries): SelectOption[] => {
    let countriesOptions: SelectOption[] = [];
    if (role === "RegionalTransformationManager") {
      countriesOptions = countries.map(country => ({ value: country.code3, label: country.name }));
    } else {
      const userCountries = countries.filter(country => country.code3 === countryCode3);
      countriesOptions = userCountries.map(country => {
        return { value: country.code, label: country.name };
      });
    }

    return [ALL, ...countriesOptions];
  });

export const selectCountryByIsoCode3 = (code3: string) =>
  createSelector([selectAllCountryData], countries =>
    countries.find(country => country.code3 === code3)
  );

export const selectCountryByIsoCode = (code: string) =>
  createSelector([selectAllCountryData], countries =>
    countries.find(country => country.code === code)
  );

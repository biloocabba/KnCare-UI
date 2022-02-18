import { createSelector } from "@reduxjs/toolkit";

import { CareMember, CareMemberQueryFilters, SelectOption } from "types";

import { RootState } from "redux/app";
import {
  ALL,
  entitySearch,
  selectAllBusinessUnitData,
  selectAllCountryData,
  StateType,
} from "redux/features";

export const selectCareMemberState = (rootState: RootState): StateType<CareMember> =>
  rootState.careMember;

export const selectAllCareMembersData = createSelector(
  [selectCareMemberState],
  careMemberState => careMemberState.entities
);

export const selectCareMemberById = (id: number) =>
  createSelector([selectAllCareMembersData], careMembers =>
    careMembers.find(careMember => careMember.id === id)
  );

export const selectCareMembersByFilters = (filters: CareMemberQueryFilters) =>
  createSelector(
    [selectAllCareMembersData, selectAllCountryData, selectAllBusinessUnitData],
    (careMembers, countries, businessUnits) => {
      return entitySearch(filters, careMembers, businessUnits, countries);
    }
  );

export const selectAllCareMembersDataAsSelectOptions = createSelector(
  [selectAllCareMembersData],
  careMembers => {
    const careMemberOptions: SelectOption[] = careMembers.map(careMember => {
      return { value: `${careMember.id}`, label: careMember.internationalName };
    });
    return [ALL, ...careMemberOptions];
  }
);

import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "redux/app";
import {
  entitySearch,
  selectAllBusinessUnitData,
  selectAllCountryData,
  selectAllGroupsData,
  selectAllRolesData,
  StateType,
} from "redux/features";

import { CareMember, CareMemberQueryFilters, SelectOption } from "types";
import { SELECT_ALL } from "variables/app.consts";

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
    [
      selectAllCareMembersData,
      selectAllCountryData,
      selectAllBusinessUnitData,
      selectAllGroupsData,
      selectAllRolesData,
    ],
    (careMembers, countries, businessUnits, groups, roles) => {
      return entitySearch(filters, careMembers, businessUnits, countries, groups, roles);
    }
  );

export const selectAllCareMembersDataAsSelectOptions = createSelector(
  [selectAllCareMembersData],
  careMembers => {
    const careMemberOptions: SelectOption[] = careMembers.map(careMember => {
      return { value: `${careMember.id}`, label: careMember.internationalName };
    });
    return [SELECT_ALL, ...careMemberOptions];
  }
);

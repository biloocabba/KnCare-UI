import { createSelector } from "@reduxjs/toolkit";

import { CareMember, CareMemberQueryFilters } from "types";

import { RootState } from "redux/app";
import {
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

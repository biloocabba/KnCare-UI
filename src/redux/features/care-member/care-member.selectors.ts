import { createSelector } from "@reduxjs/toolkit";

import { SelectOption, CareMember } from "types";

import { RootState } from "redux/app";
import { ALL, StateType } from "redux/features";

export const selectCareMemberState = (rootState: RootState): StateType<CareMember> =>
  rootState.careMember;

export const selectAllCareMembersData = createSelector(
  [selectCareMemberState],
  careMemberState => careMemberState.entities
);

export const selectCareMemberById = (id: number) =>
  createSelector([selectAllCareMembersData], careMember =>
    careMember.find(careMember => careMember.id === id)
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

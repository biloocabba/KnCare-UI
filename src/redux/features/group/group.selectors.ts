import { createSelector } from "@reduxjs/toolkit";

import { SelectOption } from "types";
import { Group } from "types/domain";

import { RootState } from "redux/app";
import { StateType, ALL } from "redux/features/common";

export const selectGroupState = (rootState: RootState): StateType<Group> => rootState.group;

export const selectAllGroupsData = createSelector(
  [selectGroupState],
  groupState => groupState.entities
);

export const selectGroupById = (id: number) =>
  createSelector(
    [selectAllGroupsData], //array of input selectors
    groups => groups.find(group => group.id === id) //arg
  );

export const selectAllGroupsDataAsSelectOptions = createSelector(
  [selectAllGroupsData],
  (groups): SelectOption[] => {
    const groupOptions: SelectOption[] = groups.map(group => {
      return { value: `${group.id}`, label: group.name };
    });
    return [ALL, ...groupOptions];
  }
);

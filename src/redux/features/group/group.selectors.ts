import { createSelector } from "@reduxjs/toolkit";

import { Group } from "types/domain";

import { RootState } from "redux/app";
import { StateType, ALL } from "redux/features/common";

export const selectGroupsState = (rootState: RootState): StateType<Group> => rootState.group;

export const selectAllGroupsData = createSelector(
  [selectGroupsState],
  groupState => groupState.entities
);

export const selectGroupById = (id: number) =>
  createSelector(
    [selectAllGroupsData], //array of input selectors
    groups => groups.find(group => group.id === id) //arg
  );

export const selectAllGroupsDataAsSelectOptions = createSelector([selectAllGroupsData], groups => {
  const groupOptions = groups.map(group => {
    return { value: group.id, label: group.name };
  });
  return [ALL, ...groupOptions];
});

import { createSelector } from "@reduxjs/toolkit";

import { Group } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

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

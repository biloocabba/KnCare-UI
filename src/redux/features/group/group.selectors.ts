import { createSelector } from "@reduxjs/toolkit";

import { Group } from "types/domain";
import { SELECT_ALL } from "variables/app.consts";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

import { SelectOption } from "types";

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

export const selectGroupsByIds = (ids: number[]) =>
  createSelector(
    [selectAllGroupsData], //array of input selectors
    groups => groups.filter(group => ids.includes(group.id))
  );

export const selectGroupsByIdsAsSelectValues = (ids: number[]) =>
  createSelector([selectGroupsByIds(ids)], (groupsByIds): SelectOption[] => {
    const groupOptions: SelectOption[] = groupsByIds.map(group => {
      return { value: `${group.id}`, label: group.name };
    });
    return [...groupOptions];
  });

export const selectAllGroupsDataAsSelectOptions = createSelector(
  [selectAllGroupsData],
  (groups): SelectOption[] => {
    const groupOptions: SelectOption[] = groups.map(group => {
      return { value: `${group.id}`, label: group.name };
    });
    return [SELECT_ALL, ...groupOptions];
  }
);

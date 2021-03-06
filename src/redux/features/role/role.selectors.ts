import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

import { SelectOption, CareRole } from "types";
import { SELECT_ALL } from "variables/app.consts";

export const selectRoleState = (rootState: RootState): StateType<CareRole> => rootState.role;

export const selectAllRolesData = createSelector(
  [selectRoleState],
  roleState => roleState.entities
);

export const selectRoleById = (id: number | undefined) =>
  createSelector(
    [selectAllRolesData], //array of input selectors
    roles => roles.find(role => role.id === id) //arg
  );

export const selectRoleByIdAsSelectValue = (id: number | undefined) =>
  createSelector(
    [selectRoleById(id)], //array of input selectors
    (role): SelectOption[] => {
      if (role) {
        return [{ value: `${role.id}`, label: role.name }];
      }
      return [];
    }
  );

export const selectAllRolesDataAsSelectOptions = createSelector([selectAllRolesData], roles => {
  const rolesOptions: SelectOption[] = roles.map(role => {
    return { value: `${role.id}`, label: role.name };
  });
  return [SELECT_ALL, ...rolesOptions];
});

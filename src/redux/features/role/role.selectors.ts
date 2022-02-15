import { createSelector } from "@reduxjs/toolkit";

import { SelectOption, CareRole } from "types";

import { RootState } from "redux/app";
import { StateType, ALL } from "redux/features";

export const selectRoleState = (rootState: RootState): StateType<CareRole> => rootState.role;

export const selectAllRolesData = createSelector(
  [selectRoleState],
  roleState => roleState.entities
);

export const selectRoleById = (id: number) =>
  createSelector(
    [selectAllRolesData], //array of input selectors
    roles => roles.find(role => role.id === id) //arg
  );

export const selectAllRoleDataAsSelectOptions = createSelector([selectAllRolesData], roles => {
  const rolesOptions: SelectOption[] = roles.map(role => {
    return { value: `${role.id}`, label: role.name };
  });
  return [ALL, ...rolesOptions];
});

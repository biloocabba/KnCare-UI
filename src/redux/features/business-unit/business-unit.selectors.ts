import { createSelector } from "@reduxjs/toolkit";

import { BusinessUnit } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

import { SelectOption } from "types";

const ALL: SelectOption = { value: "", label: "ALL" };

export const selectBusinessUnitState = (rootState: RootState): StateType<BusinessUnit> =>
  rootState.businessUnit;

export const selectAllBusinessUnitData = createSelector(
  [selectBusinessUnitState],
  businessUnitState => businessUnitState.entities
);

export const selectBusinessUnitById = (id: number) =>
  createSelector(
    [selectAllBusinessUnitData], //array of input selectors
    businessUnits => businessUnits.find(businessUnit => businessUnit.id === id) //arg
  );

export const selectAllBusinessUnitsDataAsSelectOptions = createSelector(
  [selectAllBusinessUnitData],
  businessUnits => {
    const businessUnitOptions: SelectOption[] = businessUnits.map(businessUnit => {
      return { value: `${businessUnit.id}`, label: businessUnit.name };
    });
    return [ALL, ...businessUnitOptions];
  }
);

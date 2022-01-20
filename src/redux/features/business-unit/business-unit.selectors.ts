import { createSelector } from "@reduxjs/toolkit";

import { SelectOption } from "types";
import { BusinessUnit } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

const ALL: SelectOption = { value: "", label: "ALL" };

export const selectBusinessUnitState = (rootState: RootState): StateType<BusinessUnit> =>
  rootState.businessUnit;

export const selectAllBusinessUnitData = createSelector(
  [selectBusinessUnitState],
  businessUnitState => businessUnitState.entities
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

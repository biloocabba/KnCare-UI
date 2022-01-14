
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";
import { BusinessUnit } from "types/types";
import { StateType } from "redux/features/common";

export const selectBusinessUnitState = (rootState: RootState): StateType<BusinessUnit> => rootState.businessUnit;

export const selectAllBusinessUnitData = createSelector(
    [selectBusinessUnitState], //array of input selectors
    businessUnitState => businessUnitState.entities //args of func: output of selectors from array in order
)

export const selectAllBusinessUnitsDataAsSelectOptions = createSelector(
    [selectAllBusinessUnitData], 
    businessUnits => {
        return businessUnits.map(businessUnit => {
            return { value: businessUnit.id, label: businessUnit.name };
         });   
})

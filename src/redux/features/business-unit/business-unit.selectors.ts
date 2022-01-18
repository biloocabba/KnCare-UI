
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";
import { BusinessUnit } from "types/domain";
import { StateType } from "redux/features/common";

const ALL={value: "", label: "ALL"};

export const selectBusinessUnitState = (rootState: RootState): StateType<BusinessUnit> => rootState.businessUnit;

export const selectAllBusinessUnitData = createSelector(
    [selectBusinessUnitState], 
    businessUnitState => businessUnitState.entities 
)

export const selectAllBusinessUnitsDataAsSelectOptions = createSelector(
    [selectAllBusinessUnitData], 
    businessUnits => {
       
        let businessUnitOptions= businessUnits.map(businessUnit => {
            return { value: businessUnit.id, label: businessUnit.name };
        });   
        return [ALL, ...businessUnitOptions]; 
})

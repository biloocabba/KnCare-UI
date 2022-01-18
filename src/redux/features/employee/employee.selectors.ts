
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";
import { Employee } from "types/domain";
import { StateType } from "redux/features/common";

export const selectEmployeesState = (rootState: RootState): StateType<Employee> => rootState.employee;

export const selectAllEmployeesData = createSelector(
    [selectEmployeesState], 
    employeeState => employeeState.entities 
)

export const selectEmployeeById = (id:number) => createSelector(
    [selectAllEmployeesData], 
    employees => employees.find( employee => employee.id===id)
)
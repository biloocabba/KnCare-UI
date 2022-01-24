import { createSelector } from "@reduxjs/toolkit";

import { SelectOption } from "types";
import { Employee } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

const ALL: SelectOption = { value: "", label: "ALL" };

export const selectEmployeesState = (rootState: RootState): StateType<Employee> =>
  rootState.employee;

export const selectAllEmployeesData = createSelector(
  [selectEmployeesState],
  employeeState => employeeState.entities
);

export const selectEmployeeById = (id: number) =>
  createSelector([selectAllEmployeesData], employees =>
    employees.find(employee => employee.id === id)
  );

export const selectAllEmployeeDataAsSelectOptions = createSelector(
  [selectAllEmployeesData],
  (employees): SelectOption[] => {
    const employeesOptions: SelectOption[] = employees.map(employee => {
      return { value: employee.id.toString(), label: `${employee.firstName} ${employee.lastName}` };
    });
    return [ALL, ...employeesOptions];
  }
);

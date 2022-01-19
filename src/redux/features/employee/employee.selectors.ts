import { createSelector } from "@reduxjs/toolkit";

import { Employee } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

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


import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";
import { Employee } from "types/types";
import { StateType } from "redux/features/common";

export const selectEmployeesState = (rootState: RootState): StateType<Employee> => rootState.employee;

export const selectAllEmployeesData = createSelector(
    [selectEmployeesState], //array of input selectors
    employeeState => employeeState.entities //args of func: output of selectors from array in order
)

export const selectEmployeeById = (id:number) => createSelector(
    [selectAllEmployeesData], //array of input selectors
    employees => employees[id]//arg
)



/*

export type SelectEmployeesStateType = typeof selectEmployeesState;

export const selectAllEmployeesData = createSelector<
    [SelectEmployeesStateType],
    Employee[]
>
(
    selectEmployeesState,
    (employeeState:StateType<Employee>) => employeeState.entities
);

export type SelectAllEmployeesDataType = typeof selectAllEmployeesData;

export const selectAllEmployeesDataById = (id: number) => createSelector<
    [SelectAllEmployeesDataType],
    Employee
>
(
       (selectAllEmployeesData),  
       (employees:Employee[]) =>{
            return employees[id];              
        }   
);
*/



// export const selectEmployees = (rootState: RootState): Employee[] => rootState.employee.entities;
//export const employeeStateNoReselect = (employeeState: StateType<Employee>): Employee[] => employeeState.entities;


// export const selectAllEmployeesByIds = createSelector<
//   [Selector<RootState, StateType<Employee>>],
//   Employee[]
// >(selectAllEmployees,
//     (employees) => employees.filter(({ type }) => type === 'new'),
//   );



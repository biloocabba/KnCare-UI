
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";
import { Country } from "types/types";
import { StateType } from "redux/features/common";

export const selectCountryState = (rootState: RootState): StateType<Country> => rootState.country;

export const selectAllCountryData = createSelector(
    [selectCountryState], //array of input selectors
    countryState => countryState.entities //args of func: output of selectors from array in order
)

export const selectAllCountryDataAsSelectOptions = createSelector(
    [selectAllCountryData], 
    countries => {
        return countries.map(country => {
            return { value: country.code, label: country.name };
         });   
})

// export const selectCountryById = (id:number) => createSelector(
//     [selectAllCountryData], //array of input selectors
//     countries => countries.find ( (country)=> country.id===id)//arg
// )

export const selectCountryByIsoCode3 = (code3:string) => createSelector(
    [selectAllCountryData], //array of input selectors
    countries => countries.find ( (country)=> country.code3===code3)//arg
)

export const selectCountryByIsoCode = (code:string) => createSelector(
    [selectAllCountryData], //array of input selectors
    countries => countries.find ( (country)=> country.code===code)//arg
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



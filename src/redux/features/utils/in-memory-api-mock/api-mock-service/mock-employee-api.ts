import { AxiosResponse } from "axios";

import { Employee } from "types";

import { employeeMockResponse, mockAxiosReponse } from "../api-mock-data/mock-data";

import {
  entitySearch,
  matchBusinessUnit,
  matchCountryIso3,
  matchFirstName,
  matchNewMembersOnly,
  hiringDateBetweenToday,
} from ".";

export const searchEmployees = (url: string): AxiosResponse<Employee[]> => {
  return entitySearch<Employee>(url, employeeMockResponse, filterEmployees);
};

const filterEmployees = (queryParams: URLSearchParams, employeesData: Employee[]): Employee[] => {
  const result: Employee[] = employeesData.filter(employee => {
    return (
      matchFirstName(queryParams, employee) &&
      matchBusinessUnit(queryParams, employee) &&
      matchCountryIso3(queryParams, employee) &&
      matchNewMembersOnly(queryParams, employee) &&
      hiringDateBetweenToday(queryParams, employee)
    );
  });

  return result;
};

export const findEmployeeById = (id: number): Employee => {
  return employeeMockResponse.data.find(employee => employee.id === id) as Employee;
};

export const findEmployeesByIds = (ids: number[]): AxiosResponse<Employee[]> => {
  const groupMembers: Employee[] = [];

  ids.forEach(id =>
    // for each id, find the employee in the mock data and push it to the groupMembers array
    groupMembers.push(employeeMockResponse.data.find(employee => employee.id === id) as Employee)
  );
  return { data: groupMembers, ...mockAxiosReponse };
};

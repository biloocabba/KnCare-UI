import { AxiosResponse } from "axios";

import { Employee } from "types";

import { employeeMockResponse, mockAxiosReponse } from "../api-mock-data/mock-data";

import {
  wrapIntoResponse,
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

export const findEmployeeById = (id: number): AxiosResponse<Employee> => {
  const employee = employeeMockResponse.data.find(employee => employee.id === id) as Employee;

  return { data: employee, ...mockAxiosReponse };
};

export const findEmployeesByIds = (ids: number[]): AxiosResponse<Employee[]> => {
  const groupMembers: Employee[] = [];

  ids.forEach(id =>
    // for each id, find the employee in the mock data and push it to the groupMembers array
    groupMembers.push(employeeMockResponse.data.find(employee => employee.id === id) as Employee)
  );
  return { data: groupMembers, ...mockAxiosReponse };
};

export const saveEmployees = async (
  path: string,
  body: Employee[]
): Promise<AxiosResponse<Employee[]>> => {
  const employeesData = body.map(employee => {
    employeeMockResponse.data.push(employee);
    return employee;
  });

  const response = wrapIntoResponse(employeesData);

  return Promise.resolve(response);
};

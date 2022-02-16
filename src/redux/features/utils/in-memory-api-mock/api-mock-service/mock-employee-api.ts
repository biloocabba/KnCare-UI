import { AxiosResponse } from "axios";

import { Employee } from "types";

import { employeeMockResponse, mockAxiosReponse } from "../api-mock-data/mock-data";

import { entitySearch, matchBusinessUnit, matchCountryIso3, matchFirstName } from ".";

export const searchEmployees = (url: string): AxiosResponse<Employee[]> => {
  return entitySearch<Employee>(url, employeeMockResponse, filterEmployees);
};

const filterEmployees = (queryParams: URLSearchParams, employeesData: Employee[]): Employee[] => {
  const result: Employee[] = employeesData.filter(employee => {
    return (
      matchFirstName(queryParams, employee) &&
      matchBusinessUnit(queryParams, employee) &&
      matchCountryIso3(queryParams, employee)
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

// export const searchCareMembers = (url: string): AxiosResponse<CareMember[]> => {
//   return entitySearch<CareMember>(url, careMembersMockResponse, filterCareMembers);
// };

// export const saveCareMember = async (
//   url: string,
//   body: CareMemberSaveRequest
// ): Promise<AxiosResponse<CareMember>> => {
//   console.log(body);

//   const employeeData: Employee = findEmployeeById(body.id);
//   const careMemberResponse = {
//     ...employeeData,
//     ...body,
//   };

//   const response = wrapIntoResponse(careMemberResponse);
//   console.log(response);
//   return Promise.resolve(response);
// };

// export const findCareMemberById = (id: number): CareMember => {
//   return careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember;
// };

// export const filterCareMembers = (
//   queryParams: URLSearchParams,
//   careMembersData: CareMember[]
// ): CareMember[] => {
//   const result: CareMember[] = careMembersData.filter(careMember => {
//     return (
//       matchFirstName(queryParams, careMember) &&
//       matchBusinessUnit(queryParams, careMember) &&
//       matchCountryId(queryParams, careMember)
//     );
//   });

//   return result;
// };

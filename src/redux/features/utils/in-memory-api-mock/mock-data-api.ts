import { AxiosResponse } from "axios";

import { CareMember, CareMemberSaveRequest, Employee } from "types";

import {
  mockAxiosReponse,
  businessUnitsMockResponse,
  countriesMockResponse,
  careMembersMockResponse,
  employeeMockResponse,
} from "./mock-data";

const ILLEGAL_BUSINESS_ID = -1;

export interface QueryFilterFunction<T> {
  (queryParams: URLSearchParams, data: T[]): T[];
}

export const searchEmployees = (url: string): AxiosResponse<Employee[]> => {
  return entitySearch<Employee>(url, employeeMockResponse, filterEmployees);
};

export const searchCareMembers = (url: string): AxiosResponse<CareMember[]> => {
  return entitySearch<CareMember>(url, careMembersMockResponse, filterCareMembers);
};

export const saveCareMember = async (
  url: string,
  body: CareMemberSaveRequest
): Promise<AxiosResponse<CareMember>> => {
  console.log(body);

  const employeeData: Employee = findEmployeeById(body.id);
  const careMemberResponse = {
    ...employeeData,
    ...body,
  };

  const response = wrapIntoResponse(careMemberResponse);
  console.log(response);
  return Promise.resolve(response);
};

export const wrapIntoResponse = <T>(body: T): AxiosResponse<T> => {
  return {
    data: body,
    ...mockAxiosReponse,
  };
};

const entitySearch = <T>(
  url: string,
  mockResponse: AxiosResponse<T[]>,
  filter: QueryFilterFunction<T>
): AxiosResponse<any> => {
  let resultset = { ...mockResponse };

  if (!url.includes("?")) {
    return resultset;
  }

  const pathAndqueryParams = url.split("?");
  if (pathAndqueryParams.length === 0) {
    throw Error("Parameters " + pathAndqueryParams + " contain illegal querystring");
  }
  const searchParams = new URLSearchParams(pathAndqueryParams[1]);

  const filteredEntities = filter(searchParams, mockResponse.data);
  resultset = { ...mockResponse };
  resultset.data = filteredEntities;
  return resultset;
};

const filterEmployees = (queryParams: URLSearchParams, employeesData: Employee[]): Employee[] => {
  const result: Employee[] = employeesData.filter(employee => {
    return (
      matchFirstName(queryParams, employee) &&
      matchBusinessUnit(queryParams, employee) &&
      matchCountryId(queryParams, employee)
    );
  });

  return result;
};

export const findCareMemberById = (id: number): CareMember => {
  return careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember;
};

export const findEmployeeById = (id: number): Employee => {
  return employeeMockResponse.data.find(employee => employee.id === id) as Employee;
};

export const filterCareMembers = (
  queryParams: URLSearchParams,
  careMembersData: CareMember[]
): CareMember[] => {
  const result: CareMember[] = careMembersData.filter(careMember => {
    return (
      matchFirstName(queryParams, careMember) &&
      matchBusinessUnit(queryParams, careMember) &&
      matchCountryId(queryParams, careMember)
    );
  });

  return result;
};

const matchBusinessUnit = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  if (queryParams && queryParams.get("businessUnitId")) {
    const bunitIdAsString = queryParams.get("businessUnitId");
    const bunitId: number = bunitIdAsString ? parseInt(bunitIdAsString) : ILLEGAL_BUSINESS_ID;
    const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);

    if (businessUnitObj && entity.businessUnit !== businessUnitObj.name) {
      return false;
    }
  }
  return true;
};

const matchCountryId = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  if (queryParams && queryParams.get("countryId")) {
    const countryCode = queryParams.get("countryId");
    const countryObj = countriesMockResponse.data.find(country => country.code === countryCode);
    if (countryObj && entity.country !== countryObj.name) {
      return false;
    }
  }
  return true;
};

const matchFirstName = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  if (
    queryParams &&
    queryParams.get("lastName") &&
    entity.lastName !== queryParams.get("lastName")
  ) {
    return false;
  }
  return true;
};

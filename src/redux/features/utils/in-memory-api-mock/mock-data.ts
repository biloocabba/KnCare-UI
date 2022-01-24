import { AxiosResponse } from "axios";

import { CareRole, Employee, Group, CareMember, Country, BusinessUnit, BestPractice } from "types";

import {
  employeesData,
  groups,
  bestPractices,
  careMembersData,
  countryListAllIsoData,
  businessUnits,
  careRoles,
} from "./api-mock-data";
// import { worldOverviewData } from "./api-mock-data/worldOverview";

export const mockAxiosReponse = {
  status: 200,
  statusText: "",
  headers: undefined,
  config: {},
};

export const deleteMockResponse: AxiosResponse<any> = {
  data: "delete success",
  ...mockAxiosReponse,
};

export const employeeMockResponse: AxiosResponse<Employee[]> = {
  data: employeesData,
  ...mockAxiosReponse,
};

export const groupMockResponse: AxiosResponse<Group[]> = {
  data: groups,
  ...mockAxiosReponse,
};

export const bestPracticeMockResponse: AxiosResponse<BestPractice[]> = {
  data: bestPractices,
  ...mockAxiosReponse,
};

// export const worldOverviewMockResponse: AxiosResponse<WorldOverview[]> = {
//   data: worldOverviewData,
//   ...mockAxiosReponse,
// };

export const careMembersMockResponse: AxiosResponse<CareMember[]> = {
  data: careMembersData,
  ...mockAxiosReponse,
};

export const countriesMockResponse: AxiosResponse<Country[]> = {
  data: countryListAllIsoData,
  ...mockAxiosReponse,
};

export const businessUnitsMockResponse: AxiosResponse<BusinessUnit[]> = {
  data: businessUnits,
  ...mockAxiosReponse,
};

export const careRolesMockResponse: AxiosResponse<CareRole[]> = {
  data: careRoles,
  ...mockAxiosReponse,
};

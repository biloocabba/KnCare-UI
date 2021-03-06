import { AxiosResponse } from "axios";

import {
  CareRole,
  Employee,
  Group,
  CareMember,
  Country,
  BusinessUnit,
  JobTitle,
  BestPractice,
  TurnoverChart,
  Email,
} from "types";

import {
  employeesData,
  groups,
  bestPractices,
  careMembersData,
  countryListAllIsoData,
  businessUnits,
  jobTitles,
  careRoles,
  memberTurnoverReport,
  emails,
} from ".";

export const mockAxiosReponse = {
  status: 200,
  statusText: "",
  headers: {},
  config: {},
};

// headers: AxiosResponseHeaders;
// config: AxiosRequestConfig<D>;

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

export const emailMockResponse: AxiosResponse<Email[]> = {
  data: emails,
  ...mockAxiosReponse,
};

export const turnoverReportMockResponse: AxiosResponse<TurnoverChart[]> = {
  data: memberTurnoverReport,
  ...mockAxiosReponse,
};

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
export const jobTitlesMockResponse: AxiosResponse<JobTitle[]> = {
  data: jobTitles,
  ...mockAxiosReponse,
};

export const careRolesMockResponse: AxiosResponse<CareRole[]> = {
  data: careRoles,
  ...mockAxiosReponse,
};

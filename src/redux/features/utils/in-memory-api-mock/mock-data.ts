import { AxiosResponse } from "axios";

import { CareRole, Employee, Group, CareMember, Country, BusinessUnit } from "types";

import { businessUnits } from "redux/features/utils/in-memory-api-mock/mock-data/businessUnits";
import { careMembersData } from "redux/features/utils/in-memory-api-mock/mock-data/careMembers.js";
import { careRoles } from "redux/features/utils/in-memory-api-mock/mock-data/careRoles";
import { countryListAllIsoData } from "redux/features/utils/in-memory-api-mock/mock-data/countries.js";
import { employeesData } from "redux/features/utils/in-memory-api-mock/mock-data/employees.js";
import { groups } from "redux/features/utils/in-memory-api-mock/mock-data/groups.js";

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

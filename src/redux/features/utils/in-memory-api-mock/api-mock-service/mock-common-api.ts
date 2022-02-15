import { AxiosResponse } from "axios";

import { CareMember, Email, Employee } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import {
  mockAxiosReponse,
  businessUnitsMockResponse,
  countriesMockResponse,
  careRolesMockResponse,
} from "../api-mock-data/mock-data";

export const wrapIntoResponse = <T>(body: T): AxiosResponse<T> => {
  return {
    data: body,
    ...mockAxiosReponse,
  };
};

export interface QueryFilterFunction<T> {
  (queryParams: URLSearchParams, data: T[]): T[];
}

export const entitySearch = <T>(
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

export const matchBusinessUnit = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  const bunitIdAsString = queryParams.get("businessUnitId");
  if (queryParams && bunitIdAsString) {
    const bunitId: number = bunitIdAsString ? parseInt(bunitIdAsString) : CREATE_ENTITY_ID;
    const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);

    if (businessUnitObj && entity.businessUnit !== businessUnitObj.name) {
      return false;
    }
  }
  return true;
};

export const matchBusinessUnits = (queryParams: URLSearchParams, entity: Email) => {
  const bunitIdAsString = queryParams.get("businessUnitId");
  if (queryParams && bunitIdAsString) {
    const bunitId: number = bunitIdAsString ? parseInt(bunitIdAsString) : CREATE_ENTITY_ID;
    const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);

    if (businessUnitObj && !entity.businessUnits?.includes(businessUnitObj.name)) {
      return false;
    }
  }
  return true;
};

export const matchCountryId = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  const countryCode = queryParams.get("countryId");
  if (queryParams && countryCode) {
    const countryObj = countriesMockResponse.data.find(country => country.code3 === countryCode);
    if (countryObj && entity.country !== countryObj.name) {
      return false;
    }
  }
  return true;
};

export const matchCountriesIds = (queryParams: URLSearchParams, entity: Email) => {
  const countryCode = queryParams.get("countryId");
  if (queryParams && countryCode) {
    const countryObj = countriesMockResponse.data.find(country => country.code3 === countryCode);
    if (countryObj && !entity.countries?.includes(countryObj.name)) {
      return false;
    }
  }
  return true;
};

export const matchRoles = (queryParams: URLSearchParams, entity: Email) => {
  const roleId = queryParams.get("roleId");
  if (queryParams && roleId) {
    const roleObj = careRolesMockResponse.data.find(careRole => careRole.id === parseInt(roleId));
    if (roleObj && !entity.roles?.includes(roleObj.name)) {
      return false;
    }
  }
  return true;
};

export const matchFirstName = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  if (
    queryParams &&
    queryParams.get("lastName") &&
    entity.lastName !== queryParams.get("lastName")
  ) {
    return false;
  }
  return true;
};

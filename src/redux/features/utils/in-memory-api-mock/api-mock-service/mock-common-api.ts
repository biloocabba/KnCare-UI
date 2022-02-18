import { AxiosResponse } from "axios";
import moment from "moment";

import { BestPractice, CareMember, Email, Employee } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import {
  mockAxiosReponse,
  businessUnitsMockResponse,
  countriesMockResponse,
  careRolesMockResponse,
  groupMockResponse,
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

export const matchCountryIso3 = (queryParams: URLSearchParams, entity: Employee | CareMember) => {
  if (queryParams && queryParams.get("countryId")) {
    const countryCode = queryParams.get("countryId");

    const countryObj = countriesMockResponse.data.find(country => country.code3 === countryCode);
    if (countryObj && entity.country !== countryObj.name) {
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

export const matchAuthor = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (
    queryParams &&
    queryParams.get("searchAuthor") &&
    entity.author !== queryParams.get("searchAuthor")
  ) {
    return false;
  }
  return true;
};

export const matchTitle = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("searchTitle")) {
    const searchTitle = queryParams.get("searchTitle");

    if (searchTitle && entity.title.includes(searchTitle)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchSubject = (queryParams: URLSearchParams, entity: Email) => {
  if (queryParams && queryParams.get("searchSubject")) {
    const searchSubject = queryParams.get("searchSubject");

    if (searchSubject && entity.subject.includes(searchSubject)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchTag = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("searchTag")) {
    const searchTag = queryParams.get("searchTag");
    if (searchTag && entity.tags.includes(searchTag)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchRating = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("searchRating")) {
    const searchRating = queryParams.get("searchRating");
    if (searchRating && entity.rating === parseInt(searchRating)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchPublishDate = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("searchPublishDate")) {
    const searchPublishDate = moment(queryParams.get("searchPublishDate")).format("YYYY-MM-DD");

    if (
      searchPublishDate &&
      moment(entity.publishDate).format("YYYY-MM-DD") === searchPublishDate
    ) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchBusinessUnits = (queryParams: URLSearchParams, entity: Email) => {
  if (queryParams && queryParams.get("businessUnitId")) {
    const bunitIdAsString = queryParams.get("businessUnitId");
    const bunitId: number = bunitIdAsString ? parseInt(bunitIdAsString) : CREATE_ENTITY_ID;
    const businessUnitObj = businessUnitsMockResponse.data.find(bunit => bunit.id === bunitId);

    if (businessUnitObj && !entity.businessUnits?.includes(businessUnitObj.id)) {
      return false;
    }
  }
  return true;
};

export const matchGroups = (queryParams: URLSearchParams, entity: Email) => {
  const groupId = queryParams.get("groupId");
  if (queryParams && groupId) {
    const groupObj = groupMockResponse.data.find(group => group.id === parseInt(groupId));
    if (groupObj && !entity.groups?.includes(groupObj.id)) {
      return false;
    }
  }
  return true;
};

export const matchCountriesIds = (queryParams: URLSearchParams, entity: Email) => {
  if (queryParams && queryParams.get("countryId")) {
    const countryCode = queryParams.get("countryId");

    const countryObj = countriesMockResponse.data.find(country => country.code3 === countryCode);

    if (countryObj && !entity.countries?.includes(countryObj.code3)) {
      return false;
    }
  }
  return true;
};

export const matchRoles = (queryParams: URLSearchParams, entity: Email) => {
  const roleId = queryParams.get("roleId");
  if (queryParams && roleId) {
    const roleObj = careRolesMockResponse.data.find(careRole => careRole.id === parseInt(roleId));
    if (roleObj && !entity.roles?.includes(roleObj.id)) {
      return false;
    }
  }
  return true;
};

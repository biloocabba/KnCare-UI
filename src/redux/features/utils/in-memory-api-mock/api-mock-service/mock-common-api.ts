import { AxiosResponse } from "axios";
import moment from "moment";

import { BestPractice, CareMember, Email, Employee, toBoolean } from "types";
import { CREATE_ENTITY_ID, DATE_FILTER_FORMAT } from "variables/app.consts";

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
  filter?: QueryFilterFunction<T>
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
  if (filter) {
    const filteredEntities = filter(searchParams, mockResponse.data);
    resultset = { ...mockResponse };
    resultset.data = filteredEntities;
    return resultset;
  } else {
    resultset = { ...mockResponse };
    resultset.data = mockResponse.data;
    return resultset;
  }
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
  if (queryParams && queryParams.get("countryIso3")) {
    const countryCode = queryParams.get("countryIso3");

    const countryObj = countriesMockResponse.data.find(country => country.code3 === countryCode);
    if (countryObj && entity.office.countryiso3 !== countryObj.code3) {
      return false;
    }
  }
  return true;
};

// export const matchHireDate = (queryParams: URLSearchParams, entity: Employee) => {
//   if (queryParams && queryParams.get("hiringDateFrom")) {
//     const hireDateAsMoment = moment(queryParams.get("hiringDateFrom"));
//     return hireDateAsMoment.isAfter(moment(entity.startDate));
//   }
//   return true;
// };

export const matchNewMembersOnly = (
  queryParams: URLSearchParams,
  entity: Employee | CareMember
) => {
  if (!queryParams || !queryParams.get("newMembersOnly")) {
    return true;
  }
  return entity.careMember !== toBoolean(queryParams.get("newMembersOnly"));
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
  if (queryParams && queryParams.get("author") && entity.author !== queryParams.get("author")) {
    return false;
  }
  return true;
};

export const matchTitle = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("title")) {
    const title = queryParams.get("title");

    if (title && entity.title.includes(title)) {
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
  if (queryParams && queryParams.get("tag")) {
    const tag = queryParams.get("tag");
    if (tag && entity && entity.tags && entity.tags.includes(tag)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchRating = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("rating")) {
    const rating = queryParams.get("rating");
    if (rating && entity.rating === parseInt(rating)) {
      return true;
    }
    return false;
  }
  return true;
};

export const matchPublishDate = (queryParams: URLSearchParams, entity: BestPractice) => {
  if (queryParams && queryParams.get("publishDate")) {
    const publishDate = moment(queryParams.get("publishDate"), DATE_FILTER_FORMAT).toDate();
    const bestPracticePublishDate = moment(entity.publishDate, DATE_FILTER_FORMAT).toDate();

    if (
      moment(publishDate).isValid() &&
      moment(bestPracticePublishDate).format(DATE_FILTER_FORMAT) !==
        moment(publishDate).format(DATE_FILTER_FORMAT)
    ) {
      return false;
    }
  }
  return true;
};
export const hiringDateBetweenToday = (queryParams: URLSearchParams, entity: Employee) => {
  if (queryParams && queryParams.get("hiringDateFrom")) {
    const searchHiringDateFromAsString = queryParams.get("hiringDateFrom");

    const entityHiringDate = moment(entity.startDate, DATE_FILTER_FORMAT).local();
    const hiringDateFrom = moment(searchHiringDateFromAsString, DATE_FILTER_FORMAT).local();
    const todaysDate = moment.utc().local();

    if (
      hiringDateFrom.isValid() &&
      !entityHiringDate.isBetween(hiringDateFrom, todaysDate, undefined, "[]")
    ) {
      return false;
    }
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

export const matchSendingDateBetween = (queryParams: URLSearchParams, entity: Email) => {
  if (queryParams && queryParams.get("sendingDateFrom") && queryParams.get("sendingDateTo")) {
    const sendingDateFromAsString = queryParams.get("sendingDateFrom");
    const sendingDateToAsString = queryParams.get("sendingDateTo");

    const sendingDate = moment(entity.sendingDate, DATE_FILTER_FORMAT).utc();
    const sendingDateFrom = moment(sendingDateFromAsString, DATE_FILTER_FORMAT).utc();
    const sendingDateTo = moment(sendingDateToAsString, DATE_FILTER_FORMAT).utc();

    if (
      sendingDateFrom.isValid() &&
      sendingDateTo.isValid() &&
      !sendingDate.isBetween(sendingDateFrom, sendingDateTo, undefined, "[]")
    ) {
      return false;
    }
  }
  return true;
};

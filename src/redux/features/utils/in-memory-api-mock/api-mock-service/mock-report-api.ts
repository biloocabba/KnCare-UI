import { AxiosResponse } from "axios";

import { Country } from "types";

import {
  REPORT_ACTIVE_MEMBERS_ROUTE,
  REPORT_AUTO_OFFBOARDED_MEMBERS_ROUTE,
  REPORT_NEW_MEMBERS_ROUTE,
  REPORT_SELF_RESIGNED_MEMBERS_ROUTE,
} from "redux/features";

import { countriesMockResponse } from "../mock-data";

import { wrapIntoResponse } from ".";

declare type Values = {
  [key: string]: string | number;
};

// eslint-disable-next-line no-unused-vars
async function get(url: string): Promise<AxiosResponse<any>> {
  let response = {};

  if (url.includes(REPORT_ACTIVE_MEMBERS_ROUTE)) {
    response = getActiveMembersMapDataMock();
  }

  if (url.includes(REPORT_AUTO_OFFBOARDED_MEMBERS_ROUTE)) {
    response = getAutoOffboardedMembersMapDataMock();
  }

  if (url.includes(REPORT_NEW_MEMBERS_ROUTE)) {
    response = getNewMembersMapDataMock();
  }

  if (url.includes(REPORT_SELF_RESIGNED_MEMBERS_ROUTE)) {
    response = getSelfResignedMembersMapDataMock();
  }

  return wrapIntoResponse(response);
}

const randomMembersFromBase = (base: number, deltaGen: number) => {
  const delta = Math.round(deltaGen * Math.random());
  return base + delta;
};

const getNewMembersMapDataMock = () => {
  return getRandomMapData(countriesMockResponse.data, 20, 10);
};

const getActiveMembersMapDataMock = () => {
  return getRandomMapData(countriesMockResponse.data, 50, 20);
};

const getSelfResignedMembersMapDataMock = () => {
  return getRandomMapData(countriesMockResponse.data, 0, 5);
};

const getAutoOffboardedMembersMapDataMock = () => {
  return getRandomMapData(countriesMockResponse.data, 10, 10);
};

const getRandomMapData = (
  countryListAllIsoData: Country[],
  base: number,
  deltaGen: number
): Values => {
  const generatedData: Values = {};
  countryListAllIsoData.map(country => {
    generatedData[country.code] = randomMembersFromBase(base, deltaGen);
  });
  return generatedData;
};

export const reportService = {
  get,
};

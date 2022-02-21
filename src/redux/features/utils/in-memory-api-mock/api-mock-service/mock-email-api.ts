import { AxiosResponse } from "axios";

import { Email } from "types";

import { emailMockResponse } from "../api-mock-data/mock-data";

import {
  entitySearch,
  matchBusinessUnits,
  matchCountriesIds,
  matchGroups,
  matchSubject,
  matchRoles,
  matchDateBetween,
} from ".";

export const searchEmails = (url: string): AxiosResponse<Email[]> => {
  return entitySearch<Email>(url, emailMockResponse, filterEmails);
};

const filterEmails = (queryParams: URLSearchParams, emailsData: Email[]): Email[] => {
  const result: Email[] = emailsData.filter(email => {
    return (
      matchBusinessUnits(queryParams, email) &&
      matchCountriesIds(queryParams, email) &&
      matchRoles(queryParams, email) &&
      matchGroups(queryParams, email) &&
      matchSubject(queryParams, email) &&
      matchDateBetween(queryParams, email)
    );
  });

  return result;
};

export const findEmailById = (id: number): Email => {
  return emailMockResponse.data.find(email => email.id === id) as Email;
};

import { AxiosResponse } from "axios";

import { BEST_PRACTICE_ROUTE } from "redux/features";

import {
  bestPracticeMockResponse,
  businessUnitsMockResponse,
  careRolesMockResponse,
  countriesMockResponse,
  deleteMockResponse,
  groupMockResponse,
  // worldOverviewMockResponse,
} from "./api-mock-data/mock-data";
import {
  saveCareMember,
  searchCareMembers,
  searchEmployees,
  wrapIntoResponse,
  reportService,
  login,
} from "./api-mock-service";
import { saveBestPractice } from "./api-mock-service/mock-best-practice-api";

export async function get(url: string): Promise<AxiosResponse<any>> {
  if (url.includes("/employee")) {
    return Promise.resolve(searchEmployees(url));
  }

  if (url.includes("/care-member")) {
    return Promise.resolve(searchCareMembers(url));
  }

  if (url.includes(BEST_PRACTICE_ROUTE)) {
    return Promise.resolve(bestPracticeMockResponse);
  }

  if (url.includes("/report/")) {
    return Promise.resolve(reportService.get(url));
  }

  if (url.includes("/group")) {
    return Promise.resolve(groupMockResponse);
  }

  if (url.includes("/care-role")) {
    return Promise.resolve(careRolesMockResponse);
  }

  if (url.includes("/business-unit")) {
    return Promise.resolve(businessUnitsMockResponse);
  }

  if (url.includes("/country")) {
    return Promise.resolve(countriesMockResponse);
  }

  return Promise.reject();
}

export async function post(url: string, body: any): Promise<AxiosResponse> {
  if (url.includes("/care-member")) {
    return saveCareMember(url, body);
  }
  if (url.includes("/login")) {
    return login(url, body);
  }
  if (url.includes(BEST_PRACTICE_ROUTE)) {
    return saveBestPractice(body);
  }
  return Promise.resolve(wrapIntoResponse(body));
}

export async function put<T>(path: string, body: any): Promise<AxiosResponse<T>> {
  return Promise.resolve(wrapIntoResponse(body));
}

export async function patch<T>(path: string, body: any): Promise<AxiosResponse<T>> {
  return Promise.resolve(wrapIntoResponse(body));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function httpDelete(path: string): Promise<AxiosResponse<any>> {
  return Promise.resolve(deleteMockResponse);
}

export const httpCommonMock = {
  get,
  post,
  patch,
  put,
  delete: httpDelete,
};

import { AxiosResponse } from "axios";

import {
  businessUnitsMockResponse,
  careRolesMockResponse,
  countriesMockResponse,
  deleteMockResponse,
  groupMockResponse,
} from "./mock-data";
import {
  saveCareMember,
  searchCareMembers,
  searchEmployees,
  wrapIntoResponse,
} from "./mock-data-api";

export async function get(url: string): Promise<AxiosResponse<any>> {
  if (url.includes("/employee")) {
    return Promise.resolve(searchEmployees(url));
  }
  if (url.includes("/care-member")) {
    return Promise.resolve(searchCareMembers(url));
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
  return Promise.resolve(wrapIntoResponse(body));
}

export async function put<T>(path: string, body: any): Promise<AxiosResponse<T>> {
  return Promise.resolve(wrapIntoResponse(body));
}

export async function patch<T>(path: string, body: any): Promise<AxiosResponse<T>> {
  return Promise.resolve(wrapIntoResponse(body));
}

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

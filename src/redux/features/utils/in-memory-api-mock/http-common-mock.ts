import { AxiosResponse } from "axios";

import { BEST_PRACTICE_ROUTE, EMAIL_ROUTE } from "redux/features";

import {
  bestPracticeMockResponse,
  businessUnitsMockResponse,
  careRolesMockResponse,
  countriesMockResponse,
  deleteMockResponse,
  groupMockResponse,
  jobTitlesMockResponse,
} from "./api-mock-data/mock-data";
import {
  saveCareMember,
  searchCareMembers,
  searchEmployees,
  wrapIntoResponse,
  reportService,
  login,
  searchEmails,
  findCareMembersByIds,
  searchBestPractices,
  saveBestPractice,
  saveCareMembers,
  findEmployeeById,
  saveEmployees,
} from "./api-mock-service";

export async function get(url: string): Promise<AxiosResponse<any>> {
  if (url.includes("/care-member/group/members")) {
    // pop out the ids of members
    const ids = url.split("/care-member/group/members/").pop();

    // if there are any ids
    if (ids) {
      // get the number array of them
      const idsArray: number[] = ids.split(",").map(id => parseInt(id));

      // return the Employees
      return Promise.resolve(findCareMembersByIds(idsArray));
    }
  }

  if (url.includes("/employee/")) {
    const id = url.split("/employee/").pop();
    // if there is an id
    if (id) {
      // get the number array of them
      const idNumber: number = parseInt(id);

      // return the Employee
      return Promise.resolve(findEmployeeById(idNumber));
    }
  }

  if (url.includes("/employee")) {
    return Promise.resolve(searchEmployees(url));
  }

  if (url.includes("/care-member")) {
    return Promise.resolve(searchCareMembers(url));
  }

  if (url.includes(`${BEST_PRACTICE_ROUTE}?`)) {
    return Promise.resolve(searchBestPractices(url));
  }

  if (url.includes(BEST_PRACTICE_ROUTE)) {
    return Promise.resolve(bestPracticeMockResponse);
  }

  if (url.includes(EMAIL_ROUTE)) {
    return Promise.resolve(searchEmails(url));
  }

  if (url.includes("/report/")) {
    return Promise.resolve(reportService.get(url));
  }

  if (url.includes("/group")) {
    return Promise.resolve(groupMockResponse);
  }

  if (url.includes("/role")) {
    return Promise.resolve(careRolesMockResponse);
  }

  if (url.includes("/business-unit")) {
    return Promise.resolve(businessUnitsMockResponse);
  }
  if (url.includes("/job-title")) {
    return Promise.resolve(jobTitlesMockResponse);
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

export async function patch(path: string, body: any): Promise<AxiosResponse<any>> {
  if (path.includes("/employee")) {
    return saveEmployees(path, body);
  }
  if (path.includes("/care-member")) {
    return saveCareMembers(path, body);
  }
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

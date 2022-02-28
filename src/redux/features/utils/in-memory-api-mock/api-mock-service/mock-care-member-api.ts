import { AxiosResponse } from "axios";

import { CareMember, CareMemberSaveRequest, Employee } from "types";

import { careMembersMockResponse, mockAxiosReponse } from "../api-mock-data/mock-data";

import {
  entitySearch,
  findEmployeeById,
  matchBusinessUnit,
  matchCountryIso3,
  matchFirstName,
  wrapIntoResponse,
} from ".";

export const searchCareMembers = (url: string): AxiosResponse<CareMember[]> => {
  return entitySearch<CareMember>(url, careMembersMockResponse, filterCareMembers);
};

export const saveCareMember = async (
  url: string,
  body: CareMemberSaveRequest
): Promise<AxiosResponse<CareMember>> => {
  const employeeData: Employee = findEmployeeById(body.employeeId);

  const careMemberResponse = {
    ...employeeData,
    ...body,
  };
  careMembersMockResponse.data.push(careMemberResponse);
  const response = wrapIntoResponse(careMemberResponse);
  return Promise.resolve(response);
};

export const findCareMemberById = (id: number): CareMember => {
  return careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember;
};

export const findCareMembersByIds = (ids: number[]): AxiosResponse<CareMember[]> => {
  const groupMembers: CareMember[] = [];

  ids.forEach(id =>
    // for each id, find the careMember in the mock data and push it to the groupMembers array
    groupMembers.push(
      careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember
    )
  );
  return { data: groupMembers, ...mockAxiosReponse };
};

export const filterCareMembers = (
  queryParams: URLSearchParams,
  careMembersData: CareMember[]
): CareMember[] => {
  const result: CareMember[] = careMembersData.filter(careMember => {
    return (
      matchFirstName(queryParams, careMember) &&
      matchBusinessUnit(queryParams, careMember) &&
      matchCountryIso3(queryParams, careMember)
    );
  });

  return result;
};

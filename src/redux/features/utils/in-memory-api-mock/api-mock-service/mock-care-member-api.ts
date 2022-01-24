import { AxiosResponse } from "axios";

import { CareMember, CareMemberSaveRequest, Employee } from "types";

import { careMembersMockResponse } from "../mock-data";

import {
  entitySearch,
  findEmployeeById,
  matchBusinessUnit,
  matchCountryId,
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
  console.log(body);

  const employeeData: Employee = findEmployeeById(body.id);
  const careMemberResponse = {
    ...employeeData,
    ...body,
  };

  const response = wrapIntoResponse(careMemberResponse);
  console.log(response);
  return Promise.resolve(response);
};

export const findCareMemberById = (id: number): CareMember => {
  return careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember;
};

export const filterCareMembers = (
  queryParams: URLSearchParams,
  careMembersData: CareMember[]
): CareMember[] => {
  const result: CareMember[] = careMembersData.filter(careMember => {
    return (
      matchFirstName(queryParams, careMember) &&
      matchBusinessUnit(queryParams, careMember) &&
      matchCountryId(queryParams, careMember)
    );
  });

  return result;
};

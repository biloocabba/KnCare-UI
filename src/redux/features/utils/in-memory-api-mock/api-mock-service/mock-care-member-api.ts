import { AxiosResponse } from "axios";

import { CareMember, CareMemberSaveRequest } from "types";

import { careMembersMockResponse } from "../api-mock-data/mock-data";

import { entitySearch, findEmployeeById, wrapIntoResponse } from ".";

export const searchCareMembers = (url: string): AxiosResponse<CareMember[]> => {
  return entitySearch<CareMember>(url, careMembersMockResponse);
};

export const saveCareMember = async (
  url: string,
  body: CareMemberSaveRequest
): Promise<AxiosResponse<CareMember>> => {
  const { data } = findEmployeeById(body.employeeId);

  const careMemberData = {
    ...data,
    ...body,
  };
  careMemberData.id = Math.random();
  // careMembersMockResponse.data.push(careMemberData);
  const response = wrapIntoResponse(careMemberData);
  return Promise.resolve(response);
};

export const findCareMembersByIds = (ids: number[]): Promise<AxiosResponse<CareMember[]>> => {
  const groupMembers: CareMember[] = [];

  ids.forEach(id =>
    // for each id, find the careMember in the mock data and push it to the groupMembers array
    groupMembers.push(
      careMembersMockResponse.data.find(careMember => careMember.id === id) as CareMember
    )
  );

  const response = wrapIntoResponse(groupMembers);
  return Promise.resolve(response);
};

export const saveCareMembers = async (
  path: string,
  body: CareMember[]
): Promise<AxiosResponse<CareMember[]>> => {
  const careMembersData = body.map(careMember => {
    careMembersMockResponse.data.push(careMember);
    return careMember;
  });

  const response = wrapIntoResponse(careMembersData);

  return Promise.resolve(response);
};

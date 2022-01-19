import { Employee } from "types/domain";

import { IPartiallyUpdated, IUpdated } from "redux/features/common";

import { httpCommon, HttpResponseType } from "../utils/http-common";

const searchEmployees = (queryParams: URLSearchParams): HttpResponseType => {
  console.log(queryParams);
  return httpCommon.get(`/employee?${queryParams}`);
};

const getEmployeeById = (id: number): HttpResponseType => {
  return httpCommon.get(`/employee/${id}`);
};

const searchEmployeesByIds = (employeeIds: number[]): HttpResponseType => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employee?${searchString}`);
};

const createEmployee = (body: Employee): HttpResponseType => {
  return httpCommon.post(`/employee`, body);
};

const updateEmployee = (updatedEmployee: IUpdated<Employee>): HttpResponseType => {
  const { id, body } = updatedEmployee;
  return httpCommon.put(`/employee/${id}`, body);
};

const partialUpdateEmployee = (
  partiallyUpdatedEmployee: IPartiallyUpdated<Employee>
): HttpResponseType => {
  const { id, body } = partiallyUpdatedEmployee;
  return httpCommon.patch(`/employee/${id}`, body);
};

const deleteEmployee = (id: number): HttpResponseType => {
  return httpCommon.delete(`/employee/${id}`);
};

export const employeeService = {
  searchEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};

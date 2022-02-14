import { Employee } from "types";

import { IPartiallyUpdated, IUpdated, httpCommon, HttpResponseType } from "redux/features";

const searchEmployees = (queryParams: URLSearchParams): HttpResponseType => {
  console.log(queryParams);
  return httpCommon.get(`/employee?${queryParams}`);
};

const getEmployeeById = (id: number): HttpResponseType => {
  return httpCommon.get(`/employee/${id}`);
};

const findByIds = (ids: number[]) => {
  return httpCommon.get(`/employee/group/members/${ids}`);
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
  findByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};

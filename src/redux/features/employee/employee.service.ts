import { IPartiallyUpdated, IUpdated, httpCommon, HttpResponseType } from "redux/features";

import { Employee } from "types";

const searchEmployees = (queryParams: URLSearchParams): HttpResponseType => {
  return httpCommon.get(`/employee?${queryParams}`);
};

const getEmployeeById = (id: number): HttpResponseType => {
  return httpCommon.get(`/employee/${id}`);
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
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};

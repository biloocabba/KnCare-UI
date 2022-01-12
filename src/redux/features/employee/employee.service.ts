import { Employee } from "types/types";
import { httpCommon } from "..";
import { IPartiallyUpdatedEmployee, IUpdatedEmployee } from ".";

const searchEmployees = (queryParams: URLSearchParams) => {
  return httpCommon.get(`/employees?${queryParams}`);
};

const getEmployeeById = (id: number) => {
  return httpCommon.get(`/employees/${id}`);
};

const searchEmployeesByIds = (employeeIds: number[]) => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employees?${searchString}`);
};

const createEmployee = (body: Employee) => {
  return httpCommon.post(`/employees`, body);
};

const updateEmployee = (updatedEmployee: IUpdatedEmployee) => {
  const { id, body } = updatedEmployee;
  return httpCommon.put(`/employees/${id}`, body);
};

const partialUpdateEmployee = (
  partiallyUpdatedEmployee: IPartiallyUpdatedEmployee,
) => {
  const { id, body } = partiallyUpdatedEmployee;
  return httpCommon.patch(`/employees/${id}`, body);
};

const deleteEmployee = (id: number) => {
  return httpCommon.delete(`/employees/${id}`);
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

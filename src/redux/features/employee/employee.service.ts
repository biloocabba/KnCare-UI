import { Employee } from "types/types";
 //import { httpCommon } from "..";
import { httpCommon } from "../utils/http-common";
import { IPartiallyUpdatedEmployee, IUpdatedEmployee } from ".";
import { AxiosResponse } from "axios";

const searchEmployees = (queryParams: URLSearchParams): Promise<AxiosResponse<Employee[]>> => {
  console.log(queryParams)
  return httpCommon.get(`/employees?${queryParams}`);
};

const getEmployeeById = (id: number): Promise<AxiosResponse<Employee>> => {
  return httpCommon.get(`/employees/${id}`);
};

const searchEmployeesByIds = (employeeIds: number[]): Promise<AxiosResponse<Employee[]>> => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`/employees?${searchString}`);
};

const createEmployee = (body: Employee): Promise<AxiosResponse<Employee>> => {
  return httpCommon.post(`/employees`, body);
};

const updateEmployee = (updatedEmployee: IUpdatedEmployee): Promise<AxiosResponse<Employee>> => {
  const { id, body } = updatedEmployee;
  return httpCommon.put(`/employees/${id}`, body);
};

const partialUpdateEmployee = (
  partiallyUpdatedEmployee: IPartiallyUpdatedEmployee,
): Promise<AxiosResponse<Employee>> => {
  const { id, body } = partiallyUpdatedEmployee;
  return httpCommon.patch(`/employees/${id}`, body);
};

const deleteEmployee = (id: number): Promise<AxiosResponse<any>> => {
  return httpCommon.delete(`/employees/${id}`);
};

export const employeeService ={
  searchEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  createEmployee,
  updateEmployee,
  partialUpdateEmployee,
  deleteEmployee,
};

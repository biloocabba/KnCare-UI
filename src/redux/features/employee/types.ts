import { Employee } from "types/types";

export type EmployeeStateType = {
  employees: Employee[];
  employee: Employee | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
};

export interface IUpdatedEmployee {
  id: number;
  body: Employee;
}

export interface IPartiallyUpdatedEmployee {
  id: number;
  body: Partial<Employee>;
}

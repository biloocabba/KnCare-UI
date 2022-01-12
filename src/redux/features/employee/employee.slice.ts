import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Employee } from "types/types";
import {
  employeeService,
  EmployeeStateType,
  IPartiallyUpdatedEmployee,
  IUpdatedEmployee,
} from ".";

const initialState: EmployeeStateType = {
  employees: [],
  employee: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",
  async (id: number) => {
    let { data } = await employeeService.getEmployeeById(id);
    return data;
  },
);

export const searchEmployees = createAsyncThunk(
  "employee/searchEmployees",
  // @todo add type to this
  async (filters: any) => {
    const queryParams = new URLSearchParams(filters);

    const { data } = await employeeService.searchEmployees(queryParams);

    return data;
  },
);

export const searchEmployeesByIds = createAsyncThunk(
  "employee/searchEmployeesByIds",
  async (employeeIds: number[]) => {
    const { data } = await employeeService.searchEmployeesByIds(
      employeeIds,
    );

    return data;
  },
);

export const createEmployee = createAsyncThunk(
  "employee/createEmployee",
  async (body: Employee) => {
    const { data } = await employeeService.createEmployee(body);

    return data;
  },
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (updatedEmployee: IUpdatedEmployee) => {
    const { data } = await employeeService.updateEmployee(updatedEmployee);

    return data;
  },
);

export const partialUpdateEmployee = createAsyncThunk(
  "employee/partialUpdateEmployee",
  async (partiallyUpdatedEmployee: IPartiallyUpdatedEmployee) => {
    const { data } = await employeeService.partialUpdateEmployee(
      partiallyUpdatedEmployee,
    );

    return data;
  },
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id: number) => {
    let { data } = await employeeService.deleteEmployee(id);
    return data;
  },
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [
      fetchEmployee,
      searchEmployees,
      searchEmployeesByIds,
      createEmployee,
      updateEmployee,
      partialUpdateEmployee,
      deleteEmployee,
    ].forEach((thunk: AsyncThunk<any, any, {}>) => {
      builder.addCase(thunk.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
      });
      builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
        state.isSuccess = false;
      });
    });

    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employee = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchEmployeesByIds.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      state.employees = [...state.employees, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      let updatedEmployees = state.employees.map(employee => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        } else {
          return employee;
        }
      });
      state.employees = updatedEmployees;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(partialUpdateEmployee.fulfilled, (state, action) => {
      state.employee = action.payload;
      let updatedEmployees = state.employees.map(employee => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        } else {
          return employee;
        }
      });
      state.employees = updatedEmployees;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.employee = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

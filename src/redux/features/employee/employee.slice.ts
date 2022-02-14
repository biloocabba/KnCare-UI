import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Employee } from "types";

import { StateType, IPartiallyUpdated, IUpdated } from "redux/features/common";

import { employeeService } from ".";

const initialState: StateType<Employee> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findEmployeeById = createAsyncThunk(
  "employee/findById",
  async (id: number): Promise<Employee> => {
    const { data } = await employeeService.getEmployeeById(id);
    return data;
  }
);

export const searchEmployees = createAsyncThunk(
  "employee/search",
  async (filters: any): Promise<Employee[]> => {
    console.log(filters);
    const queryParams = new URLSearchParams(filters);
    const { data } = await employeeService.searchEmployees(queryParams);
    return data;
  }
);

export const createEmployee = createAsyncThunk(
  "employee/create",
  async (body: Employee): Promise<Employee> => {
    const { data } = await employeeService.createEmployee(body);
    return data;
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/update",
  async (updatedEmployee: IUpdated<Employee>): Promise<Employee> => {
    const { data } = await employeeService.updateEmployee(updatedEmployee);
    return data;
  }
);

export const partialUpdateEmployee = createAsyncThunk(
  "employee/partialUpdate",
  async (partiallyUpdatedEmployee: IPartiallyUpdated<Employee>): Promise<Employee> => {
    const { data } = await employeeService.partialUpdateEmployee(partiallyUpdatedEmployee);

    return data;
  }
);

export const deleteEmployee = createAsyncThunk("employee/delete", async (id: number) => {
  const { data } = await employeeService.deleteEmployee(id);
  return data;
});

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [
      findEmployeeById,
      searchEmployees,
      createEmployee,
      updateEmployee,
      partialUpdateEmployee,
      deleteEmployee,
    ].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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

    builder.addCase(findEmployeeById.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchEmployees.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(createEmployee.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedEmployees = state.entities.map(employee => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        } else {
          return employee;
        }
      });
      state.entities = updatedEmployees;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(partialUpdateEmployee.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedEmployees = state.entities.map(employee => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        } else {
          return employee;
        }
      });
      state.entities = updatedEmployees;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

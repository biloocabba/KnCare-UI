import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CareRole } from "types/domain";

import { roleService, StateType, IUpdated } from "redux/features";

const initialState: StateType<CareRole> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findRoleById = createAsyncThunk("role/findById", async (id: number) => {
  const { data } = await roleService.findById(id);
  return data;
});

export const searchRoles = createAsyncThunk("role/searchRoles", async () => {
  const { data } = await roleService.findAll();

  return data;
});

export const createRole = createAsyncThunk("role/create", async (body: Partial<CareRole>) => {
  const { data } = await roleService.create(body);

  return data;
});

export const updateRole = createAsyncThunk(
  "role/update",
  async (updatedRole: IUpdated<CareRole>) => {
    const { data } = await roleService.update(updatedRole);

    return data;
  }
);

export const deleteRole = createAsyncThunk("role/delete", async (id: number) => {
  const { data } = await roleService.remove(id);
  return data;
});

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [findRoleById, searchRoles, createRole, updateRole, deleteRole].forEach(
      (thunk: AsyncThunk<any, any, Record<string, never>>) => {
        builder.addCase(thunk.pending, state => {
          state.isLoading = true;
          state.isSuccess = false;
        });
        builder.addCase(thunk.rejected, (state, action) => {
          state.error = action.error;
          state.isLoading = false;
          state.isSuccess = false;
        });
      }
    );

    builder.addCase(findRoleById.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchRoles.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(createRole.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateRole.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedRoles = state.entities.map(role => {
        if (role.id === action.payload.id) {
          return {
            ...role,
            ...action.payload,
          };
        } else {
          return role;
        }
      });
      state.entities = updatedRoles;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteRole.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

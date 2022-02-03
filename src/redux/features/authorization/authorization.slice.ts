import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Principal, LoginBody } from "types";

import { StateType } from "..";
import { loggedInUsers } from "../utils/in-memory-api-mock/api-mock-data/authorization";

import { authorizationService } from "./authorization.service";

const initialState: StateType<Principal> = {
  entities: [],
  entity: loggedInUsers.regionalManagerUser,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const login = createAsyncThunk("authorization/login", async (body: LoginBody) => {
  const { data } = await authorizationService.login(body);
  return data;
});

export const logout = createAsyncThunk("authorization/logout", async () => {
  const { data } = await authorizationService.logout();
  return data;
});

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [login, logout].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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
    builder.addCase(login.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

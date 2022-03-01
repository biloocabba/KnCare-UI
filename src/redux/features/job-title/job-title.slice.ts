import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { StateType } from "redux/features";

import { JobTitle } from "types";

import { jobTitleService } from ".";

const initialState: StateType<JobTitle> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findAllJobTitles = createAsyncThunk("jobTitle/findAll", async () => {
  const { data } = await jobTitleService.findAll();

  return data;
});

export const jobTitleSlice = createSlice({
  name: "jobTitle",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [findAllJobTitles].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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
    builder.addCase(findAllJobTitles.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

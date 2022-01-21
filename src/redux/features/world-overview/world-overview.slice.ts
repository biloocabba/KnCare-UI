import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { WorldOverview } from "../../../types";
import { StateType } from "../common";

import { worldOverviewService } from ".";

const initialState: StateType<WorldOverview> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const fetchWorldOverviews = createAsyncThunk("worldOverview/find", async () => {
  const { data } = await worldOverviewService.getAll();

  return data;
});

export const worldOverviewSlice = createSlice({
  name: "worldOverview",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [fetchWorldOverviews].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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
    builder.addCase(fetchWorldOverviews.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

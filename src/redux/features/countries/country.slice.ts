import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Country } from "types/domain";

import { StateType } from "redux/features/common";

import { countryService } from ".";

const initialState: StateType<Country> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findAllCountries = createAsyncThunk("country/findAll", async () => {
  const { data } = await countryService.findAll();

  return data;
});

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [findAllCountries].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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
    builder.addCase(findAllCountries.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

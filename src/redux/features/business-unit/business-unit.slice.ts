import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BusinessUnit } from "types/domain";

import { StateType } from "redux/features/common";

import { businessUnitService } from ".";

// type BusinessUnitStateType = {
//   businessUnits: BusinessUnit[];
//   businessUnit: BusinessUnit | null;
//   isLoading: boolean;
//   isSuccess: boolean;
//   error: SerializedError;
// };

const initialState: StateType<BusinessUnit> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findAllBusinessUnits = createAsyncThunk("businessUnit/findAll", async () => {
  const { data } = await businessUnitService.findAll();

  return data;
});

export const businessUnitSlice = createSlice({
  name: "businessUnit",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [findAllBusinessUnits].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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
    builder.addCase(findAllBusinessUnits.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

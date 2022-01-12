import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { BusinessUnit } from "types/types";
import { businessUnitService } from ".";

type BusinessUnitStateType = {
  businessUnits: BusinessUnit[];
  businessUnit: BusinessUnit | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
};

const initialState: BusinessUnitStateType = {
  businessUnits: [],
  businessUnit: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const fetchBusinessUnits = createAsyncThunk(
  "businessUnit/fetchBusinessUnits",
  async () => {
    const { data } = await businessUnitService.listBusinessUnits();

    return data;
  },
);

export const businessUnitSlice = createSlice({
  name: "businessUnit",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [fetchBusinessUnits].forEach((thunk: AsyncThunk<any, any, {}>) => {
      builder.addCase(thunk.pending, state => {
        state.isLoading = true;
        state.isSuccess = false;
      });
      builder.addCase(thunk.rejected, (state, action) => {
        state.error = action.payload || action.error;
        state.isLoading = false;
        state.isSuccess = false;
      });
    });
    builder.addCase(fetchBusinessUnits.fulfilled, (state, action) => {
      state.businessUnits = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

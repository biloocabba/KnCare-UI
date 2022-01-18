import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { Chart } from "types/domain";
import { chartService } from ".";

type ChartStateType = {
  charts: Chart[];
  chart: Chart | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: SerializedError;
};

const initialState: ChartStateType = {
  charts: [],
  chart: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const fetchCharts = createAsyncThunk(
  "chart/fetchCharts",
  async () => {
    const { data } = await chartService.listCharts();

    return data;
  },
);

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [fetchCharts].forEach((thunk: AsyncThunk<any, any, {}>) => {
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
    builder.addCase(fetchCharts.fulfilled, (state, action) => {
      state.charts = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

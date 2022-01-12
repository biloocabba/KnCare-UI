import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { worldOverviewService } from ".";

type WorldOverviewStateType = {
  // add types
  worldOverviews: any;
  worldOverview: any | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
};

const initialState: WorldOverviewStateType = {
  worldOverviews: [],
  worldOverview: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const fetchWorldOverviews = createAsyncThunk(
  "worldOverview/fetchWorldOverviews",
  async () => {
    const { data } = await worldOverviewService.listWorldOverview();

    return data;
  },
);

export const worldOverviewSlice = createSlice({
  name: "worldOverview",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [fetchWorldOverviews].forEach((thunk: AsyncThunk<any, any, {}>) => {
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
    builder.addCase(fetchWorldOverviews.fulfilled, (state, action) => {
      state.worldOverviews = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

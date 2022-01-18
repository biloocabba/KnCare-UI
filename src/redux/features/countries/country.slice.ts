import {
  AsyncThunk,
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import { Country } from "types/domain";
import { countryService } from ".";
import { StateType } from "redux/features/common";



const initialState: StateType<Country> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const { data } = await countryService.listCountries();
    return data;
  },
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [fetchCountries].forEach((thunk: AsyncThunk<any, any, {}>) => {
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
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

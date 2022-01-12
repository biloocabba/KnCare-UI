import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { Country } from "types/types";
import { countryService } from ".";

type CountryStateType = {
  countries: Country[];
  country: Country | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: SerializedError;
};

const initialState: CountryStateType = {
  countries: [],
  country: null,
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
      state.countries = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

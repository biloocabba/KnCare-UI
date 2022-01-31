import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BestPractice } from "types";

import { IUpdated, StateType } from "redux/features/common";

import { bestPracticeService } from "./best-practice.service";

const initialState: StateType<BestPractice> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findBestPracticeById = createAsyncThunk(
  "bestPractice/findById",
  async (id: number) => {
    const { data } = await bestPracticeService.findById(id);
    return data;
  }
);

export const findAllBestPractices = createAsyncThunk("bestPractice/findAll", async () => {
  const { data } = await bestPracticeService.findAll();

  return data;
});

export const searchBestPractices = createAsyncThunk(
  "bestPractice/search",
  async (filters: any): Promise<BestPractice[]> => {
    const queryParams = new URLSearchParams(filters);
    const { data } = await bestPracticeService.search(queryParams);
    return data;
  }
);

export const createBestPractice = createAsyncThunk(
  "bestPractice/create",
  async (body: Partial<BestPractice>) => {
    const { data } = await bestPracticeService.create(body);

    return data;
  }
);

export const updateBestPractice = createAsyncThunk(
  "bestPractice/update",
  async (updatedBestPractice: IUpdated<BestPractice>) => {
    const { data } = await bestPracticeService.update(updatedBestPractice);

    return data;
  }
);

export const deleteBestPractice = createAsyncThunk("bestPractice/delete", async (id: number) => {
  const { data } = await bestPracticeService.remove(id);
  return data;
});

export const bestPracticeSlice = createSlice({
  name: "bestPractice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [
      findBestPracticeById,
      findAllBestPractices,
      createBestPractice,
      searchBestPractices,
      updateBestPractice,
      deleteBestPractice,
    ].forEach((thunk: AsyncThunk<any, any, Record<string, never>>) => {
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

    builder.addCase(findBestPracticeById.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(findAllBestPractices.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchBestPractices.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(createBestPractice.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateBestPractice.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedBestPractices = state.entities.map(bestPractice => {
        if (bestPractice.id === action.payload.id) {
          return {
            ...bestPractice,
            ...action.payload,
          };
        } else {
          return bestPractice;
        }
      });
      state.entities = updatedBestPractices;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteBestPractice.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

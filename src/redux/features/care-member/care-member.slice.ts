import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CareMemberSaveRequest } from "types";
import { CareMember } from "types/domain";

import { IUpdated, StateType } from "../common";

import { careMemberService } from ".";

export const searchCareMembers = createAsyncThunk("care-member/search", async (filters: any) => {
  const queryParams = new URLSearchParams(filters);
  const { data } = await careMemberService.searchCareMembers(queryParams);
  return data;
});

export const createCareMember = createAsyncThunk(
  "care-member/create",
  async (body: CareMemberSaveRequest): Promise<CareMember> => {
    const { data } = await careMemberService.createCareMember(body);
    return data;
  }
);

// export const partialUpdateCareMember = createAsyncThunk(
//   "care-member/partialUpdate",
//   async (partiallyUpdatedCareMember: IPartiallyUpdated<CareMember>): Promise<CareMember> => {
//     const { data } = await careMemberService.partialUpdateCareMember(
//       partiallyUpdatedCareMember,
//     );

//     return data;
//   },
// );

export const updateCareMember = createAsyncThunk(
  "care-member/update",
  async (updatedCareMember: IUpdated<CareMemberSaveRequest>): Promise<CareMember> => {
    const { data } = await careMemberService.updateCareMember(updatedCareMember);

    return data;
  }
);

export const deleteCareMember = createAsyncThunk("care-member/delete", async (id: number) => {
  const { data } = await careMemberService.deleteCareMember(id);
  return data;
});

const initialState: StateType<CareMember> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const careMemberSlice = createSlice({
  name: "careMember",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [searchCareMembers, createCareMember, updateCareMember, deleteCareMember].forEach(
      (thunk: AsyncThunk<any, any, Record<string, never>>) => {
        builder.addCase(thunk.pending, state => {
          state.isLoading = true;
          state.isSuccess = false;
        });
        builder.addCase(thunk.rejected, (state, action) => {
          state.error = action.error;
          state.isLoading = false;
          state.isSuccess = false;
        });
      }
    );

    builder.addCase(searchCareMembers.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(createCareMember.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateCareMember.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedCareMembers = state.entities.map(careMember => {
        if (careMember.id === action.payload.id) {
          return {
            ...careMember,
            ...action.payload,
          };
        } else {
          return careMember;
        }
      });
      state.entities = updatedCareMembers;
      state.isLoading = false;
      state.isSuccess = true;
    });

    // builder.addCase(partialUpdateCareMember.fulfilled, (state, action) => {
    //   state.entity = action.payload;
    //   let updatedCareMembers = state.entities.map(careMember => {
    //     if (careMember.id === action.payload.id) {
    //       return {
    //         ...careMember,
    //         ...action.payload,
    //       };
    //     } else {
    //       return careMember;
    //     }
    //   });
    //   state.entities = updatedCareMembers;
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // });

    builder.addCase(deleteCareMember.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { StateType, IUpdated, IPartiallyUpdated } from "redux/features";

import { Group } from "types";

import { groupService } from ".";

const initialState: StateType<Group> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findAllGroups = createAsyncThunk("group/findAll", async () => {
  const { data } = await groupService.findAll();

  return data;
});

export const findGroupById = createAsyncThunk("group/findById", async (id: number) => {
  const { data } = await groupService.findById(id);

  return data;
});

export const searchGroups = createAsyncThunk("group/search", async (filters: any) => {
  const queryParams = new URLSearchParams(filters);
  const { data } = await groupService.search(queryParams);

  return data;
});

export const createGroup = createAsyncThunk("group/create", async (body: Partial<Group>) => {
  const { data } = await groupService.create(body);

  return data;
});

export const updateGroup = createAsyncThunk(
  "group/update",
  async (updatedGroup: IUpdated<Group>) => {
    const { data } = await groupService.update(updatedGroup);

    return data;
  }
);

export const partialUpdateGroup = createAsyncThunk(
  "group/partialUpdate",
  async (partiallyUpdatedGroup: IPartiallyUpdated<Group>) => {
    const { data } = await groupService.partialUpdate(partiallyUpdatedGroup);

    return data;
  }
);

export const deleteGroup = createAsyncThunk("group/delete", async (id: number) => {
  const { data } = await groupService.deleteItem(id);
  return data;
});

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [
      findAllGroups,
      findGroupById,
      searchGroups,
      createGroup,
      updateGroup,
      partialUpdateGroup,
      deleteGroup,
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

    builder.addCase(findAllGroups.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(findGroupById.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(searchGroups.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(createGroup.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateGroup.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedGroups = state.entities.map(group => {
        if (group.id === action.payload.id) {
          return {
            ...group,
            ...action.payload,
          };
        } else {
          return group;
        }
      });
      state.entities = updatedGroups;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(partialUpdateGroup.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedGroups = state.entities.map(group => {
        if (group.id === action.payload.id) {
          return {
            ...group,
            ...action.payload,
          };
        } else {
          return group;
        }
      });
      state.entities = updatedGroups;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteGroup.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

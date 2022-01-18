import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import { Group } from "types/domain";
import { StateType } from "redux/features/common";

import {
  groupService,
  IPartiallyUpdatedGroup,
  IUpdatedGroup,
} from ".";

const initialState: StateType<Group> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findGroupById = createAsyncThunk(
  "group/findById",
  async (id: number) => {
    let { data } = await groupService.getGroupById(id);
    return data;
  },
);

export const searchGroups = createAsyncThunk(
  "group/searchGroups",
  async () => {
    const { data } = await groupService.getAllGroups();

    return data;
  },
);

export const createGroup = createAsyncThunk(
  "group/createGroup",
  async (body: Partial<Group>) => {
    const { data } = await groupService.createGroup(body);

    return data;
  },
);

export const updateGroup = createAsyncThunk(
  "group/updateGroup",
  async (updatedGroup: IUpdatedGroup) => {
    const { data } = await groupService.updateGroup(updatedGroup);

    return data;
  },
);

export const partialUpdateGroup = createAsyncThunk(
  "group/partialUpdateGroup",
  async (partiallyUpdatedGroup: IPartiallyUpdatedGroup) => {
    const { data } = await groupService.partialUpdateGroup(
      partiallyUpdatedGroup,
    );

    return data;
  },
);

export const deleteGroup = createAsyncThunk(
  "group/deleteGroup",
  async (id: number) => {
    let { data } = await groupService.deleteGroup(id);
    return data;
  },
);


export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [
      findGroupById,
      searchGroups,
      createGroup,
      updateGroup,
      partialUpdateGroup,
      deleteGroup,
    ].forEach((thunk: AsyncThunk<any, any, {}>) => {
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
      let updatedGroups = state.entities.map(group => {
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
      let updatedGroups = state.entities.map(group => {
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

import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Email, EmailSaveRequest } from "types";

import { StateType } from "..";
import { IUpdated } from "../common";

import { emailService } from ".";

const initialState: StateType<Email> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const findEmailById = createAsyncThunk("email/findById", async (id: number) => {
  const { data } = await emailService.findById(id);
  return data;
});

export const findAllEmails = createAsyncThunk("email/findAll", async () => {
  const { data } = await emailService.findAll();

  return data;
});

export const searchEmails = createAsyncThunk(
  "email/search",
  async (filters: any): Promise<Email[]> => {
    const queryParams = new URLSearchParams(filters);
    const { data } = await emailService.search(queryParams);
    return data;
  }
);

export const createEmail = createAsyncThunk("email/create", async (body: EmailSaveRequest) => {
  const { data } = await emailService.create(body);
  return data;
});

export const updateEmail = createAsyncThunk(
  "email/update",
  async (updatedEmail: IUpdated<EmailSaveRequest>) => {
    const { data } = await emailService.update(updatedEmail);

    return data;
  }
);

export const deleteEmail = createAsyncThunk("email/delete", async (id: number) => {
  const { data } = await emailService.remove(id);
  return data;
});

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // https://stackoverflow.com/questions/68184008/how-to-refactor-duplicate-code-in-redux-toolkit-createasyncthunk-and-extrareduc
    [findEmailById, findAllEmails, createEmail, searchEmails, updateEmail, deleteEmail].forEach(
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

    builder.addCase(findEmailById.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(findAllEmails.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(searchEmails.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(createEmail.fulfilled, (state, action) => {
      state.entity = action.payload;
      state.entities = [...state.entities, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(updateEmail.fulfilled, (state, action) => {
      state.entity = action.payload;
      const updatedEmails = state.entities.map(email => {
        if (email.id === action.payload.id) {
          return {
            ...email,
            ...action.payload,
          };
        } else {
          return email;
        }
      });
      state.entities = updatedEmails;
      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(deleteEmail.fulfilled, (state, action) => {
      state.entity = action.payload[0];
      state.isLoading = false;
      state.isSuccess = true;
    });
  },
});

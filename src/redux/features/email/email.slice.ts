import { createSlice } from "@reduxjs/toolkit";

import { Email } from "types";

import { StateType } from "..";

const initialState: StateType<Email> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const emailSlice = createSlice({
  name: "email",
  initialState: initialState,
  reducers: {},
});

import { createSlice } from "@reduxjs/toolkit";

import { CareRole } from "types";

import { StateType } from "redux/features/common";

const initialState: StateType<CareRole> = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const roleSlice = createSlice({
  name: "role",
  initialState: {},
  reducers: {},
});

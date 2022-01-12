import { configureStore } from "@reduxjs/toolkit";
import {
  authorizationSlice,
  bestPracticeSlice,
  businessUnitSlice,
  careMemberSlice,
  chartsSlice,
  countrySlice,
  emailSlice,
  employeeSlice,
  groupSlice,
  roleSlice,
  worldOverviewSlice,
} from "../features";

export const store = configureStore({
  reducer: {
    [authorizationSlice.name]: authorizationSlice.reducer,
    [bestPracticeSlice.name]: bestPracticeSlice.reducer,
    [businessUnitSlice.name]: businessUnitSlice.reducer,
    [careMemberSlice.name]: careMemberSlice.reducer,
    [chartsSlice.name]: chartsSlice.reducer,
    [countrySlice.name]: countrySlice.reducer,
    [emailSlice.name]: emailSlice.reducer,
    [employeeSlice.name]: employeeSlice.reducer,
    [groupSlice.name]: groupSlice.reducer,
    [roleSlice.name]: roleSlice.reducer,
    [worldOverviewSlice.name]: worldOverviewSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisptatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
  authorizationSlice,
  bestPracticeSlice,
  businessUnitSlice,
  careMemberSlice,
  chartSlice,
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
    [chartSlice.name]: chartSlice.reducer,
    [countrySlice.name]: countrySlice.reducer,
    [emailSlice.name]: emailSlice.reducer,
    [employeeSlice.name]: employeeSlice.reducer,
    [groupSlice.name]: groupSlice.reducer,
    [roleSlice.name]: roleSlice.reducer,
    [worldOverviewSlice.name]: worldOverviewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => process.env.NODE_ENV !== 'production'? getDefaultMiddleware().concat(logger): getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisptatch = typeof store.dispatch;

import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  WorldOverviewCachedReports,
  NO_REPORT_CACHED,
  WorldDataReport,
  REPORT_KEY_ACTIVE_MEMBERS,
  REPORT_KEY_AUTO_OFFBOARDED_MEMBERS,
  REPORT_KEY_NEW_MEMBERS,
  REPORT_KEY_SELF_RESIGNED_MEMBERS,
  REPORT_KEY_CURRENT_MAP,
} from "types";

import {
  StateType,
  REPORT_ACTIVE_MEMBERS_ROUTE,
  REPORT_NEW_MEMBERS_ROUTE,
  REPORT_AUTO_OFFBOARDED_MEMBERS_ROUTE,
  REPORT_SELF_RESIGNED_MEMBERS_ROUTE,
} from "redux/features/common";

import { worldOverviewService } from ".";

const ACTION_FULFILLED_ACTIVE_MEMBERS = REPORT_ACTIVE_MEMBERS_ROUTE + "/fulfilled";
const ACTION_FULFILLED_AUTO_OFFBOARDED_MEMBERS =
  REPORT_AUTO_OFFBOARDED_MEMBERS_ROUTE + "/fulfilled";
const ACTION_FULFILLED_NEW_MEMBERS = REPORT_NEW_MEMBERS_ROUTE + "/fulfilled";
const ACTION_FULFILLED_SELF_RESIGNED_MEMBERS = REPORT_SELF_RESIGNED_MEMBERS_ROUTE + "/fulfilled";
const NO_ACTION_FOUND = "NO_ACTION_FOUND";

const initialState: StateType<WorldOverviewCachedReports> = {
  entities: [
    {
      reportName: REPORT_KEY_ACTIVE_MEMBERS,
      data: NO_REPORT_CACHED,
    },
    {
      reportName: REPORT_KEY_AUTO_OFFBOARDED_MEMBERS,
      data: NO_REPORT_CACHED,
    },
    {
      reportName: REPORT_KEY_NEW_MEMBERS,
      data: NO_REPORT_CACHED,
    },
    {
      reportName: REPORT_KEY_SELF_RESIGNED_MEMBERS,
      data: NO_REPORT_CACHED,
    },
    {
      reportName: REPORT_KEY_CURRENT_MAP,
      data: NO_REPORT_CACHED,
    },
  ],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};
export const fetchActiveMembersReport = createAsyncThunk(
  REPORT_ACTIVE_MEMBERS_ROUTE,
  async (): Promise<WorldDataReport> => {
    console.log("fetchActiveMembersReport Thunk");
    const { data } = await worldOverviewService.getActiveMembersMapData();
    return data;
  }
);

export const fetchNewMembersReport = createAsyncThunk(
  REPORT_NEW_MEMBERS_ROUTE,
  async (): Promise<WorldDataReport> => {
    const { data } = await worldOverviewService.getNewMembersMapData();
    return data;
  }
);

export const fetchAutoOffboardedMembersReport = createAsyncThunk(
  REPORT_AUTO_OFFBOARDED_MEMBERS_ROUTE,
  async (): Promise<WorldDataReport> => {
    const { data } = await worldOverviewService.getAutoOffboardedMembersMapData();
    return data;
  }
);

export const fetchSelfResignedMembersReport = createAsyncThunk(
  REPORT_SELF_RESIGNED_MEMBERS_ROUTE,
  async (): Promise<WorldDataReport> => {
    const { data } = await worldOverviewService.getSelfResignedMembersMapData();
    return data;
  }
);

const toCacheKey = (actionType: string): string => {
  switch (actionType) {
    case ACTION_FULFILLED_ACTIVE_MEMBERS:
      return REPORT_KEY_ACTIVE_MEMBERS;
    case ACTION_FULFILLED_AUTO_OFFBOARDED_MEMBERS:
      return REPORT_KEY_AUTO_OFFBOARDED_MEMBERS;
    case ACTION_FULFILLED_NEW_MEMBERS:
      return REPORT_KEY_NEW_MEMBERS;
    case ACTION_FULFILLED_SELF_RESIGNED_MEMBERS:
      return REPORT_KEY_SELF_RESIGNED_MEMBERS;
    default:
      return NO_ACTION_FOUND;
  }
};

export const worldOverviewSlice = createSlice({
  name: "worldOverview",
  initialState,
  reducers: {},
  extraReducers: builder => {
    [
      fetchActiveMembersReport,
      fetchNewMembersReport,
      fetchAutoOffboardedMembersReport,
      fetchSelfResignedMembersReport,
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
      builder.addCase(thunk.fulfilled, (state, action) => {
        state.entity = null;
        const updatedReports = state.entities.map(report => {
          if (
            report.reportName === toCacheKey(action.type) ||
            report.reportName === REPORT_KEY_CURRENT_MAP
          ) {
            report.data = action.payload;
          }
          console.log(report);
          return report;
        });
        state.entities = updatedReports;
        state.isLoading = false;
        state.isSuccess = true;
      });
    });
  },
});

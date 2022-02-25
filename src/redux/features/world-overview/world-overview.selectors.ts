import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "redux/app";

import { WorldOverviewCachedReports, WorldDataReport } from "types";
import {
  REPORT_KEY_ACTIVE_MEMBERS,
  REPORT_KEY_AUTO_OFFBOARDED_MEMBERS,
  REPORT_KEY_NEW_MEMBERS,
  REPORT_KEY_SELF_RESIGNED_MEMBERS,
  REPORT_KEY_CURRENT_MAP,
  NO_REPORT_CACHED,
} from "variables/app.consts";

import { StateType } from "..";

export const selectWorldOverviewCachedReportsState = (
  rootState: RootState
): StateType<WorldOverviewCachedReports> => rootState.worldOverview;

const selectAllReportsData = createSelector(
  [selectWorldOverviewCachedReportsState],
  worldOverview => worldOverview.entities
);

const findReportInCache = (
  allReports: WorldOverviewCachedReports[],
  cacheKey: string
): WorldDataReport => {
  const reportsData = allReports.find(report => report.reportName === cacheKey);
  return reportsData ? reportsData.data : NO_REPORT_CACHED;
};

export const selectActiveMembersReportsData = createSelector([selectAllReportsData], allReports => {
  return findReportInCache(allReports, REPORT_KEY_ACTIVE_MEMBERS);
});

export const selectNewMembersReportsData = createSelector([selectAllReportsData], allReports => {
  return findReportInCache(allReports, REPORT_KEY_NEW_MEMBERS);
});

export const selectSelfResignedMembersReportsData = createSelector(
  [selectAllReportsData],
  allReports => {
    return findReportInCache(allReports, REPORT_KEY_SELF_RESIGNED_MEMBERS);
  }
);

export const selectAutoOffboardedMembersReportsData = createSelector(
  [selectAllReportsData],
  allReports => {
    return findReportInCache(allReports, REPORT_KEY_AUTO_OFFBOARDED_MEMBERS);
  }
);

export const selectCurrentMapData = createSelector([selectAllReportsData], allReports => {
  return findReportInCache(allReports, REPORT_KEY_CURRENT_MAP);
});

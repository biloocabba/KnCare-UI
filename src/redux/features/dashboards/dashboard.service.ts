import { ApiResponse, Chart, TurnoverChart } from "types";

import {
  handleGetApiRequestInternal,
  REPORT_MEMBERS_BY_AGE_ROUTE,
  REPORT_MEMBERS_BY_BUSINESS_UNITS_ROUTE,
  REPORT_MEMBERS_BY_GENDER_ROUTE,
  REPORT_MEMBERS_BY_ROLE_ROUTE,
  REPORT_MEMBERS_BY_SENIORITY_ROUTE,
  REPORT_MEMBERS_TURNOVER_ROUTE,
  REPORT_MEMBERS_WORKFORCE_ROUTE,
} from "..";

export const getTurnoverReport = async (): Promise<ApiResponse<TurnoverChart[]>> => {
  return await handleGetApiRequestInternal(`${REPORT_MEMBERS_TURNOVER_ROUTE}`);
};

const getWorkforceReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_WORKFORCE_ROUTE}`);
};

const getDistributionByGenderReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_BY_GENDER_ROUTE}`);
};

const getDistributionByRoleReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_BY_ROLE_ROUTE}`);
};

const getDistributionByBusinessUnitReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_BY_BUSINESS_UNITS_ROUTE}`);
};

const getDistributionByAgeReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_BY_AGE_ROUTE}`);
};

const getDistributionBySeniorityReport = async (): Promise<ApiResponse<Chart[]>> => {
  return handleGetApiRequestInternal(`${REPORT_MEMBERS_BY_SENIORITY_ROUTE}`);
};

export const dashboardService = {
  getTurnoverReport,
  getWorkforceReport,
  getDistributionByAgeReport,
  getDistributionByBusinessUnitReport,
  getDistributionByGenderReport,
  getDistributionByRoleReport,
  getDistributionBySeniorityReport,
};

/*
  export const REPORT_MEMBERS_TURNOVER_ROUTE = "/report/members/turnover";
  export const REPORT_MEMBERS_WORKFORCE_ROUTE = "/report/members/workforce";
  export const REPORT_MEMBERS_BY_GENDER_ROUTE = "/report/members/gender";
  export const REPORT_MEMBERS_BY_BUSINESS_UNITS_ROUTE = "/report/members/business-unit";
  export const REPORT_MEMBERS_BY_ROLE_ROUTE = "/report/members/role";
  export const REPORT_MEMBERS_BY_AGE_ROUTE = "/report/members/age";
  export const REPORT_MEMBERS_BY_SENIORITY_ROUTE = "/report/members/seniority";
  */

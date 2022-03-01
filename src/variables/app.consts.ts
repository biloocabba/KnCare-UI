import { WorldDataReport } from "types";

export const CREATE_ENTITY_ID = -1; //on create entity id will be created on backend and therefore is missing here
export const GENERIC_ERROR_CODE = -1024;
export const NO_FILTER = -1024;

export const SELECT_ALL = { value: `${NO_FILTER}`, label: "ALL" };
export const SELECT_ALL_IDS = (ids: number[]) => {
  return { value: `${ids}`, label: "ALL" };
};
export const DATE_FILTER_FORMAT = "DD/MM/YYYY";

export const defaultBestPracticesTags = [
  { value: "Collaboration", label: "Collaboration" },
  { value: "Reflection", label: "Reflection" },
  { value: "Learning", label: "Learning" },
  { value: "ServiceActions", label: "Service Actions" },
  { value: "SocialConnectedness", label: "Social Connectedness" },
  { value: "Huddle", label: "Huddle" },
];

export const bestPracticeRatings = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

export const NO_REPORT_CACHED: WorldDataReport = { NONE: 0 };
export const REPORT_KEY_ACTIVE_MEMBERS = "ActiveMembers";
export const REPORT_KEY_NEW_MEMBERS = "NewMembers";
export const REPORT_KEY_SELF_RESIGNED_MEMBERS = "SelfResignedMembers";
export const REPORT_KEY_AUTO_OFFBOARDED_MEMBERS = "AutoOffboardedMembers";
export const REPORT_KEY_CURRENT_MAP = "REPORT_KEY_CURRENT_MAP";

import { WorldDataReport } from "types";

export const CREATE_ENTITY_ID = -1; //on create entity id will be created on backend and therefore is missing here
export const GENERIC_ERROR_CODE = -1024;

export const defaultBestPracticesTags = [
  { value: "Collaboration", label: "Collaboration" },
  { value: "Reflection", label: "Reflection" },
  { value: "Learning +", label: "Learning" },
  { value: "ServiceActions", label: "Service Actions" },
  { value: "SocialConnectedness", label: "Social Connectedness" },
  { value: "Huddle", label: "Huddle" },
];

export const NO_REPORT_CACHED: WorldDataReport = { NONE: 0 };
export const REPORT_KEY_ACTIVE_MEMBERS = "ActiveMembers";
export const REPORT_KEY_NEW_MEMBERS = "NewMembers";
export const REPORT_KEY_SELF_RESIGNED_MEMBERS = "SelfResignedMembers";
export const REPORT_KEY_AUTO_OFFBOARDED_MEMBERS = "AutoOffboardedMembers";
export const REPORT_KEY_CURRENT_MAP = "REPORT_KEY_CURRENT_MAP";

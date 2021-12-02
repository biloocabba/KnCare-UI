import { combineReducers } from "redux";
import employeesReducer from "./employeeReducer";
import careMemberReducer from "./careMemberReducer.js";
import groupReducer from "./groupReducer.js";
import emailDraftReducer from "./emailDraftReducer";
import bestPracticeReducer from "./bestPracticeReducer";
import mapKpisReducer from "./mapKpiReducer.js";
import authReducer from "./auth";
import messageReducer from "./messageReducer";
import categoryReducer from "./categoryReducer";

export const rootReducer = combineReducers({
  employees: employeesReducer,
  careMembers: careMemberReducer,
  groups: groupReducer,
  emailDrafts: emailDraftReducer,
  bestPractices: bestPracticeReducer,
  mapKpis: mapKpisReducer,
  message: messageReducer,
  auth: authReducer,
  categories: categoryReducer,
});

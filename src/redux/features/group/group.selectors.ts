import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/app";

export const selectGroups = createSelector([(state:RootState) => state.group.groups], data => data);

export const selectGroupById = (id:number) =>
  createSelector([selectGroups], groupsdata => groupsdata.find(group => group.id === id));

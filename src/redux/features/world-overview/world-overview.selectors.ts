import { createSelector } from "@reduxjs/toolkit";

import { WorldOverview } from "types";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

export const selectWorldOverviewState = (rootState: RootState): StateType<WorldOverview> =>
  rootState.worldOverview;

export const selectAllWorldOverviewsData = createSelector(
  [selectWorldOverviewState],
  worldOverviewState => worldOverviewState.entities
);

export const selectWorldOverviewById = (id: number) =>
  createSelector(
    [selectAllWorldOverviewsData], //array of input selectors
    worldOverviews => worldOverviews.find(worldOverview => worldOverview.id === id) //arg
  );

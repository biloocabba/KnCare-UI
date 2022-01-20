import { createSelector } from "@reduxjs/toolkit";

import { BestPractice } from "types";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

const ALL = { value: "", label: "ALL" };

export const selectBestPracticeState = (rootState: RootState): StateType<BestPractice> =>
  rootState.bestPractice;

export const selectAllBestPracticesData = createSelector(
  [selectBestPracticeState],
  bestPracticeState => bestPracticeState.entities
);

export const selectBestPracticeById = (id: number) =>
  createSelector(
    [selectAllBestPracticesData], //array of input selectors
    bestPractices => bestPractices.find(bestPractice => bestPractice.id === id) //arg
  );

export const selectAllBestPracticeDataAsSelectOptions = createSelector(
  [selectAllBestPracticesData],
  bestPractices => {
    const bestPracticesOptions = bestPractices.map(bestPractice => {
      return { value: bestPractice.id, label: bestPractice.title };
    });
    return [ALL, ...bestPracticesOptions];
  }
);

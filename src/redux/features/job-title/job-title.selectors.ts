import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "redux/app";
import { StateType } from "redux/features";

import { SelectOption, JobTitle } from "types";
import { SELECT_ALL } from "variables/app.consts";

export const selectJobTitleState = (rootState: RootState): StateType<JobTitle> =>
  rootState.jobTitle;

export const selectAllJobTitleData = createSelector(
  [selectJobTitleState],
  jobTitleState => jobTitleState.entities
);

export const selectJobTitleById = (id: number) =>
  createSelector(
    [selectAllJobTitleData], //array of input selectors
    jobTitles => jobTitles.find(jobTitle => jobTitle.id === id) //arg
  );

export const selectAllJobTitlesDataAsSelectOptions = createSelector(
  [selectAllJobTitleData],
  jobTitles => {
    const jobTitleOptions: SelectOption[] = jobTitles.map(jobTitle => {
      return { value: `${jobTitle.id}`, label: jobTitle.name };
    });
    return [SELECT_ALL, ...jobTitleOptions];
  }
);

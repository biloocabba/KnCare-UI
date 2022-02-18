import { createSelector } from "@reduxjs/toolkit";

import { Email } from "types";

import { RootState } from "redux/app";

import { StateType } from "..";

export const selectEmailState = (rootState: RootState): StateType<Email> => rootState.email;

export const selectAllEmailsData = createSelector(
  [selectEmailState],
  emailState => emailState.entities
);

export const selectEmailById = (id: number) =>
  createSelector(
    [selectAllEmailsData], //array of input selectors
    emails => emails.find(email => email.id === id) //arg
  );

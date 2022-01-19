import { createSelector } from "@reduxjs/toolkit";

import { CareMember } from "types/domain";

import { RootState } from "redux/app";
import { StateType } from "redux/features/common";

export const selectCareMemberState = (rootState: RootState): StateType<CareMember> =>
  rootState.careMember;

export const selectAllCareMembersData = createSelector(
  [selectCareMemberState],
  careMemberState => careMemberState.entities
);

export const selectCareMemberById = (id: number) =>
  createSelector([selectAllCareMembersData], careMember =>
    careMember.find(careMember => careMember.id === id)
  );

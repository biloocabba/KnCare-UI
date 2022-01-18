import { SerializedError } from "@reduxjs/toolkit";
import { Group } from "types/domain";

export type GroupStateType = {
  groups: Group[];
  group: Group | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: SerializedError;
};

export interface IUpdatedGroup {
  id: number;
  body: Group;
}

export interface IPartiallyUpdatedGroup {
  id: number;
  body: Partial<Group>;
}

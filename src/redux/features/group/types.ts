import { Group } from "types/types";

export type GroupStateType = {
  groups: Group[];
  group: Group | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
};

export interface IUpdatedGroup {
  id: number;
  body: Group;
}

export interface IPartiallyUpdatedGroup {
  id: number;
  body: Partial<Group>;
}

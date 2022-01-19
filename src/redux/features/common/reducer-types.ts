import { SerializedError } from "@reduxjs/toolkit";

import { Domain } from "types";

export type StateType<T extends Domain> = {
  entities: T[];
  entity: T | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: SerializedError;
};

export interface IUpdated<T> {
  id: number;
  body: T;
}

export interface IPartiallyUpdated<T> {
  id: number;
  body: Partial<T>;
}

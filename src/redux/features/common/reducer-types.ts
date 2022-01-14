import { SerializedError } from "@reduxjs/toolkit";
import { Domain } from "types/types";

export type StateType<T extends Domain> = {
    entities: T[];
    entity: T | null;
    isLoading: boolean;
    isSuccess: boolean;
    error: SerializedError;
  };
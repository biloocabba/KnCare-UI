import { httpCommon } from "..";
import { WORLD_OVERVIEW_ROUTE } from "../common";

const getAll = () => {
  return httpCommon.get(`${WORLD_OVERVIEW_ROUTE}`);
};

export const worldOverviewService = {
  getAll,
};

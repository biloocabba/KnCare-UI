import { httpCommon } from "..";
import { WORLD_OVERVIEW_ROUTE } from "../common";

const findAll = () => {
  return httpCommon.get(`${WORLD_OVERVIEW_ROUTE}`);
};

export const worldOverviewService = {
  findAll,
};

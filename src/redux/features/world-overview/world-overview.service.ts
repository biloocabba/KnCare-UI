import { httpCommon } from "..";

const listWorldOverview = () => {
  return httpCommon.get(`/worldOverview`);
};

export const worldOverviewService = {
  listWorldOverview,
};

import { httpCommon } from "..";

const listCharts = () => {
  return httpCommon.get(`/charts`);
};

export const chartService = {
  listCharts,
};

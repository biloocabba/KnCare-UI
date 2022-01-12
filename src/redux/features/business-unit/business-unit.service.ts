import { httpCommon } from "..";

const listBusinessUnits = () => {
  return httpCommon.get(`/businessUnits`);
};

export const businessUnitService = {
  listBusinessUnits,
};

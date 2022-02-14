import { httpCommon } from "..";

const listBusinessUnits = () => {
  return httpCommon.get(`/business-unit`);
};

export const businessUnitService = {
  listBusinessUnits,
};

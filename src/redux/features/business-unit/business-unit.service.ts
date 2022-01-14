import { httpCommon } from "..";

const listBusinessUnits = () => {
  return httpCommon.get(`/business-units`);
};

export const businessUnitService = {
  listBusinessUnits,
};

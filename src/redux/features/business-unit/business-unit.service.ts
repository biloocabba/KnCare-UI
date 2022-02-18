import { AxiosResponse } from "axios";

import { BusinessUnit } from "types";

import { httpCommon } from "..";

const findAll = (): Promise<AxiosResponse<BusinessUnit[]>> => {
  return httpCommon.get(`/business-unit`);
};

export const businessUnitService = {
  findAll,
};

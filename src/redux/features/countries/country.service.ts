import { AxiosResponse } from "axios";

import { Country } from "types";

import { httpCommon } from "..";

const findAll = (): Promise<AxiosResponse<Country[]>> => {
  return httpCommon.get(`/country`);
};

export const countryService = {
  findAll,
};

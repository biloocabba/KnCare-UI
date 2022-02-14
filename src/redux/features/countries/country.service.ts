import { httpCommon } from "..";

const listCountries = () => {
  return httpCommon.get(`/country`);
};

export const countryService = {
  listCountries,
};

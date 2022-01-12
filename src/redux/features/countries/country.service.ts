import { httpCommon } from "..";

const listCountries = () => {
  return httpCommon.get(`/countries`);
};

export const countryService = {
  listCountries,
};

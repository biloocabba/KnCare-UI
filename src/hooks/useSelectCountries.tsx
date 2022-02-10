import { Principal } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUser, selectAllCountryDataAsSelectOptions } from "redux/features";

export const useSelectCountries = () => {
  const { countryCode3, role } = useAppSelector(selectLoggedUser) as Principal;
  const countries = useAppSelector(selectAllCountryDataAsSelectOptions(countryCode3, role));
  return { countries };
};

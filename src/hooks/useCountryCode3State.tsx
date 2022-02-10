import { useState } from "react";

import { Principal, Role } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUser } from "redux/features";

export const useCountryCode3State = () => {
  const { authRole, countryCode3 } = useAppSelector(selectLoggedUser) as Principal;
  const findUserRole = () => {
    // check if user is a regional manager
    if (authRole !== Role.RegionalManager) {
      // if not, set the country to the user's country
      return countryCode3;
    } else {
      // if so, return empty string, then regional manager can select a country filter by themselves
      return "";
    }
  };
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(findUserRole);

  return { searchCountryIsoCode3, setSearchCountryIsoCode3 };
};

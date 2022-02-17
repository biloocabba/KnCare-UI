import { CareMemberQueryFilters, CareMember, BusinessUnit, Country } from "types";

export const filterCareMembers = (
  filters: CareMemberQueryFilters,
  careMembersData: CareMember[],
  businessUnits: BusinessUnit[],
  countries: Country[]
): CareMember[] => {
  const result: CareMember[] = careMembersData.filter(careMember => {
    return (
      matchFirstName(filters, careMember) &&
      matchBusinessUnit(filters, careMember, businessUnits) &&
      matchCountryId(filters, careMember, countries)
    );
  });

  return result;
};

export const entitySearch = (
  filters: CareMemberQueryFilters,
  careMembers: CareMember[],
  businessUnits: BusinessUnit[],
  countries: Country[]
) => {
  const filteredEntities = filterCareMembers(filters, careMembers, businessUnits, countries);

  return filteredEntities;
};

export const matchBusinessUnit = (
  filters: CareMemberQueryFilters,
  entity: CareMember,
  businessUnits: BusinessUnit[]
) => {
  if (filters && filters.businessUnitId) {
    const bUnitId: number = filters.businessUnitId;

    const businessUnitObj = businessUnits.find(bUnit => bUnit.id === bUnitId);

    if (businessUnitObj && entity.businessUnit !== businessUnitObj.name) {
      return false;
    }
  }
  return true;
};

export const matchCountryId = (
  filters: CareMemberQueryFilters,
  entity: CareMember,
  countries: Country[]
) => {
  if (filters && filters.countryIso3) {
    const countryCode3 = filters.countryIso3;

    const countryObj = countries.find(country => country.code3 === countryCode3);
    if (countryObj && entity.country !== countryObj.name) {
      return false;
    }
  }
  return true;
};

export const matchFirstName = (filters: CareMemberQueryFilters, entity: CareMember) => {
  if (filters && filters.lastName && entity.lastName !== filters.lastName) {
    return false;
  }
  return true;
};

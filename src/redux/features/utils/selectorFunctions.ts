import moment from "moment";

import { CareMemberQueryFilters, CareMember, BusinessUnit, Country, Group, CareRole } from "types";

export const filterCareMembers = (
  filters: CareMemberQueryFilters,
  careMembersData: CareMember[],
  businessUnits: BusinessUnit[],
  countries: Country[],
  groups: Group[],
  roles: CareRole[]
): CareMember[] => {
  const result: CareMember[] = careMembersData.filter(careMember => {
    return (
      matchLastName(filters, careMember) &&
      matchBusinessUnit(filters, careMember, businessUnits) &&
      matchCountryId(filters, careMember, countries) &&
      matchOnboardingBetween(filters, careMember) &&
      matchOffboardingBetween(filters, careMember) &&
      matchGroupId(filters, careMember, groups) &&
      matchCareRoleId(filters, careMember, roles)
    );
  });

  return result;
};

export const entitySearch = (
  filters: CareMemberQueryFilters,
  careMembers: CareMember[],
  businessUnits: BusinessUnit[],
  countries: Country[],
  groups: Group[],
  roles: CareRole[]
) => {
  const filteredEntities = filterCareMembers(
    filters,
    careMembers,
    businessUnits,
    countries,
    groups,
    roles
  );

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

export const matchGroupId = (
  filters: CareMemberQueryFilters,
  entity: CareMember,
  groups: Group[]
) => {
  if (filters && filters.groupId) {
    // find obj from db based on filter
    const groupObj = groups.find(group => group.id === filters.groupId);

    // check if groupIds on careMember doesn't include the groupId if group is found
    if (groupObj && !entity.groupIds?.includes(groupObj.id)) {
      return false;
    }
  }
  return true;
};

export const matchCareRoleId = (
  filters: CareMemberQueryFilters,
  entity: CareMember,
  roles: CareRole[]
) => {
  if (filters && filters.roleId) {
    // find obj from db based on filter
    const roleObj = roles.find(role => role.id === filters.roleId);

    // check if obj exists --> check if careMember roleId doesn't equal to roleObj id
    if (roleObj && entity.roleId !== roleObj.id) {
      return false;
    }
  }
  return true;
};

export const matchLastName = (filters: CareMemberQueryFilters, entity: CareMember) => {
  if (filters && filters.lastName && entity.lastName !== filters.lastName) {
    return false;
  }
  return true;
};

const matchOnboardingBetween = (filters: CareMemberQueryFilters, entity: CareMember) => {
  const onBoardingDateFrom = filters.onboardDateFrom;
  const onBoardingDateTo = filters.onboardDateTo;

  if (filters && onBoardingDateFrom && onBoardingDateTo) {
    const onBoardingDate = moment(entity.onboardingDate).utc();

    if (onBoardingDate.isBetween(onBoardingDateFrom, onBoardingDateTo)) {
      return true;
    }
    return false;
  }
  return true;
};

const matchOffboardingBetween = (filters: CareMemberQueryFilters, entity: CareMember) => {
  const offBoardingDateFrom = filters.offboardingDateFrom;
  const offBoardingDateTo = filters.offboardingDateTo;

  if (filters && offBoardingDateFrom && offBoardingDateTo) {
    const offBoardingDate = moment(entity.offboardingDate).utc();

    if (offBoardingDate.isBetween(offBoardingDateFrom, offBoardingDateTo)) {
      return true;
    }
    return false;
  }
  return true;
};

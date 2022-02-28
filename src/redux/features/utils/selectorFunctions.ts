import moment from "moment";

import { CareMemberQueryFilters, CareMember, BusinessUnit, Country, Group, CareRole } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

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
      matchCountryIso3(filters, careMember, countries) &&
      matchOnboardingBetween(filters, careMember) &&
      matchOffboardingBetween(filters, careMember) &&
      matchGroupId(filters, careMember, groups) &&
      matchCareRoleId(filters, careMember, roles) &&
      doNotMatchMembers(filters, careMember)
    );
  });

  // console.log(result);
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

export const matchCountryIso3 = (
  filters: CareMemberQueryFilters,
  entity: CareMember,
  countries: Country[]
) => {
  if (filters && filters.countryIso3) {
    const countryCode3 = filters.countryIso3;
    const countryObj = countries.find(country => country.code3 === countryCode3);
    if (countryObj && entity.office.countryiso3 !== countryObj.code3) {
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
    // console.log(filters, entity, entity.groups?.includes(filters.groupId));

    // find obj from db based on filter
    const groupObj = groups.find(group => group.id === filters.groupId);

    // check if groupIds on careMember doesn't include the groupId if group is found
    if (groupObj && !entity.groups?.includes(groupObj.id)) {
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
  if (filters && filters.onboardDateFrom && filters.onboardDateTo) {
    const onBoardingDateFrom = moment(filters.onboardDateFrom, DATE_FILTER_FORMAT).local();
    const onBoardingDateTo = moment(filters.onboardDateTo, DATE_FILTER_FORMAT).local();

    if (filters && onBoardingDateFrom && onBoardingDateTo) {
      const onBoardingDate = moment(entity.onboardingDate, DATE_FILTER_FORMAT).local();

      if (onBoardingDate.isBetween(onBoardingDateFrom, onBoardingDateTo, undefined, "[]")) {
        return true;
      }
      return false;
    }
    return true;
  }
  return true;
};

const matchOffboardingBetween = (filters: CareMemberQueryFilters, entity: CareMember) => {
  if (filters && filters.offboardingDateFrom && filters.offboardingDateTo) {
    const offBoardingDateFrom = moment(filters.offboardingDateFrom, DATE_FILTER_FORMAT).local();
    const offBoardingDateTo = moment(filters.offboardingDateTo, DATE_FILTER_FORMAT).local();

    if (filters && offBoardingDateFrom && offBoardingDateTo) {
      const offBoardingDate = moment(entity.offboardingDate, DATE_FILTER_FORMAT).local();

      if (offBoardingDate.isBetween(offBoardingDateFrom, offBoardingDateTo, undefined, "[]")) {
        return true;
      }
      return false;
    }
    return true;
  }
  return true;
};

const doNotMatchMembers = (filters: CareMemberQueryFilters, entity: CareMember) => {
  if (filters && filters.members) {
    if (filters.members.includes(entity.id)) {
      return false;
    }
  }
  return true;
};

import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectLoggedUserDefaultCountryAsSelection,
  selectLoggedUserRole,
} from "redux/features";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { CareMemberQueryFilters, Permission, Role, SelectOption } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

interface SearchCareMemberFilterPanelProps {
  filters: CareMemberQueryFilters;
  setFilters: (filters: CareMemberQueryFilters) => void;
}

export const SearchCareMemberFilterPanel = (props: SearchCareMemberFilterPanelProps) => {
  const userRole = useAppSelector(selectLoggedUserRole);

  const businessUnits: SelectOption[] = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries: SelectOption[] = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const roles: SelectOption[] = useAppSelector(selectAllRolesDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const [searchLastName, setSearchLastName] = useState("");
  const [searchOnBoardDateFrom, setSearchOnBoardDateFrom] = useState<Moment | undefined>(undefined);
  const [searchOnBoardDateTo, setSearchOnBoardDateTo] = useState<Moment | undefined>(undefined);
  const [searchOffboardingDateFrom, setSearchOffboardingDateFrom] = useState<Moment | undefined>(
    undefined
  );
  const [searchOffboardingDateTo, setSearchOffboardingDateTo] = useState<Moment | undefined>(
    undefined
  );

  const [businessUnitSelected, setBusinessUnitSelected] = useState<SelectOption | null>();
  const [groupSelected, setGroupSelected] = useState<SelectOption | null>();
  const [roleSelected, setRoleSelected] = useState<SelectOption | null>();
  const [countrySelected, setCountrySelected] = useState<SelectOption | null>(
    useAppSelector(selectLoggedUserDefaultCountryAsSelection)
  );

  const resetFilters = () => {
    setSearchLastName("");
    setSearchOnBoardDateFrom(undefined);
    setSearchOnBoardDateTo(undefined);
    setSearchOffboardingDateFrom(undefined);
    setSearchOffboardingDateTo(undefined);
    setBusinessUnitSelected(null);
    setGroupSelected(null);
    setRoleSelected(null);
    if (userRole === Role.RegionalManager) {
      setCountrySelected(null);
    }
  };

  const findByAllParameters = (): void => {
    const filters = parametersToFilter();
    props.setFilters(filters);
  };

  const parametersToFilter = (): CareMemberQueryFilters => {
    return Object.assign(
      {},
      searchLastName && searchLastName !== "" ? { lastName: searchLastName } : null,
      groupSelected ? { groupId: parseInt(groupSelected.value) } : null,
      roleSelected ? { roleId: parseInt(roleSelected.value) } : null,
      businessUnitSelected ? { businessUnitId: parseInt(businessUnitSelected.value) } : null,
      countrySelected && countrySelected.value !== ""
        ? { countryIso3: countrySelected.value }
        : null,
      searchOnBoardDateFrom
        ? { onboardDateFrom: searchOnBoardDateFrom.format(DATE_FILTER_FORMAT) }
        : null,
      searchOnBoardDateTo
        ? { onboardDateTo: searchOnBoardDateTo.format(DATE_FILTER_FORMAT) }
        : null,
      searchOffboardingDateFrom
        ? { offboardingDateFrom: searchOffboardingDateFrom.format(DATE_FILTER_FORMAT) }
        : null,
      searchOffboardingDateTo
        ? { offboardingDateTo: searchOffboardingDateTo.format(DATE_FILTER_FORMAT) }
        : null
    );
  };

  return (
    <FilterPanel
      title="Search Care Members"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="3">
          <SelectField
            id="select-role"
            label="Role"
            options={roles}
            value={roleSelected}
            onChange={item => {
              setRoleSelected(item as SelectOption);
            }}
          />
        </Col>
        <Col md="2">
          <SelectField
            id="select-businessUnits"
            label="Business Unit"
            value={businessUnitSelected}
            options={businessUnits}
            onChange={item => {
              setBusinessUnitSelected(item as SelectOption);
            }}
          />
        </Col>
        <WithAuthorization requires={Permission.Employee_country_all}>
          <Col md="3">
            <SelectField
              id="select-country"
              label="Country"
              value={countrySelected}
              options={countries}
              onChange={item => {
                setCountrySelected(item as SelectOption);
              }}
            />
          </Col>
        </WithAuthorization>

        <Col md="3">
          <SelectField
            id="select-group"
            label="Group"
            value={groupSelected}
            options={groups}
            onChange={item => {
              setGroupSelected(item as SelectOption);
            }}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-last-name"
            label="Last name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchLastName}
            placeholder="Last Name"
            type="text"
            onChange={e => {
              setSearchLastName(e.currentTarget.value);
            }}
          />
        </Col>
        <Col md="2">
          <DateField
            id="date-onboarding-from"
            inputProps={{
              placeholder: "From",
            }}
            value={searchOnBoardDateFrom}
            setValue={setSearchOnBoardDateFrom}
            label="Onboarding from"
          />
        </Col>
        <Col md="2">
          <DateField
            id="date-onboarding-to"
            inputProps={{
              placeholder: "To",
            }}
            value={searchOnBoardDateTo}
            setValue={setSearchOnBoardDateTo}
            label="Onboarding to"
          />
        </Col>
        <Col md="2">
          <DateField
            id="date-offboarded-from"
            inputProps={{
              placeholder: "From",
            }}
            label="Offboarded From"
            value={searchOffboardingDateFrom}
            setValue={setSearchOffboardingDateFrom}
          />
        </Col>
        <Col md="2">
          <DateField
            id="date-offboarded-to"
            inputProps={{
              placeholder: "To",
            }}
            label="Offboarded To"
            value={searchOffboardingDateTo}
            setValue={setSearchOffboardingDateTo}
          />
        </Col>
      </Row>
    </FilterPanel>
  );
};

import { useState } from "react";

import { Col } from "reactstrap";

import moment from "moment";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { CareMemberQueryFilters, Permission, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectLoggedUserDefaultCountry,
} from "redux/features";

interface SearchCareMemberFilterPanelProps {
  filters: CareMemberQueryFilters;
  setFilters: (filters: CareMemberQueryFilters) => void;
}

export const SearchCareMemberFilterPanel = (props: SearchCareMemberFilterPanelProps) => {
  const businessUnits: SelectOption[] = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries: SelectOption[] = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const roles: SelectOption[] = useAppSelector(selectAllRolesDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const [searchRoleId, setSearchRoleId] = useState<number>();
  const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  const [searchGroupId, setSearchGroupId] = useState<number>();
  const [searchLastName, setSearchLastName] = useState("");
  const [searchOnBoardDateFrom, setSearchOnBoardDateFrom] = useState<string>("");
  const [searchOnBoardDateTo, setSearchOnBoardDateTo] = useState<string>("");
  const [searchOffboardingDateFrom, setSearchOffboardingDateFrom] = useState<string>("");
  const [searchOffboardingDateTo, setSearchOffboardingDateTo] = useState<string>("");
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
    useAppSelector(selectLoggedUserDefaultCountry)
  );

  const findByAllParameters = () => {
    const filters: CareMemberQueryFilters = {
      businessUnitId: searchBusinessUnitId,
      countryIso3: searchCountryIsoCode3,
      roleId: searchRoleId,
      groupId: searchGroupId,
      lastName: searchLastName,
      onboardDateFrom: searchOnBoardDateFrom,
      onboardDateTo: searchOnBoardDateTo,
      offboardingDateFrom: searchOffboardingDateFrom,
      offboardingDateTo: searchOffboardingDateTo,
    };
    props.setFilters(filters);
  };

  return (
    <FilterPanel title="Search Care Members" findByAllParameters={findByAllParameters}>
      <Col md="3">
        <SelectField
          id="select-role"
          label="Role"
          options={roles}
          onChange={item => {
            const { value } = item as SelectOption;
            const id: number = parseInt(value);
            setSearchRoleId(id);
          }}
        />
      </Col>
      <Col md="2">
        <SelectField
          id="select-businessUnits"
          label="Business Unit"
          options={businessUnits}
          onChange={item => {
            const { value } = item as SelectOption;
            const id: number = parseInt(value);
            setSearchBusinessUnitId(id);
          }}
        />
      </Col>
      <WithAuthorization requires={Permission.Employee_country_all}>
        <Col md="3">
          <SelectField
            id="select-country"
            label="Country"
            options={countries}
            onChange={item => {
              const { value } = item as SelectOption;
              setSearchCountryIsoCode3(value);
            }}
          />
        </Col>
      </WithAuthorization>

      <Col md="3">
        <SelectField
          id="select-group"
          label="Group"
          options={groups}
          onChange={item => {
            const { value } = item as SelectOption;
            const id: number = parseInt(value);
            setSearchGroupId(id);
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
          label="Onboarding from"
          onChange={dateAsMoment => setSearchOnBoardDateFrom(moment(dateAsMoment).toLocaleString())}
        />
      </Col>
      <Col md="2">
        <DateField
          id="date-onboarding-to"
          inputProps={{
            placeholder: "To",
          }}
          label="Onboarding to"
          onChange={dateAsMoment => setSearchOnBoardDateTo(moment(dateAsMoment).toLocaleString())}
        />
      </Col>
      <Col md="2">
        <DateField
          id="date-offboarded-from"
          inputProps={{
            placeholder: "From",
          }}
          label="Offboarded From"
          onChange={dateAsMoment =>
            setSearchOffboardingDateFrom(moment(dateAsMoment).toLocaleString())
          }
        />
      </Col>
      <Col md="2">
        <DateField
          id="date-offboarded-to"
          inputProps={{
            placeholder: "To",
          }}
          label="Offboarded To"
          onChange={dateAsMoment =>
            setSearchOffboardingDateTo(moment(dateAsMoment).toLocaleString())
          }
        />
      </Col>
    </FilterPanel>
  );
};

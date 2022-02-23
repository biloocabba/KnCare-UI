import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectLoggedUserDefaultCountry,
} from "redux/features";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { CareMemberQueryFilters, formatMomentAsDD_MM_YYYY, Permission, SelectOption } from "types";

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
  const [searchLastName, setSearchLastName] = useState("");

  const [searchOnBoardDateFrom, setSearchOnBoardDateFrom] = useState<Moment | undefined>(undefined);
  const [searchOnBoardDateTo, setSearchOnBoardDateTo] = useState<Moment | undefined>(undefined);
  const [searchOffboardingDateFrom, setSearchOffboardingDateFrom] = useState<Moment | undefined>(
    undefined
  );
  const [searchOffboardingDateTo, setSearchOffboardingDateTo] = useState<Moment | undefined>(
    undefined
  );

  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
    useAppSelector(selectLoggedUserDefaultCountry)
  );

  const [groupSelected, setGroupSelected] = useState<SelectOption | null>();

  const resetFilters = () => {
    setSearchRoleId(undefined);
    setSearchBusinessUnitId(undefined);
    setSearchLastName("");
    setSearchOnBoardDateFrom(undefined);
    setSearchOnBoardDateTo(undefined);
    setSearchOffboardingDateFrom(undefined);
    setSearchOffboardingDateTo(undefined);
    setGroupSelected(null);
  };

  const findByAllParameters = () => {
    const filters: CareMemberQueryFilters = {
      businessUnitId: searchBusinessUnitId,
      countryIso3: searchCountryIsoCode3,
      roleId: searchRoleId,
      // groupId: groupSelected ?parseInt(groupSelected.value)  : NO_FILTER,
      lastName: searchLastName,
      onboardDateFrom: formatMomentAsDD_MM_YYYY(searchOnBoardDateFrom),
      onboardDateTo: formatMomentAsDD_MM_YYYY(searchOnBoardDateTo),
      offboardingDateFrom: formatMomentAsDD_MM_YYYY(searchOffboardingDateFrom),
      offboardingDateTo: formatMomentAsDD_MM_YYYY(searchOffboardingDateTo),
    };

    //@todo include in object only filters!= blank or undefined
    if (groupSelected) {
      filters.groupId = parseInt(groupSelected.value);
    }

    console.log(filters);
    props.setFilters(filters);
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
            value={groupSelected}
            options={groups}
            onChange={item => {
              const { value, label } = item as SelectOption;
              // const id: number = parseInt(value);
              // setSearchGroupId(id);
              // setGroupValue({ label, value });
              setGroupSelected({ label, value });
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
            // onChange={dateAsMoment => setSearchOnBoardDateFrom(moment(dateAsMoment).toLocaleString())}
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
            // onChange={dateAsMoment => setSearchOnBoardDateTo(moment(dateAsMoment).toLocaleString())}
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

            // onChange={dateAsMoment =>
            //   setSearchOffboardingDateFrom(moment(dateAsMoment).toLocaleString())
            // }
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
            // onChange={dateAsMoment =>
            //   setSearchOffboardingDateTo(moment(dateAsMoment).toLocaleString())
            // }
          />
        </Col>
      </Row>
    </FilterPanel>
  );
};

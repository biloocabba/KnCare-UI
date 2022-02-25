import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountryAsSelection, selectLoggedUserRole } from "redux/features";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmployeeQueryFilters, Permission, Role, SelectOption } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

interface onSearchEmployeesFunction {
  (employeeSearchRequest: EmployeeQueryFilters): void;
}

interface SearchEmployeesFilterPanelProps {
  countries: SelectOption[];
  businessUnits: SelectOption[];
  // jobTitle: SelectOption[];
  onSearchEmployees: onSearchEmployeesFunction;
}

export const SearchEmployeesFilterPanel = (props: SearchEmployeesFilterPanelProps) => {
  const userRole = useAppSelector(selectLoggedUserRole);
  const [searchNewMembersOnly, setSearchNewMembersOnly] = useState<boolean>(false);
  const [searchLastName, setSearchLastName] = useState("");

  // const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  // const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
  //   useAppSelector(selectLoggedUserDefaultCountry)
  // );

  const [businessUnitSelected, setBusinessUnitSelected] = useState<SelectOption | null>();
  const [countrySelected, setCountrySelected] = useState<SelectOption | null>(
    useAppSelector(selectLoggedUserDefaultCountryAsSelection)
  );

  const [searchHiringDate, setSearchHiringDate] = useState<Moment | undefined>();
  // const [searchJobTitle, setSearchJobTitle] = useState<string>();

  const onChangeSearchLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const resetFilters = () => {
    setSearchLastName("");
    setSearchNewMembersOnly(false);
    setBusinessUnitSelected(null);
    setSearchHiringDate(undefined);
    if (userRole === Role.RegionalManager) {
      setCountrySelected(null);
    }
  };

  const findByAllParameters = () => {
    const filters = parametersToFilter();
    props.onSearchEmployees(filters);
  };

  const parametersToFilter = (): EmployeeQueryFilters => {
    return Object.assign(
      {},
      searchLastName && searchLastName !== "" ? { lastName: searchLastName } : null,
      businessUnitSelected ? { businessUnitId: parseInt(businessUnitSelected.value) } : null,
      countrySelected && countrySelected.value !== ""
        ? { countryIso3: countrySelected.value }
        : null,
      searchHiringDate ? { hiringDateFrom: searchHiringDate.format(DATE_FILTER_FORMAT) } : null,
      searchNewMembersOnly ? { newMembersOnly: searchNewMembersOnly } : null
    );
  };

  return (
    <FilterPanel
      title="Search Employees"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="3">
          <InputField
            id="input-last-name"
            label="Last name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchLastName}
            placeholder="Last Name"
            type="text"
            onChange={onChangeSearchLastName}
          />
        </Col>
        <Col md="3">
          <SelectField
            id="select-businessUnits"
            label="Business Unit"
            value={businessUnitSelected}
            options={props.businessUnits}
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
              options={props.countries}
              onChange={item => {
                setCountrySelected(item as SelectOption);
              }}
            />
          </Col>
        </WithAuthorization>
        <Col md="2">
          <DateField
            id="date-hire-from"
            label="Hire Date From"
            value={searchHiringDate}
            setValue={setSearchHiringDate}
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
      <Row>
        <Col md="9">&nbsp;</Col>
        <Col md="3" style={{ zIndex: 0 }} class="d-flex justify-content-center align-items-center">
          <div className="custom-control custom-control-alternative custom-checkbox">
            <input
              className="custom-control-input"
              id="onlyNewMembers"
              type="checkbox"
              value={searchNewMembersOnly.toString()}
              onClick={() => setSearchNewMembersOnly(!searchNewMembersOnly)}
            />
            <label className="custom-control-label" htmlFor="onlyNewMembers">
              <span className="text-muted">Only Employees NOT in Care</span>
            </label>
          </div>
        </Col>
      </Row>
      {/* <Col md="3">
        <SelectField
          id="select-jobTitle"
          label="Job Title"
          options={props.jobTitle}
          onChange={item => {
            const { value } = item as SelectOption;
            setSearchJobTitle(value);
          }}
        />
      </Col> */}
    </FilterPanel>
  );
};

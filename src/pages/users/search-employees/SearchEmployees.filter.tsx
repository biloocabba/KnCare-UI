import { useState } from "react";

import { Col } from "reactstrap";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmployeeQueryFilters, Permission, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountry } from "redux/features";

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
  const [searchNewMembersOnly, setSearchNewMembersOnly] = useState<boolean>(false);
  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
    useAppSelector(selectLoggedUserDefaultCountry)
  );
  const [searchHiringDate, setSearchHiringDate] = useState<string>();
  // const [searchJobTitle, setSearchJobTitle] = useState<string>();

  const onChangeSearchLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const findByAllParameters = () => {
    const filters: EmployeeQueryFilters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnitId,
      countryId: searchCountryIsoCode3,
      hiringDate: searchHiringDate,
      newMembersOnly: searchNewMembersOnly,
      // jobTitle: searchJobTitle,
    };
    props.onSearchEmployees(filters);
  };

  return (
    <FilterPanel title="Search Employees" findByAllParameters={findByAllParameters}>
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
      <Col md="4">
        <SelectField
          id="select-businessUnits"
          label="Business Unit"
          options={props.businessUnits}
          onChange={item => {
            const { value } = item as SelectOption;
            const id: number = parseInt(value);
            setSearchBusinessUnitId(id);
          }}
        />
      </Col>

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
      <WithAuthorization requires={Permission.Employee_country_all}>
        <Col md="3">
          <SelectField
            id="select-country"
            label="Country"
            options={props.countries}
            onChange={item => {
              const { value } = item as SelectOption;
              setSearchCountryIsoCode3(value);
            }}
          />
        </Col>
      </WithAuthorization>
      <Col md="3">
        <DateField
          id="date-hire-from"
          label="Hire Date From"
          onChange={dateAsMoment =>
            setSearchHiringDate(
              typeof dateAsMoment === "string" ? dateAsMoment : dateAsMoment.format("YYYY-MM-DD")
            )
          }
          timeFormat={false}
        />
      </Col>
      <Col md="3">
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
    </FilterPanel>
  );
};

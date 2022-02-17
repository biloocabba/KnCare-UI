import { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { WithAuthorization } from "components/authorization";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmployeeQueryFilters, SelectOption, Permission } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountry } from "redux/features";

interface onSearchEmployeesFunction {
  (employeeSearchRequest: EmployeeQueryFilters): void;
}

interface SearchEmployeesFilterPanelProps {
  countries: SelectOption[];
  businessUnits: SelectOption[];
  jobTitle: SelectOption[];
  onSearchEmployees: onSearchEmployeesFunction;
}

export const SearchEmployeesFilterPanel = (props: SearchEmployeesFilterPanelProps) => {
  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
    useAppSelector(selectLoggedUserDefaultCountry)
  );
  const [searchHiringDate, setSearchHiringDate] = useState<string>();
  const [searchJobTitle, setSearchJobTitle] = useState<string>();

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
      jobTitle: searchJobTitle,
    };
    props.onSearchEmployees(filters);
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">Search Employees</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody>
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
              options={props.businessUnits}
              onChange={item => {
                const { value } = item as SelectOption;
                const id: number = parseInt(value);
                setSearchBusinessUnitId(id);
              }}
            />
          </Col>
          <Col md="3">
            <SelectField
              id="select-jobTitle"
              label="Job Title"
              options={props.jobTitle}
              onChange={item => {
                const { value } = item as SelectOption;
                setSearchJobTitle(value);
              }}
            />
          </Col>
          <WithAuthorization requires={Permission.Employee_country_all}>
            <Col md="2">
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
          <Col md="2">
            <DateField
              id="date-hire-from"
              label="Hire Date From"
              onChange={dateAsMoment =>
                setSearchHiringDate(
                  typeof dateAsMoment === "string"
                    ? dateAsMoment
                    : dateAsMoment.format("YYYY-MM-DD")
                )
              }
              timeFormat={false}
            />
          </Col>
          <Col md="2">
            <FormGroup>
              <Button
                style={{
                  marginTop: "32px",
                  marginLeft: "32px",
                  height: "40px",
                }}
                className="btn btn-primary"
                color="primary"
                onClick={findByAllParameters}
              >
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

import { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { DateField, InputField, SelectField } from "components/widgets";

import { EmployeeQueryFilters, SelectOption } from "types";

interface onSearchEmployeesFunction {
  (employeeSearchRequest: EmployeeQueryFilters): void;
}

interface SearchEmployeesFilterPanelProps {
  countries: SelectOption[];
  businessUnits: SelectOption[];
  onSearchEmployees: onSearchEmployeesFunction;
}

export const SearchEmployeesFilterPanel = (props: SearchEmployeesFilterPanelProps) => {
  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>();
  const [searchHiringDate, setSearchHiringDate] = useState<string>();

  const onChangeSearchLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const findByAllParameters = () => {
    const filters: EmployeeQueryFilters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnitId,
      countryIsoCode3: searchCountryIsoCode3,
      hiringDate: searchHiringDate,
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
                const id: number = parseInt(item as SelectOption["value"]);
                setSearchBusinessUnitId(id);
              }}
            />
          </Col>
          <Col md="2">
            <SelectField
              id="select-country"
              label="Country"
              options={props.countries}
              onChange={item => {
                setSearchCountryIsoCode3(item as SelectOption["value"]);
              }}
            />
          </Col>
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

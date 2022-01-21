import { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { Moment } from "moment";

import { DateField } from "components/widgets/date-field";
import { InputField } from "components/widgets/input-field";
import { SelectField } from "components/widgets/select-field";

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
              onChange={(item: React.ChangeEvent<HTMLSelectElement>) => {
                const id: number = parseInt(item.target.value);
                setSearchBusinessUnitId(id);
              }}
            />
          </Col>
          <Col md="2">
            <SelectField
              id="select-country"
              label="Country"
              options={props.countries}
              onChange={(item: React.ChangeEvent<HTMLSelectElement>) => {
                setSearchCountryIsoCode3(item.target.value);
              }}
            />
          </Col>
          <Col md="2">
            <DateField
              id="date-hire-from"
              label="Hire Date From"
              onChange={(dateAsMoment: Moment) =>
                setSearchHiringDate(dateAsMoment.format("D-MM-YYYY"))
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

import { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { WithAuthorization } from "components/authorization";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmailQueryFilters, Permission, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountry } from "redux/features";

interface onSearchEmailsFunction {
  (employeeSearchRequest: EmailQueryFilters): void;
}

interface SearchEmailsFilterPanelProps {
  countries: SelectOption[];
  businessUnits: SelectOption[];
  groups: SelectOption[];
  roles: SelectOption[];
  onSearchEmails: onSearchEmailsFunction;
}

export const SearchEmailsFilterPanel = (props: SearchEmailsFilterPanelProps) => {
  const [searchBusinessUnitId, setSearchBusinessUnitId] = useState<number>();
  const [searchCountryIsoCode3, setSearchCountryIsoCode3] = useState<string>(
    useAppSelector(selectLoggedUserDefaultCountry)
  );

  const [searchRole, setSearchRole] = useState<string>();
  const [searchGroupId, setSearchGroupId] = useState<number>();
  const [searchSendingDateFrom, setSearchSendingDateFrom] = useState<string>();
  const [searchSendingDateTo, setSearchSendingDateTo] = useState<string>();
  const [searchSubject, setSearchSubject] = useState<string>();

  const findByAllParameters = () => {
    const filters: EmailQueryFilters = {
      businessUnitId: searchBusinessUnitId,
      countryId: searchCountryIsoCode3,
      roleId: searchRole,
      groupId: searchGroupId,
      sendingDateFrom: searchSendingDateFrom,
      sendingDateTo: searchSendingDateTo,
    };
    props.onSearchEmails(filters);
  };

  const onChangeSearchSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const subject = e.target.value;
    setSearchSubject(subject);
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">Search Emails</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody>
        <Row>
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
              id="select-groups"
              label="Groups"
              options={props.groups}
              onChange={item => {
                const { value } = item as SelectOption;
                const id: number = parseInt(value);
                setSearchGroupId(id);
              }}
            />
          </Col>
          <Col md="2">
            <DateField
              id="date-sent-from"
              label="Sending Date From"
              onChange={dateAsMoment =>
                setSearchSendingDateFrom(
                  typeof dateAsMoment === "string"
                    ? dateAsMoment
                    : dateAsMoment.format("YYYY-MM-DD")
                )
              }
              timeFormat={false}
            />
          </Col>
          <Col md="2">
            <DateField
              id="date-sent-to"
              label="Sending Date To"
              onChange={dateAsMoment =>
                setSearchSendingDateTo(
                  typeof dateAsMoment === "string"
                    ? dateAsMoment
                    : dateAsMoment.format("YYYY-MM-DD")
                )
              }
              timeFormat={false}
            />
          </Col>

          <WithAuthorization requires={Permission.Email_country_all}>
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
            <SelectField
              id="select-role"
              label="Role"
              options={props.roles}
              onChange={item => {
                const { value } = item as SelectOption;
                setSearchRole(value);
              }}
            />
          </Col>
          <Col md="4">
            <InputField
              id="input-subject"
              label="Subject"
              style={{ height: "36px" }}
              className="form-control"
              value={searchSubject}
              placeholder="Subject"
              type="text"
              onChange={onChangeSearchSubject}
            />
          </Col>
        </Row>

        <Row>
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

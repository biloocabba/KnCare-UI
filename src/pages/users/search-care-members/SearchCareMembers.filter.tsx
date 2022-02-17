import React, { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { WithAuthorization } from "components/authorization";
import { DateField, InputField, SelectField } from "components/widgets";

import { CareMemberQueryFilters, Permission, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountry } from "redux/features";

interface onSearchCareMembersFunction {
  (filters: CareMemberQueryFilters): void;
}

interface SearchCareMemberFilterPanelProps {
  roles: SelectOption[];
  groups: SelectOption[];
  countries: SelectOption[];
  businessUnits: SelectOption[];
  onSearchCareMembers: onSearchCareMembersFunction;
}

export const SearchCareMemberFilterPanel = (props: SearchCareMemberFilterPanelProps) => {
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
    props.onSearchCareMembers(filters);
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">Search Care Members</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md="3">
            <SelectField
              id="select-role"
              label="Role"
              options={props.roles}
              value={searchRoleId}
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
              options={props.businessUnits}
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
                options={props.countries}
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
              options={props.groups}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              label="Onbording from"
              onChange={dateAsMoment =>
                setSearchOnBoardDateFrom(
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
              id="date-onboarding-to"
              inputProps={{
                placeholder: "To",
              }}
              label="Onbording to"
              onChange={dateAsMoment =>
                setSearchOnBoardDateTo(
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
              id="date-offboarded-from"
              inputProps={{
                placeholder: "from",
              }}
              label="Offboarded From"
              onChange={dateAsMoment =>
                setSearchOffboardingDateFrom(
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
              id="date-offboarded-to"
              inputProps={{
                placeholder: "to",
              }}
              label="Offboarded To"
              onChange={dateAsMoment =>
                setSearchOffboardingDateTo(
                  typeof dateAsMoment === "string"
                    ? dateAsMoment
                    : dateAsMoment.format("YYYY-MM-DD")
                )
              }
              timeFormat={false}
            />
          </Col>

          <Col md="1">
            <FormGroup className="text-right">
              <Button
                style={{ marginTop: "32px", height: "40px" }}
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

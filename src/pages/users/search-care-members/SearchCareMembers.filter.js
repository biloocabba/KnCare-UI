import React, { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { DateField } from "components/widgets/date-field";
import { InputField } from "components/widgets/input-field";
import { SelectField } from "components/widgets/select-field";

export const SearchCareMemberFilterPanel = ({
  onSearchCareMembers,
  roles,
  groups,
  countries,
  businessUnits,
}) => {
  const [searchRole, setSearchRole] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchOnBoardDateFrom, setSearchOnBoardDateFrom] = useState(null);
  const [searchOnBoardDateTo, setSearchOnBoardDateTo] = useState(null);
  const [searchOffboardingDateFrom, setSearchOffboardingDateFrom] = useState(null);
  const [searchOffboardingDateTo, setSearchOffboardingDateTo] = useState(null);

  const onChangeSearchLastName = e => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const onChangeSearchOnboardingDateFrom = dateAsMoment => {
    setSearchOnBoardDateFrom(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOnboardingDateTo = dateAsMoment => {
    setSearchOnBoardDateTo(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOffboardingDateFrom = dateAsMoment => {
    setSearchOffboardingDateFrom(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOffboardingDateTo = dateAsMoment => {
    setSearchOffboardingDateTo(dateAsMoment.format("D-MM-YYYY"));
  };

  const findByAllParameters = () => {
    let filters = {
      businessUnitId: searchBusinessUnit,
      countryId: searchCountry,
      role: searchRole,
      group: searchGroup,
      lastName: searchLastName,
      onboardDateFrom: searchOnBoardDateFrom,
      onboardDateTo: searchOnBoardDateTo,
      offboardingDateFrom: searchOffboardingDateFrom,
      offboardingDateTo: searchOffboardingDateTo,
    };
    onSearchCareMembers(filters);
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
              options={roles}
              value={searchRole}
              onChange={item => setSearchRole(item.value)}
            />
          </Col>
          <Col md="3">
            <SelectField
              id="select-businessUnits"
              label="Business Unit"
              options={businessUnits}
              onChange={item => setSearchBusinessUnit(item.value)}
            />
          </Col>
          <Col md="3">
            <SelectField
              id="select-country"
              label="Country"
              options={countries}
              onChange={item => setSearchCountry(item.value)}
            />
          </Col>
          <Col md="3">
            <SelectField
              id="select-group"
              label="Group"
              options={groups}
              onChange={item => setSearchGroup(item.value)}
            />
          </Col>
        </Row>

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
          <Col md="2">
            <DateField
              id="date-onboarding-from"
              inputProps={{
                placeholder: "From",
              }}
              label="Onbording from"
              onChange={e => onChangeSearchOnboardingDateFrom(e)}
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
              onChange={e => onChangeSearchOnboardingDateTo(e)}
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
              onChange={e => onChangeSearchOffboardingDateFrom(e)}
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
              onChange={e => onChangeSearchOffboardingDateTo(e)}
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

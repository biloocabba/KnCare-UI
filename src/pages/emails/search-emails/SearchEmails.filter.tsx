import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountry } from "redux/features";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmailQueryFilters, formatMomentAsDD_MM_YYYY, Permission, SelectOption } from "types";

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

  const [searchRole, setSearchRole] = useState<string>("");
  const [searchGroupId, setSearchGroupId] = useState<number>();

  const [searchSendingDateFrom, setSearchSendingDateFrom] = useState<Moment | undefined>(undefined);
  const [searchSendingDateTo, setSearchSendingDateTo] = useState<Moment | undefined>(undefined);
  const [searchSubject, setSearchSubject] = useState<string>("");

  const resetFilters = () => {
    setSearchRole("");
    setSearchSubject("");
    setSearchGroupId(undefined);
    setSearchBusinessUnitId(undefined);
    setSearchSendingDateFrom(undefined);
    setSearchSendingDateTo(undefined);
  };

  const findByAllParameters = () => {
    const filters: EmailQueryFilters = {
      businessUnitId: searchBusinessUnitId,
      countryId: searchCountryIsoCode3,
      roleId: searchRole,
      groupId: searchGroupId,
      sendingDateFrom: formatMomentAsDD_MM_YYYY(searchSendingDateFrom),
      sendingDateTo: formatMomentAsDD_MM_YYYY(searchSendingDateTo),
      searchSubject,
    };
    console.log(filters);
    props.onSearchEmails(filters);
  };

  return (
    <FilterPanel
      title="Search Emails"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="6">
          <InputField
            id="input-subject"
            label="Subject"
            style={{ height: "36px" }}
            className="form-control"
            value={searchSubject}
            placeholder="Subject"
            type="text"
            onChange={({ target }) => {
              setSearchSubject(target.value);
            }}
          />
        </Col>
        <Col md="3">
          <DateField
            id="date-sent-from"
            label="Sending Date From"
            value={searchSendingDateFrom}
            setValue={setSearchSendingDateFrom}
          />
        </Col>
        <Col md="2">
          <DateField
            id="date-sent-to"
            label="Sending Date To"
            value={searchSendingDateTo}
            setValue={setSearchSendingDateTo}
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
      <Row>
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
        <Col md="3">
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
        <WithAuthorization requires={Permission.Email_country_all}>
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

        <Col md="1">&nbsp;</Col>
      </Row>
    </FilterPanel>
  );
};

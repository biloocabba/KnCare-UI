import { Moment } from "moment";
import { useState } from "react";

import { Col, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectLoggedUserDefaultCountryAsSelection, selectLoggedUserRole } from "redux/features";

import { WithAuthorization } from "components/authorization";
import { FilterPanel } from "components/panels";
import { DateField, InputField, SelectField } from "components/widgets";

import { EmailQueryFilters, Permission, Role, SelectOption } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

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
  const userRole = useAppSelector(selectLoggedUserRole);
  const [businessUnitSelected, setBusinessUnitSelected] = useState<SelectOption | null>();
  const [groupSelected, setGroupSelected] = useState<SelectOption | null>();
  const [roleSelected, setRoleSelected] = useState<SelectOption | null>();
  const [countrySelected, setCountrySelected] = useState<SelectOption | null>(
    useAppSelector(selectLoggedUserDefaultCountryAsSelection)
  );

  const [searchSendingDateFrom, setSearchSendingDateFrom] = useState<Moment | undefined>(undefined);
  const [searchSendingDateTo, setSearchSendingDateTo] = useState<Moment | undefined>(undefined);
  const [searchSubject, setSearchSubject] = useState<string>("");

  const resetFilters = () => {
    setRoleSelected(null);
    setGroupSelected(null);
    setBusinessUnitSelected(null);
    setSearchSubject("");
    setSearchSendingDateFrom(undefined);
    setSearchSendingDateTo(undefined);
    if (userRole === Role.RegionalManager) {
      setCountrySelected(null);
    }
  };

  const findByAllParameters = () => {
    const filters = parametersToFilter();
    props.onSearchEmails(filters);
  };

  const parametersToFilter = (): EmailQueryFilters => {
    return Object.assign(
      {},
      groupSelected ? { groupId: parseInt(groupSelected.value) } : null,
      roleSelected ? { roleId: parseInt(roleSelected.value) } : null,
      businessUnitSelected ? { businessUnitId: parseInt(businessUnitSelected.value) } : null,
      countrySelected && countrySelected.value !== ""
        ? { countryIso3: countrySelected.value }
        : null,
      searchSendingDateFrom
        ? { sendingDateFrom: searchSendingDateFrom.format(DATE_FILTER_FORMAT) }
        : null,
      searchSendingDateTo
        ? { sendingDateTo: searchSendingDateTo.format(DATE_FILTER_FORMAT) }
        : null,
      searchSubject && searchSubject !== "" ? { searchSubject: searchSubject } : null
    );
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
            value={groupSelected}
            onChange={item => {
              setGroupSelected(item as SelectOption);
            }}
          />
        </Col>
        <Col md="3">
          <SelectField
            id="select-role"
            label="Role"
            options={props.roles}
            value={roleSelected}
            onChange={item => {
              setRoleSelected(item as SelectOption);
            }}
          />
        </Col>
        <WithAuthorization requires={Permission.Email_country_all}>
          <Col md="3">
            <SelectField
              id="select-country"
              label="Country"
              options={props.countries}
              value={countrySelected}
              onChange={item => {
                setCountrySelected(item as SelectOption);
              }}
            />
          </Col>
        </WithAuthorization>
        <Col md="2">
          <SelectField
            id="select-businessUnits"
            label="Business Unit"
            options={props.businessUnits}
            value={businessUnitSelected}
            onChange={item => {
              setBusinessUnitSelected(item as SelectOption);
            }}
          />
        </Col>

        <Col md="1">&nbsp;</Col>
      </Row>
    </FilterPanel>
  );
};

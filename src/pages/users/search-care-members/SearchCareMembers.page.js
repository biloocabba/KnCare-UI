/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import ReactDatetime from "react-datetime";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets/react-table";

import { CARE_MEMBER_EDIT } from "pages/users";

// import { careMembersData } from "mock-data/careMembers";
import { selectAllBusinessUnitsDataAsSelectOptions } from "redux/features/business-unit/business-unit.selectors";
import { searchCareMembers, selectCareMemberState } from "redux/features/care-member";
import { selectAllCountryDataAsSelectOptions } from "redux/features/countries/country.selectors";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from ".";

export const SearchCareMembersPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const careMemberState = {
  //   isLoading: false,
  //   isError: false,
  //   isSuccess: false,
  //   errorMessage: null,
  //   entities:careMembersData,
  //   entity: null,
  // };

  const careMemberState = useSelector(selectCareMemberState);
  const businessUnits = useSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useSelector(selectAllCountryDataAsSelectOptions);
  const roles = [];
  const groups = [];
  const currentRole = "admin";

  const [alert, setAlert] = React.useState(null);
  const [selectedCareMembers, setSelectedCareMembers] = useState([]);

  const onGoToCareMemberDetailsPage = e => {
    var { id } = e.target;
    console.log(id, `/${currentRole}${CARE_MEMBER_EDIT}/${id}`);
    history.push(`/${currentRole}${CARE_MEMBER_EDIT}/${id}`);
  };

  const onRemoveCareMember = e => {
    console.log(e.target);
  };

  const onClickSearchCareMembers = filters => {
    dispatch(searchCareMembers(filters));
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchCareMemberFilterPanel
              businessUnits={businessUnits}
              countries={countries}
              groups={groups}
              roles={roles}
              onSearchCareMembers={onClickSearchCareMembers}
            />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Results</h3>
                <p className="text-sm mb-0">
                  Care Members visible according to current user&#39;s role
                </p>
              </CardHeader>

              <ReactTable
                data={careMemberState.entities}
                keyField="id"
                columns={careMemberTableColumns}
                onViewDetailsClick={onGoToCareMemberDetailsPage}
                onDeleteItemClick={onRemoveCareMember}
                selectedRows={selectedCareMembers}
                setSelectedRows={setSelectedCareMembers}
                searchBarPlaceholder="Filter results"
              />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

import { MouseEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets/react-table";

import { useSelectCountries } from "hooks";
import { CARE_MEMBER_EDIT } from "pages/users";
import { CareMemberQueryFilters, SelectOption } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
} from "redux/features";
import { selectAllBusinessUnitsDataAsSelectOptions } from "redux/features/business-unit/business-unit.selectors";
import { searchCareMembers, selectCareMemberState } from "redux/features/care-member";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from ".";

export const SearchCareMembersPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const careMemberState = useAppSelector(selectCareMemberState);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  // const countries = useAppSelector(selectAllCountryDataAsSelectOptions);
  const { countries } = useSelectCountries();
  const roles: SelectOption[] = useAppSelector(selectAllRoleDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);
  const currentRole = "admin";

  const [selectedCareMembers, setSelectedCareMembers] = useState([]);

  const onGoToCareMemberDetailsPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log(id, `/${currentRole}${CARE_MEMBER_EDIT}/${id}`);
    history.push(`/${currentRole}${CARE_MEMBER_EDIT}/${id}`);
  };

  const onRemoveCareMember = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  const onClickSearchCareMembers = (filters: CareMemberQueryFilters): void => {
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

import { MouseEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import { Card, CardHeader, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { CARE_MEMBER_EDIT } from "pages/users";
import { CareMember, CareMemberQueryFilters, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
  selectCareMembersByFilters,
  selectLoggedUserDefaultCountry,
} from "redux/features";

import { careMemberTableColumns, SearchCareMemberFilterPanel } from ".";

export const SearchCareMembersPage = () => {
  const history = useHistory();

  const businessUnitsAsSelectOptions: SelectOption[] = useAppSelector(
    selectAllBusinessUnitsDataAsSelectOptions
  );
  const countriesAsSelectOptions: SelectOption[] = useAppSelector(
    selectAllCountriesDataAsSelectOptions
  );
  const rolesAsSelectOptions: SelectOption[] = useAppSelector(selectAllRoleDataAsSelectOptions);
  const groupsAsSelectOptions: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const userCountry = useAppSelector(selectLoggedUserDefaultCountry);

  const [filters, setFilters] = useState<CareMemberQueryFilters>({
    countryId: userCountry,
  });

  const careMembers = useAppSelector(selectCareMembersByFilters(filters));
  const currentRole = "admin";

  const [selectedCareMembers, setSelectedCareMembers] = useState<CareMember[]>([]);

  const onGoToCareMemberDetailsPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    history.push(`/${currentRole}${CARE_MEMBER_EDIT}/${id}`);
  };

  const onRemoveCareMember = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  const onClickSearchCareMembers = (filters: CareMemberQueryFilters): void => {
    setFilters(filters);
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchCareMemberFilterPanel
              businessUnits={businessUnitsAsSelectOptions}
              countries={countriesAsSelectOptions}
              groups={groupsAsSelectOptions}
              roles={rolesAsSelectOptions}
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
                data={careMembers}
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

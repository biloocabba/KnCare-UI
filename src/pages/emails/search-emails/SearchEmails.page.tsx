import { MouseEvent, useState } from "react";

import { useHistory } from "react-router";

import { Card, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { Email, EmailQueryFilters } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  deleteEmail,
  searchEmails,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
  selectEmailState,
} from "redux/features";

import { EMAIL_DETAILS_ROUTE } from "..";

import { emailsTableColumns, SearchEmailsFilterPanel } from ".";

export const SearchEmailPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [selectedEmails, setSelectedEmails] = useState<Email[]>([]);

  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const groups = useAppSelector(selectAllGroupsDataAsSelectOptions);
  const roles = useAppSelector(selectAllRoleDataAsSelectOptions);
  const emailsState = useAppSelector(selectEmailState);

  const currentRole = "admin";

  const onClickSearchEmails = (filters: EmailQueryFilters): void => {
    dispatch(searchEmails(filters));
  };

  const onGoToEmailDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    history.push(`/${currentRole}${EMAIL_DETAILS_ROUTE}/${id}`);
  };

  const onRemoveEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    dispatch(deleteEmail(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />

      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchEmailsFilterPanel
              countries={countries}
              businessUnits={businessUnits}
              groups={groups}
              roles={roles}
              onSearchEmails={onClickSearchEmails}
            />
          </div>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Emails</h3>
                <p className="text-sm mb-0">Kn Employees from PDM</p>
              </CardHeader>
              {emailsState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={emailsState.entities}
                  keyField="id"
                  columns={emailsTableColumns}
                  onViewDetailsClick={onGoToEmailDetails}
                  onDeleteItemClick={onRemoveEmail}
                  selectedRows={selectedEmails}
                  setSelectedRows={setSelectedEmails}
                  searchBarPlaceholder="Filter results"
                />
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

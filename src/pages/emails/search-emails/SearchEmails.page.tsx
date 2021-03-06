import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Col, Container, Row, Spinner } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  deleteEmail,
  searchEmails,
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectEmailState,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EmailQueryFilters } from "types";

import { EMAIL_DETAILS_ROUTE } from "..";

import { emailsTableColumns, SearchEmailsFilterPanel } from ".";

export const SearchEmailPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const groups = useAppSelector(selectAllGroupsDataAsSelectOptions);
  const roles = useAppSelector(selectAllRolesDataAsSelectOptions);
  const emailsState = useAppSelector(selectEmailState);

  const onSearchEmails = (filters: EmailQueryFilters): void => {
    dispatch(searchEmails(filters));
  };

  /**
   *  @description - This function is used to go to emails details page
   */
  const onViewEmailDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${EMAIL_DETAILS_ROUTE}/${id}`);
  };

  /**
   *  @description - This function is used to delete an email.
   */
  const onDeleteEmail = (e: MouseEvent<HTMLButtonElement>) => {
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
              onSearchEmails={onSearchEmails}
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
                  columns={emailsTableColumns({
                    onDetailsButtonClick: onViewEmailDetails,
                    onRemoveButtonClick: onDeleteEmail,
                  })}
                />
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

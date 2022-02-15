import { MouseEvent, useState } from "react";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { Email, EmailQueryFilters } from "types";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectEmailState,
} from "redux/features";

import { emailsTableColumns, SearchEmailsFilterPanel } from ".";

export const SearchEmailPage = () => {
  //   const history = useHistory();
  //   const dispatch = useAppDispatch();
  const [selectedEmails, setSelectedEmails] = useState<Email[]>([]);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);
  const groups = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const emailsState = useAppSelector(selectEmailState);

  const onClickSearchEmails = (filters: EmailQueryFilters): void => {
    console.log(filters);
    //dispatch(searchEmails(filters));
  };

  const onGoToEmailDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log(id);
    // history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);
  };

  const onRemoveEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    console.log(id);
    // dispatch(deleteEmployee(parseInt(id)));
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
              onSearchEmails={onClickSearchEmails}
            />
          </div>
        </Row>

        <Row>
          <div className="col">
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
          </div>
        </Row>
      </Container>
    </>
  );
};

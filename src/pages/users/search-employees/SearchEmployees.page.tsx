import { MouseEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EMPLOYEE_DETAILS } from "pages/users";
import { EmployeeQueryFilters } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectAllCountryDataAsSelectOptions,
  selectEmployeesState,
  searchEmployees,
  selectAllBusinessUnitsDataAsSelectOptions,
  deleteEmployee,
} from "redux/features";

import { SearchEmployeesFilterPanel } from "./SearchEmployees.filter";
import { employeesTableColumns } from "./SearchEmployees.table";

export const SearchEmployeesPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const employeeState = useAppSelector(selectEmployeesState);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountryDataAsSelectOptions);
  const currentRole = "admin"; //TO GET FROM SELECTORS

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const onClickSearchEmployees = (filters: EmployeeQueryFilters): void => {
    dispatch(searchEmployees(filters));
  };

  const onGoToEmployeeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);
  };

  const onRemoveEmployee = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    dispatch(deleteEmployee(parseInt(id)));
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <SearchEmployeesFilterPanel
              onSearchEmployees={onClickSearchEmployees}
              countries={countries}
              businessUnits={businessUnits}
            />
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Employees</h3>
                <p className="text-sm mb-0">Kn Employees from PDM</p>
              </CardHeader>
              {employeeState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={employeeState.entities}
                  keyField="id"
                  columns={employeesTableColumns}
                  onViewDetailsClick={onGoToEmployeeDetails}
                  onDeleteItemClick={onRemoveEmployee}
                  selectedRows={selectedEmployees}
                  setSelectedRows={setSelectedEmployees}
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

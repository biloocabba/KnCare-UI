import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, Container, Row, Spinner } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectEmployeesState,
  searchEmployees,
  selectAllBusinessUnitsDataAsSelectOptions,
  deleteEmployee,
  selectAllCountriesDataAsSelectOptions,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import { EMPLOYEE_DETAILS } from "pages/users";

import { EmployeeQueryFilters } from "types";

import { employeesTableColumns, SearchEmployeesFilterPanel } from ".";

export const SearchEmployeesPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const employeeState = useAppSelector(selectEmployeesState);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);

  const onSearchEmployees = (filters: EmployeeQueryFilters): void => {
    dispatch(searchEmployees(filters));
  };

  const onViewEmployeeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${EMPLOYEE_DETAILS}/${id}`);
  };

  const onDeleteEmployee = (e: MouseEvent<HTMLButtonElement>) => {
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
              onSearchEmployees={onSearchEmployees}
              // jobTitle={jobTitles}
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
                  columns={employeesTableColumns({
                    onDetailsButtonClick: onViewEmployeeDetails,
                    onRemoveButtonClick: onDeleteEmployee,
                  })}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

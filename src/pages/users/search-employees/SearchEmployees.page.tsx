import { MouseEvent, useState } from "react";
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

import { EmployeeQueryFilters, Employee } from "types";

import { employeesTableColumns, SearchEmployeesFilterPanel } from ".";

export const SearchEmployeesPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const employeeState = useAppSelector(selectEmployeesState);
  const businessUnits = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);

  // @todo find a better place for this
  // const jobTitles: SelectOption[] = [
  //   { value: "1", label: "product manager" },
  //   { value: "2", label: "qa engineer" },
  //   { value: "3", label: "hr consultant" },
  //   { value: "4", label: "office manager" },
  //   { value: "5", label: "sales representative" },
  //   { value: "6", label: "logistics consultant" },
  // ];

  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);

  const onClickSearchEmployees = (filters: EmployeeQueryFilters): void => {
    dispatch(searchEmployees(filters));
  };

  const onGoToEmployeeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    navigate(`/admin${EMPLOYEE_DETAILS}/${id}`);
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

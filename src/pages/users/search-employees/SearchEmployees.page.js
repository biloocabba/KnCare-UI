/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
  Spinner,
} from "reactstrap";


import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets/react-table"; 

import { selectEmployeesState } from 'redux/features/employee/employee.selectors'
import { selectAllCountryDataAsSelectOptions } from 'redux/features/countries/country.selectors'
import { fetchCountries } from 'redux/features/countries/country.slice'
import { fetchBusinessUnits } from 'redux/features/business-unit/business-unit.slice'
import { selectAllBusinessUnitsDataAsSelectOptions } from 'redux/features/business-unit/business-unit.selectors'


import { searchEmployees,deleteEmployee } from 'redux/features/employee/employee.slice'
import { employeesTableColumns } from './SearchEmployees.table'
import { SearchEmployeesFilterPanel } from './SearchEmployees.filter'

// import { deleteUser, searchEmployees } from "../../../actions/employee";

import { EMPLOYEE_DETAILS } from "pages/users";


export const SearchEmployeesPage = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  
  const employeeState =useSelector(selectEmployeesState);
  const businessUnits = useSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const countries = useSelector(selectAllCountryDataAsSelectOptions);
  const currentRole = "admin"; //TO GET FROM SELECTORS

  const [selectedEmployees, setSelectedEmployees] = useState([]);


  const onClickSearchEmployees = (filters) =>{
     dispatch(searchEmployees(filters));
  }

  const onGoToEmployeeDetails = e => {
    var { id } = e.target;
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);    
  };

  const onRemoveEmployee = e => {
    var { id } = e.target;
    dispatch(deleteEmployee(id));
  };



  return (
    <>
      {/* alert*/}
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
              { employeeState.isLoading ? (
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
}
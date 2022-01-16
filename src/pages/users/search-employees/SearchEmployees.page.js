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


import { searchEmployees } from 'redux/features/employee/employee.slice'
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
  const currentRole = "admin";

/*
  const businessUnits = useSelector(state => {
    return state.categories.businessUnits.map(bunit => {
      return { value: bunit.id, label: bunit.name };
    });
  });

  const countries = useSelector(state => {
    return state.categories.countryListAllIsoData.map(country => {
      return { value: country.code3, label: country.name };
    });
  });

  const employees = useSelector(state => state.employees);
  */

  const [selectedEmployees, setSelectedEmployees] = useState([]);


  const onClickSearchEmployees = (filters) =>{
    console.log(filters);
    dispatch(searchEmployees(filters));
  }


  const onGoToEmployeeDetails = e => {
    var { id } = e.target;
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);    
  };

  const onRemoveEmployee = e => {
    var { id } = e.target;
    console.log(id);
    // dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchBusinessUnits());    
  }, [dispatch]);

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
            {/* <Card>
              <CardHeader>
                <h3 className="mb-0">Search Employees</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchLastName}
                        onChange={onChangeSearchLastName}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="businessUnits"
                      >
                        Business Units
                      </label>
                      <Select
                        id="businessUnits"
                        components={makeAnimated()}
                        options={businessUnits}
                        onChange={item =>
                          setSearchBusinessUnit(item.value)
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="country"
                      >
                        Countries
                      </label>
                      <Select
                        id="country"
                        components={makeAnimated()}
                        options={countries}
                        onChange={item => setSearchCountry(item.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Hire Date From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={e => onChangeSearchHiringDate(e)}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <Button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-primary"
                        color="primary"
                        onClick={findByAllParameters}
                      >
                        Search
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card> */}
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
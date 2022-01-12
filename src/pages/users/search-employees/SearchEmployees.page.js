import React, { useState } from "react";
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
} from "reactstrap";

import ReactDatetime from "react-datetime";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets/react-table"; 

import { employeesData } from 'mock-data/employees.js'
import { employeesTableColumns } from './SearchEmployees.table'

import { deleteUser, searchEmployees } from "../../../actions/employee";

import { EMPLOYEE_DETAILS } from "pages/users";


export const SearchEmployeesPage = (props) => {

  const history = useHistory();

  const employeeState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
    entities: employeesData,
    entity: null,
  };

  const businessUnits =[];
  const countries =[];
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
  const dispatch = useDispatch();

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const onChangeSearchLastName = e => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const findByAllParameters = () => {
    let filters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnit,
      countryId: searchCountry,
      hiringDate: searchHiringDate,
    };
    dispatch(searchEmployees(filters));
  };

  const onGoToEmployeeDetails = e => {
    var { id } = e.target;
    // props.history.push("/admin/users/employee-details/" + id);
    console.log(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);    
  };

  const onRemoveEmployee = e => {
    var { id } = e.target;
    console.log(id);
    dispatch(deleteUser(id));
  };

  const onChangeSearchHiringDate = dateAsMoment => {
    setSearchHiringDate(dateAsMoment.format("D-MM-YYYY"));
  };

  return (
    <>
      {/* alert*/}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
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
            </Card>
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Employees</h3>
                <p className="text-sm mb-0">Kn Employees from PDM</p>
              </CardHeader>
              {/* {employeesState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : ( */}
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
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}
/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { BoxHeader } from "components/headers";
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactDatetime from "react-datetime";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
import { pagination } from "utils/tableUtils";
import { deleteUser, searchEmployees } from "../../../actions/employee";

// const pagination = paginationFactory({
//   page: 1,
//   alwaysShowAllBtns: true,
//   showTotal: true,
//   withFirstAndLast: false,
//   sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
//     <div className="dataTables_length" id="datatable-basic_length">
//       <label>
//         Show{' '}
//         {
//           <select
//             name="datatable-basic_length"
//             aria-controls="datatable-basic"
//             className="form-control form-control-sm"
//             onChange={(e) => onSizePerPageChange(e.target.value)}
//           >
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//             <option value="100">100</option>
//           </select>
//         }{' '}
//         entries.
//       </label>
//     </div>
//   ),
// })

const { SearchBar } = Search;

function EmployeesPage(props) {
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
  const dispatch = useDispatch();

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);

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

  const employeeDetails = e => {
    var { id } = e.target;
    props.history.push("/admin/users/employee-details/" + id);
  };

  const employeeRemove = e => {
    var { id } = e.target;
    console.log(id);
    dispatch(deleteUser(id));
  };

  const onChangeSearchHiringDate = dateAsMoment => {
    setSearchHiringDate(dateAsMoment.format("D-MM-YYYY"));
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn btn-primary"
          color="primary"
          onClick={employeeDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          // className="btn-icon btn-2"
          color="danger"
          onClick={employeeRemove}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
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
              <ToolkitProvider
                data={employees}
                keyField="firstName"
                columns={[
                  {
                    dataField: "firstName",
                    text: "First Name",
                    hidden: true,
                  },
                  {
                    dataField: "lastName",
                    text: "lastName",
                    hidden: true,
                  },
                  {
                    dataField: "internationalName",
                    text: "int Name",
                    sort: true,
                  },
                  {
                    dataField: "title",
                    text: "title",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "businessUnit",
                    text: "bUnit",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "companyCode",
                    text: "companyCode",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "costCenter",
                    text: "costCenter",
                    sort: true,
                  },
                  {
                    dataField: "country",
                    text: "country",
                    sort: true,
                  },
                  {
                    dataField: "hiringDate",
                    text: "hiringDate",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
                  <>
                    <div className="py-4 table-responsive">
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-4 pb-1"
                      >
                        <label>
                          Search:
                          <SearchBar
                            className="form-control-sm"
                            placeholder="Filter results"
                            {...props.searchProps}
                          />
                        </label>
                      </div>

                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        pagination={pagination}
                        bordered={false}
                      />
                    </div>
                  </>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default EmployeesPage;

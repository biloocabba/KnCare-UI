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
import paginationFactory from "react-bootstrap-table2-paginator";
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
import { searchCareMembers } from "../../../actions/careMembers";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={e => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

function CareMembersPage(props) {
  const careMembers = useSelector(state => state.careMembers);
  const dispatch = useDispatch();

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

  const careRoles = useSelector(state => {
    return state.categories.careRoles.map(role => {
      return { value: role.id, label: role.name };
    });
  });

  const groups = useSelector(state => {
    return state.groups.map(group => {
      return { value: group.id, label: group.name };
    });
  });

  const [searchRole, setSearchRole] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [searchLastName, setSearchLastName] = useState("");
  const [searchOnBoardDateFrom, setSearchOnBoardDateFrom] = useState(null);
  const [searchOnBoardDateTo, setSearchOnBoardDateTo] = useState(null);
  const [searchOffboardingDateFrom, setSearchOffboardingDateFrom] =
    useState(null);
  const [searchOffboardingDateTo, setSearchOffboardingDateTo] =
    useState(null);

  const onChangeSearchLastName = e => {
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const onChangeSearchOnboardingDateFrom = dateAsMoment => {
    setSearchOnBoardDateFrom(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOnboardingDateTo = dateAsMoment => {
    setSearchOnBoardDateTo(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOffboardingDateFrom = dateAsMoment => {
    setSearchOffboardingDateFrom(dateAsMoment.format("D-MM-YYYY"));
  };

  const onChangeSearchOffboardingDateTo = dateAsMoment => {
    setSearchOffboardingDateTo(dateAsMoment.format("D-MM-YYYY"));
  };

  const findByAllParameters = () => {
    let filters = {
      businessUnitId: searchBusinessUnit,
      countryId: searchCountry,
      role: searchRole,
      group: searchGroup,
      lastName: searchLastName,
      onboardDateFrom: searchOnBoardDateFrom,
      onboardDateTo: searchOnBoardDateTo,
      offboardingDateFrom: searchOffboardingDateFrom,
      offboardingDateTo: searchOffboardingDateTo,
    };
    dispatch(searchCareMembers(filters));
  };

  const goToCareMemberDetailsPage = e => {
    //console.log(e.target);
    var { id } = e.target;
    props.history.push("/admin/users/care-member-details/" + id);
  };

  const formatActionButtonCell = (_, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="primary"
          onClick={goToCareMemberDetailsPage}
        >
          {/* <span id={row.id} className="btn-inner--icon"> */}
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={goToCareMemberDetailsPage}
        >
          <span className="btn-inner--icon">
            <i className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  const [alert, setAlert] = React.useState(null);

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Care Members</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Role
                      </label>
                      <Select
                        id="role"
                        components={makeAnimated()}
                        options={careRoles}
                        onChange={item => setSearchRole(item.value)}
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
                  <Col md="3">
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
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="group"
                      >
                        Group
                      </label>
                      <Select
                        id="group"
                        components={makeAnimated()}
                        options={groups}
                        onChange={item => setSearchGroup(item.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

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
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchLastName}
                        onChange={onChangeSearchLastName}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Onbording from
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "From",
                        }}
                        onChange={e => onChangeSearchOnboardingDateFrom(e)}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Onbording to
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "To",
                        }}
                        onChange={e => onChangeSearchOnboardingDateTo(e)}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Offboarded From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "To",
                        }}
                        onChange={e =>
                          onChangeSearchOffboardingDateFrom(e)
                        }
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Offboarded to
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "To",
                        }}
                        onChange={e => onChangeSearchOffboardingDateTo(e)}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>

                  <Col md="1">
                    <FormGroup className="text-right">
                      <Button
                        style={{ marginTop: "32px", height: "40px" }}
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
                <h3 className="mb-0">Search Results</h3>
                <p className="text-sm mb-0">
                  Care Members visible according to current user's role
                </p>
              </CardHeader>
              <ToolkitProvider
                data={careMembers}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "firstName",
                    text: "First Name",
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
                    dataField: "managementGroup",
                    text: "Man Group",
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
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
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
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CareMembersPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { ReactTable } from "components/widgets/react-table"; 

import { BoxHeader } from "components/headers";

import { careMemberTableColumns } from './SearchCareMembers.table'
import { searchCareMembers } from "../../../actions/careMembers";
import { careMembersData } from 'mock-data/careMembers.js'


export const SearchCareMembersPage = (props) => {

  
  const dispatch = useDispatch();

  const careMemberState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
    entities:careMembersData,
    entity: null,
  };

  const careMembers = []; //useSelector(state => state.careMembers);
  const businessUnits = [];
  const countries  = [];
  const careRoles = [];
  const groups = [];

  // for selectors
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
  */

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
  const [alert, setAlert] = React.useState(null);
  const [selectedCareMembers, setSelectedCareMembers] = useState([]);
  
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

  const onGoToCareMemberDetailsPage = e => {
    var { id } = e.target;
    props.history.push("/admin/users/care-member-details/" + id);
  };

  const onRemoveCareMember = e => {
    console.log(e.target);   
  };


  console.log(careMemberState.entities);

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

              <ReactTable
                  data={careMemberState.entities}
                  keyField="id"
                  columns={careMemberTableColumns}
                  onViewDetailsClick={onGoToCareMemberDetailsPage}
                  onDeleteItemClick={onRemoveCareMember}
                  selectedRows={selectedCareMembers}
                  setSelectedRows={setSelectedCareMembers}
                  searchBarPlaceholder="Filter results"
                /> 
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}
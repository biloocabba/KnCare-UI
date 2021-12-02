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
import { DEACTIVATE_GROUP, UPDATE_GROUP } from "actions/types";
import { BoxHeader } from "components/Headers";
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
// core components
import AddMemberPanel from "./AddMemberPanel";

const { SearchBar } = Search;

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

function EditGroupPage(props) {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);
  const careMembers = useSelector(state => state.careMembers);

  let { id } = useParams(); //see in routes path: "/users/employee-details/:id",
  let currentGroup = groups.find(grp => grp.id === parseInt(id));

  const [group, setGroup] = useState(currentGroup);

  const toggleCurrentMembers = () => {
    setCurrentMembersCollapse(!currentMembersCollapse);
    setAddMembersCollapse(false);
  };
  const [currentMembersCollapse, setCurrentMembersCollapse] =
    useState(false);

  const toggleAddMembers = () => {
    setAddMembersCollapse(!addMembersCollapse);
    setCurrentMembersCollapse(false);
  };
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);

  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
  };

  const deactivateGroup = () => {
    dispatch({
      type: DEACTIVATE_GROUP,
      payload: group,
    });
    setGroup(prev => ({ ...group, active: !prev.active }));
  };

  const handleSaveClick = () => {
    dispatch({
      type: UPDATE_GROUP,
      payload: group,
    });
    backToSearch();
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={memberDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={memberRemove}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  const memberDetails = e => {
    var { id } = e.target;
    props.history.push("/admin/users/employee-details/" + id);
  };

  const memberRemove = e => {
    var { id } = e.target;
    console.log(id);
  };

  const backToSearch = () => {
    props.history.push("/admin/search-groups");
  };

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Group Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    {group && group.active ? (
                      <Button
                        type="button"
                        color="danger"
                        onClick={deactivateGroup}
                      >
                        Deactivate Group
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        color="success"
                        onClick={deactivateGroup}
                      >
                        Activate Group
                      </Button>
                    )}

                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={backToSearch}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                {group && (
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Group Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Group ID
                            </label>
                            <Input
                              id="input-first-name"
                              value={group.id}
                              disabled={true}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Group Name
                            </label>
                            <Input
                              id="input-last-name"
                              value={group.name}
                              name="groupName"
                              onChange={handleInputChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Group Description
                            </label>
                            <Input
                              id="input-last-name"
                              value={group.description}
                              name="groupDesc"
                              onChange={handleInputChange}
                              rows="4"
                              type="textarea"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />

                    <Row className="d-flex justify-content-between mx-2">
                      <h6 className="heading-small text-muted mb-4">
                        MEMBERS
                      </h6>

                      <ButtonGroup className="d-flex">
                        <Button onClick={toggleAddMembers} color="success">
                          Add new Members
                        </Button>
                        <Button
                          onClick={toggleCurrentMembers}
                          disabled={careMembers.length === 0}
                          color="info"
                        >
                          {currentMembersCollapse
                            ? "Hide members"
                            : "Show members"}{" "}
                          ({careMembers.length} members)
                        </Button>
                      </ButtonGroup>
                    </Row>

                    <Row>
                      <Col lg="12">
                        {/* <MembersTableComps data={group.members} /> */}
                        <Collapse isOpen={addMembersCollapse}>
                          <AddMemberPanel
                            onchangeRole={e => console.log(e)}
                            onchangeCountry={e => console.log(e)}
                            onchangeBunit={e => console.log(e)}
                            onSelectCareMember={e => console.log(e)}
                          />
                        </Collapse>
                        <Collapse isOpen={currentMembersCollapse}>
                          <Card>
                            <CardHeader>
                              <h3 className="mb-0">Group members</h3>
                              <p className="text-sm mb-0">Care Members</p>
                            </CardHeader>

                            <ToolkitProvider
                              data={careMembers}
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
                        </Collapse>
                      </Col>
                    </Row>

                    <hr className="my-4" />

                    <div className="pl-lg-4">
                      <Row>
                        <Button
                          color="primary"
                          onClick={() => handleSaveClick()}
                        >
                          {" "}
                          Save
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => handleSaveClick()}
                        >
                          {" "}
                          Delete group
                        </Button>
                      </Row>
                    </div>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditGroupPage;

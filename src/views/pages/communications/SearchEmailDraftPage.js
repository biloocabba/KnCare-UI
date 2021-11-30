import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {
  Button,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Form,
  CardBody,
  Input,
  FormGroup,
} from "reactstrap";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import { useDispatch, useSelector } from "react-redux";
import ReactDatetime from "react-datetime";
import {
  searchEmailDrafts,
  retrieveEmailDrafts,
} from "../../../actions/emailDrafts";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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

function SearchEmailDraftsPage(props) {
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

  const careMembers = useSelector(state => {
    return state.careMembers.map(careMember => {
      return { value: careMember.id, label: careMember.internationalName };
    });
  });
  const emailDrafts = useSelector(state => state.emailDrafts);

  const [searchSubject, setSearchSubject] = useState("");
  const [searchRecipient, setSearchRecipient] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [searchStartDate, setSearchStartDate] = useState("");
  const [searchEndDate, setSearchEndDate] = useState("");

  const dispatch = useDispatch();

  const onChangeSearchSubject = e => {
    const searchSubject = e.target.value;
    setSearchSubject(searchSubject);
  };

  const onChangeSearchRecipient = e => {
    const searchRecipient = e.target.value;
    setSearchRecipient(searchRecipient);
  };

  const onChangeSearchGroup = e => {
    const searchGroup = e.target.value;
    setSearchGroup(searchGroup);
  };

  const onChangeSearchStartDate = e => {
    const searchStartDate = e.target.value;
    setSearchStartDate(searchStartDate);
  };

  const onChangeSearchEndDate = e => {
    const searchEndDate = e.target.value;
    setSearchEndDate(searchEndDate);
  };

  const findByAllParameters = () => {
    let filters = {
      subject: searchSubject,
      recipient: searchRecipient,
      group: searchGroup,
      startDate: searchStartDate,
      endDate: searchEndDate,
    };
    dispatch(searchEmailDrafts(filters));
  };

  const emailDraftDetails = e => {
    var { id } = e.target;
    props.history.push("/admin/emailDrafts/email-draft-details/1");
  };

  const detailsActionButtonCell = () => {
    return (
      <Button
        className="btn-icon btn-2"
        type="button"
        color="info"
        onClick={emailDraftDetails}
      >
        <span className="btn-inner--icon">
          <i className="ni ni-badge" />
        </span>
      </Button>
    );
  };

  return (
    <>
      {alert}
      <GradientEmptyHeader name="Search Email Drafts" />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Emails</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="lastName"
                      >
                        Subject
                      </label>
                      <Input
                        id="lastName"
                        style={{ height: "36px" }}
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        value={searchSubject}
                        onChange={onChangeSearchSubject}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="businessUnits"
                      >
                        Recipients
                      </label>
                      <Select
                        id="businessUnits"
                        components={makeAnimated()}
                        options={careMembers}
                        onChange={item => setSearchRecipient(item.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="country"
                      >
                        Groups
                      </label>
                      <Select
                        id="country"
                        components={makeAnimated()}
                        options={groups}
                        onChange={item => setSearchGroup(item.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Sent Date From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={
                          e => console.log(e)
                          //onChangeSearchHiringDate(e)
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
                        Sent Date To
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={
                          e => console.log(e)
                          //onChangeSearchHiringDate(e)
                        }
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
                <h3 className="mb-0">Email Drafts</h3>
              </CardHeader>
              <ToolkitProvider
                data={emailDrafts}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "subject",
                    text: "subject",
                    sort: true,
                  },
                  {
                    dataField: "recipient",
                    text: "recipient",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "group",
                    text: "group",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "startDate",
                    text: "startDate",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "startDate",
                    text: "startDate",
                    sort: true,
                    style: { width: "50px" },
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: detailsActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    {/* <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Subject"
                          value={searchSubject}
                          onChange={onChangeSearchSubject}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="recipient"
                          value={searchRecipient}
                          onChange={onChangeSearchRecipient}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Group"
                          value={searchGroup}
                          onChange={onChangeSearchGroup}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Start Date"
                          value={searchStartDate}
                          onChange={onChangeSearchStartDate}
                        />
                      </label>
                    </div>
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        <SearchBar
                          className="form-control-sm"
                          placeholder="End Date"
                          value={searchEndDate}
                          onChange={onChangeSearchEndDate}
                        />
                      </label>
                    </div>
                    <div className="input-group-append">
                      <button
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
                    </div>  
            
             */}

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

export default SearchEmailDraftsPage;

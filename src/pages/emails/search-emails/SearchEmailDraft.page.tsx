import React, { useState } from "react";

import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Row } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactDatetime from "react-datetime";

import { BoxHeader } from "components/headers";
import { pagination, SelectField, InputField } from "components/widgets";

const { SearchBar } = Search;

export const SearchEmailDraftsPage = () => {
  const groups: any = [];
  const careMembers: any = [];
  const emailDrafts: any = [];

  const [searchSubject, setSearchSubject] = useState("");
  const [searchRecipient, setSearchRecipient] = useState("");
  const [searchGroup, setSearchGroup] = useState("");
  const [searchStartDate] = useState("");
  const [searchEndDate] = useState("");

  const onChangeSearchSubject = (e: React.FormEvent<HTMLFormElement>) => {
    const { value } = e.target as HTMLFormElement;
    setSearchSubject(value);
  };

  // const onChangeSearchRecipient = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { value } = e.target as HTMLFormElement;
  //   setSearchRecipient(value);
  // };

  // const onChangeSearchGroup = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { value } = e.target as HTMLFormElement;
  //   setSearchGroup(value);
  // };

  // const onChangeSearchStartDate = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { value } = e.target as HTMLFormElement;
  //   setSearchStartDate(value);
  // };

  // const onChangeSearchEndDate = (e: React.FormEvent<HTMLFormElement>) => {
  //   const { value } = e.target as HTMLFormElement;
  //   setSearchEndDate(value);
  // };

  const findByAllParameters = () => {
    const filters = {
      subject: searchSubject,
      recipient: searchRecipient,
      group: searchGroup,
      startDate: searchStartDate,
      endDate: searchEndDate,
    };
    console.log(filters);
    // dispatch(searchEmailDrafts(filters));
  };

  const emailDraftDetails = () => {
    // history.push("/admin/emailDrafts/email-draft-details/1");
  };

  const detailsActionButtonCell = () => {
    return (
      <Button className="btn-icon btn-2" type="button" color="info" onClick={emailDraftDetails}>
        <span className="btn-inner--icon">
          <i className="ni ni-badge" />
        </span>
      </Button>
    );
  };

  return (
    <>
      {alert}
      <BoxHeader />
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
                    <InputField
                      id="lastName"
                      label="Subject"
                      style={{ height: "36px" }}
                      type="text"
                      placeholder="Last Name"
                      value={searchSubject}
                      onChange={onChangeSearchSubject}
                    />
                  </Col>
                  <Col md="2">
                    <SelectField
                      id="businessUnits"
                      label="Recipients"
                      options={careMembers}
                      onChange={(item: any) => setSearchRecipient(item.value)}
                    />
                  </Col>
                  <Col md="2">
                    <SelectField
                      id="country"
                      label="Groups"
                      options={groups}
                      onChange={(item: any) => setSearchGroup(item.value)}
                    />
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="example3cols2Input">
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
                      <label className="form-control-label" htmlFor="example3cols2Input">
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
                  },
                  {
                    dataField: "group",
                    text: "group",
                    sort: true,
                  },
                  {
                    dataField: "startDate",
                    text: "startDate",
                    sort: true,
                  },
                  {
                    dataField: "startDate",
                    text: "startDate",
                    sort: true,
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
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <SearchBar
                        className="form-control-sm"
                        placeholder="Subject"
                        // value={searchSubject}
                        // onChange={onChangeSearchSubject}
                      />
                    </div>
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <SearchBar
                        className="form-control-sm"
                        placeholder="recipient"
                        // value={searchRecipient}
                        // onChange={onChangeSearchRecipient}
                      />
                    </div>
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <SearchBar
                        className="form-control-sm"
                        placeholder="Group"
                        // value={searchGroup}
                        // onChange={onChangeSearchGroup}
                      />
                    </div>
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <SearchBar
                        className="form-control-sm"
                        placeholder="Start Date"
                        // value={searchStartDate}
                        // onChange={onChangeSearchStartDate}
                      />
                    </div>
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      <SearchBar
                        className="form-control-sm"
                        placeholder="End Date"
                        // value={searchEndDate}
                        // onChange={onChangeSearchEndDate}
                      />
                    </div>
                    <div className="input-group-append">
                      <button className="btn btn-info" onClick={findByAllParameters}>
                        Search
                      </button>
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
};

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
import React, { useState } from "react";

// react plugin that prints a given react component
// react component for creating dynamic tables
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactDatetime from "react-datetime";
// react component used to create sweet alerts
// reactstrap components

import { BoxHeader } from "components/headers";

import { searchBestPractices } from "actions/bestPractice";

const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ onSizePerPageChange }) => (
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

export const SearchBestPracticesPage = props => {
  const [alert] = React.useState(null);
  // this function will copy to clipboard an entire table,
  // so you can paste it inside an excel or csv file

  const bestPractices = useSelector(state => state.bestPractices);
  const dispatch = useDispatch();

  const [searchTime] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [searchRate] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  // useEffect(() => {
  //   dispatch(reterieveBestPractices())
  // }, [dispatch])

  // eslint-disable-next-line no-unused-vars
  const makeSearch = () => {
    const searchFilters = {
      searchTime: searchTime,
      searchAuthor: searchAuthor,
      searchTag: searchTag,
      searchRate: searchRate,
      searchTitle: searchTitle,
    };

    dispatch(searchBestPractices(searchFilters));
  };

  // const status = useSelector(state => state.pageStatus);
  // const pageStatus = { pageStatus: status, statusCode: -1 };

  // useEffect(() => {
  //   const loadData = async () => {
  //     await dispatch(retrieveBestPractices());
  //   }
  //   loadData();
  // }, [dispatch]);

  // limit description respresintation to 50 characters to fit it on the page
  bestPractices.forEach(bestPractice => {
    if (bestPractice.description !== null && bestPractice.description.length > 50) {
      bestPractice.description = bestPractice.description.substring(0, 50) + "...";
    }
  });

  const toBestPracticeDetailsPage = e => {
    var { id } = e.target;
    props.history.push("/admin/best-practice/" + id);
  };

  // eslint-disable-next-line no-unused-vars
  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          onClick={e => toBestPracticeDetailsPage(e)}
        >
          View
        </Button>
      </>
    );
  };

  return (
    <>
      {alert}
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row className="justify-content-center">
          <Col className="card-wrapper" lg="12">
            <Card>
              <CardHeader>
                <h2 className="mb-0">Best Practices</h2>
                <p className="text-sm mb-0">Highlighted</p>
              </CardHeader>
              <CardBody>
                <Row className="card-wrapper">
                  <Col lg="4">
                    <Card>
                      <CardImg
                        alt="..."
                        src={require("assets/img/care/care-credit-cards.png").default}
                        top
                      />
                      <CardBody>
                        <CardTitle className="mb-3 text-center" tag="h3">
                          Care Credit Cards
                        </CardTitle>
                        <CardText className="mb-4">
                          <Row className="justify-content-center">
                            <Col lg="12">Recognize a colleague from everywhere in the world</Col>
                          </Row>
                        </CardText>
                        <Button color="primary" href="#pablo" onClick={e => e.preventDefault()}>
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card>
                      <CardImg alt="..." src={require("assets/img/care/huddle.png").default} top />
                      <CardBody>
                        <CardTitle className="mb-3 text-center" tag="h3">
                          Huddles
                        </CardTitle>
                        <CardText className="mb-4">
                          <Row className="justify-content-center">
                            <Col lg="12">
                              Guide the team in a discussion around the topics and what the idea
                              means
                            </Col>
                          </Row>
                        </CardText>
                        <Button
                          id="1"
                          color="primary"
                          href="#pablo"
                          onClick={e => toBestPracticeDetailsPage(e)}
                        >
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card>
                      <CardImg
                        alt="..."
                        src={require("assets/img/care/remote-work.png").default}
                        top
                      />
                      <CardBody>
                        <CardTitle className="mb-3 text-center" tag="h3">
                          Care & Remote Work
                        </CardTitle>
                        <CardText className="mb-4">
                          <Row className="justify-content-center">
                            <Col lg="12">Playbook for remote work</Col>
                          </Row>
                        </CardText>
                        <Button color="primary" href="#pablo" onClick={e => e.preventDefault()}>
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Best Practices</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="author">
                        Author
                      </label>
                      <Input
                        placeholder="Author"
                        onChange={e => setSearchAuthor(e.target.value)}
                        value={searchAuthor}
                        id="author"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="title">
                        Title
                      </label>
                      <Input
                        placeholder="Title"
                        onChange={e => setSearchTitle(e.target.value)}
                        value={searchTitle}
                        id="title"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="tag">
                        Tag
                      </label>
                      <Input
                        placeholder="Tag"
                        onChange={e => setSearchTag(e.target.value)}
                        value={searchTag}
                        id="search-Tag"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="example3cols2Input">
                        Creation Date
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Creation Date",
                        }}
                        onChange={e => console.log(e)}
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-primary"
                        color="primary"
                        onClick={e => console.log(e)}
                      >
                        Search
                      </button>
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
                <h3 className="mb-0">Search results</h3>
              </CardHeader>

              <ToolkitProvider
                data={bestPractices}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "title",
                    text: "Title",
                    sort: true,
                  },
                  {
                    dataField: "content",
                    text: "Content",
                    sort: true,
                  },
                  {
                    dataField: "description",
                    text: "Description",
                    sort: true,
                  },
                  {
                    dataField: "author",
                    text: "Author",
                    sort: true,
                  },
                  {
                    dataField: "tag",
                    text: "Tag",
                    sort: true,
                  },
                  {
                    dataField: "rate",
                    text: "Rate",
                    sort: true,
                  },
                  {
                    dataField: "time",
                    text: "Time",
                    sort: true,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <div id="datatable-basic_filter" className="dataTables_filter px-4 pb-1">
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder="Filter results"
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    {/* <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-3 pb-1"
                      >
                        <label>
                          <Input
                            className="form-control-sm"
                            placeholder="Time"
                            onChange={(e) => setSearchTime(e.target.value)}
                            value={searchTime}
                            id="search-time"
                            type="text"
                          />
                        </label>
                      </div>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-3 pb-1"
                      >
                        <label>
                          <Input
                            className="form-control-sm"
                            placeholder="Author"
                            onChange={(e) => setSearchAuthor(e.target.value)}
                            value={searchAuthor}
                            id="search-Author"
                            type="text"
                          />
                        </label>
                      </div>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-3 pb-1"
                      >
                        <label>
                          <Input
                            className="form-control-sm"
                            placeholder="Tag"
                            onChange={(e) => setSearchTag(e.target.value)}
                            value={searchTag}
                            id="search-Tag"
                            type="text"
                          />
                        </label>
                      </div>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-3 pb-1"
                      >
                        <label>
                          <Input
                            className="form-control-sm"
                            placeholder="Rate"
                            onChange={(e) => setSearchRate(e.target.value)}
                            value={searchRate}
                            id="search-Rate"
                            type="text"
                          />
                        </label>
                      </div>
                      <div
                        id="datatable-basic_filter"
                        className="dataTables_filter px-3 pb-1"
                      >
                        <label>
                          <Input
                            className="form-control-sm"
                            placeholder="Title"
                            onChange={(e) => setSearchTitle(e.target.value)}
                            value={searchTitle}
                            id="search-Title"
                            type="text"
                          />
                        </label>
                      </div>
                      <Button
                        type="button"
                        color="info"
                        href="#pablo"
                        onClick={makeSearch}
                      >
                        Search
                      </Button>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                    />
                  </div> */}
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

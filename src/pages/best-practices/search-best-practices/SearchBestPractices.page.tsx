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
import { MouseEvent, useState } from "react";

import { useHistory } from "react-router";

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
  Spinner,
} from "reactstrap";

import ReactDatetime from "react-datetime";

import { BoxHeader } from "components/headers";
import { ReactTable } from "components/widgets";

import careCreditCardsImg from "assets/img/care/care-credit-cards.png";
import huddleImg from "assets/img/care/huddle.png";
import remoteWorkImg from "assets/img/care/remote-work.png";

import { useAppSelector, useAppDispatch } from "redux/app";
import { selectBestPracticeState, searchBestPractices, deleteBestPractice } from "redux/features";

import { BEST_PRACTICE_DETAILS } from "../best-practices.routes.const";

import { bestPracticesTableColumns } from "./SearchBestPractices.table";

export const SearchBestPracticesPage = () => {
  const [alert] = useState(null);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const bestPractices = useAppSelector(selectBestPracticeState);
  const [selectedRows, setSelectedRows] = useState([]);
  // const [searchTime] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchTag, setSearchTag] = useState("");
  // const [searchRate] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const onSearch = () => {
    const searchFilters = {
      // searchTime,
      searchAuthor,
      searchTag,
      // searchRate,
      searchTitle,
    };

    dispatch(searchBestPractices(searchFilters));
  };

  const onGoToBestPracticeDetails = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget as HTMLButtonElement;
    history.push(`/admin${BEST_PRACTICE_DETAILS}/${id}`);
  };

  const onRemoveBestPractice = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget as HTMLButtonElement;
    dispatch(deleteBestPractice(parseInt(id)));
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
                      <CardImg alt="..." src={careCreditCardsImg} top />
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
                      <CardImg alt="..." src={huddleImg} top />
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
                          onClick={e => onGoToBestPracticeDetails(e)}
                        >
                          Read More
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card>
                      <CardImg alt="..." src={remoteWorkImg} top />
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
                        onClick={onSearch}
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
              {bestPractices.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={bestPractices.entities}
                  keyField="id"
                  columns={bestPracticesTableColumns}
                  onViewDetailsClick={onGoToBestPracticeDetails}
                  onDeleteItemClick={onRemoveBestPractice}
                  selectedRows={selectedRows}
                  setSelectedRows={setSelectedRows}
                  searchBarPlaceholder="Filter results"
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

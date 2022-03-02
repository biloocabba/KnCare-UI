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
import moment from "moment";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"; //this will optimize load with webworker
import Rating from "react-rating";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectBestPracticeById } from "redux/features";
import { huddle64pdf } from "redux/features/utils/in-memory-api-mock";

import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

import { SEARCH_BEST_PRACTICE } from "../best-practices.routes.const";

export const BestPracticeDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const bestPractice = useAppSelector(selectBestPracticeById(parseInt(id)));

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };

  const nextPage = () => {
    // @ts-ignore
    if (pageNumber < numPages) {
      changePage(1);
    }
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
                    <h3 className="mb-0">Best Practice Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      href="#pablo"
                      onClick={() => navigate(`${SEARCH_BEST_PRACTICE}`)}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">Best Practice details</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="3">
                        <InputField
                          id="input-first-name"
                          label="Title"
                          value={bestPractice?.title}
                          type="text"
                          disabled={true}
                        />
                      </Col>
                      <Col lg="3">
                        <InputField
                          id="input-first-name"
                          label="Current Rating"
                          value={bestPractice?.rating}
                          type="text"
                          disabled={true}
                        />
                      </Col>

                      <Col lg="3">
                        <InputField
                          id="author"
                          label="Author"
                          value={bestPractice?.author}
                          type="text"
                          disabled={true}
                        />
                      </Col>
                      <Col lg="3">
                        <InputField
                          id="publishDate"
                          label="Published On"
                          value={moment(bestPractice?.publishDate, DATE_FILTER_FORMAT).format(
                            DATE_FILTER_FORMAT
                          )}
                          type="text"
                          disabled={true}
                        />
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col lg="1">&nbsp;</Col>
                    <Col lg="8">
                      <div className="pl-lg-4">
                        <Document
                          // file="https://cors-anywhere.herokuapp.com/https://github.com/KNITS-OS/SkillQuest/raw/master/Resources/corporatebrochurekuehnenagel2021en.pdf"
                          file={huddle64pdf}
                          onLoadSuccess={onDocumentLoadSuccess}
                        >
                          <Page pageNumber={pageNumber} />

                          {/* TO see all pages in same page */}
                          {/* {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                              ))} */}
                        </Document>
                        <div>
                          <p className="mb-0">
                            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                          </p>

                          <Pagination>
                            <PaginationItem>
                              <PaginationLink
                                disabled={pageNumber <= 1}
                                aria-label="Previous"
                                href="#pablo"
                                onClick={previousPage}
                              >
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                              </PaginationLink>
                            </PaginationItem>

                            {Array.from(new Array(numPages), (el, index) => (
                              <PaginationItem key={index + 1}>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={() => setPageNumber(index + 1)}
                                >
                                  {index + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}

                            <PaginationItem>
                              <PaginationLink
                                // @ts-ignore
                                disabled={pageNumber >= numPages}
                                aria-label="Next"
                                href="#pablo"
                                onClick={nextPage}
                              >
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                              </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </div>
                      </div>
                    </Col>

                    <Col lg="2">
                      <h3>Rate it:</h3>
                      <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

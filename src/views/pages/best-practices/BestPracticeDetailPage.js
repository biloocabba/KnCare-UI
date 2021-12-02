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
import { BoxHeader } from "components/Headers";
import { huddle64pdf } from "mock-data/mock-data-pdf-huddle-base64";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"; //this will optimize load with webworker
import Rating from "react-rating";
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";

// import pdfToShare from 'assets/pdf/HostingCareHuddle.pdf'

function BestPracticeDetailPage(props) {
  let { id } = useParams(); //see in routes path: "/users/employee-details/:id",

  //const bestPractices = useSelector((state) => state.bestPractices)
  //let bestPractice = bestPractices.find((bp) => bp.id === parseInt(id))

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      changePage(1);
    }
  };

  let bestPractice = {
    title: "a demo title",
    description: "a demo description",
    author: "a demo author",
    publishDate: "12/12/2020",
    rating: 4,
    tags: ["tag1", "tag2", "tag3"],
    // pdf:'assets/pdf/HostingCareHuddle.pdf' // this doesnt work. Local file works only with import
    // pdf:'https://github.com/stefanofiorenza/KNITS-Events/raw/master/KN-Brochure2020.pdf', //this doesnt work. Need cors enabled
    pdf: "https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf", //this works
  };
  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <Row className="align-items-center py-4">
          <Col lg="12" xs="7" className="text-right">
            <Button
              className="btn btn-primary"
              color="primary"
              href="#pablo"
              onClick={e =>
                props.history.push("/admin/search-best-practices")
              }
            >
              Back to Search
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Best Practice Details</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Best Practice details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Title
                          </label>
                          <Input
                            id="input-first-name"
                            value={bestPractice.title}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="rating"
                          >
                            Current Rating
                          </label>
                          <Input
                            id="input-first-name"
                            value={bestPractice.rating}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="author"
                          >
                            Author
                          </label>
                          <Input
                            id="author"
                            value={bestPractice.author}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="publishDate"
                          >
                            Published On
                          </label>
                          <Input
                            id="publishDate"
                            value={bestPractice.publishDate}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col lg="1">&nbsp;</Col>
                    <Col lg="8">
                      <div className="pl-lg-4">
                        <Document
                          file={huddle64pdf}
                          //  file={bestPractice.pdf}
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
                            Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                            {numPages || "--"}
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

                            {Array.from(
                              new Array(numPages),
                              (el, index) => (
                                <PaginationItem>
                                  <PaginationLink
                                    href="#pablo"
                                    onClick={e => setPageNumber(index + 1)}
                                  >
                                    {index + 1}
                                  </PaginationLink>
                                </PaginationItem>
                              ),
                            )}

                            <PaginationItem>
                              <PaginationLink
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

                          {/* <Button
                              type="button"
                              color="info"
                              href="#pablo"
                              onClick={previousPage}
                            >
                              Previous
                            </Button>

                            <Button
                              type="button"
                              color="info"
                              href="#pablo"
                              onClick={nextPage}
                            >
                              Next
                            </Button> */}

                          {/* <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                              Previous
                            </button>
                            <button
                              type="button"
                              disabled={pageNumber >= numPages}
                              onClick={nextPage}
                            >
                              Next
                            </button> */}
                        </div>
                      </div>
                    </Col>

                    <Col lg="2">
                      <h3>Rate it:</h3>
                      <Rating
                        // style={{color:'yellow', borderColor:'black'}}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                      />
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
}

export default BestPracticeDetailPage;

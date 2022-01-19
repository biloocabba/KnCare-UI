/* eslint-disable no-unused-vars */
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

import { useSelector } from "react-redux";

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
  Row,
} from "reactstrap";

import { useParams, useHistory } from "react-router-dom";

import { BoxHeader } from "components/headers";

import { EMPLOYEE_SEARCH, CARE_MEMBER_CREATE } from "pages/users";
import { EmployeePanel } from "pages/users/panels";
// reactstrap components

// import { employeesData } from 'mock-data/employees.js'

import { selectEmployeeById } from "redux/features/employee";

export const EmployeeDetailsPage = props => {
  let { id } = useParams();
  const history = useHistory();

  const employee = useSelector(selectEmployeeById(parseInt(id)));
  const currentRole = "admin";

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
                    <h3 className="mb-0">Employee Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      // color={buttonColor}
                      onClick={e => history.push(`/${currentRole}${CARE_MEMBER_CREATE}/${id}`)}
                      // disabled={employee.careMember}
                    >
                      Invite to Care
                    </Button>
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      onClick={() => history.push(`/${currentRole}${EMPLOYEE_SEARCH}`)}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <EmployeePanel employee={employee} panelHeader="User information" />
                {/* <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={employee.firstName}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={employee.lastName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            International Name
                          </label>
                          <Input
                            id="input-username"
                            value={employee.internationalName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            id="input-email"
                            value={employee.email}
                            disabled={true}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Office address
                          </label>
                          <Input
                            disabled={true}
                            defaultValue={employee.officeAddressStreet}
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            disabled={true}
                            defaultValue={employee.officeAddressCity}
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            disabled={true}
                            defaultValue={employee.officeAddressCountry}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            id="input-postal-code"
                            disabled={true}
                            value={
                              employee.officeAddressPostalCode
                                ? employee.officeAddressPostalCode
                                : 10872
                            }
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company Data
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Title
                          </label>
                          <Input
                            id="title"
                            value={employee.title}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Phone
                          </label>
                          <Input
                            id="companyPhone"
                            value="+372 77645322"
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Code
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.companyCode}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Business Unit
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.businessUnit}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Cost Center
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.costCenter}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Management Group
                          </label>
                          <Input
                            id="input-postal-code"
                            value={employee.managementGroup}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

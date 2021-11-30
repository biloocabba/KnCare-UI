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
// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";
import React from "react";
// react plugin used to create charts
import { Bar, Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import {
  lineActiveMembersData,
  pieByBusinessUnits,
  pieByRole,
  barTurnoverData,
} from "variables";

const ChartsPage = () => {
  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <div>
          <Row>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Onboarded last month
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">25</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i class="fas fa-user-graduate"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">&nbsp;</p>
                  {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Offboarded last month
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">7</span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="fas fa-sign-out-alt"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">&nbsp;</p>
                  {/* <p className="mt-3 mb-0 text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p> */}
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Business Unit
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        Sea Logistics
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                        <i class="fas fa-crown"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 8
                    </span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" xl="3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <div className="col">
                      <CardTitle
                        tag="h5"
                        className="text-uppercase text-muted mb-0"
                      >
                        Country
                      </CardTitle>
                      <span className="h2 font-weight-bold mb-0">
                        Germany
                      </span>
                    </div>
                    <Col className="col-auto">
                      <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                        <i class="fas fa-crown"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">
                    <span className="text-success mr-2">
                      <i className="fa fa-arrow-up" /> 11
                    </span>
                    <span className="text-nowrap">Since last month</span>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Care Members</h6>
                <h5 className="h3 mb-0">Onboarded/Offboarded</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={barTurnoverData.data}
                    options={barTurnoverData.options}
                    className="chart-canvas"
                    id="chart-bar-stacked"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Care Members</h6>
                <h5 className="h3 mb-0">Total</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={lineActiveMembersData.data}
                    options={lineActiveMembersData.options}
                    id="chart-sales"
                    className="chart-canvas"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* <Col xl="6">
              <Card>
                <CardHeader>
                  <h6 className="surtitle">Overview</h6>
                  <h5 className="h3 mb-0">Offboarding</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                      className="chart-canvas"
                      id="chart-bars"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col> */}
        </Row>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Composition</h6>
                <h5 className="h3 mb-0">By Role</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieByRole.data}
                    options={pieByRole.options}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Growth</h6>
                <h5 className="h3 mb-0">Sales value</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                    id="chart-points"
                    className="chart-canvas"
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Composition</h6>
                <h5 className="h3 mb-0">By Business Units</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieByBusinessUnits.data}
                    options={pieByBusinessUnits.options}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Partners</h6>
                <h5 className="h3 mb-0">Affiliate traffic</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={chartExample6.data}
                    options={chartExample6.options}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Overview</h6>
                <h5 className="h3 mb-0">Product comparison</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={chartExample7.data}
                    options={chartExample7.options}
                    className="chart-canvas"
                    id="chart-bar-stacked"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default ChartsPage;

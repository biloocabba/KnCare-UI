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
import { BoxHeader } from "components/headers";
// react plugin used to create charts
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
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
  barTurnoverData,
  doughnutByGender,
  lineActiveMembersData,
  pieByAge,
  pieByBusinessUnits,
  pieByRole,
  pieByWorkingTime,
} from "variables/charts";

export const ChartsPage = () => {
  return (
    <>
      <BoxHeader />
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
                        <i className="fas fa-user-graduate"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">&nbsp;</p>
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
                        <i className="fas fa-sign-out-alt"></i>
                      </div>
                    </Col>
                  </Row>
                  <p className="mt-3 mb-0 text-sm">&nbsp;</p>
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
                        <i className="fas fa-crown"></i>
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
                        <i className="fas fa-crown"></i>
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
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Care Members</h6>
                <h5 className="h3 mb-0">By Gender</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Doughnut
                    data={doughnutByGender.data}
                    options={doughnutByGender.options}
                    className="chart-canvas"
                    id="chart-doughnut"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Care Members</h6>
                <h5 className="h3 mb-0">By Age</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieByAge.data}
                    options={pieByAge.options}
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
                <h6 className="surtitle">Care Members</h6>
                <h5 className="h3 mb-0">By Working Time (Years)</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieByWorkingTime.data}
                    options={pieByWorkingTime.options}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
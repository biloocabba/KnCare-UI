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
import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
} from "reactstrap";
// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
// import {
//   chartOptions,
//   parseOptions,
//   chartExample2,
//   chartExample3,
//   chartExample4,
//   chartExample5,
//   chartExample6,
//   chartExample7,
// } from "variables/charts.js";

var colors = {
  gray: {
    100: "#f6f9fc",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#8898aa",
    700: "#525f7f",
    800: "#32325d",
    900: "#212529",
  },
  theme: {
    default: "#172b4d",
    primary: "#003369",
    secondary: "#f4f5f7",
    info: "#0099DA",
    success: "#08C792",
    danger: "#ED2939",
    warning: "#fb6340",
    blue: "#003369",
    indigo: "#5603ad",
    purple: "#8965e0",
    pink: "#f3a4b5",
    red: "#ED2939",
    orange: "#fb6340",
    yellow: "#ffd600",
    green: "#08C792",
    teal: "#0099DA",
    cyan: "#2bffc6",
  },
  black: "#12263F",
  white: "#FFFFFF",
  transparent: "transparent",
};

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

let activeMembersData = {
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.gray[200],
            zeroLineColor: colors.gray[200],
          },
          ticks: {},
        },
      ],
    },
  },
  data: {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Members",
        data: [102, 122, 108, 128, 148, 144, 174, 202, 198],
      },
    ],
  },
};

const pieByRole = {
  data: {
    labels: [
      "Advocates",
      "Trainer",
      "Sponsor",
      "Country Leader",
      "Region Leader",
      "Global Leader",
    ],
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          40,
          14,
          6,
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["blue"],
          colors.theme["indigo"],
        ],
        label: "Dataset 1",
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "top",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

const pieByBunits = {
  data: {
    labels: [
      "Road Logistics",
      "Sales",
      "Human Resources",
      "QSHE",
      "IT",
      "Sea Logistics",
      "Marketing",
      "Air Logistics",
    ],
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          colors.theme["danger"],
          colors.theme["warning"],
          colors.theme["success"],
          colors.theme["primary"],
          colors.theme["info"],
          colors.theme["blue"],
          colors.theme["indigo"],
          colors.theme["purple"],
        ],
        label: "Dataset 1",
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "top",
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

// Example 7 of Chart inside src/views/pages/Charts.js
const turnoverData = {
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Offboarded",
        backgroundColor: colors.theme["danger"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
      {
        label: "Onboarded",
        backgroundColor: colors.theme["success"],
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        maxBarThickness: 10,
      },
    ],
  },
  options: {
    tooltips: {
      mode: "index",
      intersect: false,
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};

function Charts() {
  // if (window.Chart) {
  //   parseOptions(Chart, chartOptions());
  // }
  return (
    <>
      <GradientEmptyHeader name="Groups" />
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
                      </span>{" "}
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
                      </span>{" "}
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
                    </span>{" "}
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
                    </span>{" "}
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
                    data={turnoverData.data}
                    options={turnoverData.options}
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
                    data={activeMembersData.data}
                    options={activeMembersData.options}
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
                    data={pieByBunits.data}
                    options={pieByBunits.options}
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
}

export default Charts;

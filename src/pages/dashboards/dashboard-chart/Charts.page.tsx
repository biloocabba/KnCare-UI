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
import { Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { ThemeColors } from "types";

import { StatisticsPanel } from "./Statistics.panel";

import { TurnoverChartPanel, WorkforceChartPanel } from "./";

export const ChartsPage = () => {
  // const [chartsLoaded, setChartsLoaded] = useState<boolean>(false);

  //const [turnoverError, setTurnoverError] = useState<ApiResponse<TurnoverChart[]>>();
  // const [membersOverTimeLoaded, setMembersOverTimeLoaded] = useState<boolean>(false);
  // const [pieMembersByGenderLoaded, setPieMembersByGenderLoaded] = useState<boolean>(false);
  // const [pieByBusinessUnitsLoaded, setPieByBusinessUnitsLoaded] = useState<boolean>(false);
  // const [doughnutByGenderLoaded, setDoughnutByGenderLoaded] = useState<boolean>(false);
  // const [pieByAgeLoaded, setPieByAgeLoaded] = useState<boolean>(false);
  // const [pieByWorkingTimeLoaded, setPieByWorkingTimeLoaded] = useState<boolean>(false);

  // const [membersOverTime, setMembersOverTime] = useState<ILineChart>(emptyLineChartUI);
  // const [pieMembersByGender, setPieMembersByGender] = useState<IPieChart>(emptyIPieChartUI);
  // const [pieByBusinessUnits, setPieByBusinessUnits] = useState<IPieChart>(emptyIPieChartUI);
  // const [doughnutByGender, setDoughnutByGender] = useState<IDoughnutChart>(emptyIDoughnutChartUI);
  // const [pieByAge, setPieByAge] = useState<IPieChart>(emptyIPieChartUI);
  // const [pieByWorkingTime, setPieByWorkingTime] = useState<IPieChart>(emptyIPieChartUI);

  // const attritionByMonth: IBarChart = { data: [], options: [] };
  // const membersOverTime: ILineChart = emptyLineChartUI;
  // const attritionByMonth: IBarChart = emptyIBarChartUI;
  // const attritionByMonth: IBarChart = emptyIBarChartUI;

  return (
    <>
      <BoxHeader />
      <Container className="mt--6" fluid>
        <StatisticsPanel />

        <Row>
          <Col xl="6">
            <TurnoverChartPanel />
          </Col>
          <Col xl="6">
            <WorkforceChartPanel />
          </Col>
        </Row>

        <Row>
          <Col xl="4">
            <div className="chart" style={{ backgroundColor: ThemeColors.theme.neutral1 }}>
              Pie by Gender here
            </div>
          </Col>
          <Col xl="4">
            <div className="chart" style={{ backgroundColor: ThemeColors.theme.neutral2 }}>
              Pie by Role here
            </div>
          </Col>
          <Col xl="4">
            <div className="chart" style={{ backgroundColor: ThemeColors.theme.neutral3 }}>
              Pie by Bunits here
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <div className="chart" style={{ backgroundColor: ThemeColors.theme.neutral4 }}>
              Pie by Age here
            </div>
          </Col>
          <Col xl="6">
            <div className="chart" style={{ backgroundColor: ThemeColors.theme.neutral5 }}>
              Pie by Seniority here
            </div>
          </Col>
        </Row>
        {/*
          <Col xl="6">
            <Card>
              <CardBody>
                <div className="chart">
                  {pieMembersByGenderLoaded ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <Pie
                      data={pieMembersByGender.data}
                      options={pieMembersByGender.options}
                      className="chart-canvas"
                      id="chart-pie"
                    />
                  )}
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
                  {pieByBusinessUnitsLoaded ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <Pie
                      data={pieByBusinessUnits.data}
                      options={pieByBusinessUnits.options}
                      className="chart-canvas"
                      id="chart-pie"
                    />
                  )}
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
                  {doughnutByGenderLoaded ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <Doughnut
                      data={doughnutByGender.data}
                      options={doughnutByGender.options}
                      className="chart-canvas"
                      id="chart-doughnut"
                    />
                  )}
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
                  {pieByAgeLoaded ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <Pie
                      data={pieByAge.data}
                      options={pieByAge.options}
                      className="chart-canvas"
                      id="chart-pie"
                    />
                  )}
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
                  {pieByWorkingTimeLoaded ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <Pie
                      data={pieByWorkingTime.data}
                      options={pieByWorkingTime.options}
                      className="chart-canvas"
                      id="chart-pie"
                    />
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>*/}
      </Container>
    </>
  );
};

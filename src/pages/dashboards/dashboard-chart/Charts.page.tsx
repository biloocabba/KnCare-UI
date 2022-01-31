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

import { Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { StatisticsPanel } from "./Statistics.panel";

import {
  TurnoverChartPanel,
  WorkforceChartPanel,
  GenderChartPanel,
  AgeChartPanel,
  BusinessUnitChartPanel,
  RoleChartPanel,
  SeniorityChartPanel,
} from "./";

export const ChartsPage = () => {
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
            <GenderChartPanel />
          </Col>
          <Col xl="4">
            <RoleChartPanel />
          </Col>
          <Col xl="4">
            <BusinessUnitChartPanel />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <AgeChartPanel />
          </Col>
          <Col xl="6">
            <SeniorityChartPanel />
          </Col>
        </Row>
      </Container>
    </>
  );
};

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

import { useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { EMPLOYEE_SEARCH, CARE_MEMBER_CREATE } from "pages/users";
import { EmployeePanel } from "pages/users/panels";
import { Employee, RouteParams } from "types";

import { selectEmployeeById } from "redux/features/employee";

export const EmployeeDetailsPage = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();

  const employee: Employee = useSelector(selectEmployeeById(parseInt(id))) as Employee;
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
                      onClick={() => history.push(`/${currentRole}${CARE_MEMBER_CREATE}/${id}`)}
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
                <EmployeePanel employee={employee} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

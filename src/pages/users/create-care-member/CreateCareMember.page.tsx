import { useHistory } from "react-router";

import { useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useAlerts } from "hooks";
import { EMPLOYEE_SEARCH, CareMemberPanel } from "pages/users";
import {
  RouteParams,
  SelectOption,
  CareMember,
  Employee,
  CareMemberSaveRequest,
  formatDateAsDD_MM_YYYY,
  addDays,
} from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectEmployeeById,
  createCareMember,
  selectCareMemberState,
} from "redux/features";

export const CreateCareMemberPage = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const employeeIdAsInt: number = parseInt(id);

  const currentRole = "admin";
  const employee: Employee = useAppSelector(selectEmployeeById(employeeIdAsInt)) as Employee;
  const roles: SelectOption[] = useAppSelector(selectAllRolesDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const careMemberState = useAppSelector(selectCareMemberState);
  const { alert, setSaveSent } = useAlerts(careMemberState, "Care Member Created");

  const createDefaultCareMember = (): CareMember => {
    console.log("createDefaultCareMember Called");
    const nowAsDate: Date = new Date();
    const oneYearFromNowAsDate: Date = addDays(nowAsDate, 365);

    const onboardingDate: string = formatDateAsDD_MM_YYYY(nowAsDate);
    const defaultOffBoarding: string = formatDateAsDD_MM_YYYY(oneYearFromNowAsDate);

    return {
      ...employee,
      employeeId: employeeIdAsInt,
      onboardingDate,
      offboardingDate: defaultOffBoarding,
      id: CREATE_ENTITY_ID,
    };
  };

  const saveCareMember = (careMemberSaveRequest: CareMemberSaveRequest): void => {
    dispatch(createCareMember(careMemberSaveRequest));
    setSaveSent(true);
  };

  const careMember: CareMember = createDefaultCareMember();

  return (
    <>
      {alert}
      <BoxHeader />

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Care Member</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      type="button"
                      color="info"
                      href="#dsfkjlsi39ds9d97876s7d"
                      onClick={() => history.push(`/${currentRole}${EMPLOYEE_SEARCH}`)}
                    >
                      Back to Employees
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <CareMemberPanel
                  careMember={careMember}
                  groupOptions={groups}
                  roleOptions={roles}
                  onSave={saveCareMember}
                  buttonName={`Invite ${employee.firstName} ${employee.lastName}`}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

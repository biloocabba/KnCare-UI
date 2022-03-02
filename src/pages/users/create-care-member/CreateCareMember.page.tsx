import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectEmployeeById,
  createCareMember,
  selectCareMemberState,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { EMPLOYEE_SEARCH, CareMemberPanel } from "pages/users";

import { useAlerts } from "hooks";
import { SelectOption, CareMember, Employee, CareMemberSaveRequest } from "types";
import { CREATE_ENTITY_ID, DATE_FILTER_FORMAT } from "variables/app.consts";

export const CreateCareMemberPage = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const employeeIdAsInt: number = parseInt(id);

  const currentRole = "admin";
  const employee: Employee = useAppSelector(selectEmployeeById(employeeIdAsInt)) as Employee;
  const roles: SelectOption[] = useAppSelector(selectAllRolesDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const careMemberState = useAppSelector(selectCareMemberState);
  const { alert, setSaveSent, setSuccessMessage } = useAlerts(careMemberState);

  const createDefaultCareMember = (): CareMember => {
    const nowAsDate = moment.now();
    const oneYearFromNowAsDate = moment().add(365, "days");

    const onboardingDate: string = moment(nowAsDate).format(DATE_FILTER_FORMAT);
    const defaultOffBoarding: string = moment(oneYearFromNowAsDate).format(DATE_FILTER_FORMAT);

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
    setSuccessMessage("Care Member Created");
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
                      onClick={() => navigate(`/${currentRole}${EMPLOYEE_SEARCH}`)}
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

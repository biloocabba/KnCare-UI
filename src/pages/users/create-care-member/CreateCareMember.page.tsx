/* eslint-disable no-unused-vars */
import { useHistory } from "react-router";

import { useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { EMPLOYEE_SEARCH } from "pages/users";
import { CareMemberPanel } from "pages/users/panels";
import { RouteParams, SelectOption, CareMember, Employee, CareMemberSaveRequest } from "types";
import { CREATE_CARE_MEMBER_ID } from "types/app.consts";
import { formatDateAsDD_MM_YYYY, addDays } from "types/utils";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createCareMember } from "redux/features/care-member";
import { selectEmployeeById } from "redux/features/employee";

export const CreateCareMemberPage = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useAppDispatch();

  //Use selector from slices
  const employeeIdAsInt: number = parseInt(id);

  const currentRole = "admin";
  const employee: Employee = useAppSelector(selectEmployeeById(employeeIdAsInt)) as Employee;
  const rolesAsOptions: SelectOption[] = [];
  const groupsAsOptions: SelectOption[] = [];

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
      id: CREATE_CARE_MEMBER_ID,
    };
  };

  const careMember: CareMember = createDefaultCareMember();

  console.log(careMember);

  // const [careMember, setCareMember] = useState(careMemberDefaultData);

  // const [role, setRole] = useState(careRoles[0]);
  // const [group, setGroup] = useState(groupOptions[0]);
  // const [offboardingDate, setOffboardingDate] = useState(defaultOffBoardDate);
  // const [careMember, setCareMember] = useState(defaultOffBoardDate);
  // const onBoardDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() - 1}`;
  // let [employee, setEmployee] = useState();

  // if(!employee){
  //   employee=employeesData.find(employee => employee.id === parseInt(id));
  //   setEmployee(employee);
  //   setCareMember({...careMember,...employee})
  // }

  // const saveCareMember = () => {
  //   const careMemberInfo = {
  //     onBoardDate: onBoardDate,
  //     offBoardDate: offboardingDate,
  //     employee: employee.id,
  //     role: "care Advocate",
  //     group: group,
  //     careMember: true,
  //   };

  //   console.log("careMemberInfo", careMemberInfo);

  //   /*
  //   dispatch(createCareMember(careMemberInfo))
  //     .then(data =>
  //       setCareMember({
  //         onBoardDate: onBoardDate,
  //         offBoardDate: offboardingDate,
  //         employee: employee.id,
  //         role: "care Advocate",
  //         group: group,
  //       }),
  //     )
  //     .catch(error => {
  //       console.log(error);
  //     });
  //     */
  // };

  // const filterOptions = (group, input) => {
  //   if (input) {
  //     return group.value === groupOptions[0].value;
  //   }
  //   return true;
  // };

  const saveCareMember = (careMemberSaveRequest: CareMemberSaveRequest): void => {
    dispatch(createCareMember(careMemberSaveRequest));
  };

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
                  groupOptions={groupsAsOptions}
                  roleOptions={rolesAsOptions}
                  onSave={saveCareMember}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

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

// import { createCareMember } from "../../../actions/careMembers";
import { BoxHeader } from "components/headers";
// import { employeesData } from 'mock-data/employees.js'
import { selectEmployeeById } from 'redux/features/employee';
import { createCareMember } from 'redux/features/care-member';

import { EMPLOYEE_SEARCH } from "pages/users";
import { CareMemberPanel } from "../panels";
import { CREATE_CARE_MEMBER_ID } from "app.consts";

export const CreateCareMemberPage = (props) => {

  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  //Use selector from slices
  const currentRole = "admin";
  const employee =useSelector(selectEmployeeById(parseInt(id)));
  const rolesAsOptions =[]; 
  const groupsAsOptions =[];
  
  /*
  const careRoles = useSelector(state => {
    return state.categories.careRoles.map(role => {
      return { value: role.id, label: role.name };
    });
  });

  const groups = useSelector(state => {
    return state.groups.map(group => {
      return { value: group.id, label: group.name };
    });
  });

  const employees = useSelector(state => state.employees);
  let employee = employees.find(employee => employee.id === parseInt(id));

 const groupOptions = [
    { value: 0, label: "All", groupIds: groups.map(group => group.value) },
    ...groups,
  ];

*/

  const date = new Date();
  const onBoardDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear() - 1}`;
  const defaultOffBoardDate = date.setDate(date.getDate() + 365);

  const careMember = {
    ...employee,
    onBoardDate,
    offBoardDate: defaultOffBoardDate,
    role: "",
    group: "",    
    id:CREATE_CARE_MEMBER_ID,
    employeeId:employee.id
  };

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

  const saveCareMember = (careMember) => {
    dispatch(createCareMember(careMember));
  }


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
                  onSave ={saveCareMember}   
                  // isCreate={true}
                />              
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { CareMemberPanel } from "../panels";
import { careMembersData } from 'mock-data/careMembers.js'

import { EMPLOYEE_SEARCH } from "pages/users";

export const EditCareMemberPage = (props) => {

  let { id } = useParams(); 

  const careRoles =[];
  const groups = [];
  const history =useHistory();

  //const careMembers = careMembersData;
  //this should be in selectors
  /*
  const careRoles = useSelector(state => {
    return state.categories.careRoles.map(role => {
      return { value: role.id, label: role.name };
    });
  });
  const careMembers = useSelector(state => state.careMembers);
  const groups = useSelector(state => {
    return state.groups.map(group => {
      return { value: group.id, label: group.name };
    });
  });


  const findCareMember = () => {
    setCareMember(
      careMembers.find(careMember => careMember.id === parseInt(id)),
    );
  };
  
  useEffect(() => {
    findCareMember();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  const currentRole = "admin";
  const [careMember, setCareMember] = useState();
  const [role, setRole] = useState(
    careMember ? (careMember.role ? careMember.role : "") : "",
  );
  const [group, setGroup] = useState([]);

  
  const findCareMember = () => {
    const careMemberFound =careMembersData.find(careMember => careMember.id === parseInt(id))
    setCareMember(careMemberFound);
  };
  
  // useEffect(() => {
  //   console.log(careMembersData)
  //   console.log(id)
  //   findCareMember();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  // if (!careMember) {
  //   return <div>No care member found</div>;
  // }

  if(!careMember){
    findCareMember();
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
                    onClick={e => {
                      e.preventDefault();
                      history.push(`/${currentRole}${EMPLOYEE_SEARCH}`)
                    }}
                  >
                    Back to Employees
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <CareMemberPanel 
                careMember={careMember}
                setCareMember={setCareMember}      
              />        
              </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
}
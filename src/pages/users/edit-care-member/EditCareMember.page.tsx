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

import { CARE_MEMBER_SEARCH} from "pages/users";
import { selectCareMemberById,updateCareMember } from "redux/features/care-member";
import { CareMember, CareMemberSaveRequest,RouteParams, SelectOption} from "types";
import { IUpdated } from "redux/features/common";
import { useAppDispatch, useAppSelector } from "redux/app";



export const EditCareMemberPage = () => {

  const { id } = useParams<RouteParams>();
  const history =useHistory();
  const dispatch = useAppDispatch();

  const currentRole = "admin";
  const careMember =useAppSelector(selectCareMemberById(parseInt(id))) as CareMember;
  const rolesAsOptions:SelectOption[] =[]; 
  const groupsAsOptions:SelectOption[] =[];
 

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


  // const [careMember, setCareMember] = useState();
  // const [role, setRole] = useState(
  //   careMember ? (careMember.role ? careMember.role : "") : "",
  // );
  // const [group, setGroup] = useState([]);

  
  // const findCareMember = () => {
  //   const careMemberFound =careMembersData.find(careMember => careMember.id === parseInt(id))
  //   setCareMember(careMemberFound);
  // };
  
  // useEffect(() => {
  //   console.log(careMembersData)
  //   console.log(id)
  //   findCareMember();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  // if (!careMember) {
  //   return <div>No care member found</div>;
  // }

  // if(!careMember){
  //   findCareMember();
  // }
 
   const saveCareMember = (careMemberRequest: CareMemberSaveRequest) => {
    let httpUpdateRequest:IUpdated<CareMemberSaveRequest>= {id:careMemberRequest.id, body: careMemberRequest};
    dispatch(updateCareMember(httpUpdateRequest));
   }

  // const saveCareMember = (careMember) => {
  //   let careMemberUpdateRequest= {id:careMember.id, body:careMember};
  //   dispatch(updateCareMember(careMemberUpdateRequest));
  // }

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
                  <h3 className="mb-0">Care Member Details</h3>
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
                      history.push(`/${currentRole}${CARE_MEMBER_SEARCH}`)
                    }}
                  >
                    Back to Care Members
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
            <CareMemberPanel 
                  careMember={careMember}
                  employeeId={ careMember.employeeId }
                  groupOptions={groupsAsOptions}
                  roleOptions={rolesAsOptions}
                  onSave ={saveCareMember}   
                  // isCreate={false}
                />        
              </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
}
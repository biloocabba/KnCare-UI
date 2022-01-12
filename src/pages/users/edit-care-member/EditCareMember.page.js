import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams,useHistory } from "react-router-dom";

import {
  Container
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { CareMemberPanel } from "../panels";
import { careMembersData } from 'mock-data/careMembers.js'


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

  const [careMember, setCareMember] = useState();
  const [role, setRole] = useState(
    careMember ? (careMember.role ? careMember.role : "") : "",
  );
  const [group, setGroup] = useState([]);

  
  const findCareMember = () => {
    console.log(careMembersData)
    console.log(id)
    const careMemberFound =careMembersData.find(careMember => careMember.id === parseInt(id))
    console.log(careMemberFound)
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
        <CareMemberPanel 
           careMember={careMember}
           setCareMember={setCareMember}      
        />        
      </Container>
    </>
  );
}
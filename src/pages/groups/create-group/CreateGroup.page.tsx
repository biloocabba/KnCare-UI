import { useState } from "react";
import { Container } from "reactstrap";
import { EditGroupPanel } from "..";
import { BoxHeader } from "../../../components/headers";
import { useAppDispatch, useAppSelector } from "../../../redux/app";
import { createGroup } from "../../../redux/features";
import { Group } from "../../../types/types";

export const CreateGroupPage = () => {
  const initialState:Partial<Group> = {
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useAppDispatch();
  const groupsState = useAppSelector(state => state.group);

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);
  // const [alert, setAlert] = useState(groupsState.isError);


  const onSave = () => {
    dispatch(createGroup(group));
  };


  return (
    <>
      <BoxHeader/>
      {alert}

      <Container className="mt--6" fluid>
        {group && (
          <EditGroupPanel
            group={group as Group}
            setGroup={setGroup}
            onSave={onSave}
            groupsState={groupsState}
            addMembersCollapse={addMembersCollapse}
            setAddMembersCollapse={setAddMembersCollapse}
          />
        )}
      </Container>
    </>
  );
};

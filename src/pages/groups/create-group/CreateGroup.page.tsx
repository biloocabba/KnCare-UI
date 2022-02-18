import { useState } from "react";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useAlerts } from "hooks";
import { Group } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createGroup, selectGroupState } from "redux/features";

import { EditGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState: Partial<Group> = {
    id: CREATE_ENTITY_ID,
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useAppDispatch();
  const groupsState = useAppSelector(selectGroupState);

  const { alert, setSaveSent, setSuccessMessage } = useAlerts(groupsState);

  const [group, setGroup] = useState(initialState);

  const onCreate = () => {
    dispatch(createGroup(group));
    setSuccessMessage("Group Created");
    setSaveSent(true);
  };
  return (
    <>
      {alert}
      <BoxHeader />

      <Container className="mt--6" fluid>
        <EditGroupPanel
          group={group as Group}
          setGroup={setGroup}
          onSave={onCreate}
          isLoading={groupsState.isLoading}
        />
      </Container>
    </>
  );
};

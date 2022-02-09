import { useState } from "react";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useAlerts } from "hooks";
import { Group } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createGroup, selectGroupState } from "redux/features";

import { EditGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState: Partial<Group> = {
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useAppDispatch();
  const groupsState = useAppSelector(selectGroupState);

  const { alert, setSaveSent } = useAlerts(groupsState, "Group Created");

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);

  const onSave = () => {
    dispatch(createGroup(group));
    setSaveSent(true);
  };
  return (
    <>
      {alert}
      <BoxHeader />

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

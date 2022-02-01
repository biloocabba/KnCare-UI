import { useState } from "react";

import { Container } from "reactstrap";

import { BoxHeader } from "components/headers";

import { Group } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createGroup } from "redux/features";

import { EditGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState: Partial<Group> = {
    // @todo make this use real id
    id: Math.floor(Math.random() * 1000) + 1,
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useAppDispatch();
  const groupsState = useAppSelector(state => state.group);

  const [group, setGroup] = useState(initialState);

  const onCreate = () => {
    dispatch(createGroup(group));
  };

  return (
    <>
      <BoxHeader />
      {alert}

      <Container className="mt--6" fluid>
        {group && (
          <EditGroupPanel
            group={group as Group}
            setGroup={setGroup}
            onSave={onCreate}
            groupsState={groupsState}
          />
        )}
      </Container>
    </>
  );
};

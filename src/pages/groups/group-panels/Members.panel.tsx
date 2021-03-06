import { useState } from "react";

import { Button, ButtonGroup, Col, Row } from "reactstrap";

import { CareMember, Group } from "types";

import { AddMemberPanel, CurrentMemberPanel } from ".";

// import { AddMemberPanel, CurrentMemberPanel } from ".";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
}

export const MembersPanel = ({ group, setGroup }: Props) => {
  const [currentMembersCollapse, setCurrentMembersCollapse] = useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  const [currentGroupMembers, setCurrentGroupMembers] = useState<CareMember[]>([]);

  const toggleCurrentMembers = () => {
    setCurrentMembersCollapse(!currentMembersCollapse);
    setAddMemberCollapse(false);
  };

  const toggleAddMember = () => {
    setAddMemberCollapse(!addMemberCollapse);
    setCurrentMembersCollapse(false);
  };

  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={toggleAddMember} color="success">
          Add new Member
        </Button>
        <Button onClick={toggleCurrentMembers} disabled={group.members.length === 0} color="info">
          {currentMembersCollapse ? "Hide members" : "Show members"} ({group.members.length}{" "}
          members)
        </Button>
      </ButtonGroup>

      <Row>
        <Col lg="12">
          <AddMemberPanel
            addMemberCollapse={addMemberCollapse}
            group={group}
            setGroup={setGroup}
            currentGroupMembers={currentGroupMembers}
            setCurrentGroupMembers={setCurrentGroupMembers}
          />
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <CurrentMemberPanel
            currentMembersCollapse={currentMembersCollapse}
            group={group}
            currentGroupMembers={currentGroupMembers}
            setCurrentGroupMembers={setCurrentGroupMembers}
          />
        </Col>
      </Row>
    </>
  );
};

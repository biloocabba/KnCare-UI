import { useRef, useState } from "react";

import { useHistory } from "react-router";

import { Row, Col, Collapse, Spinner, Card, CardHeader, ButtonGroup, Button } from "reactstrap";

import { ReactTable } from "components/widgets";

import { employeesTableColumns } from "pages/users";
import { Employee, Group } from "types";

import { useAppSelector } from "redux/app";
import { selectEmployeesByIds, selectEmployeesState } from "redux/features";

import { AddMemberPanel } from ".";

interface Props {
  group: Group;
  setGroup: (group: Group) => void;
}

export const MembersPanel = ({ group, setGroup }: Props) => {
  const history = useHistory();

  const groupsState = useAppSelector(state => state.group);
  const employeesState = useAppSelector(selectEmployeesState);
  const groupMembers = useAppSelector(selectEmployeesByIds(group.members)) as unknown as Employee[];

  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const [currentMembersCollapse, setCurrentMembersCollapse] = useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  const tableRef = useRef();

  const toggleCurrentMembers = () => {
    setCurrentMembersCollapse(!currentMembersCollapse);
    setAddMemberCollapse(false);
  };

  const toggleAddMember = () => {
    setAddMemberCollapse(!addMemberCollapse);
    setCurrentMembersCollapse(false);
  };

  const memberDetails = (e: any) => {
    const { id } = e.target;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const memberRemove = () => {};

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
          <Collapse isOpen={addMemberCollapse}>
            <AddMemberPanel
              group={group}
              setGroup={setGroup}
              selectedRows={selectedEmployees}
              setSelectedRows={setSelectedEmployees}
              tableRef={tableRef}
            />
            {groupsState.isLoading ? (
              <div className="text-center">
                <Spinner />
              </div>
            ) : (
              <ReactTable
                data={employeesState.entities}
                keyField="id"
                columns={employeesTableColumns}
                selectedRows={selectedEmployees}
                setSelectedRows={setSelectedEmployees}
                tableRef={tableRef}
              />
            )}
          </Collapse>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <Collapse isOpen={currentMembersCollapse}>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Group members</h3>
                <p className="text-sm mb-0">Care Members</p>
              </CardHeader>

              {employeesState.isLoading && !groupMembers ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={groupMembers}
                  keyField="id"
                  columns={employeesTableColumns}
                  onViewDetailsClick={memberDetails}
                  onDeleteItemClick={memberRemove}
                  selectedRows={selectedEmployees}
                  setSelectedRows={setSelectedEmployees}
                />
              )}
            </Card>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

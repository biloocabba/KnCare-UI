import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Form,
  Row,
  Spinner,
} from "reactstrap";

import { BoxHeader } from "components/headers";
import { InputField, ReactTable } from "components/widgets";

import { useAlerts } from "hooks";
import { employeesTableColumns } from "pages/users";
import { Group } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  deleteGroup,
  findGroupById,
  partialUpdateGroup,
  selectEmployeesState,
  selectGroupById,
  selectGroupState,
  updateGroup,
} from "redux/features";

import { AddMemberPanel } from "..";

interface RouteParams {
  id: string;
}

export const GroupDetailsPage = () => {
  const { id } = useParams<RouteParams>();
  const groupId = parseInt(id);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const groupState = useAppSelector(selectGroupById(groupId));
  const groupsState = useAppSelector(selectGroupState);
  const employeesState = useAppSelector(selectEmployeesState);

  const [group, setGroup] = useState(groupState as Group);

  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [currentMembersCollapse, setCurrentMembersCollapse] = useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  const { alert, setSaveSent } = useAlerts(groupsState, "Group Updated");

  useEffect(() => {
    dispatch(findGroupById(groupId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = () => {
    if (group) {
      dispatch(updateGroup({ id: groupId, body: group }));
      setSaveSent(true);
    }
  };

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

  const onToggleGroupActive = () => {
    if (group) {
      dispatch(partialUpdateGroup({ id: groupId, body: { active: !group.active } }));
    }
  };
  const onDelete = () => {
    dispatch(deleteGroup(groupId));
  };

  return (
    <>
      {alert}
      <BoxHeader />

      <Container className="mt--6" fluid>
        <>
          {group && (
            <Row>
              <Col className="order-xl-1" xl="12">
                <Card>
                  <CardHeader>
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Group Details</h3>
                      </Col>
                    </Row>
                    <Row className="align-items-center py-4">
                      <Col lg="12" xs="7" className="text-right">
                        {group && group.active ? (
                          <Button type="button" color="danger" onClick={onToggleGroupActive}>
                            Deactivate Group
                          </Button>
                        ) : (
                          <Button type="button" color="success" onClick={onToggleGroupActive}>
                            Activate Group
                          </Button>
                        )}
                        <Button type="button" color="info" onClick={() => history.goBack()}>
                          Back to Search
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>

                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">Group Details</h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="10">
                            <InputField
                              id="input-group-name"
                              label="Group Name"
                              value={group.name}
                              type="text"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setGroup({
                                  ...group,
                                  name: e.target.value,
                                })
                              }
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col lg="10">
                            <InputField
                              id="input-group-description"
                              label="Group Description"
                              value={group.description}
                              type="text"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setGroup({
                                  ...group,
                                  description: e.target.value,
                                })
                              }
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col lg="12">
                            <Collapse isOpen={addMemberCollapse}>
                              <AddMemberPanel group={group} setGroup={setGroup} />
                            </Collapse>
                          </Col>
                        </Row>
                      </div>

                      <ButtonGroup className="d-flex">
                        <Button onClick={toggleAddMember} color="success">
                          Add new Member
                        </Button>
                        <Button
                          onClick={toggleCurrentMembers}
                          disabled={group.members.length === 0}
                          color="info"
                        >
                          {currentMembersCollapse ? "Hide members" : "Show members"} (
                          {group.members.length} members)
                        </Button>
                      </ButtonGroup>

                      <Row>
                        <Col lg="12">
                          <Collapse isOpen={currentMembersCollapse}>
                            <Card>
                              <CardHeader>
                                <h3 className="mb-0">Group members</h3>
                                <p className="text-sm mb-0">Care Members</p>
                              </CardHeader>

                              {employeesState.isLoading ? (
                                <div
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <Spinner />
                                </div>
                              ) : (
                                <ReactTable
                                  data={employeesState.entities}
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

                      <hr className="my-4" />

                      <div className="pl-lg-4">
                        <Row>
                          <Button color="primary" onClick={onSave}>
                            Save
                          </Button>
                          <Button color="danger" onClick={onDelete}>
                            Delete group
                          </Button>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </>
      </Container>
    </>
  );
};

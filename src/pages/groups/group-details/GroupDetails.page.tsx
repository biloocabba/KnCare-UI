import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  deleteGroup,
  findGroupById,
  partialUpdateGroup,
  selectGroupById,
  selectGroupState,
  updateGroup,
} from "redux/features";

import { BoxHeader } from "components/headers";
import { InputField } from "components/widgets";

import { useAlerts, useFeatureDisabledWarning } from "hooks";
import { Group } from "types";

import { MembersPanel } from "..";

export const GroupDetailsPage = () => {
  const { id } = useParams() as { id: string };
  const groupId = parseInt(id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const groupState = useAppSelector(selectGroupById(groupId));
  const groupsState = useAppSelector(selectGroupState);

  const [group, setGroup] = useState(groupState as Group);

  const { alert, setSaveSent, setSuccessMessage } = useAlerts(groupsState);

  const { fireAlert } = useFeatureDisabledWarning();

  useEffect(() => {
    dispatch(findGroupById(groupId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = () => {
    if (group) {
      dispatch(updateGroup({ id: groupId, body: group }));
      setSuccessMessage("Group Updated");
      setSaveSent(true);
    }
  };

  const onToggleGroupActive = () => {
    fireAlert();
    if (group) {
      dispatch(partialUpdateGroup({ id: groupId, body: { active: !group.active } }));
    }
  };
  const onDelete = () => {
    fireAlert();
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
                        <Button type="button" color="info" onClick={() => navigate(-1)}>
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
                      </div>

                      <MembersPanel group={group} setGroup={setGroup} />

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

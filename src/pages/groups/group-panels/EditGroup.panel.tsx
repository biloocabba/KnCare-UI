import { Button, Card, CardBody, CardHeader, Col, Form, Row, Spinner } from "reactstrap";

import { InputField } from "components/widgets";

import { Group } from "types";

import { StateType } from "redux/features";

import { MembersPanel } from ".";

interface EditGroupPanelProps {
  group: Group;
  setGroup: (group: Group) => void;
  onSave: (group: Group) => void;
  groupsState: StateType<Group>;
  onBackToSearchClick?: () => void;
}

export const EditGroupPanel = ({
  group,
  setGroup,
  onSave,
  groupsState,
  onBackToSearchClick,
}: EditGroupPanelProps) => {
  const { name, description } = group;

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Group Details</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">Group information</h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-name"
                      label="Group Name"
                      value={name}
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
                      value={description}
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

              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <Button color="success" onClick={() => onSave(group)}>
                    {groupsState.isLoading ? <Spinner /> : "Submit"}
                  </Button>

                  {onBackToSearchClick ? (
                    <Button color="info" onClick={onBackToSearchClick}>
                      Back to Search
                    </Button>
                  ) : (
                    <> &nbsp;</>
                  )}
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

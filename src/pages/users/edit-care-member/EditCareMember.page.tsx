import { useHistory, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { useAlerts } from "hooks";
import { CareMemberPanel } from "pages/users";
import { CareMember, CareMemberSaveRequest, RouteParams, SelectOption } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  IUpdated,
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
  selectCareMemberById,
  selectCareMemberState,
  updateCareMember,
} from "redux/features";

export const EditCareMemberPage = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const careMember = useAppSelector(selectCareMemberById(parseInt(id))) as CareMember;
  const roles: SelectOption[] = useAppSelector(selectAllRoleDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const careMemberState = useAppSelector(selectCareMemberState);
  const { alert, setSaveSent } = useAlerts(careMemberState, "Care Member Updated");

  const saveCareMember = (careMemberRequest: CareMemberSaveRequest) => {
    const httpUpdateRequest: IUpdated<CareMemberSaveRequest> = {
      id: careMemberRequest.id,
      body: careMemberRequest,
    };
    dispatch(updateCareMember(httpUpdateRequest));
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <BoxHeader />

      <Container className="mt--6" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Care Member Details</h3>
                  </Col>
                </Row>
                <Row className="align-items-center py-4">
                  <Col lg="12" xs="7" className="text-right">
                    <Button
                      type="button"
                      color="info"
                      href="#dsfkjlsi39ds9d97876s7d"
                      onClick={e => {
                        e.preventDefault();
                        history.goBack();
                        //history.push(`/admin${CARE_MEMBER_SEARCH}`);
                      }}
                    >
                      Back to Care Members
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <CareMemberPanel
                  careMember={careMember}
                  groupOptions={groups}
                  roleOptions={roles}
                  onSave={saveCareMember}
                  buttonName={`Update Care Member`}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

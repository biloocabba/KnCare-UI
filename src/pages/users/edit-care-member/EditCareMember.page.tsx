/* eslint-disable */
import { useParams, useHistory } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { BoxHeader } from "components/headers";

import { CARE_MEMBER_SEARCH } from "pages/users";
import { CareMember, CareMemberSaveRequest, RouteParams, SelectOption } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  selectAllGroupsDataAsSelectOptions,
  selectAllRoleDataAsSelectOptions,
  selectCareMemberById,
  updateCareMember,
} from "redux/features";

import { IUpdated } from "redux/features/common";

import { CareMemberPanel } from "../panels";

export const EditCareMemberPage = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const currentRole = "admin";
  const careMember = useAppSelector(selectCareMemberById(parseInt(id))) as CareMember;
  const roles: SelectOption[] = useAppSelector(selectAllRoleDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const saveCareMember = (careMemberRequest: CareMemberSaveRequest) => {
    const httpUpdateRequest: IUpdated<CareMemberSaveRequest> = {
      id: careMemberRequest.id,
      body: careMemberRequest,
    };
    dispatch(updateCareMember(httpUpdateRequest));
  };

  return (
    <>
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
                        history.push(`/${currentRole}${CARE_MEMBER_SEARCH}`);
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
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

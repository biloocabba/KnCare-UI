import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  IUpdated,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
  selectCareMemberById,
  selectCareMemberState,
  updateCareMember,
} from "redux/features";

import { BoxHeader } from "components/headers";

import { CareMemberPanel } from "pages/users";

import { useAlerts } from "hooks";
import { CareMember, CareMemberSaveRequest, SelectOption } from "types";

export const EditCareMemberPage = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const careMember = useAppSelector(selectCareMemberById(parseInt(id))) as CareMember;
  const roles: SelectOption[] = useAppSelector(selectAllRolesDataAsSelectOptions);
  const groups: SelectOption[] = useAppSelector(selectAllGroupsDataAsSelectOptions);

  const careMemberState = useAppSelector(selectCareMemberState);
  const { alert, setSaveSent, setSuccessMessage } = useAlerts(careMemberState);

  const onSaveCareMember = (careMemberRequest: CareMemberSaveRequest) => {
    const httpUpdateRequest: IUpdated<CareMemberSaveRequest> = {
      id: careMemberRequest.id,
      body: careMemberRequest,
    };
    dispatch(updateCareMember(httpUpdateRequest));
    setSuccessMessage("Care Member Updated");
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
                        navigate(-1);
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
                  onSave={onSaveCareMember}
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

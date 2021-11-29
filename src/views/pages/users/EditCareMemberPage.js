/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";

function EditCareMemberPage(props) {
  let { id } = useParams(); //see in routes path: "/users/careMember-details/:id",

  const careRoles = useSelector(state => {
    return state.categories.careRoles.map(role => {
      return { value: role.id, label: role.name };
    });
  });
  const careMembers = useSelector(state => state.careMembers);
  const groups = useSelector(state => {
    return state.groups.map(group => {
      return { value: group.id, label: group.name };
    });
  });
  const [careMember, setCareMember] = useState();

  useEffect(() => {
    findCareMember();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findCareMember = () => {
    setCareMember(
      careMembers.find(careMember => careMember.id === parseInt(id)),
    );
  };

  const [role, setRole] = useState(
    careMember ? (careMember.role ? careMember.role : "") : "",
  );
  // const [role, setRole] = useState(careMember.role || "");
  const [group, setGroup] = useState([]);
  // const [group, setGroup] = useState(careMember.groups[0]);

  if (!careMember) {
    return <div>No care member found</div>;
  }

  return (
    <>
      <GradientEmptyHeader name="careMembers" />
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
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Offboard from Care
                    </Button>
                    <Button
                      type="button"
                      color="info"
                      href="#pablo"
                      onClick={e =>
                        props.history.push("/admin/care-members")
                      }
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Care Member information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-onboard-date"
                          >
                            Onboard Date
                          </label>
                          <Input
                            id="input-onboard-date"
                            value={careMember.onboardingDate}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-offboard-date"
                          >
                            Auto Offboard Date
                          </label>
                          <Input
                            id="input-offboard-date"
                            value={careMember.offboardingDate}
                            onChange={e => e.preventDefault}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Care Role
                          </label>
                          <Select
                            id="careRole"
                            components={makeAnimated()}
                            // value={role.name}
                            defaultInputValue={role.name}
                            defaultValue={role.name}
                            options={careRoles}
                            onChange={item =>
                              setRole({ id: item.value, name: item.label })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Group
                          </label>
                          <Select
                            id="defaultGroup"
                            components={makeAnimated()}
                            defaultInputValue={group.name}
                            defaultValue={group.name}
                            options={groups}
                            onChange={item =>
                              setGroup({
                                id: item.value,
                                name: item.label,
                              })
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            id="input-first-name"
                            value={careMember.firstName}
                            type="text"
                            disabled={true}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            id="input-last-name"
                            value={careMember.lastName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            International Name
                          </label>
                          <Input
                            id="input-username"
                            value={careMember.internationalName}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            id="input-email"
                            value={careMember.email}
                            disabled={true}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            disabled={true}
                            value={careMember.officeAddressStreet}
                            id="input-address"
                            placeholder="Office Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            disabled={true}
                            value={careMember.officeAddressCity}
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            disabled={true}
                            value={careMember.officeAddressCountry}
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            disabled={true}
                            value={careMember.officeAddressPostalCode}
                            id="input-postal-code"
                            placeholder="Postal code"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">
                    Company Data
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Title
                          </label>
                          <Input
                            id="title"
                            value={careMember.title}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Phone
                          </label>
                          <Input
                            id="companyPhone"
                            value="+372 77645322"
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Company Code
                          </label>
                          <Input
                            id="input-postal-code"
                            value={careMember.companyCode}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Business Unit
                          </label>
                          <Input
                            id="input-postal-code"
                            value={careMember.businessUnit}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Cost Center
                          </label>
                          <Input
                            id="input-postal-code"
                            value={careMember.costCenter}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label">
                            Management Group
                          </label>
                          <Input
                            id="input-postal-code"
                            value={careMember.managementGroup}
                            disabled={true}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditCareMemberPage;

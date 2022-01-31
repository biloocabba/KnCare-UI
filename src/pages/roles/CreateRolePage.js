import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

import { createRole, retrieveRoles } from "actions/roles";
import AsyncSelect2 from "react-select2-wrapper";

import { BoxHeader } from "components/headers";

var CreateRolePage = () => {
  const initialState = {
    id: null,
    name: "",
    rankedBefore: "",
    rankedAfter: "",
    active: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    rank: null,
  };

  const roles = useSelector(state => state.roles);
  const [role, setRole] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRole({ ...role, [name]: value });
  };

  useEffect(() => {
    dispatch(retrieveRoles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRoles = () => {
    let allRoles = [];
    for (const i in roles) {
      allRoles.push({
        id: roles[i].id,
        text: roles[i].name,
        rank: roles[i].rank,
      });
    }
    return allRoles;
  };

  const saveRole = e => {
    e.preventDefault();
    // ranking system should be implemented better with some check on the same rank, ranked before do not lower rank than ranked after and etc.
    if (role.name.length > 0 && role.rankedAfter.length > 0 && role.rankedBefore.length > 0) {
      let allRoles = getRoles();
      let num = 0;
      for (const i in allRoles) {
        if (allRoles[i].id.toString() === role.rankedBefore) {
          num += parseInt(allRoles[i].rank);
        }
        if (allRoles[i].id.toString() === role.rankedAfter) {
          num += parseInt(allRoles[i].rank);
        }
      }
      role.rank = Math.ceil(num / 2);
      dispatch(createRole(role))
        .then(data => {
          setRole({
            id: null,
            name: data.name,
            rankedBefore: data.rankedBefore,
            rankedAfter: data.rankedAfter,
            active: data.active,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            rank: data.rank,
          });
          setSubmitted(true);
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  const newRole = () => {
    window.location.reload();
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
                    <h3 className="mb-0">Create Role</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {submitted ? (
                  <div>
                    <h4>You submitted successfully!</h4>
                    <Button className="btn btn-success" onClick={newRole}>
                      Create new Role
                    </Button>
                  </div>
                ) : (
                  <Form>
                    <h6 className="heading-small text-muted mb-4">Role Information</h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-role-name">
                              Role Name
                            </label>
                            <Input
                              name="name"
                              value={role.name}
                              required
                              id="input-role-name"
                              placeholder="Role name"
                              type="text"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-ranked-before">
                              Ranked Before
                            </label>
                            <AsyncSelect2
                              className="form-control"
                              name="rankedBefore"
                              id="rankedBefore"
                              value={role.rankedBefore}
                              required
                              onChange={handleInputChange}
                              options={{
                                placeholder: "Select Role",
                              }}
                              data={getRoles()}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="10">
                          <FormGroup>
                            <label className="form-control-label" htmlFor="input-ranked-after">
                              Ranked After
                            </label>
                            <AsyncSelect2
                              className="form-control"
                              name="rankedAfter"
                              id="rankedAfter"
                              value={role.rankedAfter}
                              options={{
                                placeholder: "Select Role",
                              }}
                              onChange={handleInputChange}
                              data={getRoles()}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">Add Role</h6>

                    <div className="pl-lg-4">
                      <Button onClick={saveRole} className="btn btn-success">
                        {" "}
                        Submit{" "}
                      </Button>
                    </div>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateRolePage;

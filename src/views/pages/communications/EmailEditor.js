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
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Select from "react-select";
import AsyncSelect from "react-select/async";
import makeAnimated from 'react-select/animated';

import SimpleHeader from "components/Headers/SimpleHeader.js";

import emailService from "services/emailService";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import { useDispatch, useSelector } from 'react-redux'

function EmailEditor(props) {

  let history = useHistory();
  const [emailState, setEmailState] = useState(props.initialEmailState);

  const careRoles = useSelector( (state) => {
    return state.categories.careRoles.map(role => {return {"value": role.id, "label":role.name}})
  });
  const groups =  useSelector( (state) => {
    return state.groups.map(group => {return {"value": group.id, "label":group.name}})
  });

  const careMembers = useSelector( (state) => {
    return state.careMembers.map(careMember => {return {"value": careMember.id, "label":careMember.internationalName}})
  });
 
  const handleSend = () => {
    emailService.sendMail(emailState);
    history.push("/admin/search-email");
  }

  const handleSaveAsDraft = () => {
    emailService.saveAsDraft(emailState);
    history.push("/admin/search-email");
  }

  const handleDiscard = () => {
    history.push("/admin/search-email");
  }

  return (
    <>
      <SimpleHeader name="Create Email" parentName="Communications" />
      <Container className="mt--6" fluid>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">New Mail</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <ButtonGroup>
                      <Button
                        color="danger"
                        href="#pablo"
                        onClick={handleDiscard}
                        size="sm"
                      >
                        Discard
                      </Button>
                      <Button
                        href="#pablo"
                        onClick={handleSaveAsDraft}
                        size="sm"
                      >
                        Save as Draft
                      </Button>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={handleSend}
                        size="sm"
                      >
                        Send
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Recipient
                          </label>
                          <Select 
                          id="input-email"
                          components = {makeAnimated()} 
                          isMulti 
                          options = {careMembers}
                          onChange={e => {
                            let recipientsArray = [];
                            e.forEach(element => recipientsArray.push(element.value));
                            setEmailState({...emailState, recipients:recipientsArray});
                          }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-recipient-group"
                          >
                          Recipient Group
                          </label>
                          <Select
                          id="input-recipient-group"
                          components = {makeAnimated()}
                          isMulti
                          options = {groups}
                          onChange = {e => {
                            let recipientGroupsArray = [];
                            e.forEach(element => recipientGroupsArray.push(element.value));
                            setEmailState({...emailState, recipientGroups:recipientGroupsArray});
                          }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-recipient-group"
                          >
                          To Roles
                          </label>
                          <Select
                          id="input-recipient-group"
                          components = {makeAnimated()}
                          isMulti
                          options = {careRoles}
                          onChange = {e => {
                            let recipientRoleArray = [];
                            e.forEach(element => recipientRoleArray.push(element.value));
                            setEmailState({...emailState, recipientRoles:recipientRoleArray});
                          }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                    <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="email-subject"
                          >
                          Subject
                          </label>
                          <Input
                            id="email-subject"
                            type="text"
                            value={emailState.subject}
                            onChange={e => setEmailState({...emailState, subject:e.target.value})}
                          />
                    </FormGroup>
                    <ReactQuill value={emailState.content} onChange={e=>setEmailState({...emailState, content:e})}/>
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

export default EmailEditor;

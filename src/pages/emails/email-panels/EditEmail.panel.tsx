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

import { useState } from "react";

import { useHistory } from "react-router-dom";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";

import makeAnimated from "react-select/animated";

import { BoxHeader } from "components/headers";
import { SelectField, InputField } from "components/widgets";

import { EMAIL_SEARCH_ROUTE } from "../emails.routes.const";

// import "react-quill/dist/quill.snow.css";

interface Props {
  initialEmailState: any;
}

export const EditEmail = ({ initialEmailState }: Props) => {
  const history = useHistory();
  const [emailState, setEmailState] = useState(initialEmailState);

  const careRoles: any = [];
  const groups: any = [];
  const careMembers: any = [];

  const handleSend = () => {
    // emailService.sendMail(emailState);
    // history.push("/admin/search-email");
  };

  const handleSaveAsDraft = () => {
    // emailService.saveAsDraft(emailState);
    // history.push("/admin/search-email");
  };

  const handleDiscard = () => {
    history.push(`/admin${EMAIL_SEARCH_ROUTE}`);
  };

  return (
    <>
      <BoxHeader />
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
                      <Button color="danger" onClick={handleDiscard} size="sm">
                        Discard
                      </Button>
                      <Button onClick={handleSaveAsDraft} size="sm">
                        Save as Draft
                      </Button>
                      <Button color="primary" onClick={handleSend} size="sm">
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
                        <SelectField
                          id="input-email"
                          components={makeAnimated()}
                          isMulti
                          label="Recipients"
                          options={careMembers}
                          onChange={(e: any) => {
                            const recipientsArray: any = [];
                            e.forEach((element: any) => recipientsArray.push(element.value));
                            setEmailState({
                              ...emailState,
                              recipients: recipientsArray,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <SelectField
                          id="input-recipient-group"
                          components={makeAnimated()}
                          label="Recipient Group"
                          isMulti
                          options={groups}
                          onChange={(e: any) => {
                            const recipientGroupsArray: any = [];
                            e.forEach((element: any) => recipientGroupsArray.push(element.value));
                            setEmailState({
                              ...emailState,
                              recipientGroups: recipientGroupsArray,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <SelectField
                          id="input-recipient-group"
                          label="To Roles"
                          components={makeAnimated()}
                          isMulti
                          options={careRoles}
                          onChange={(e: any) => {
                            const recipientRoleArray: any = [];
                            e.forEach((element: any) => recipientRoleArray.push(element.value));
                            setEmailState({
                              ...emailState,
                              recipientRoles: recipientRoleArray,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <div className="pl-lg-4">
                    <InputField
                      id="email-subject"
                      type="text"
                      label="Subject"
                      value={emailState.subject}
                      onChange={(e: any) =>
                        setEmailState({
                          ...emailState,
                          subject: e.target.value,
                        })
                      }
                    />

                    {/* <ReactQuill
                      value={emailState.content}
                      onChange={e => setEmailState({ ...emailState, content: e })}
                    /> */}
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

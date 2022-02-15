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

import { useHistory } from "react-router";

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

import { AnyObject, Plate, TNode } from "@udecode/plate";
import makeAnimated from "react-select/animated";

import { BoxHeader } from "components/headers";
import { SelectField, InputField } from "components/widgets";

import { Email, EmailSaveRequest, SelectOption } from "types";

import { useAppSelector } from "redux/app";
import {
  emailService,
  selectAllCareMembersData,
  selectAllCountriesDataAsSelectOptions,
  selectAllGroupsDataAsSelectOptions,
  selectAllRolesDataAsSelectOptions,
} from "redux/features";

import { EMAIL_SEARCH_ROUTE } from "../emails.routes.const";

interface onSaveFunction {
  (emailRequest: EmailSaveRequest): void;
}
interface Props {
  email: Email;
  setEmail: (email: Email) => void;
  onSave: onSaveFunction;
}

export const EditEmail = ({ email, setEmail, onSave }: Props) => {
  const history = useHistory();
  const currentRole = "admin";

  const careMembers = useAppSelector(selectAllCareMembersData);
  const groups = useAppSelector(selectAllGroupsDataAsSelectOptions);
  const careRoles = useAppSelector(selectAllRolesDataAsSelectOptions);
  const countries = useAppSelector(selectAllCountriesDataAsSelectOptions);

  const [emailContent, setEmailContent] = useState<TNode<AnyObject>[]>([]);

  const editableProps = {
    placeholder: "Type…",
    style: {
      padding: "15px",
      border: "1px solid #e4e7ea",
    },
  };

  const initialValue = [
    {
      children: [
        {
          text: "This is editable plain text with react and history plugins, just like a <textarea>!",
        },
      ],
    },
  ];

  const handleDiscard = () => {
    history.push(`/${currentRole}/${EMAIL_SEARCH_ROUTE}`);
  };

  const handleSaveAsDraft = () => {
    const emailSaveRequest: EmailSaveRequest = {
      content: emailContent.toString(),
      recipientIds: [],
      subject: "",
    };
    // @todo why two times?
    onSave(emailSaveRequest);
    emailService.saveAsDraft(emailSaveRequest);
    // history.push(`/${currentRole}/${EMAIL_SEARCH_ROUTE}`);
  };

  const handleSend = () => {
    emailService.send(email);
    history.push(`/${currentRole}${EMAIL_SEARCH_ROUTE}`);
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
                          onChange={item => {
                            const selections = item as SelectOption[];
                            const recipientsArray = selections.map(item => item.value);

                            setEmail({
                              ...email,
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
                          onChange={item => {
                            const selections = item as SelectOption[];
                            const recipientGroupsArray = selections.map(item => item.value);
                            setEmail({
                              ...email,
                              groups: recipientGroupsArray,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <SelectField
                          id="input-recipient-group"
                          label="Roles"
                          components={makeAnimated()}
                          isMulti
                          options={careRoles}
                          onChange={item => {
                            const selections = item as SelectOption[];
                            const recipientRoleArray = selections.map(item => item.value);

                            setEmail({
                              ...email,
                              roles: recipientRoleArray,
                            });
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <SelectField
                          id="input-recipient-country"
                          label="Countries"
                          components={makeAnimated()}
                          isMulti
                          options={countries}
                          onChange={item => {
                            const selections = item as SelectOption[];
                            const recipientCountriesArray = selections.map(item => item.value);

                            setEmail({
                              ...email,
                              countries: recipientCountriesArray,
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
                      value={email.subject}
                      onChange={e =>
                        setEmail({
                          ...email,
                          subject: e.target.value,
                        })
                      }
                    />

                    <Plate
                      id="1"
                      editableProps={editableProps}
                      initialValue={initialValue}
                      onChange={newValue => {
                        setEmailContent(newValue);
                      }}
                    />
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

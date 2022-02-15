import { useState } from "react";

import { useParams } from "react-router-dom";

import { Email, EmailSaveRequest, RouteParams } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { EditEmail } from "..";

export const EmailDetailsPage = () => {
  const { id } = useParams<RouteParams>();

  console.log(id);
  //@todo
  /*
  1) load email from redux store
  2) provide onSaveFunction to save it in api/redux using thunk actions
  */

  const emailFromStore = {
    id: CREATE_ENTITY_ID,
    subject: "a mock subject",
    content: "a mock content",
    recipients: [],
    //  groups?: string[];
    // businessUnits?: string[];
    // roles?: string[];
    // countries?: string[];
    // recipients: string[];
  };

  const [email, setEmail] = useState<Email>(emailFromStore);

  const onEmailSave = (emailRequest: EmailSaveRequest) => {
    console.log(emailRequest);
  };

  return <EditEmail email={email} setEmail={setEmail} onSave={onEmailSave} />;
};

import { useState } from "react";

import { Email, EmailSaveRequest } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

import { useAppDispatch } from "redux/app";
import { createEmail } from "redux/features";

import { EditEmail } from "..";

export const CreateEmailPage = () => {
  const dispatch = useAppDispatch();
  const newEmail = {
    id: CREATE_ENTITY_ID,
    subject: "",
    content: "",
    recipients: [],
    groups: [],
    businessUnits: [],
    roles: [],
    countries: [],
  };

  const [email, setEmail] = useState<Email>(newEmail);

  const onEmailSave = (emailRequest: EmailSaveRequest) => {
    dispatch(createEmail(emailRequest));
  };

  return <EditEmail email={email} setEmail={setEmail} onSave={onEmailSave} />;
};

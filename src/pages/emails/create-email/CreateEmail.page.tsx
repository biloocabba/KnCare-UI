import { useState } from "react";

import { useAlerts } from "hooks";
import { Email, EmailSaveRequest } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { createEmail, selectEmailState } from "redux/features";

import { EditEmail, emailDefaultState } from "..";

export const CreateEmailPage = () => {
  const dispatch = useAppDispatch();
  const emailState = useAppSelector(selectEmailState);

  const [email, setEmail] = useState<Email>(emailDefaultState);
  const { alert, setSaveSent } = useAlerts(emailState, "Email Saved");

  const onEmailSave = (emailRequest: EmailSaveRequest) => {
    dispatch(createEmail(emailRequest));
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <EditEmail email={email} setEmail={setEmail} onSave={onEmailSave} />
    </>
  );
};

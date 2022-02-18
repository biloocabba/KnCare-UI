import { useState } from "react";

import { useAlerts } from "hooks";
import { Email, EmailSaveRequest } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import { saveEmail, selectEmailState, sendEmail } from "redux/features";

import { EditEmail, emailDefaultState } from "..";

export const CreateEmailPage = () => {
  const dispatch = useAppDispatch();
  const emailState = useAppSelector(selectEmailState);

  const [email, setEmail] = useState<Email>(emailDefaultState);
  const { alert, setSaveSent, setSuccessMessage } = useAlerts(emailState);

  const onEmailSave = (emailRequest: EmailSaveRequest) => {
    dispatch(saveEmail(emailRequest));
    setSuccessMessage("Email Saved");
    setSaveSent(true);
  };

  const onEmailSend = (email: Email) => {
    dispatch(sendEmail(email));
    setSuccessMessage("Email Sent");
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <EditEmail email={email} setEmail={setEmail} onSave={onEmailSave} onSend={onEmailSend} />
    </>
  );
};

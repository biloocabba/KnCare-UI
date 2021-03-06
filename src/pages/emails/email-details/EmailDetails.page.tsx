import { useState } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "redux/app";
import { saveEmail, selectEmailById, selectEmailState, sendEmail } from "redux/features";

import { useAlerts } from "hooks";
import { Email, EmailSaveRequest } from "types";

import { EditEmail } from "..";

export const EmailDetailsPage = () => {
  const { id } = useParams() as { id: string };

  const dispatch = useAppDispatch();
  const emailState = useAppSelector(selectEmailById(parseInt(id))) as Email;
  const emailsState = useAppSelector(selectEmailState);

  const [email, setEmail] = useState<Email>(emailState);
  const { alert, setSaveSent, setSuccessMessage } = useAlerts(emailsState);

  const onEmailSave = (emailRequest: EmailSaveRequest) => {
    dispatch(saveEmail(emailRequest));
    setSuccessMessage("Email Saved");
    setSaveSent(true);
  };

  const onEmailSend = (email: Email) => {
    setSuccessMessage("Email Sent");
    dispatch(sendEmail(email));
    setSaveSent(true);
  };

  return (
    <>
      {alert}
      <EditEmail email={email} setEmail={setEmail} onSave={onEmailSave} onSend={onEmailSend} />
    </>
  );
};

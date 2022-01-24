import { EditEmail } from "../email-panels";

export const CreateEmailPage = () => {
  const initialEmailState = {
    id: "",
    subject: "",
    content: "",
    attachments: null,
    createdBy: 1,
    recipients: [],
    recipientGroups: [],
  };

  return <EditEmail initialEmailState={initialEmailState} />;
};

import { EmailEditor } from "./EmailEditor";

export const CreateNewEmailPage = () => {
  const initialEmailState = {
    id: "",
    subject: "",
    content: "",
    attachments: null,
    createdBy: 1,
    recipients: [],
    recipientGroups: [],
  };

  return <EmailEditor initialEmailState={initialEmailState} />;
};

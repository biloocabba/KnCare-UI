import { Email } from "types";
import { CREATE_ENTITY_ID } from "variables/app.consts";

export const EMAIL_SEARCH_ROUTE = "/emails/search-emails";
export const EMAIL_DRAFT_SEARCH_ROUTE = "/emails/search-emails-draft";
export const EMAIL_TEMPLATE_SEARCH_ROUTE = "/emails/search-emails-template";
export const EMAIL_DETAILS_ROUTE = "/emails/email-details";
export const CREATE_EMAIL_ROUTE = "/emails/create-email";
export const CREATE_EMAIL_TEMPLATE_ROUTE = "/emails/create-email-template";
export const EMAIL_HISTORY_ROUTE = "/emails/email-history";
export const NOTIFICATION_ROUTE = "/emails/notification";
export const ARCHIVE_ROUTE = "/emails/archive";

export const emailDefaultState: Email = {
  id: CREATE_ENTITY_ID,
  subject: "",
  content: "",
  recipients: [],
  groups: [],
  businessUnits: [],
  roles: [],
  countries: [],
  sendingDate: new Date().toLocaleString(),
};

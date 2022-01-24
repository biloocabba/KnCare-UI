import { IRoute } from "types";

import { CREATE_EMAIL_TEMPLATE_ROUTE } from "./emails.routes.const";

import {
  ArchivePage,
  CreateEmailPage,
  EmailDetailsPage,
  EmailHistoryPage,
  SearchEmailPage,
  SearchEmailDraftsPage,
  SearchEmailTemplatePage,
  SendNotificationPage,
  ARCHIVE_ROUTE,
  CREATE_EMAIL_ROUTE,
  EMAIL_DETAILS_ROUTE,
  EMAIL_HISTORY_ROUTE,
  EMAIL_SEARCH_ROUTE,
  NOTIFICATION_ROUTE,
  EMAIL_DRAFT_SEARCH_ROUTE,
  EMAIL_TEMPLATE_SEARCH_ROUTE,
  CreateEmailTemplatePage,
} from ".";

export const emailMenu: IRoute[] = [
  {
    collapse: true,
    name: "Emails",
    icon: "ni ni-circle-08 text-info",
    state: "emailCollapse",
    views: [
      {
        path: EMAIL_SEARCH_ROUTE,
        name: "Search Email",
        miniName: "SE",
        component: SearchEmailPage,
        layout: "/admin",
      },
      {
        path: EMAIL_DRAFT_SEARCH_ROUTE,
        name: "Search Email Draft",
        miniName: "SED",
        component: SearchEmailDraftsPage,
        layout: "/admin",
      },
      {
        path: EMAIL_TEMPLATE_SEARCH_ROUTE,
        name: "Search Email Template",
        miniName: "SET",
        component: SearchEmailTemplatePage,
        layout: "/admin",
      },
      {
        path: CREATE_EMAIL_ROUTE,
        name: "Create Email",
        miniName: "CE",
        component: CreateEmailPage,
        layout: "/admin",
      },
      {
        path: CREATE_EMAIL_TEMPLATE_ROUTE,
        name: "Create Email Template",
        miniName: "CET",
        component: CreateEmailTemplatePage,
        layout: "/admin",
      },
      {
        path: EMAIL_HISTORY_ROUTE,
        name: "Email History",
        miniName: "EH",
        component: EmailHistoryPage,
        layout: "/admin",
      },
      {
        path: NOTIFICATION_ROUTE,
        name: "Notifcation",
        miniName: "N",
        component: SendNotificationPage,
        layout: "/admin",
      },
      {
        path: ARCHIVE_ROUTE,
        name: "Archive",
        miniName: "A",
        component: ArchivePage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${EMAIL_DETAILS_ROUTE}/:id`,
    component: EmailDetailsPage,
    layout: "/admin",
  },
];

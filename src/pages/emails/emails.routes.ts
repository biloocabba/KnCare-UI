import { fromCountryManagerRole } from "pages/utils";

import { IRoute } from "types";

import {
  CreateEmailPage,
  EmailDetailsPage,
  SearchEmailPage,
  CREATE_EMAIL_ROUTE,
  EMAIL_DETAILS_ROUTE,
  EMAIL_SEARCH_ROUTE,
} from ".";

export const emailMenu: IRoute[] = [
  {
    collapse: true,
    name: "Emails",
    icon: "ni ni-circle-08 text-info",
    state: "emailCollapse",
    key: "EmailsMenu",
    allowedRoles: [...fromCountryManagerRole],
    path: "EmailsMenu",
    views: [
      {
        path: CREATE_EMAIL_ROUTE,
        name: "Create New",
        miniName: "CN",
        component: CreateEmailPage,
        layout: "/admin",
        key: "Emails/CreateEmailPage",
        allowedRoles: [...fromCountryManagerRole],
      },
      {
        path: EMAIL_SEARCH_ROUTE,
        name: "Search",
        miniName: "S",
        component: SearchEmailPage,
        layout: "/admin",
        key: "Emails/SearchEmailPage",
        allowedRoles: [...fromCountryManagerRole],
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${EMAIL_DETAILS_ROUTE}/:id`,
    component: EmailDetailsPage,
    layout: "/admin",
    key: "Emails/EmailDetailsPage",
    allowedRoles: [...fromCountryManagerRole],
  },
];

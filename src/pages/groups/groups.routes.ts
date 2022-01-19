import { IRoute } from "types";

import {
  CreateGroupPage,
  GroupDetailsPage,
  GROUP_CREATE,
  GROUP_DETAILS,
  GROUP_SEARCH,
  SearchGroupsPage,
} from ".";

export const groupMenu: IRoute[] = [
  {
    collapse: true,
    name: "Groups",
    icon: "ni ni-circle-08 text-info",
    state: "groupCollapse",
    views: [
      {
        path: GROUP_CREATE,
        name: "Create Group",
        miniName: "CG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: GROUP_SEARCH,
        name: "Search Group",
        miniName: "SG",
        component: SearchGroupsPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${GROUP_DETAILS}/:id`,
    component: GroupDetailsPage,
    layout: "/admin",
  },
];

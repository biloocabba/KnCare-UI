import { IRoute } from "types";

import { allAuthRoles, fromAdvocateRole } from "../utils";

import {
  CreateGroupPage,
  GroupDetailsPage,
  GROUP_DETAILS,
  GROUP_CREATE,
  GROUP_SEARCH,
  SearchGroupsPage,
} from ".";

export const groupMenu: IRoute[] = [
  {
    collapse: true,
    name: "Groups",
    icon: "ni ni-circle-08 text-info",
    state: "groupCollapse",
    path: "GroupsMenu",
    key: "GroupsMenu",
    allowedRoles: [...allAuthRoles],
    views: [
      {
        path: GROUP_CREATE,
        name: "Create New",
        miniName: "CN",
        component: <CreateGroupPage />,
        layout: "/admin",
        key: "Groups/Create Group",
        allowedRoles: [...fromAdvocateRole],
      },
      {
        path: GROUP_SEARCH,
        name: "Search",
        miniName: "S",
        component: <SearchGroupsPage />,
        layout: "/admin",
        key: "Groups/Search Group",
        allowedRoles: [...allAuthRoles],
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${GROUP_DETAILS}/:id`,
    component: <GroupDetailsPage />,
    layout: "/admin",
    name: `${GROUP_DETAILS}/:id`,
    key: `Groups/${GROUP_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];

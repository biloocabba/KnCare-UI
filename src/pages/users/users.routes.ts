import { IRoute } from "types";

import { allAuthRoles } from "../utils";

import {
  CreateCareMemberPage,
  EditCareMemberPage,
  EmployeeDetailsPage,
  SearchEmployeesPage,
  SearchCareMembersPage,
  EMPLOYEE_SEARCH,
  EMPLOYEE_DETAILS,
  CARE_MEMBER_CREATE,
  CARE_MEMBER_SEARCH,
  CARE_MEMBER_EDIT,
} from ".";

export const userMenu: IRoute[] = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-single-02 text-primary",
    state: "usersCollapse",
    path: "UsersMenu",
    key: "UsersMenu",
    allowedRoles: [...allAuthRoles],
    views: [
      {
        path: EMPLOYEE_SEARCH,
        name: "Employees",
        miniName: "E",
        component: SearchEmployeesPage,
        layout: "/admin",
        key: "Users/Employees",
        allowedRoles: [...allAuthRoles],
      },
      {
        path: CARE_MEMBER_SEARCH,
        name: "Care Members",
        miniName: "CM",
        component: SearchCareMembersPage,
        layout: "/admin",
        key: "Users/Care Members",
        allowedRoles: [...allAuthRoles],
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${EMPLOYEE_DETAILS}/:id`,
    component: EmployeeDetailsPage,
    layout: "/admin",
    name: `${EMPLOYEE_DETAILS}/:id`,
    key: `Users/${EMPLOYEE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${CARE_MEMBER_EDIT}/:id`,
    component: EditCareMemberPage,
    layout: "/admin",
    name: `${CARE_MEMBER_EDIT}/:id`,
    key: `Users/${CARE_MEMBER_EDIT}/:id`,
    allowedRoles: [...allAuthRoles],
  },
  {
    collapse: false,
    global: true,
    path: `${CARE_MEMBER_CREATE}/:id`,
    component: CreateCareMemberPage,
    layout: "/admin",
    name: `${CARE_MEMBER_CREATE}/:id`,
    key: `Users/${CARE_MEMBER_CREATE}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];

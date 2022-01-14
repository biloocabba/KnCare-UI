import { IRoute } from "types/types";
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
  CARE_MEMBER_EDIT
} from ".";



export const userMenu:IRoute[] = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-single-02 text-primary",
    state: "usersCollapse",
    views: [
      {
        path: EMPLOYEE_SEARCH,
        name: "Employees",
        miniName: "E",
        component: SearchEmployeesPage,
        layout: "/admin",
      },
      {
        path: CARE_MEMBER_SEARCH,
        name: "Care Members",
        miniName: "CM",
        component: SearchCareMembersPage,
        layout: "/admin",
      },
    ],
  }, 
  {
    collapse: false,
    global: true,
    path: `${EMPLOYEE_DETAILS}/:id`,
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    // path: "/users/care-member-details/:id",
    path: `${CARE_MEMBER_EDIT}/:id`,
    component: EditCareMemberPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    // path: "/users/care-member-create/:id",
    path: `${CARE_MEMBER_CREATE}/:id`,
    component: CreateCareMemberPage,
    layout: "/admin",
  },
];

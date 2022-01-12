import {
  CreateCareMemberPage,
  EditCareMemberPage,
  EmployeeDetailsPage,
  SearchEmployeesPage,
  SearchCareMembersPage  
} from ".";



export const userMenu = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-single-02 text-primary",
    state: "usersCollapse",
    views: [
      {
        path: "/employee-search",
        name: "Employees",
        miniName: "E",
        component: SearchEmployeesPage,
        layout: "/admin",
      },
      {
        path: "/care-member-search",
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
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    path: "/users/care-member-details/:id",
    component: EditCareMemberPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    path: "/users/care-member-create/:id",
    component: CreateCareMemberPage,
    layout: "/admin",
  },
];

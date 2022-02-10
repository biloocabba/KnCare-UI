import { IRoute } from "types";

import { allAuthRoles } from "../utils";

import { HOME } from "./home.routes.const";
import { HomePage } from "./HomePage";

export const homeMenu: IRoute[] = [
  {
    collapse: false,
    global: true,
    path: `${HOME}`,
    component: HomePage,
    layout: "/admin",
    name: `${HOME}`,
    key: `Home/${HOME}`,
    allowedRoles: [...allAuthRoles],
  },
];

import { IRoute } from "types";

import { LOGIN, LoginPage } from ".";

export const authMenu: IRoute[] = [
  {
    collapse: false,
    global: true,
    path: LOGIN,
    component: LoginPage,
    layout: "/auth",
  },
];

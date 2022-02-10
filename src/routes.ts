import { dashboardMenu } from "pages/dashboards";
import { groupMenu } from "pages/groups";
import { userMenu } from "pages/users";
import { IRoute } from "types";

import { authMenu } from "./pages/auth";
import { bestPracticesMenu } from "./pages/best-practices";
import { homeMenu } from "./pages/home";

export const routes: IRoute[] = [
  ...homeMenu,
  ...userMenu,
  ...groupMenu,
  ...dashboardMenu,
  ...bestPracticesMenu,
  ...authMenu,
];

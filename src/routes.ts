// import { authMenu } from "pages/auth";
import { bestPracticesMenu } from "pages/best-practices";
import { dashboardMenu } from "pages/dashboards";
import { emailMenu } from "pages/emails";
import { groupMenu } from "pages/groups";
import { homeMenu } from "pages/home";
import { userMenu } from "pages/users";

import { IRoute } from "types";

export const routes: IRoute[] = [
  ...homeMenu,
  ...userMenu,
  ...groupMenu,
  ...dashboardMenu,
  ...bestPracticesMenu,
  // ...authMenu,
  ...emailMenu,
];

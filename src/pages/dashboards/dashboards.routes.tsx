import { IRoute } from "types";

import { fromCountryManagerRole } from "../utils";

import { ChartsPage, WorldOverviewPage } from ".";

export const dashboardMenu: IRoute[] = [
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    key: "DashboardMenu",
    path: "DashboardMenu",
    allowedRoles: [...fromCountryManagerRole],
    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "C",
        component: <ChartsPage />,
        layout: "/admin",
        key: "Dashboard/Charts",
        allowedRoles: [...fromCountryManagerRole],
      },
      {
        path: "/world-map",
        name: "World Map",
        miniName: "WM",
        component: <WorldOverviewPage />,
        layout: "/admin",
        key: "Dashboard/World Map",
        allowedRoles: [...fromCountryManagerRole],
      },
    ],
  },
];

import { IRoute } from "types";
import {ChartsPage, WorldOverviewPage} from ".";

export const dashboardMenu:IRoute[] = [
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "C",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-map",
        name: "World Map",
        miniName: "WM",
        component: WorldOverviewPage,
        layout: "/admin",
      },
    ],
  },
];

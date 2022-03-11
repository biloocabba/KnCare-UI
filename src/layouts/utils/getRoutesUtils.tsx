import { Route } from "react-router-dom";

import { IRoute, LayoutType, Role } from "types";

const getLayout = (route: IRoute, layout: LayoutType, userRole: Role) => {
  if (route.layout === layout && route.allowedRoles.includes(userRole) && route.component) {
    return <Route path={route.layout + route.path} element={route.component} key={route.key} />;
  } else {
    return null;
  }
};

const getRouteViews = (routes: IRoute[], layout: LayoutType, userRole: Role) => {
  return routes.map(route => getLayout(route, layout, userRole));
};

export const getRoutes = (routes: IRoute[], layout: LayoutType, userRole: Role) => {
  return routes.map(route => {
    if (
      route.collapse &&
      route.views &&
      route.views.length > 0 &&
      route.allowedRoles.includes(userRole)
    ) {
      return getRouteViews(route.views, layout, userRole);
    }

    return getLayout(route, layout, userRole);
  });
};

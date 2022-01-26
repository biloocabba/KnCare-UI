import { Route } from "react-router-dom";

import { IRoute, LayoutType } from "types";

const getLayout = (route: IRoute, layout: LayoutType) => {
  //const key = route.name + route.path;
  if (route.layout === layout) {
    return (
      <Route
        path={route.layout + route.path}
        component={route.component as React.ComponentType}
        key={route.key}
      />
    );
  } else {
    console.log("This route will be not rendered: ", route);
    return null;
  }
};

export const getRoutes = (routes: IRoute[], layout: LayoutType) => {
  return routes.map(route => {
    if (route.collapse && route.views && route.views.length > 0) {
      return getRouteViews(route.views, layout);
    }

    return getLayout(route, layout);
  });
};

const getRouteViews = (routes: IRoute[], layout: LayoutType) => {
  return routes.map(route => getLayout(route, layout));
};

import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "routes";

import { useAppSelector } from "redux/app";
import { selectLoggedUserRole } from "redux/features";

import { LOGIN } from "pages/auth";
import { HOME } from "pages/home";

import { getRoutes, AdminLayout, AuthLayout } from "layouts";
import { Role } from "./types";

export const Router = () => {
  const userRole = useAppSelector(selectLoggedUserRole);

  return (
    <Routes>
      {userRole !== Role.Anonymous && (
        <Route element={<AdminLayout />}>{getRoutes(routes, "/admin", userRole)}</Route>
      )}
      {userRole === Role.Anonymous && (
        <Route element={<AuthLayout />}>{getRoutes(routes, "/auth", userRole)}</Route>
      )}

      <Route
        path="*"
        element={<Navigate to={userRole !== Role.Anonymous ? `admin${HOME}` : `auth${LOGIN}`} replace />}
      />
    </Routes>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";

import { routes } from "routes";

import { useAppSelector } from "redux/app";
import { selectLoggedUserRole } from "redux/features";

import { LOGIN } from "pages/auth";
import { HOME } from "pages/home";

import { getRoutes, AdminLayout, AuthLayout } from "layouts";

export const Router = () => {
  const userRole = useAppSelector(selectLoggedUserRole);

  return (
    <Routes>
      {userRole !== 1 && (
        <Route element={<AdminLayout />}>{getRoutes(routes, "/admin", userRole)}</Route>
      )}
      {userRole === 1 && (
        <Route element={<AuthLayout />}>{getRoutes(routes, "/auth", userRole)}</Route>
      )}

      <Route
        path="*"
        element={<Navigate to={userRole !== 1 ? `admin${HOME}` : `auth${LOGIN}`} replace />}
      />
    </Routes>
  );
};

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { useAppSelector } from "redux/app";
import { selectLoggedUserRole } from "redux/features";

import { LoginPage } from "pages/auth";

import { AdminLayout, AuthLayout } from "layouts";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const userRole = useAppSelector(selectLoggedUserRole);
  const location = useLocation();

  if (userRole === 1) {
    return (
      <Routes>
        <Route element={<Navigate to="/auth/login" state={{ from: location }} replace />} />
      </Routes>
    );
  }

  return children;
};

export const App = () => {
  const userRole = useAppSelector(selectLoggedUserRole);
  console.log(userRole);

  //   if (userRole === 1) {
  //     return <Route element={<Navigate to="/auth/login" state={{ from: location }} replace />} />;
  //   } else {
  //     return <Route element={<Navigate to="/admin/home" replace />} />;
  //   }

  return (
    <Routes>
      <Route
        path="*"
        element={
          <RequireAuth>
            <Route path="/admin" element={<AdminLayout />} />
          </RequireAuth>
        }
      />

      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/auth/login" element={<LoginPage />} />

      {/* {userRole === 1 && <Route path="*" element={<Navigate to="/auth/login" replace />} />} */}

      {/* <Route path="*" element={<Navigate to="/admin/home" />} /> */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useEffect, useRef } from "react";
import { Routes, useNavigate } from "react-router-dom";

import { routes } from "routes";

import { useAppSelector } from "redux/app";
import { selectLoggedUserRole } from "redux/features";

import { AuthFooter } from "components/footers";

import { getRoutes, useScrollToTop } from ".";

export const AuthLayout = () => {
  const navigate = useNavigate();

  const mainContentRef = useRef(document.createElement("div"));
  const userRole = useAppSelector(selectLoggedUserRole);

  useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  });

  useEffect(() => {
    if (userRole !== 1) {
      navigate("/auth/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole]);

  useScrollToTop(mainContentRef);

  return (
    <>
      <div className="main-content" ref={mainContentRef}>
        <Routes>{getRoutes(routes, "/auth", userRole)}</Routes>
      </div>
      <AuthFooter />
    </>
  );
};

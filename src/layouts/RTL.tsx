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

import { Redirect, Switch } from "react-router-dom";

import { AdminFooter } from "components/footers";
// core components
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";
// react library for routing

import careLogo from "assets/img/brand/CareLogoMin.png";
import { routes } from "routes";

import { useAppDispatch, useAppSelector } from "redux/app";
import { toggleSidenav } from "redux/features";

import { useGetRoutes, useScrollToTop } from "./hooks";

export const RTLLayout = () => {
  const dispatch = useAppDispatch();
  const { isSidenavOpen } = useAppSelector(state => state.sidenav);

  const mainContentRef = useRef(document.createElement("div"));

  useEffect(() => {
    document.body.classList.add("rtl");
    document.documentElement.classList.add("rtl");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("rtl");
      document.documentElement.classList.remove("rtl");
    };
  });

  useScrollToTop(mainContentRef);

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: careLogo,
          imgAlt: "...",
        }}
        rtlActive
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme="dark" />
        <Switch>
          {useGetRoutes(routes, "/rtl")}
          <Redirect from="*" to="/rtl/rtl-support" />
        </Switch>
        <AdminFooter />
      </div>
      {isSidenavOpen ? (
        <div
          className="backdrop d-xl-none"
          role="button"
          tabIndex={0}
          // @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
          onKeyDown={() => dispatch(toggleSidenav())}
          onClick={() => dispatch(toggleSidenav())}
        />
      ) : null}
    </>
  );
};

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

// react library for routing
import { useLocation, Switch, Redirect } from "react-router-dom";

// core components
import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import careLogo from "assets/img/brand/CareLogoMin.png";
import { routes } from "routes";

import { useAppDispatch, useAppSelector } from "redux/app";
import { toggleSidenav, fetchBusinessUnits, fetchCountries } from "redux/features";

import { useGetRoutes, useScrollToTop } from "./hooks";

export const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { isSidenavOpen } = useAppSelector(state => state.sidenav);
  const mainContentRef = useRef(document.createElement("div"));

  useScrollToTop(mainContentRef);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchBusinessUnits());
  }, [dispatch]);

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: careLogo,
          imgAlt: "...",
        }}
        rtlActive={false}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme={getNavbarTheme()} />
        <Switch>
          {useGetRoutes(routes, "/admin")}
          <Redirect from="*" to="/admin/home" />
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

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
import  { useEffect, useRef } from "react";
// react library for routing
import { useLocation,  Switch, Redirect } from "react-router-dom";
// core components
import {AdminNavbar} from "components/navbars";
import {AdminFooter} from "components/footers";
import {Sidebar} from "components/sidebar";

import { routes } from "routes";
import { useAppDispatch ,useAppSelector} from "redux/app";

import { useGetRoutes, useScrollToTop } from "./hooks";
import { toggleSidenav,fetchBusinessUnits,fetchCountries } from "redux/features";

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
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/img/brand/CareLogoMin.png").default,
          imgAlt: "...",
        }}
        rtlActive={false}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme={getNavbarTheme()}
        />
        <Switch>
          {useGetRoutes(routes,"/admin")}
          <Redirect from="*" to="/admin/home" />
        </Switch>
        <AdminFooter />
      </div>
      {isSidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={() => dispatch(toggleSidenav())} />
      ) : null}
    </>
  );
}

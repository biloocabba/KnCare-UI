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
import  { useEffect, useRef, useState } from "react";
// react library for routing
import { useLocation,  Switch, Redirect } from "react-router-dom";
// core components
import {AdminNavbar} from "components/navbars";
import {AdminFooter} from "components/footers";
import {Sidebar} from "components/sidebar";

import { routes } from "routes";
import { useAppDispatch } from "redux/app";

import { fetchCountries } from 'redux/features/countries/country.slice'
import { fetchBusinessUnits } from 'redux/features/business-unit/business-unit.slice'
import { useGetRoutes, useScrollToTop } from "./hooks";

export const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [sidenavOpen, setSidenavOpen] = useState(true);
  const mainContentRef = useRef(document.createElement("div"));

useScrollToTop(mainContentRef);


  // toggles collapse between mini sidenav and normal
  const toggleSidenav = () => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchBusinessUnits());    
  }, [dispatch]);


  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/img/brand/CareLogoMin.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme={getNavbarTheme()}
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
        />
        <Switch>
          {useGetRoutes(routes,"/admin")}
          <Redirect from="*" to="/admin/home" />
        </Switch>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

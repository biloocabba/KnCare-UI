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
import {AdminFooter} from "components/footers";
// core components
import {AdminNavbar} from "components/navbars";
import {Sidebar} from "components/sidebar";
import { useEffect, useRef} from "react";
// react library for routing
import { Redirect, Switch } from "react-router-dom";
import { routes } from "routes";
import { useAppDispatch, useAppSelector } from "redux/app";
import { useGetRoutes, useScrollToTop } from "./hooks";
import { toggleSidenav } from "redux/features";


export function RTLLayout() {
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

useScrollToTop(mainContentRef)

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/img/brand/CareLogoMin.png").default,
          imgAlt: "...",
        }}
        rtlActive
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme="dark"
        />
        <Switch>
          {useGetRoutes(routes, "/rtl")}
          <Redirect from="*" to="/rtl/rtl-support" />
        </Switch>
        <AdminFooter />
      </div>
      {isSidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={() => dispatch(toggleSidenav())} />
      ) : null}
    </>
  );
}

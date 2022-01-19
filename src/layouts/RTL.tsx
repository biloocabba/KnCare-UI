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
import { useEffect, useRef, useState } from "react";
// react library for routing
import { Redirect, Switch } from "react-router-dom";
import { routes } from "routes";
import { useGetRoutes, useScrollToTop } from "./hooks";


export function RTLLayout() {
  const [sidenavOpen, setSidenavOpen] = useState(true);
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
        rtlActive
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar
          theme="dark"
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
        />
        <Switch>
          {useGetRoutes(routes, "/rtl")}
          <Redirect from="*" to="/rtl/rtl-support" />
        </Switch>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

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
import { useEffect, useRef, useState } from "react";

// react library for routing
import { useLocation, Switch, Redirect } from "react-router-dom";

// core components
// import { Spinner } from "reactstrap";
// import { Col, Row } from "reactstrap";

import { Audio } from "react-loader-spinner";

import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import careLogo from "assets/img/brand/CareLogoMin.png";
import { routes } from "routes";
import { ThemeColors } from "types";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  fetchBusinessUnits,
  fetchCountries,
  selectAllBusinessUnitData,
  selectAllCountryData,
  selectLoggedUserRole,
} from "redux/features";

import { useScrollToTop } from "./hooks";
import { getRoutes } from "./utils";

export const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  // const { isSidenavOpen } = useAppSelector(state => state.sidenav);
  const mainContentRef = useRef(document.createElement("div"));
  const [isDataLoadingCompleted, setIsDataLoadingCompleted] = useState(false);

  const [isCountryDataLoaded, setIsCountryDataLoaded] = useState(false);
  const [isBusinessUnitsDataLoaded, setIsBusinessUnitsDataLoaded] = useState(false);
  const countries = useAppSelector(selectAllCountryData);
  const businessUnits = useAppSelector(selectAllBusinessUnitData);
  const userRole = useAppSelector(selectLoggedUserRole);
  useScrollToTop(mainContentRef);

  useEffect(() => {
    if (!countries || countries.length == 0) {
      dispatch(fetchCountries());
    } else {
      setIsCountryDataLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, isCountryDataLoaded]);

  useEffect(() => {
    if (isCountryDataLoaded) {
      if (!businessUnits || businessUnits.length == 0) {
        dispatch(fetchBusinessUnits());
      } else {
        setIsBusinessUnitsDataLoaded(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessUnits, isBusinessUnitsDataLoaded, isCountryDataLoaded]);

  useEffect(() => {
    console.log("Current state: ", isCountryDataLoaded, isBusinessUnitsDataLoaded);
    if (isCountryDataLoaded && isBusinessUnitsDataLoaded) {
      setIsDataLoadingCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCountryDataLoaded, isBusinessUnitsDataLoaded, isDataLoadingCompleted]);

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return (
    <>
      {!isDataLoadingCompleted ? (
        <>
          <div className="main-content" ref={mainContentRef}>
            <div style={{ height: "300pt" }}>&nbsp;</div>
            <div className="d-flex justify-content-center mb-3">
              <Audio color={ThemeColors.theme.primary} height={160} width={160} />
            </div>
          </div>
        </>
      ) : (
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
              {getRoutes(routes, "/admin", userRole)}
              <Redirect from="*" to="/admin/home" />
            </Switch>
            <AdminFooter />
          </div>
        </>
      )}
      {/* <Sidebar
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
          {getRoutes(routes, "/admin")}
          <Redirect from="*" to="/admin/home" />
        </Switch>
        <AdminFooter />
      </div> */}
      {/* {isSidenavOpen ? (
        <div
          className="backdrop d-xl-none"
          role="button"
          tabIndex={0}
          // @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
          onKeyDown={() => dispatch(toggleSidenav())}
          onClick={() => dispatch(toggleSidenav())}
        />
      ) : null} */}
    </>
  );
};

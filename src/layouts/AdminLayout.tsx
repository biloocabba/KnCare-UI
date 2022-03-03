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
import { Audio } from "react-loader-spinner";
import { Outlet, useLocation } from "react-router-dom";

import careLogo from "assets/img/brand/CareLogoMin.png";

import { routes } from "routes";

import { useAppDispatch, useAppSelector } from "redux/app";
import {
  findAllBusinessUnits,
  findAllCountries,
  findAllGroups,
  findAllRoles,
  searchCareMembers,
  selectAllBusinessUnitData,
  selectAllCareMembersData,
  selectAllCountryData,
  selectAllGroupsData,
  selectAllRolesData,
} from "redux/features";

import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import { ThemeColors } from "types";

import { useScrollToTop } from ".";

export const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const mainContentRef = useRef(document.createElement("div"));
  const [isDataLoadingCompleted, setIsDataLoadingCompleted] = useState(false);

  const [isCountryDataLoaded, setIsCountryDataLoaded] = useState(false);
  const [isBusinessUnitsDataLoaded, setIsBusinessUnitsDataLoaded] = useState(false);
  const [isRolesDataLoaded, setIsRolesDataLoaded] = useState(false);
  const [isGroupsDataLoaded, setIsGroupsDataLoaded] = useState(false);
  const [isCareMembersDataLoaded, setIsCareMembersDataLoaded] = useState(false);

  const countries = useAppSelector(selectAllCountryData);
  const businessUnits = useAppSelector(selectAllBusinessUnitData);
  const roles = useAppSelector(selectAllRolesData);
  const groups = useAppSelector(selectAllGroupsData);
  const careMembers = useAppSelector(selectAllCareMembersData);

  useScrollToTop(mainContentRef);

  useEffect(() => {
    if (!countries || countries.length == 0) {
      dispatch(findAllCountries());
    } else {
      setIsCountryDataLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries, isCountryDataLoaded]);

  useEffect(() => {
    if (!businessUnits || businessUnits.length == 0) {
      dispatch(findAllBusinessUnits());
    } else {
      setIsBusinessUnitsDataLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessUnits, isBusinessUnitsDataLoaded]);

  useEffect(() => {
    if (!careMembers || careMembers.length == 0) {
      dispatch(searchCareMembers({}));
    } else {
      setIsCareMembersDataLoaded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [careMembers, isCareMembersDataLoaded]);

  useEffect(() => {
    if (!roles || roles.length == 0) {
      dispatch(findAllRoles());
    } else {
      setIsRolesDataLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roles, isRolesDataLoaded]);

  useEffect(() => {
    if (!groups || groups.length == 0) {
      dispatch(findAllGroups());
    } else {
      setIsGroupsDataLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups, isGroupsDataLoaded]);

  useEffect(() => {
    if (
      isCountryDataLoaded &&
      isBusinessUnitsDataLoaded &&
      isRolesDataLoaded &&
      isGroupsDataLoaded
    ) {
      setIsDataLoadingCompleted(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isCountryDataLoaded,
    isBusinessUnitsDataLoaded,
    isGroupsDataLoaded,
    isRolesDataLoaded,
    isDataLoadingCompleted,
  ]);

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
            <Outlet />
            <AdminFooter />
          </div>
        </>
      )}
    </>
  );
};

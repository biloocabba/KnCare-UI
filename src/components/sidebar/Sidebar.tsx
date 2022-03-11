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
import classnames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useLocation, NavLink as NavLinkRRD, Link } from "react-router-dom";

import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav } from "reactstrap";

import { useAppDispatch, useAppSelector } from "redux/app";
import { selectLoggedUserRole, toggleSidenav } from "redux/features";

import { IRoute, Role } from "types";

interface Props {
  /**
   * @description links that will be displayed inside the component
   */
  routes: IRoute[];
  logo: {
    /**
     * @description innerLink is for links that will direct the user within the app
     * it will be rendered as <Link to="...">...</Link> tag
     */
    innerLink?: string;

    /**
     * @description outerLink is for links that will direct the user outside the app
     * it will be rendered as simple <a href="...">...</a> tag
     */
    outerLink?: string;
    /**
     * @description the image src of the logo
     */
    imgSrc: string;
    /**
     * @description the alt for the img
     */
    imgAlt: string;
  };
  /**
   * @default false
   * @description this will make the sidebar to stay on the right side
   */
  rtlActive: boolean;
}

export const Sidebar = ({ routes, logo, rtlActive = false }: Props) => {
  const [state, setState] = useState<any>({});
  const userRole = useAppSelector(selectLoggedUserRole);
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { isSidenavOpen } = useAppSelector(state => state.sidenav);

  useEffect(() => {
    setState(getViewCollapseInitialState(routes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * verifies if routeName is the one active (in browser input)
   */
  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  /**
   * makes the sidenav normal on hover (actually when mouse enters on it)
   */
  const onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  /**
   * makes the sidenav mini on hover (actually when mouse leaves from it)
   */
  const onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };

  /**
   * this creates the intial state of this component
   * based on the collapse routes that it gets through routes
   */
  const getViewCollapseInitialState = (routes: IRoute[]) => {
    for (let i = 0; i < routes.length; i++) {
      const routePath = routes[i].path;
      if (routePath) {
        if (location.pathname.indexOf(routePath) !== -1) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * this is used on mobile devices, when a user navigates
   * the sidebar will autoclose
   */
  const closeSidenav = () => {
    if (window.innerWidth < 1200) {
      dispatch(toggleSidenav());
    }
  };

  /**
   * this function creates the links and collapses that appear in the sidebar (left menu)
   */
  const createLinks = (routes: IRoute[], userRole: Role): ReactNode => {
    const navItems = routes
      .filter(route => !route.global || !route.layout)
      .map(route => {
        if (route.collapse && route.state && route.views && route.allowedRoles.includes(userRole)) {
          const st: any = {};
          st[route["state"]] = !state[route.state];

          return (
            <NavItem key={route.key}>
              <NavLink
                data-toggle="collapse"
                aria-expanded={state[route.state]}
                className={classnames({
                  active: getViewCollapseInitialState(route.views),
                })}
                onClick={e => {
                  e.preventDefault();
                  setState({ ...state, ...st });
                }}
              >
                {route.icon ? (
                  <>
                    <i className={route.icon} />
                    <span className="nav-link-text">{route.name}</span>
                  </>
                ) : route.miniName ? (
                  <>
                    <span className="sidenav-mini-icon">{route.miniName}</span>
                    <span className="sidenav-normal"> {route.name} </span>
                  </>
                ) : null}
              </NavLink>
              <Collapse isOpen={state[route.state]}>
                <Nav className="nav-sm flex-column">{createLinks(route.views, userRole)}</Nav>
              </Collapse>
            </NavItem>
          );
        } else {
          return (
            <>
              {route.allowedRoles.includes(userRole) && (
                <NavItem className={activeRoute(route.layout + route.path)} key={route.key}>
                  <NavLink
                    to={route.layout + route.path}
                    activeClassName=""
                    onClick={closeSidenav}
                    tag={NavLinkRRD}
                  >
                    {route.icon !== undefined ? (
                      <>
                        <i className={route.icon} />
                        <span className="nav-link-text">{route.name}</span>
                      </>
                    ) : route.miniName !== undefined ? (
                      <>
                        <span className="sidenav-mini-icon">{route.miniName}</span>
                        <span className="sidenav-normal">{route.name}</span>
                      </>
                    ) : (
                      route.name
                    )}
                  </NavLink>
                </NavItem>
              )}
            </>
          );
        }
      });
    return navItems;
  };

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outerLink) {
    navbarBrandProps = {
      href: logo.outerLink,
      target: "_blank",
    };
  }

  const scrollBarInner = (
    <div className="scrollbar-inner">
      <div className="sidenav-header d-flex align-items-center">
        {logo ? (
          <NavbarBrand {...navbarBrandProps}>
            <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
          </NavbarBrand>
        ) : null}
        <div className="ml-auto">
          <div
            className={classnames("sidenav-toggler", {
              active: isSidenavOpen,
            })}
            role="button"
            tabIndex={0}
            // @docs https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
            onKeyDown={() => dispatch(toggleSidenav())}
            onClick={() => dispatch(toggleSidenav())}
          >
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>{createLinks(routes, userRole)}</Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Care Tools</span>
            <span className="docs-mini">CT</span>
          </h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink
                href="http://carecards.us.int.kn/carecards/frmMenuMain?source=S"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Digital Credit Card</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://connections.mykn.community/communities/service/html/communitystart?communityUuid=ba7a3c5a-23dd-45ad-9527-b12bd39ea32a"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Care Global</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://connections.mykn.community/communities/service/html/communitystart?communityUuid=e6415180-c77b-4c50-baf6-f0346e49f86b"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Service Actions Trainings</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://connections.mykn.community/communities/service/html/communityoverview?communityUuid=65e6800f-a221-473c-92a9-ba3ab95fa099"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Balance+Belonging</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://connections.mykn.community/communities/service/html/communityoverview?communityUuid=7eda766f-0c33-4f62-8fdb-ecb53191ea79"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Blue for Green</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#under development" target="_blank">
                <i className="ni ni-palette" />
                <span className="nav-link-text">Customer Feedback Tool</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#to be confirmed" target="_blank">
                <i className="ni ni-palette" />
                <span className="nav-link-text">HR Dashboards integration</span>
              </NavLink>
            </NavItem>
          </Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Support</span>
            <span className="docs-mini">D</span>
          </h6>
        </Collapse>
      </div>
    </div>
  );
  return (
    <Navbar
      className={
        "sidenav navbar-vertical navbar-expand-xs navbar-light bg-white " +
        (rtlActive ? "" : "fixed-left")
      }
      onMouseEnter={onMouseEnterSidenav}
      onMouseLeave={onMouseLeaveSidenav}
    >
      {navigator.platform.indexOf("Win") > -1 ? (
        <PerfectScrollbar>{scrollBarInner}</PerfectScrollbar>
      ) : (
        scrollBarInner
      )}
    </Navbar>
  );
};

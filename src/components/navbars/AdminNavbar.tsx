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
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  UncontrolledDropdown,
} from "reactstrap";

import classnames from "classnames";

import stefanoImg from "assets/img/care/stefano-fiorenza.jpg";
import { Theme } from "types";

interface Props {
  theme: Theme;
}

export const AdminNavbar = ({ theme }: Props) => {
  const logOut = () => {};

  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom",
          { "navbar-dark bg-primary": theme === "dark" },
          { "navbar-light bg-secondary": theme === "light" }
        )}
      >
        <Container fluid>
          <Collapse navbar isOpen={true}>
            <Nav className="align-items-center ml-md-auto" navbar></Nav>
            <Nav className="align-items-center ml-auto ml-md-0" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="nav-link pr-0" color="" tag="a">
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="..." src={stefanoImg} />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">Stefano Fiorenza</span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/auth/login" onClick={logOut}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

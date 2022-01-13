import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import { useDispatch } from "react-redux";


import {
  ALL_ACTIVE_MEMBERS,
  NEW_MEMBERS,
  SELF_RESIGNED_MEMBERS,
  AUTO_OFFBOARDED_MEMBERS
} from "../../actions/types";
import { getAutoOffboardedMembersMapData } from "actions/mapKpi";


function MapsHeader({ name, onActiveMembersClick, onNewMembersClick, onSelfResignedClick, onAutoOffboardedClick }) {
  const dispatch = useDispatch();
  // const mapData = useSelector(state => state.mapKpis);

  // const getMap = (e, actionType) => {
  //   e.preventDefault();
    
  //   dispatch(getMapData(actionType));
  // }

  return (
    <>
      <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">
                  {name}
                </h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  {/* <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem> */}
                  {/* <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem> */}
                </Breadcrumb>
              </Col>
              <Col className="mt-6 mt-md-0 text-md-right" lg="6" xs="5">
                <Button className="btn-neutral"
                  onClick={onActiveMembersClick}
                  color="default"
                  size="sm">
                  Active Care Members
                </Button>
                <Button className="btn-neutral"
                  onClick={onNewMembersClick}
                  color="default"
                  size="sm">
                  New Care Members
                </Button>
                <Button className="btn-neutral"
                  onClick={onSelfResignedClick}
                  color="default"
                  size="sm">
                  Self resigned last year
                </Button>
                <Button className="btn-neutral"
                  onClick={onAutoOffboardedClick}
                  color="default"
                  size="sm">
                  Automatic offboarded last year
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

MapsHeader.propTypes = {
  name: PropTypes.string,
  setMapData: PropTypes.func,
};

export default MapsHeader;
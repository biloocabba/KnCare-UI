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
import React, { useState, useEffect, PropTypes } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "actions/groups";
//import {user_initialState} from "../../../mock-data/employees"
import AsyncSelect from "react-select/async";
import SelectMemberPaginate from "./SelectMemberPaginate";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import GroupHeader from "components/Headers/GroupHeader";
import Select from "react-select";

function AddMemberPanel(props) {
  const careMembers = useSelector(state => {
    return state.careMembers.map(careMember => {
      return { value: careMember.id, label: careMember.internationalName };
    });
  });

  const roles = useSelector(state => {
    return state.categories.careRoles.map(role => {
      return { value: role.id, label: role.name };
    });
  });

  const businessUnits = useSelector(state => {
    return state.categories.businessUnits.map(bunit => {
      return { value: bunit.id, label: bunit.name };
    });
  });

  const countries = useSelector(state => {
    return state.categories.countryListAllIsoData.map(country => {
      return { value: country.code3, label: country.name };
    });
  });

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Add Members</h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xl="12">
            <Row>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Care Role
                  </label>
                  <Select
                    onChange={props.onchangeRole}
                    options={roles}
                    // getOptionValue={(option) => option.value}
                    // getOptionLabel={(option) => option.value}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Country
                  </label>
                  <Select
                    onChange={props.onchangeCountry}
                    options={countries}
                    // getOptionValue={(option) => option.value}
                    // getOptionLabel={(option) => option.name}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Business Unit
                  </label>
                  <Select
                    onChange={props.onchangeBunit}
                    options={businessUnits}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Add members
                  </label>
                  <Select
                    isMulti
                    onChange={props.onSelectCareMember}
                    options={careMembers}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default AddMemberPanel;

// AddMemberPanel.propTypes = {
//   onchangeRole: PropTypes.func,
//   onchangeCountry: PropTypes.func,
//   onchangeBunit: PropTypes.func,
//   onSelectCareMember: PropTypes.func
// };

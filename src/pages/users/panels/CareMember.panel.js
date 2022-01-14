import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
  } from "reactstrap";


import ReactDatetime from "react-datetime";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { InputField } from 'components/widgets/input-field';


export const CareMemberPanel = ({
    careMember,
    setCareMember 
  }) => {

    const {
      id,
      firstName,
      lastName,
      internationalName,
      title,
      email,
      businessUnit,
      managementGroup,
      companyCode,
      costCenter,
      companyPhone,
      officeAddressCountry,
      officeAddressCity,
      officeAddressStreet,
      officeAddressPostalCode,
      onBoardDate,
      defaultOffBoardDate, 
      defaultRole,
      defaultGroup   
    } = careMember;

    const history =useHistory();

    const [offboardingDate, setOffboardingDate] = useState(defaultOffBoardDate);
    const [role, setRole] = useState(defaultRole);
    const [group, setGroup] = useState(defaultGroup);

    const groupOptions=[]
    const careRoles=[]

    const filterOptions = (group, input) => {
        if (input) {
          return group.value === groupOptions[0].value;
        }
        return true;
      };

      const onSaveCareMember = () => {
        const careMemberInfo = {
          onBoardDate: onBoardDate,
          offBoardDate: offboardingDate,
          employee: id,
          role: role,
          group: group,
          careMember: true,
        };
    
        console.log("careMemberInfo", careMemberInfo);
      }

      
    const onBackToSearchClick= () => {
        history.push("/admin/employees-search")
    }
    return (
      
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Care Member information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                    <InputField
                        id="input-onboard date"
                        label="Onboard date"
                        value={onBoardDate}
                        type="text"
                        onChange={e =>
                            setCareMember({
                                ...careMember,
                                onBoardDate: e.target.value,
                            })
                        }
                    />

                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Onboard Date
                        </label>
                        <Input
                          id="input-first-name"
                          value={onBoardDate}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-auto-offboarding-date"
                        >
                          Auto Offboard Date
                        </label>
                        <ReactDatetime
                          value={offboardingDate}
                          onChange={e => setOffboardingDate(e)}
                          timeFormat={false}
                        />
                         </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-care-role"
                        >
                          Care Role
                        </label>
                       <Select
                          id="careRole"
                          components={makeAnimated()}
                          options={careRoles}
                          onChange={item =>
                            setRole({ id: item.value, name: item.label })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Group
                        </label>
                        <Select
                          id="defaultGroup"
                          components={makeAnimated()}
                          options={groupOptions}
                          onChange={item =>
                            setGroup({
                              id: item.value,
                              name: item.label,
                              groupIds: item.data || [item.value],
                            })
                          }
                          filterOption={filterOptions}
                          defaultValue={groupOptions[0]}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />

                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          First name
                        </label>
                        <Input
                          id="input-first-name"
                          value={employee.firstName}
                          type="text"
                          disabled={true}
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-first-name"
                            label="First name"
                            value={firstName}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Last name
                        </label>
                        <Input
                          id="input-last-name"
                          value={employee.lastName}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                         <InputField
                            id="input-last-name"
                            label="Last name"
                            value={lastName}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          International Name
                        </label>
                        <Input
                          id="input-username"
                          value={employee.internationalName}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-international-name"
                            label="International Name"
                            value={internationalName}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          id="input-email"
                          value={employee.email}
                          disabled={true}
                          type="email"
                        />
                      </FormGroup> */}

                        <InputField
                            id="input-email"
                            label="Email address"
                            value={email}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />

                <h6 className="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col md="12">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          value={employee.address}
                          id="input-address"
                          placeholder="Home Address"
                          type="text"
                          disabled={true}
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-address"
                            label="Address"
                            value={officeAddressStreet}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          City
                        </label>
                        <Input
                          value={employee.city}
                          id="input-city"
                          placeholder="City"
                          type="text"
                          disabled={true}
                        />
                      </FormGroup> */}
                      <InputField
                            id="input-city"
                            label="City"
                            value={officeAddressCity}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="4">
                         <InputField
                            id="input-country"
                            label="Country"
                            value={officeAddressCountry}
                            type="text"
                            disabled={true}
                        />
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Country
                        </label>
                        <Input
                          value={employee.country}
                          id="input-country"
                          placeholder="Country"
                          type="text"
                          disabled={true}
                        />
                      </FormGroup> */}
                    </Col>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Postal code
                        </label>
                        <Input
                          value={employee.postalCode}
                          id="input-postal-code"
                          placeholder="Postal code"
                          type="number"
                          disabled={true}
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-postal-code"
                            label="Postal code"
                            value={officeAddressPostalCode}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />

                <h6 className="heading-small text-muted mb-4">
                  Company Data
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Title
                        </label>
                        <Input
                          id="title"
                          value={employee.title}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-title"
                            label="Title"
                            value={title}
                            type="text"
                            disabled={true}
                        />
                    </Col>

                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Company Phone
                        </label>
                        <Input
                          id="companyPhone"
                          value="+372 77645322"
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-company-phone"
                            label="Company Phone"
                            value={companyPhone}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Company Code
                        </label>
                        <Input
                          id="input-postal-code"
                          value={employee.companyCode}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-company-code"
                            label="Company Code"
                            value={companyCode}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Business Unit
                        </label>
                        <Input
                          id="input-postal-code"
                          value={employee.businessUnit.name}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-business-unit"
                            label="Business Unit"
                            value={businessUnit.name}
                            type="text"
                            disabled={true}
                        />
                    </Col>

                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Cost Center
                        </label>
                        <Input
                          id="input-postal-code"
                          value={employee.costCenter}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                        <InputField
                            id="input-cost-center"
                            label="Cost Center"
                            value={costCenter}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="4">
                      {/* <FormGroup>
                        <label className="form-control-label">
                          Management Group
                        </label>
                        <Input
                          id="input-postal-code"
                          value={employee.managementGroup}
                          disabled={true}
                          type="text"
                        />
                      </FormGroup> */}
                       <InputField
                            id="input-management-group"
                            label="Management Group"
                            value={managementGroup}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                  </Row>
                  <Row>
                    <Button
                      color="primary"
                      type="button"
                      onClick={onSaveCareMember}
                    >
                      Save
                    </Button>
                  </Row>
                </div>
              </Form>
   )



}

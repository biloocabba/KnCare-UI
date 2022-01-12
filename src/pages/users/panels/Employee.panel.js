import React, { useState } from "react";
import { useDispatch } from "react-redux"

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Row,
} from "reactstrap";

import { InputField } from "components/widgets/input-field";

export const EmployeePanel = ({
    panelHeader,
    employee
}) => {


    const {       
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
    } = employee;


    return (

        <Form>
            <h6 className="heading-small text-muted mb-4">
                {panelHeader}
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col lg="6">

                        <InputField
                            id="input-last-name"
                            label="Last name"
                            value={lastName}
                            type="text"
                            disabled={true}
                        />
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
                    </Col>
                    <Col lg="6">

                    <InputField
                            id="input-first-name"
                            label="First name"
                            value={firstName}
                            type="text"
                            disabled={true}
                        />

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
                    </Col>
                </Row>

                <Row>
                    <Col lg="6">
                        <InputField
                            id="input-international-name"
                            label="International Name"
                            value={internationalName}
                            type="text"
                            disabled={true}
                        />
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
                Office information
            </h6>
            <div className="pl-lg-4">
                <Row>
                    <Col md="12">
                        {/* <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-address"
                            >
                                Office address
                            </label>
                            <Input
                                disabled={true}
                                defaultValue={employee.officeAddressStreet}
                                id="input-address"
                                placeholder="Home Address"
                                type="text"
                            />
                        </FormGroup> */}
                         <InputField
                            id="input-office-address-street"
                            label="Street"
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
                                disabled={true}
                                defaultValue={employee.officeAddressCity}
                                id="input-city"
                                placeholder="City"
                                type="text"
                            />
                        </FormGroup> */}
                          <InputField
                            id="input-office-address-city"
                            label="City"
                            value={officeAddressCity}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="4">
                        {/* <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                                Country
                            </label>
                            <Input
                                disabled={true}
                                defaultValue={employee.officeAddressCountry}
                                id="input-country"
                                placeholder="Country"
                                type="text"
                            />
                        </FormGroup> */}
                        <InputField
                            id="input-office-address-country"
                            label="Country"
                            value={officeAddressCountry}
                            type="text"
                            disabled={true}
                        />
                    </Col>
                    <Col lg="4">
                        <InputField
                            id="input-office-address-postal-code"
                            label="Postal Code"
                            value={officeAddressPostalCode}
                            type="text"
                            disabled={true}
                        />
                        {/* <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country"
                            >
                                Postal code
                            </label>
                            <Input
                                id="input-postal-code"
                                disabled={true}
                                value={
                                    employee.officeAddressPostalCode
                                        ? employee.officeAddressPostalCode
                                        : 10872
                                }
                                placeholder="Postal code"
                                type="number"
                            />
                        </FormGroup> */}
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
                            label="Job Title"
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
                            id="input-companyPhone"
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
                                value={employee.businessUnit}
                                disabled={true}
                                type="text"
                            />
                        </FormGroup> */}
                         <InputField
                            id="input-business-unit"
                            label="Business Unit"
                            value={businessUnit}
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
                        <InputField
                            id="input-management-group"
                            label="Management Group"
                            value={managementGroup}
                            type="text"
                            disabled={true}
                        />
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
                    </Col>
                </Row>
            </div>
        </Form>)
}
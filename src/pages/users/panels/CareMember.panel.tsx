import moment, { Moment } from "moment";
import { useState } from "react";

import { Button, Col, Form, Row } from "reactstrap";

import { useAppSelector } from "redux/app";
import { selectGroupsByIdsAsSelectValues, selectRoleByIdAsSelectValue } from "redux/features";

import { DateField, InputField, SelectField } from "components/widgets";

import { CareMember, CareMemberSaveRequest, SelectOption } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

interface onSaveFunction {
  (careMemberRequest: CareMemberSaveRequest): void;
}
interface CareMemberPanelProps {
  careMember: CareMember;
  groupOptions: SelectOption[];
  roleOptions: SelectOption[];
  onSave: onSaveFunction;
  buttonName: string;
}

export const CareMemberPanel = (props: CareMemberPanelProps) => {
  const { careMember, groupOptions, roleOptions, onSave } = props;

  const [onboardingDate, setOnboardingDate] = useState<Moment | undefined>(
    moment(careMember?.onboardingDate, DATE_FILTER_FORMAT)
  );

  const [offboardingDate, setOffboardingDate] = useState<Moment | undefined>(
    moment(careMember?.offboardingDate, DATE_FILTER_FORMAT)
  );

  const careMemberRole = useAppSelector(selectRoleByIdAsSelectValue(careMember.roleId));
  const careMemberGroups = useAppSelector(selectGroupsByIdsAsSelectValues(careMember.groups || []));

  const [roleId, setRoleId] = useState<number | undefined>();
  const [groupIds, setGroupIds] = useState<number[]>([]);

  const onSaveCareMember = () => {
    const careMemberSaveRequest: CareMemberSaveRequest = {
      id: careMember.id,
      onboardingDate: moment(onboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      offboardingDate: moment(offboardingDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT),
      roleId: roleId,
      employeeId: careMember.employeeId,
      groupIds: groupIds,
    };

    onSave(careMemberSaveRequest);
  };

  return (
    <Form>
      <h6 className="heading-small text-muted mb-4">Care Member information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <DateField
              id="date-auto-onboarding-date"
              label="Onboard date"
              value={onboardingDate}
              setValue={setOnboardingDate}
            />
          </Col>
          <Col lg="6">
            <DateField
              id="date-auto-offboarding-date"
              label="Auto Offboard Date"
              value={offboardingDate}
              setValue={setOffboardingDate}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <SelectField
              id="select-role"
              label="Role"
              options={roleOptions}
              defaultValue={careMemberRole}
              onChange={item => {
                const { value } = item as SelectOption;
                setRoleId(parseInt(value));
              }}
            />
          </Col>
          <Col lg="6">
            <SelectField
              id="select-group"
              label="Group"
              options={groupOptions}
              defaultValue={careMemberGroups}
              isMulti={true}
              onChange={item => {
                const selections = item as SelectOption[];
                const groupIdSelected = selections.map(item => parseInt(item.value));

                setGroupIds(groupIdSelected);
              }}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">User information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <InputField
              id="input-first-name"
              label="First name"
              value={careMember.firstName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="6">
            <InputField
              id="input-last-name"
              label="Last name"
              value={careMember.lastName}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="6">
            <InputField
              id="input-international-name"
              label="International Name"
              value={careMember.internationalName}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="6">
            <InputField
              id="input-email"
              label="Email address"
              value={careMember.email}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">Contact information</h6>
      <div className="pl-lg-4">
        <Row>
          <Col md="12">
            <InputField
              id="input-address"
              label="Address"
              value={careMember.office.street}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <InputField
              id="input-city"
              label="City"
              value={careMember.office.city}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-country"
              label="Country"
              value={careMember.office.country || ""}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-postal-code"
              label="Postal code"
              value={careMember.office.postalCode || ""}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
      </div>
      <hr className="my-4" />

      <h6 className="heading-small text-muted mb-4">Company Data</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="4">
            <InputField
              id="input-title"
              label="Title"
              value={careMember.title}
              type="text"
              disabled={true}
            />
          </Col>

          <Col lg="4">
            <InputField
              id="input-company-phone"
              label="Company Phone"
              value={careMember.companyPhone}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-company-code"
              label="Company Code"
              value={careMember.companyCode}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <InputField
              id="input-business-unit"
              label="Business Unit"
              value={careMember.businessUnit}
              type="text"
              disabled={true}
            />
          </Col>

          <Col lg="4">
            <InputField
              id="input-cost-center"
              label="Cost Center"
              value={careMember.costCenter}
              type="text"
              disabled={true}
            />
          </Col>
          <Col lg="4">
            <InputField
              id="input-management-group"
              label="Management Group"
              value={careMember.managementGroup}
              type="text"
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Button color="primary" type="button" onClick={onSaveCareMember}>
            {props.buttonName}
          </Button>
        </Row>
      </div>
    </Form>
  );
};

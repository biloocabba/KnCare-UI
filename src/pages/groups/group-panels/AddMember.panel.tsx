import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

import { SelectField } from "components/widgets";

import { useAppSelector } from "redux/app";
import {
  selectAllBusinessUnitsDataAsSelectOptions,
  selectAllCountryDataAsSelectOptions,
  selectAllEmployeeDataAsSelectOptions,
} from "redux/features";

interface Props {
  onChangeRole: () => void;
  onChangeCountry: () => void;
  onChangeBusinessUnit: () => void;
  onSelectCareMember: () => void;
}

export const AddMemberPanel = ({
  onChangeBusinessUnit,
  onChangeCountry,
  onChangeRole,
  onSelectCareMember,
}: Props) => {
  const countriesList = useAppSelector(selectAllCountryDataAsSelectOptions);
  const businessUnitsList = useAppSelector(selectAllBusinessUnitsDataAsSelectOptions);
  const membersList = useAppSelector(selectAllEmployeeDataAsSelectOptions);

  const jobTitles = [
    { value: 1, label: "product manager" },
    { value: 2, label: "qa engineer" },
    { value: 3, label: "hr consultant" },
    { value: 4, label: "office manager" },
    { value: 5, label: "sales representative" },
    { value: 6, label: "logistics consultant" },
  ];
  // @todo make this find employees by filters
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
          <Col md="12">
            <Row>
              <Col md="2">
                <SelectField
                  id="job-title"
                  label="Job Title"
                  onChange={onChangeRole}
                  options={jobTitles}
                />
              </Col>
              <Col md="2">
                <SelectField
                  id="country-select"
                  label="Country"
                  onChange={onChangeCountry}
                  options={countriesList}
                />
              </Col>
              <Col md="2">
                <SelectField
                  id="business-unit-select"
                  label="Business Unit"
                  onChange={onChangeBusinessUnit}
                  options={businessUnitsList}
                />
              </Col>
              <Col md="4">
                <SelectField
                  id="add-members-select"
                  label="Add members"
                  isMulti
                  onChange={onSelectCareMember}
                  options={membersList}
                />
              </Col>
              <Col md="2">
                <FormGroup>
                  <Button
                    style={{
                      marginTop: "32px",
                      marginLeft: "32px",
                      height: "40px",
                    }}
                    color="success"
                  >
                    Add
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

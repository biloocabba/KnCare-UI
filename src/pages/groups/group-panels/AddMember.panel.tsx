import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

interface Props {
  onChangeRole: any;
  onChangeCountry: any;
  onChangeBusinessUnit: any;
  onSelectCareMember: any;
}
export const AddMemberPanel = ({
  onChangeRole,
  onChangeCountry,
  onChangeBusinessUnit,
  onSelectCareMember,
}: Props) => {
  // const countriesList = useAppSelector(selectCountriesAsList);
  // const businessUnitsList = useAppSelector(selectBusinessUnitsAsList);

  // const jobTitles = [
  //   { value: 1, label: "product manager" },
  //   { value: 2, label: "qa engineer" },
  //   { value: 3, label: "hr consultant" },
  //   { value: 4, label: "office manager" },
  //   { value: 5, label: "sales representative" },
  //   { value: 6, label: "logistics consultant" },
  // ];
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
              {/* <Col md="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Job Title
                  </label>
                  <Select onChange={onChangeRole} options={jobTitles} />
                </FormGroup>
              </Col> */}
              {/* <Col md="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Country
                  </label>
                  <Select onChange={onChangeCountry} options={countriesList} />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Business Unit
                  </label>
                  <Select onChange={onChangeBusinessUnit} options={businessUnitsList} />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Add members
                  </label>
                  <Select isMulti onChange={onSelectCareMember} options={selectEmployeesAsList} />
                </FormGroup>
              </Col> */}
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

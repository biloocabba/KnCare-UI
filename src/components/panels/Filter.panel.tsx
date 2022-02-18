import { Button, Card, CardBody, CardHeader, Col, FormGroup, Row } from "reactstrap";

interface Props {
  title: string;
  findByAllParameters: () => void;
  children?: React.ReactNode;
}

export const FilterPanel = ({ title, children, findByAllParameters }: Props) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">{title}</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody className="pl-6 pr-6">
        <Row>
          <Col>
            <Row className="d-flex justify-content-center">{children}</Row>
          </Col>
          <Col md="1.1" className="d-flex align-items-end">
            <FormGroup>
              <Button className="btn btn-primary" color="primary" onClick={findByAllParameters}>
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

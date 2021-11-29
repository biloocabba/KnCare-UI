import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";
import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";

const HomePage = () => {
  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Home</h3>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;

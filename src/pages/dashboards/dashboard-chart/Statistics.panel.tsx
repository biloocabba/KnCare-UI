import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

export const StatisticsPanel = () => {
  return (
    <div>
      <Row>
        <Col md="6" xl="3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                    Onboarded last month
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">25</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">&nbsp;</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                    Offboarded last month
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">7</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">&nbsp;</p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                    Business Unit
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">Sea Logistics</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                    <i className="fas fa-crown"></i>
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">
                <span className="text-success mr-2">
                  <i className="fa fa-arrow-up" /> 8
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" xl="3">
          <Card className="card-stats">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                    Country
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">Germany</span>
                </div>
                <Col className="col-auto">
                  <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                    <i className="fas fa-crown"></i>
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-sm">
                <span className="text-success mr-2">
                  <i className="fa fa-arrow-up" /> 11
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

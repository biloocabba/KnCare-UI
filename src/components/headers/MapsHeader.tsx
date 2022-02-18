import { Breadcrumb, Button, Container, Row, Col } from "reactstrap";

interface Props {
  name: string;
  onActiveMembersClick: () => void;
  onNewMembersClick: () => void;
  onSelfResignedClick: () => void;
  onAutoOffboardedClick: () => void;
}

export const MapsHeader = ({
  name,
  onActiveMembersClick,
  onNewMembersClick,
  onSelfResignedClick,
  onAutoOffboardedClick,
}: Props) => {
  return (
    <>
      <div className="header header-dark bg-primary pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">{name}</h6>{" "}
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
                <Button
                  className="btn-neutral"
                  onClick={onActiveMembersClick}
                  color="default"
                  size="sm"
                >
                  Active Care Members
                </Button>
                <Button
                  className="btn-neutral"
                  onClick={onNewMembersClick}
                  color="default"
                  size="sm"
                >
                  New Care Members
                </Button>
                <Button
                  className="btn-neutral"
                  onClick={onSelfResignedClick}
                  color="default"
                  size="sm"
                >
                  Self resigned last year
                </Button>
                <Button
                  className="btn-neutral"
                  onClick={onAutoOffboardedClick}
                  color="default"
                  size="sm"
                >
                  Automatic offboarded last year
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

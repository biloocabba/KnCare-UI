import { MouseEvent } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

import careCreditCardsImg from "assets/img/care/care-credit-cards.png";
import huddleImg from "assets/img/care/huddle.png";
import remoteWorkImg from "assets/img/care/remote-work.png";

import { useFeatureDisabledWarning } from "hooks";

interface Props {
  onViewDetailsClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const BestPracticeHighlightsPanel = ({ onViewDetailsClick }: Props) => {
  const { fireAlert } = useFeatureDisabledWarning();
  return (
    <Card>
      <CardHeader>
        <h2 className="mb-0">Best Practices</h2>
        <p className="text-sm mb-0">Highlighted</p>
      </CardHeader>
      <CardBody>
        <Row className="card-wrapper">
          <Col lg="4">
            <Card>
              <CardImg alt="..." src={careCreditCardsImg} top />
              <CardBody style={{ height: "13em" }}>
                <CardTitle className="mb-3 text-center" tag="h3">
                  Care Credit Cards
                </CardTitle>
                <CardText className="mb-4">
                  <Row className="justify-content-center">
                    <Col lg="12">Recognize a colleague from everywhere in the world</Col>
                  </Row>
                </CardText>
                <Button id="1" color="primary" onClick={() => fireAlert()}>
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardImg alt="..." src={huddleImg} top />
              <CardBody style={{ height: "13em" }}>
                <CardTitle className="mb-3 text-center" tag="h3">
                  Huddles
                </CardTitle>
                <CardText className="mb-4">
                  <Row className="justify-content-center">
                    <Col lg="12">
                      Guide the team in a discussion around the topics and what the idea means
                    </Col>
                  </Row>
                </CardText>
                <Button id="2" color="primary" onClick={e => onViewDetailsClick(e)}>
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <CardImg alt="..." src={remoteWorkImg} top />
              <CardBody style={{ height: "13em" }}>
                <CardTitle className="mb-3 text-center" tag="h3">
                  Care & Remote Work
                </CardTitle>
                <CardText className="mb-4">
                  <Row className="justify-content-center">
                    <Col lg="12">Playbook for remote work</Col>
                  </Row>
                </CardText>
                <Button id="3" color="primary" onClick={() => fireAlert()}>
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

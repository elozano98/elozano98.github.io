import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Button variant="primary" href={props.link} target="_blank">
      <Card className="project-card-view">
        <Row
          style={{ paddingTop: "20px", paddingBottom: "20px", margin: "auto" }}
        >
          <Col md={4}>
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt="card-img"
              className="card-img"
            />
          </Col>
          <Col>
            <Row>
              <b>
                <Card.Title>{props.title}</Card.Title>
              </b>
            </Row>
            <Row>
              <Card.Text style={{ textAlign: "justify" }}>
                {props.description}
              </Card.Text>
            </Row>
          </Col>
        </Row>
      </Card>
    </Button>
  );
}
export default ProjectCards;

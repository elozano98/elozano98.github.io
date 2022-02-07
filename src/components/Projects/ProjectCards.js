import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Container className="project-card">
      <Row>
        <Col md={4}>
          <img
            src={props.imgPath}
            className="project-card-img"
            alt="project-card-img"
          />
        </Col>
        <Col>
          <Row>
            <h4 className="project-card-title">{props.title}</h4>
          </Row>
          <Row>
            <p className="project-card-description">{props.description}</p>
          </Row>
          <Row>
            <a href={props.link} className="project-card-button" target="blank">
              Visit project site!
            </a>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectCards;

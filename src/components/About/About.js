import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid id="about-content">
      <Particle />
      <Container>
        <Row className="about-section">
          <Col>
            <h1 className="section-heading">
              My <b className="main-color">Experience</b>
            </h1>
            <Experience className="section-content" />
          </Col>
        </Row>

        <Row className="about-section">
          <Col>
            <h1 className="project-heading">
              Professional <b className="main-color">Skillset</b>
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Row className="about-section">
          <Col>
            <h1 className="project-heading">
              <b className="main-color">Tools</b> I use
            </h1>
            <Toolstack />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

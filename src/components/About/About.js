import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", padding: "10px", margin: "50px" }}
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who is <b className="main-color">Eric Lozano</b>?
            </h1>
            <Aboutcard />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            margin: "50px",
          }}
        >
          <Col>
            <h1 className="project-heading">
              My <b className="main-color">Experience</b>
            </h1>
            <Experience />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            margin: "50px",
          }}
        >
          <Col>
            <h1 className="project-heading">
              Professional <b className="main-color">Skillset</b>
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            margin: "50px",
          }}
        >
          <Col>
            <h1 className="project-heading">
              <b className="main-color">Tools</b> I use
            </h1>
            <Toolstack />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            padding: "10px",
            margin: "50px",
          }}
        >
          <Col>
            <Github />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

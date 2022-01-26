import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import flappyBird from "../../Assets/Projects/flappybird.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <b className="main-color">work</b>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Row className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Genetic Algorithm learns how to play Flappy Bird"
              description="Implementation of the Flappy Bird game and a Genetic Algorithm that uses a Neural Network to learn how to play the game even better than a human does."
              link="https://github.com/elozano98/Flappy-bird---GA"
            />
          </Row>
          <Row className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Genetic Algorithm learns how to play Flappy Bird"
              description="Implementation of the Flappy Bird game and a Genetic Algorithm that uses a Neural Network to learn how to play the game even better than a human does."
              link="https://github.com/elozano98/Flappy-bird---GA"
            />
          </Row>
          <Row className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Genetic Algorithm learns how to play Flappy Bird"
              description="Implementation of the Flappy Bird game and a Genetic Algorithm that uses a Neural Network to learn how to play the game even better than a human does."
              link="https://github.com/elozano98/Flappy-bird---GA"
            />
          </Row>
        </Col>
      </Container>
    </Container>
  );
}

export default Projects;

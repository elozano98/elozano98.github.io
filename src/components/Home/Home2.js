import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import avatar from "../../Assets/avatar.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="main-color"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              I am a computer engineer passionate about{" "}
              <b className="secundary-color">Artificial Intelligence</b> and
              specialized in{" "}
              <b className="secundary-color">Natural Language Processing</b>.
              <br /> <br />
              My favourite programming language is{" "}
              <b className="secundary-color">Python</b> and I have experience
              using the most famous Deep Learning frameworks such as{" "}
              <b className="secundary-color">TensorFlow</b>,{" "}
              <b className="secundary-color">PyTorch</b>,{" "}
              <b className="secundary-color">Transformers</b> and{" "}
              <b className="secundary-color">spaCy</b>.
              <br /> <br />
              My field of interest is building new{" "}
              <b className="secundary-color">products</b> and{" "}
              <b className="secundary-color">applications</b> that made our life
              easier by using the last Deep Learning models.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on</h1>
            <p>
              Feel free to <span className="main-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elozano98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eric-lozano-ferriz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

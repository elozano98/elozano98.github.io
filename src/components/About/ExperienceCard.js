import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <Container className="experience-card">
      <Row>
        <Col md={2} style={{ marginTop: "10px" }}>
          <a href={props.companyUrl}>
            <Tilt>
              <img
                src={props.imgPath}
                alt="{prop.companyName}"
                className="experience-card-img"
              />
            </Tilt>
          </a>
        </Col>
        <Col style={{ marginLeft: "20px", marginTop: "10px" }}>
          <Row>
            <h3>{props.position}</h3>
          </Row>
          <Row className="experience-card-info">
            <Col
              md="auto"
              style={{
                paddingRight: "0px",
              }}
            >
              <FaBuilding />
            </Col>
            <Col md="auto" style={{ paddingLeft: "6px" }}>
              {props.companyName}
            </Col>
          </Row>
          <Row className="experience-card-info">
            <Col
              md="auto"
              style={{
                paddingRight: "0px",
              }}
            >
              <AiFillCalendar />
            </Col>
            <Col md="auto" style={{ paddingLeft: "6px" }}>
              {props.start.toLocaleString("en", { month: "long" }) +
                ". " +
                props.start.getFullYear() +
                " - "}{" "}
              {props.end
                ? props.end.toLocaleString("en", { month: "long" }) +
                  ". " +
                  props.end.getFullYear()
                : "Now"}
            </Col>
          </Row>
          <Row className="experience-card-info">
            <Col
              md="auto"
              style={{
                paddingRight: "0px",
              }}
            >
              <MdLocationOn />
            </Col>
            <Col md="auto" style={{ paddingLeft: "6px" }}>
              {props.location}
            </Col>
          </Row>
          <Row>
            <p>
              <ul className="experience-card-tasks">
                {props.tasks.map((t) => (
                  <li className="experience-card-task">{t}</li>
                ))}
              </ul>
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceCard;

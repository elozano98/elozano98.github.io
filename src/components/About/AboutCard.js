import React from "react";
import Card from "react-bootstrap/Card";
import { ImBook, ImAirplane } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am{" "}
            <span className="secundary-color">Eric Lozano</span>
            {""} from <span className="secundary-color"> Barcelona, Spain</span>
            .
            <br />
            <br />I am a Mid-Level engineer licensed in{" "}
            <span className="secundary-color">Computer Engineering</span> and
            pursuing an{" "}
            <span className="secundary-color">
              Artificial Intelligence Master
            </span>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <FaGamepad /> &ensp; Playing computer games.
            </li>
            <li className="about-activity">
              <IoMdPerson /> &ensp; Hanging out with my friends.
            </li>
            <li className="about-activity">
              <ImAirplane /> &ensp; Travelling.
            </li>
            <li className="about-activity">
              <ImBook /> &ensp; Reading sci-fi books.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

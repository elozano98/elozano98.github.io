import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import bodas from "../../Assets/Experience/bodas.jpg";
import serimag from "../../Assets/Experience/serimag.jpg";
import hubtype from "../../Assets/Experience/hubtype.jpg";

function Experience() {
  return (
    <Container>
      <Col>
        <Row>
          <ExperienceCard
            imgPath={hubtype}
            position="NLP Engineer"
            companyName="Hubtype"
            companyUrl="https://www.linkedin.com/company/hubtype/"
            start={new Date(2020, 8, 1)}
            end={null}
            location="Barcelona"
            tasks={[
              "Implementation of a new infrastructure for training text classification models using AWS services such as SageMaker and S3.",
              "Implementation of Deep Learning models for different NLP tasks such as Text Classification, Named Entity Recognition, Sentiment Analysis, etc.",
              "Migration of NLP models to the new state-of-the-art using Transformers.",
            ]}
          />
        </Row>
        <Row>
          <ExperienceCard
            imgPath={serimag}
            position="Machine Learning Engineer"
            companyName="Serimag"
            companyUrl="https://www.linkedin.com/company/serimag/"
            start={new Date(2019, 8, 1)}
            end={new Date(2020, 6, 1)}
            location="Barcelona"
            tasks={[
              "Development of Text Classification models for Bank and Assurance documents.",
              "Development of Named Entity Recognition (NER) models for Bank and Assurance documents.",
            ]}
          />
        </Row>
        <Row>
          <ExperienceCard
            imgPath={bodas}
            position="Back-end Developer Internship"
            companyName="Bodas.net"
            companyUrl="https://www.linkedin.com/company/www-bodas-net/"
            start={new Date(2019, 6, 1)}
            end={new Date(2019, 8, 1)}
            location="Barcelona"
            tasks={["Web maintenance and bug fixing."]}
          />
        </Row>
      </Col>
    </Container>
  );
}

export default Experience;

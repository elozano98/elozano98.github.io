import React from "react";
import { Container } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import bodas from "../../Assets/Experience/bodas.jpg";
import serimag from "../../Assets/Experience/serimag.jpg";
import hubtype from "../../Assets/Experience/hubtype.jpg";

function Experience() {
  return (
    <Container>
      <ExperienceCard
        imgPath={hubtype}
        position="NLP Engineer"
        companyName="Hubtype"
        companyUrl="https://www.linkedin.com/company/hubtype/"
        start={new Date(2020, 8, 1)}
        end={null}
        location="Barcelona (Remote)"
        tasks={[
          "Research and development of a multi-task model where different NLP ztasks can be solved at the same time by one single model.",
          "Development of Hubtype AI application where clients can easily create, train and deploy into AWS SageMaker their own model. ",
          "Training and deployment of Regression models to estimate the rating of cases where customers did not give feedback.",
          "Training and deployment of custom Named Entity Recognition models able to recognize specific entities on customer messages and avoid asking for information that already has been proportioned.",
          "Training and deployment of text classification models able to detect the customer's intent so the chatbot knows which action flow is next.",
          "Increase AI model performance for all clients by using state-of-art model architectures based on Transformers.",
          "Development and maintenance the AI package from the company's open source framework (Botonic) to build chatbots.",
        ]}
      />
      <ExperienceCard
        imgPath={serimag}
        position="Machine Learning Engineer"
        companyName="Serimag"
        companyUrl="https://www.linkedin.com/company/serimag/"
        start={new Date(2019, 8, 1)}
        end={new Date(2020, 6, 1)}
        location="Barcelona"
        tasks={[
          "Development of deep learning models to automate bank document classification, segmentation and/or information extraction.",
          "Usage of computer vision algorithms to process scanned documentation.",
        ]}
      />
      <ExperienceCard
        imgPath={bodas}
        position="Back-end Developer Internship"
        companyName="Bodas.net"
        companyUrl="https://www.linkedin.com/company/www-bodas-net/"
        start={new Date(2019, 6, 1)}
        end={new Date(2019, 8, 1)}
        location="Barcelona"
        tasks={["Implementation and maintenance of new back-end features."]}
      />
    </Container>
  );
}

export default Experience;

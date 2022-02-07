import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import flappyBird from "../../Assets/Projects/flappybird.gif";
import twitter from "../../Assets/Projects/twitter.jpg";
import tweetSentiment from "../../Assets/Projects/tweet-sentiment.png";
import tweetEmotion from "../../Assets/Projects/tweet-emotion.png";
import tweetOffensive from "../../Assets/Projects/tweet-offensive.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <b className="main-color">projects</b>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <ProjectCard
          imgPath={twitter}
          isBlog={false}
          title="Tweet Evaluator"
          description="Implementation of a HuggingFace Space where 3 different custom models are used to evaluate a given tweet text."
          link="https://huggingface.co/spaces/elozano/tweet_eval"
        />
        <ProjectCard
          imgPath={tweetSentiment}
          isBlog={false}
          title="Tweet Sentimentent Analysis Model"
          description="Fine-tuning of Roberta Transformer for sentiment analysis of a tweet text."
          link="https://huggingface.co/elozano/tweet_sentiment_eval"
        />

        <ProjectCard
          imgPath={tweetEmotion}
          isBlog={false}
          title="Tweet Emotion Classification Model"
          description="Fine-tuning of Roberta Transformer for emotion classification of a tweet text."
          link="https://huggingface.co/elozano/tweet_emotion_eval"
        />

        <ProjectCard
          imgPath={tweetOffensive}
          isBlog={false}
          title="Offensive Tweet Detection Model"
          description="Fine-tuning of Roberta Transformer for detecting if a tweet is offensive."
          link="https://huggingface.co/elozano/tweet_offensive_eval"
        />

        <ProjectCard
          imgPath={flappyBird}
          isBlog={false}
          title="Genetic Algorithm learns how to play Flappy Bird"
          description="Implementation of the Flappy Bird game and a Genetic Algorithm that uses a Neural Network to learn how to play the game even better than a human does."
          link="https://github.com/elozano98/Flappy-bird---GA"
        />
      </Container>
    </Container>
  );
}

export default Projects;

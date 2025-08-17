import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { SectionTitle } from "../common/SectionTitle";

const Container = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background};
  display: flex;
  align-items: center;
  padding: ${theme.spacing["4xl"]} 0;
`;

const Content = styled.div`
  max-width: ${theme.breakpoints.xl};
  margin: 0 auto;
  width: 100%;
  padding: 0 ${theme.spacing.xl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: ${theme.spacing.xl};
  border: 1px solid ${theme.colors.gray[200]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  }
`;

const IconWrapper = styled.div`
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.lg};
  width: 40px;
  height: 40px;
`;

const CategoryTitle = styled.h3`
  font-size: ${theme.typography.sizes.xl};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.base};
  font-weight: ${theme.typography.weights.semibold};
`;

const Description = styled.p`
  color: ${theme.colors.gray[500]};
  font-size: ${theme.typography.sizes.base};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const Skill = styled.span`
  font-size: ${theme.typography.sizes.sm};
  color: ${theme.colors.primary};
  background: ${theme.colors.gray[100]};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 8px;
`;

const ExpertiseCard: React.FC<{
  category: string;
  description: string;
  skills: string[];
  index: number;
}> = ({ category, description, skills, index }) => (
  <Card
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <CategoryTitle>{category}</CategoryTitle>
    <Description>{description}</Description>
    <SkillsContainer>
      {skills.map((skill) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
    </SkillsContainer>
  </Card>
);

const ExpertiseShowcase: React.FC = () => {
  const expertiseData = [
    {
      category: "AI & Machine Learning",
      description:
        "Specialized in LLMs, NLP, and AI Agents with a Master's in AI and Computer Engineering background.",
      skills: [
        "Large Language Models",
        "LangChain",
        "LangGraph",
        "OpenAI",
        "NLP",
        "Neural Networks",
      ],
    },
    {
      category: "Cloud & DevOps",
      description:
        "Experience with AWS services, focusing on ML deployment and scalable architectures.",
      skills: [
        "AWS SageMaker",
        "AWS ECS",
        "AWS Bedrock",
        "Docker",
        "CI/CD",
        "MLOps",
      ],
    },
    {
      category: "Software Engineering",
      description:
        "Full-stack development with expertise in Python and modern web technologies.",
      skills: ["Python", "Django", "React", "TypeScript", "REST APIs", "Git"],
    },
  ];

  return (
    <Container>
      <Content>
        <SectionTitle
          title="Technical Expertise"
          subtitle="Specialized in AI, cloud infrastructure, and modern software development practices."
        />
        <Grid>
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={item.category} {...item} index={index} />
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default ExpertiseShowcase;

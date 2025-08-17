import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { SectionTitle } from "../common/SectionTitle";

const Container = styled.div`
  width: 100%;
  background: ${theme.colors.background};
  padding: ${theme.spacing["4xl"]} 0;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: ${theme.spacing["2xl"]};
  border: 1px solid ${theme.colors.gray[100]};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02), 0 3px 6px rgba(0, 0, 0, 0.03);

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const TimelineItem = styled.div`
  margin-bottom: ${theme.spacing["3xl"]};
  position: relative;
  padding-left: ${theme.spacing["3xl"]};

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${theme.colors.gradient.primary};
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 26px;
    width: 2px;
    bottom: -${theme.spacing["3xl"]};
    background: ${theme.colors.gray[200]};
  }
`;

const Period = styled.div`
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.gray[400]};
  margin-bottom: ${theme.spacing.sm};
  font-weight: ${theme.typography.weights.medium};
  letter-spacing: -0.01em;
`;

const Degree = styled.div`
  font-size: ${theme.typography.sizes["2xl"]};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.base};
  font-weight: ${theme.typography.weights.medium};
  letter-spacing: -0.02em;
  line-height: 1.3;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.xl};
  }
`;

const Institution = styled.div`
  font-size: ${theme.typography.sizes.lg};
  color: ${theme.colors.gray[500]};
  letter-spacing: -0.01em;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
  }
`;

const LanguageBar = styled.div<{ $level: number }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.base};
  margin-bottom: ${theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

const LanguageName = styled.div`
  min-width: 100px;
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.weights.medium};
`;

const LanguageLevel = styled.div`
  font-size: ${theme.typography.sizes.base};
  color: ${theme.colors.gray[500]};
`;

const ProgressBar = styled.div<{ $level: number }>`
  flex: 1;
  height: 4px;
  background: ${theme.colors.gray[100]};
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.$level}%;
    background: ${theme.colors.gradient.primary};
    border-radius: 2px;
  }
`;

const education = [
  {
    period: "2021 - 2022",
    degree: "Artificial Intelligence Master",
    institution: "Universidad Internacional de Valencia",
  },
  {
    period: "2016 - 2020",
    degree: "Computer Engineering Degree",
    institution: "Universitat Autònoma de Barcelona",
  },
];

const languages = [
  { name: "Spanish", level: "Native", proficiency: 100 },
  { name: "Catalan", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 85 },
];

export const Education: React.FC = () => {
  return (
    <Container>
      <Content>
        <SectionTitle
          title="Education"
          subtitle="Academic background and qualifications"
        />
        <Card
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {education.map((item) => (
            <TimelineItem key={item.degree}>
              <Period>{item.period}</Period>
              <Degree>{item.degree}</Degree>
              <Institution>{item.institution}</Institution>
            </TimelineItem>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

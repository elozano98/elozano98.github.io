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

const languages = [
  { name: "Spanish", level: "Native", proficiency: 100 },
  { name: "Catalan", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 85 },
];

export const Languages: React.FC = () => {
  return (
    <Container>
      <Content>
        <SectionTitle
          title="Languages"
          subtitle="Language proficiency and communication skills"
        />
        <Card
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {languages.map((lang) => (
            <LanguageBar key={lang.name} $level={lang.proficiency}>
              <LanguageName>{lang.name}</LanguageName>
              <ProgressBar $level={lang.proficiency} />
              <LanguageLevel>{lang.level}</LanguageLevel>
            </LanguageBar>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

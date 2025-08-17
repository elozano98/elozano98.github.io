import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import { Experience } from "../components/sections/Experience";
import ExpertiseShowcase from "../components/sections/ExpertiseShowcase";
import { Education } from "../components/sections/Education";
import { Languages } from "../components/sections/Languages";
import { Hero } from "../components/sections/Hero";

const PageContainer = styled.div`
  overflow-x: hidden;
  background: ${theme.colors.background};
`;

const MainContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: ${theme.spacing["4xl"]} ${theme.spacing.xl};
  color: ${theme.colors.primary};
  overflow: hidden;
`;

const ContentContainer = styled.div`
  max-width: ${theme.breakpoints.xl};
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${theme.spacing.xl};
`;

const Column = styled(motion.div)<{ $span?: number }>`
  grid-column: span ${(props) => props.$span || 12};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-column: span 12;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: ${theme.spacing.xl};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid ${theme.colors.gray[200]};
  color: ${theme.colors.primary};
`;

const LanguageBar = styled.div<{ $level: number }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.base};
  margin-bottom: ${theme.spacing.base};

  &::after {
    content: "";
    height: 6px;
    flex: 1;
    background: ${(props) =>
      `linear-gradient(90deg, ${theme.colors.accent} ${props.$level}%, ${theme.colors.gray[200]} ${props.$level}%)`};
    border-radius: 3px;
  }
`;

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Hero />
      <MainContent>
        <Education />
        <Experience />
        <ExpertiseShowcase />
        <Languages />
      </MainContent>
    </PageContainer>
  );
};

export default Home;

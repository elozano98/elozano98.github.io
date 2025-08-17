import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../styles/theme";
import { Display, Text } from "../common/Typography";
import { Button } from "../common/Button";
import { AnimatedGradientText } from "../common/Animations";
import { EmailIcon, LinkedInIcon, GitHubIcon } from "../common/SocialIcons";

const HeroSection = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.xl};
  background: ${theme.colors.background};
  position: relative;
`;

const StickyHeader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: ${theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.xl};
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  background: rgba(251, 251, 253, 0.98);
`;

const ProgressBar = styled(motion.div)<{ $progress: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: ${(props) => props.$progress}%;
  background: ${theme.colors.gradient.primary};
`;

const ContentContainer = styled.div<{ $isHeader?: boolean }>`
  max-width: ${theme.breakpoints.xl};
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isHeader ? "space-between" : "center")};
  flex-direction: ${(props) => (props.$isHeader ? "row" : "column")};
`;

const Title = styled(Display)<{ $isHeader?: boolean }>`
  font-size: ${(props) => (props.$isHeader ? "1.125rem" : "4rem")};
  text-align: ${(props) => (props.$isHeader ? "left" : "center")};
  margin: 0;
  font-weight: ${(props) => (props.$isHeader ? 500 : 400)};
  letter-spacing: ${(props) => (props.$isHeader ? "0.5px" : "-1px")};
  line-height: ${(props) => (props.$isHeader ? "inherit" : "1.1")};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${(props) => (props.$isHeader ? "1.125rem" : "3rem")};
  }
`;

const Subtitle = styled(Text)`
  max-width: 800px;
  margin: 1.5rem auto 0;
  font-size: ${theme.typography.sizes.xl};
  text-align: center;
  color: ${theme.colors.gray[500]};
  line-height: 1.4;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.lg};
    margin: 1rem auto 0;
  }
`;

const ButtonGroup = styled.div<{ $isHeader?: boolean }>`
  display: flex;
  gap: ${(props) => (props.$isHeader ? theme.spacing.sm : theme.spacing.base)};
  justify-content: center;
  margin-top: ${(props) => (props.$isHeader ? "0" : "2rem")};

  ${(props) =>
    props.$isHeader &&
    `
    transform: scale(0.8);
  `}

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: ${(props) => (props.$isHeader ? "0" : "1.5rem")};
    gap: ${(props) => (props.$isHeader ? theme.spacing.sm : theme.spacing.sm)};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const SocialButtons = ({ isHeader }: { isHeader?: boolean }) => (
  <ButtonGroup $isHeader={isHeader}>
    <StyledLink
      href="https://mail.google.com/mail/?view=cm&fs=1&to=ericlozano98@gmail.com&su=Contact from Portfolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        <EmailIcon />
      </Button>
    </StyledLink>
    <StyledLink
      href="https://www.linkedin.com/in/eric-lozano-ferriz/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        <LinkedInIcon />
      </Button>
    </StyledLink>
    <StyledLink
      href="https://github.com/elozano98"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>
        <GitHubIcon />
      </Button>
    </StyledLink>
  </ButtonGroup>
);

export const Hero: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Header visibility
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight - 56;
      setShowHeader(scrollPosition > threshold);

      // Progress calculation
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / windowHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContentContainer>
          <Title>
            Eric Lozano
            <br />
            <AnimatedGradientText>AI Engineer</AnimatedGradientText>
          </Title>
          <Subtitle>Building the future of AI, one model at a time</Subtitle>
          <SocialButtons />
        </ContentContainer>
      </HeroSection>

      <AnimatePresence>
        {showHeader && (
          <StickyHeader
            initial={{ y: -56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -56, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ContentContainer $isHeader>
              <Title $isHeader>Eric Lozano</Title>
              <SocialButtons isHeader />
            </ContentContainer>
            <ProgressBar
              $progress={scrollProgress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          </StickyHeader>
        )}
      </AnimatePresence>
    </>
  );
};

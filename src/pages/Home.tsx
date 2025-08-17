import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import {
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../components/common/SocialIcons";
import { Display, Title, Text } from "../components/common/Typography";
import { Button } from "../components/common/Button";
import {
  ParallaxContainer,
  FadeInView,
  ScaleInView,
  AnimatedGradientText,
} from "../components/common/Animations";
import { Experience } from "../components/sections/Experience";
import ExpertiseShowcase from "../components/sections/ExpertiseShowcase";

const PageContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: ${theme.colors.background};
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

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.base};
  justify-content: center;
  margin-top: ${theme.spacing["2xl"]};
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const Home: React.FC = () => {
  return (
    <PageContainer>
      <ParallaxContainer>
        <ContentContainer>
          <FadeInView>
            <Display style={{ textAlign: "center" }}>
              Eric Lozano
              <br />
              <AnimatedGradientText>AI Engineer</AnimatedGradientText>
            </Display>
            <Text
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                fontSize: theme.typography.sizes.xl,
                textAlign: "center",
              }}
            >
              Crafting intelligent solutions through AI innovation
            </Text>
            <ButtonGroup>
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
          </FadeInView>
        </ContentContainer>
      </ParallaxContainer>

      <Experience />

      <ExpertiseShowcase />

      <Section>
        <ContentContainer>
          <Title
            style={{
              fontSize: theme.typography.sizes["4xl"],
              marginBottom: theme.spacing["2xl"],
              textAlign: "center",
            }}
          >
            Education & Languages
          </Title>
          <Grid>
            <Column $span={6}>
              <ScaleInView>
                <Card
                  style={{
                    background: "white",
                    height: "100%",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
                    border: `1px solid ${theme.colors.gray[200]}`,
                  }}
                >
                  <Title
                    style={{
                      fontSize: theme.typography.sizes["2xl"],
                      marginBottom: theme.spacing["2xl"],
                      color: theme.colors.primary,
                    }}
                  >
                    Education
                  </Title>
                  <div style={{ marginBottom: theme.spacing["2xl"] }}>
                    <Text
                      style={{
                        color: theme.colors.gray[500],
                        fontSize: theme.typography.sizes.base,
                        fontWeight: theme.typography.weights.medium,
                      }}
                    >
                      2021 - 2022
                    </Text>
                    <Title
                      style={{
                        color: theme.colors.primary,
                        fontSize: theme.typography.sizes.xl,
                        marginTop: theme.spacing.sm,
                        fontWeight: theme.typography.weights.semibold,
                      }}
                    >
                      Artificial Intelligence Master
                    </Title>
                    <Text
                      style={{
                        color: theme.colors.secondary,
                        fontSize: theme.typography.sizes.base,
                        marginTop: theme.spacing.sm,
                      }}
                    >
                      Universidad Internacional de Valencia
                    </Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        color: theme.colors.gray[500],
                        fontSize: theme.typography.sizes.base,
                        fontWeight: theme.typography.weights.medium,
                      }}
                    >
                      2016 - 2020
                    </Text>
                    <Title
                      style={{
                        color: theme.colors.primary,
                        fontSize: theme.typography.sizes.xl,
                        marginTop: theme.spacing.sm,
                        fontWeight: theme.typography.weights.semibold,
                      }}
                    >
                      Computer Engineering Degree
                    </Title>
                    <Text
                      style={{
                        color: theme.colors.secondary,
                        fontSize: theme.typography.sizes.base,
                        marginTop: theme.spacing.sm,
                      }}
                    >
                      Universitat Autònoma de Barcelona
                    </Text>
                  </div>
                </Card>
              </ScaleInView>
            </Column>
            <Column $span={6}>
              <ScaleInView delay={0.2}>
                <Card
                  style={{
                    background: "white",
                    height: "100%",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
                    border: `1px solid ${theme.colors.gray[200]}`,
                  }}
                >
                  <Title
                    style={{
                      fontSize: theme.typography.sizes["2xl"],
                      marginBottom: theme.spacing["2xl"],
                      color: theme.colors.primary,
                    }}
                  >
                    Languages
                  </Title>
                  <div style={{ marginBottom: theme.spacing.xl }}>
                    <LanguageBar $level={100}>
                      <Text
                        style={{
                          margin: 0,
                          minWidth: "120px",
                          fontSize: theme.typography.sizes.base,
                          fontWeight: theme.typography.weights.semibold,
                          color: theme.colors.primary,
                        }}
                      >
                        Spanish
                      </Text>
                      <Text
                        style={{
                          margin: 0,
                          fontSize: theme.typography.sizes.base,
                          color: theme.colors.secondary,
                        }}
                      >
                        Native
                      </Text>
                    </LanguageBar>
                    <LanguageBar $level={100}>
                      <Text
                        style={{
                          margin: 0,
                          minWidth: "120px",
                          fontSize: theme.typography.sizes.base,
                          fontWeight: theme.typography.weights.semibold,
                          color: theme.colors.primary,
                        }}
                      >
                        Catalan
                      </Text>
                      <Text
                        style={{
                          margin: 0,
                          fontSize: theme.typography.sizes.base,
                          color: theme.colors.secondary,
                        }}
                      >
                        Native
                      </Text>
                    </LanguageBar>
                    <LanguageBar $level={80}>
                      <Text
                        style={{
                          margin: 0,
                          minWidth: "120px",
                          fontSize: theme.typography.sizes.base,
                          fontWeight: theme.typography.weights.semibold,
                          color: theme.colors.primary,
                        }}
                      >
                        English
                      </Text>
                      <Text
                        style={{
                          margin: 0,
                          fontSize: theme.typography.sizes.base,
                          color: theme.colors.secondary,
                        }}
                      >
                        Professional
                      </Text>
                    </LanguageBar>
                  </div>
                </Card>
              </ScaleInView>
            </Column>
          </Grid>
        </ContentContainer>
      </Section>
    </PageContainer>
  );
};

export default Home;

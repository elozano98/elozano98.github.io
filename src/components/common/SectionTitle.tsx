import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";

const TitleWrapper = styled(motion.div)`
  text-align: center;
  margin-bottom: ${theme.spacing["4xl"]};
`;

const Title = styled.h2`
  font-size: ${theme.typography.sizes["3xl"]};
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.primary};
  letter-spacing: -0.02em;
  margin: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["2xl"]};
  }
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.sizes.lg};
  color: ${theme.colors.gray[400]};
  margin: ${theme.spacing.lg} auto 0;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes.base};
    margin-top: ${theme.spacing.base};
  }
`;

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
}) => (
  <TitleWrapper
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </TitleWrapper>
);

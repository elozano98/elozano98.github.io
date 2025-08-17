import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Display = styled.h1`
  font-size: ${theme.typography.sizes["6xl"]};
  line-height: 1.05;
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: -0.015em;
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.typography.sizes["5xl"]};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["4xl"]};
  }
`;

export const Headline = styled.h2`
  font-size: ${theme.typography.sizes["4xl"]};
  line-height: 1.1;
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: -0.015em;
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.sizes["3xl"]};
  }
`;

export const Title = styled.h3`
  font-size: ${theme.typography.sizes["2xl"]};
  line-height: 1.2;
  font-weight: ${theme.typography.weights.semibold};
  letter-spacing: -0.01em;
  margin-bottom: ${theme.spacing.base};
`;

export const Subtitle = styled.h4`
  font-size: ${theme.typography.sizes.xl};
  line-height: 1.3;
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.colors.gray[500]};
  margin-bottom: ${theme.spacing.base};
`;

export const Text = styled.p`
  font-size: ${theme.typography.sizes.base};
  line-height: 1.5;
  color: ${theme.colors.gray[500]};
  margin-bottom: ${theme.spacing.base};
`;

export const Caption = styled.span`
  font-size: ${theme.typography.sizes.sm};
  line-height: 1.4;
  color: ${theme.colors.gray[400]};
`;

export const Link = styled.a`
  color: ${theme.colors.accent};
  text-decoration: none;
  transition: opacity ${theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: "→";
    margin-left: ${theme.spacing.xs};
    transition: transform ${theme.transitions.fast};
  }

  &:hover::after {
    transform: translateX(4px);
  }
`;

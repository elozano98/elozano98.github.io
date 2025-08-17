import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";

export const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: ${theme.spacing.xl};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);
  }
`;

export const FeatureCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  padding: ${theme.spacing.xl};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accent}50);
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${theme.colors.accent}10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.base};
  
  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.accent};
  }
`;

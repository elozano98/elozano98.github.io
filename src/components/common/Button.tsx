import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Button = styled.button`
  padding: ${theme.spacing.base};
  border-radius: 14px;
  font-size: ${theme.typography.sizes.base};
  font-weight: ${theme.typography.weights.medium};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: white;

  background: ${theme.colors.gradient.primary};
  position: relative;
  isolation: isolate;
  z-index: 1;

  svg {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
  }

  &:active {
    transform: scale(1.05);
  }
`;

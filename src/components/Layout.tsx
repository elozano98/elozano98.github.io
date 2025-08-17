import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${theme.spacing.xl};
  z-index: 1000;
`;

const Logo = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.semibold};
  opacity: 0.8;
  transition: opacity ${theme.transitions.fast};

  &:hover {
    opacity: 1;
  }
`;

const Main = styled(motion.main)``;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Logo href="/">Eric Lozano</Logo>
      </Header>
      <Main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </Main>
    </LayoutContainer>
  );
};

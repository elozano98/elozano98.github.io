import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
  grid-template-columns: 1fr;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: ${theme.colors.gray[100]};
  border-radius: 20px;
  padding: ${theme.spacing.xl};
  transition: transform ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-4px);
  }
`;

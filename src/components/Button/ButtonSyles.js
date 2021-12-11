import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const Btn = styled(Button)`
  background: ${(props) => props.theme.colors.background};
  width: 10vw;
  &:hover {
    background: ${(props) => props.theme.colors.background};
  }
`;
export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.typography.p};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.p};
  }
`;

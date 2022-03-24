/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Container } from '@mui/material';

export const Section = styled(Container)`
  margin-bottom: 100px;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    margin-bottom: 30px;
  }
`;

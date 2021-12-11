import styled from 'styled-components';
import { Container } from '@mui/material';

export const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: space-around;
`;

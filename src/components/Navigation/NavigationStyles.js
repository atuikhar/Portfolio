import styled from 'styled-components';
import { Container } from '@mui/material';

export const Wrapper = styled(Container)`
  margin-top: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: space-around;
`;

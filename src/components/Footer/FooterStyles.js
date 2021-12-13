import styled from 'styled-components';
import { Container } from '@mui/material';

export const FooterText = styled(Container)`
  color: ${(props) => props.theme.colors.background};
  text-align: center;
  margin-top: 30px;
  padding-bottom: 50px;
`;

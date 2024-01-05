import styled from 'styled-components';
import { Container } from '@mui/material';

export const Section = styled(Container)`
  padding: 30px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 1);
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.header};
  background: linear-gradient(
    121.57deg,
    #aa076b 18.77%,
    rgba(97, 4, 95, 1) 60.15%
  );

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: ${(props) => props.theme.spacing.medium};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? '56px' : '48px')};
    line-height: ${(props) => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    line-height: ${(props) => (props.main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.body};
  padding-bottom: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.body};
    padding-bottom: ${(props) => props.theme.spacing.medium};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.body};
    padding-bottom: ${(props) => props.theme.spacing.small};
  }
`;

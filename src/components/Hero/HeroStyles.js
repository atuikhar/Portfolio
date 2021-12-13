import styled from 'styled-components';
import { Container } from '@mui/material';

export const Section = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const HeroSection = styled(Container)`
  text-align: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.typography.header};
  background: ${(props) => props.theme.colors.background};
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main && '45px'};
    margin-bottom: ${(props) => props.theme.spacing.small};
    padding: ${(props) => props.main && '40px 0 12px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    margin-bottom: ${(props) => props.theme.spacing.small}
    padding: ${(props) => props.main && '16px 0 8px'};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.text};
  padding-bottom: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.background};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: ${(props) => props.theme.typography.body};
    padding-bottom: ${(props) => props.theme.spacing.medium};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.body};
    padding-bottom: ${(props) => props.theme.spacing.small};
  }
`;

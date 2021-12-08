import styled from 'styled-components';
import { Container } from '@mui/material';

export const Section = styled(Container)`
  margin-bottom: 100px;
  padding: 50px;
  background: rgba(43, 42, 51, 1);
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 1);

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? '0' : '16px 16px 0')};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  background: linear-gradient(
    121.57deg,
    #aa076b 18.77%,
    rgba(97, 4, 95, 1) 60.15%
  );

  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '10px 0 0' : '0')};

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
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
  padding-bottom: 57px;
  color: rgba(170, 7, 107, 1);
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

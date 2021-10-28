import styled from 'styled-components';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';

export const Section = styled(Container)`
  display: flex;
  justify-content: center;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
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

export const SectionTitle = styled(motion.h2)`
  font-weight: 800;
  font-size: 30px;
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  /* background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  ); */
  background: rgba(26, 31, 41, 1);
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
  padding-bottom: 3.6rem;
  color: rgba(26, 31, 41, 1);

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

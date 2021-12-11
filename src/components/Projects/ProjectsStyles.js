import styled from 'styled-components';
import { Container } from '@mui/material';
import Image from 'next/image';

export const Section = styled(Container)`
  margin-bottom: ${(props) => props.theme.spacing.large};
  padding: ${(props) => props.theme.spacing.large};
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
  }
`;

export const Img = styled.img`
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const SectionTitle = styled.h2`
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.typography.header};
  background: linear-gradient(
    145.57deg,
    #aa076b 1.77%,
    rgba(97, 4, 95, 1) 25.15%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.text};
    margin-bottom: ${(props) => props.theme.spacing.small};
    padding: 40px 0 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.text};
    margin-bottom: ${(props) => props.theme.spacing.small};
    max-width: 100%;
    text-align: center;
  }
`;

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${(props) => props.theme.spacing.large};
  column-gap: ${(props) => props.theme.spacing.medium};
  row-gap: ${(props) => props.theme.spacing.large};
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.spacing.small};
    padding-bottom: ${(props) => props.theme.spacing.large};
  }
`;
export const Card = styled.div`
  border-radius: 30px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing.medium};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: ${(props) => props.theme.spacing.medium};
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const Header = styled.h3`
  font-weight: ${(props) => props.theme.weight.bold};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 0;
  font-size: ${(props) => props.theme.typography.text};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.typography.p};
  font-weight: ${(props) => props.theme.weight.bold};
  padding: 10px 10px;
  background: ${(props) => props.theme.colors.primary};
  background: -webkit-linear-gradient(to right, #61045f, #aa076b);
  background: linear-gradient(to right, #61045f, #aa076b);
  border-radius: ${(props) => props.theme.spacing.medium};
  transition: 0.5s;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: ${(props) => props.theme.spacing.medium};

  }
`;
export const Tag = styled.li`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.p};
`;

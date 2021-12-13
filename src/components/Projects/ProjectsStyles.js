import styled from 'styled-components';
import { Container } from '@mui/material';
import Image from 'next/image';

export const Section = styled(Container)`
  margin-bottom: 50px;
  padding: ${(props) => props.theme.spacing.large};
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    margin-bottom: 10px;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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

export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing.medium};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: ${(props) => props.theme.spacing.large};
  }
`;

export const Header = styled.h3`
  font-weight: ${(props) => props.theme.weight.bold};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 0;
  font-size: ${(props) => props.theme.typography.text};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => props.theme.typography.body};
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};
  text-align: center;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.text};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px;
    font-size: ${(props) => props.theme.typography.body};
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

export const ExternalLinks = styled.button`
  color: ${(props) => props.theme.colors.light};
  font-size: ${(props) => props.theme.typography.p};
  padding: 10px 10px;
  border: none;
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
  padding: ${(props) => props.theme.spacing.small};

  }
`;
export const Tag = styled.li`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.typography.text};
  font-weight: ${(props) => props.theme.weight.bold};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.body};
`;

export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.text};
  font-weight: ${(props) => props.theme.weight.bold};
  padding-bottom: ${(props) => props.theme.spacing.large};
  color: ${(props) => props.theme.colors.primary};
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

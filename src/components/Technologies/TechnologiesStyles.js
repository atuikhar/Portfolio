import styled from 'styled-components';
import { Container } from '@mui/material';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: ${(props) => props.theme.spacing.large};
  padding-top: ${(props) => props.theme.spacing.medium};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const ListContainer = styled(Container)`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.small};
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.typography.text};
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.small};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.spacing.medium};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.body};
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.colors.primary};
  line-height: ${(props) => props.theme.spacing.medium};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.body};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.p};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.primary};
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: ${(props) => props.theme.spacing.small};
    max-width: 320px;
    flex-direction: row;
  }
`;

export const Section = styled(Container)`
  margin-bottom: 50px;
  padding: ${(props) => props.theme.spacing.large};
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  text-align: center;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 1);
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    flex-direction: column;
    margin-bottom: 10px;
  }
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
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
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

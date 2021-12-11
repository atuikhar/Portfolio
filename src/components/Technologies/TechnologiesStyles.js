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
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: ${(props) => props.theme.spacing.small};
    max-width: 320px;
    flex-direction: row;
  }
`;

export const Section = styled(Container)`
  margin-bottom: 100px;
  padding: ${(props) => props.theme.spacing.large};
  background: ${(props) => props.theme.colors.background};
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 1);

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
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

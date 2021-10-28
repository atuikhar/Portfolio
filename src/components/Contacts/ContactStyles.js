import styled from 'styled-components';
import { Container } from '@mui/material';

export const List = styled.ul`
  list-style-type: none;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;

export const ListContainer = styled(Container)`
  display: flex;
  text-align: center;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: rgba(170, 7, 107, 1);

  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  color: rgba(170, 7, 107, 1);

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  color: rgba(170, 7, 107, 1);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

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
  padding-bottom: 3.6rem;
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

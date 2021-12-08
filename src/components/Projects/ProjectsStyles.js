import styled from 'styled-components';
import { Container } from '@mui/material';
import Image from 'next/image';

export const Section = styled(Container)`
  margin-bottom: 100px;

  padding: 50px;
  background: rgba(43, 42, 51, 1);
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 1);
  border-radius: 20px;
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

export const Img = styled(Image)`
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 48px;
  column-gap: 32px;
  row-gap: 48px;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    padding: 32px;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 30px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding-bottom: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(170, 7, 107, 1);
  padding: 8px 0;
  font-size: 20px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: rgba(170, 7, 107, 1);
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 10px;
  font-weight: bold;
  padding: 10px 10px;
  background: #aa076b;
  background: -webkit-linear-gradient(to right, #61045f, #aa076b);
  background: linear-gradient(to right, #61045f, #aa076b);
  border-radius: 24px;
  transition: 0.5s;
  &:hover {
    background: #aa076b;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 32px;

  }
`;
export const Tag = styled.li`
  color: rgba(170, 7, 107, 1);
  font-size: 15px;
  font-weight: bold;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 10px;
`;

import styled from 'styled-components';
import { Container } from '@mui/material';

export const FooterText = styled(Container)`
  color: rgba(26, 31, 41, 1);
  text-align: center;
  margin-bottom: 50px;
`;
export const FooterWrapper = styled.section`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: center;
  }
`;

export const SocialIconsContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const SocialContainer = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: rgba(26, 31, 41, 1);

  padding: 8px;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

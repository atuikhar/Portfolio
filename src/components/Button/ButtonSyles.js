import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #1f2430;
  background: ${(props) => props.theme.colors.background};
  margin: 0.5em 1em;
  padding: 0.5em;
  width: 20vw;
  text-align: center;
  cursor: pointer;
`;

export const SectionText = styled.p`
  font-size: ${(props) => props.theme.typography.body};
  font-weight: ${(props) => props.theme.weight.bold};
  color: ${(props) => props.theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.lg} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
  }
`;

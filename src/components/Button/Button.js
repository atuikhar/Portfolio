import { Button } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const Btn = styled(Button)`
  color: #fff;
  background-color: rgba(26, 31, 41, 1);
  width: 10vw;

  &:hover {
    background-color: black;
  }
`;
const SectionText = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 10px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8px;
  }
`;

export const GlobalButton = ({ title, link }) => {
  return (
    <>
      <Link href={link}>
        <Btn>
          <SectionText>{title}</SectionText>
        </Btn>
      </Link>
    </>
  );
};

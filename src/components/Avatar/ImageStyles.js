import styled from 'styled-components';
import { Container } from '@mui/material';
import Image from 'next/image';

export const ImageWrapper = styled(Container)`
  text-align: center;
`;

export const ImageContainer = styled(Container)`
  height: 200px;
  width: 250px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

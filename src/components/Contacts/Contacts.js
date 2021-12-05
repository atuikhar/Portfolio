import React from 'react';
import { GrStackOverflow } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { ImMobile } from 'react-icons/im';
import { Container } from '@mui/material';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  Section,
  SectionText,
  SectionTitle,
} from './ContactStyles';

const Contacts = () => (
  <Section id='contact'>
    <SectionTitle>Contacts</SectionTitle>
    <SectionText>Email : atuikhar@gmail.com</SectionText>
    <SectionText>Twitter : @alaopa_tuikhar</SectionText>
    <SectionText>GitHub : atuikhar</SectionText>
  </Section>
);

export default Contacts;

import React from 'react';
import { GrStackOverflow } from 'react-icons/gr';
import { MdComputer } from 'react-icons/md';
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
} from './TechnologiesStyles';

import { tech } from '../../constants/constants';

const Technologies = () => (
  <Section id='technology'>
    <SectionTitle>Technology</SectionTitle>
    <SectionText>(MERN Stack Developer)</SectionText>
    {tech.map((t, i) => {
      return (
        <Container>
          <List>
            <ListItem>
              <picture style={{ textAlign: 'center' }}>
                <MdComputer size={40} />
              </picture>
              <ListContainer>
                <ListTitle>Front-End</ListTitle>
                <ListParagraph key={i}>
                  {t.frontEnd.map((f, i) => {
                    return <ListParagraph key={i}>{f}</ListParagraph>;
                  })}
                </ListParagraph>
              </ListContainer>
            </ListItem>
            <ListItem>
              <picture style={{ textAlign: 'center' }}>
                <GrStackOverflow size={40} />
              </picture>
              <ListContainer>
                <ListTitle>Back-End</ListTitle>
                <ListParagraph key={i}>
                  {t.backEnd.map((f, i) => {
                    return <ListParagraph key={i}>{f}</ListParagraph>;
                  })}
                </ListParagraph>
              </ListContainer>
            </ListItem>
            <ListItem>
              <picture style={{ textAlign: 'center' }}>
                <ImMobile size={40} />
              </picture>
              <ListContainer>
                <ListTitle>Android & IOS</ListTitle>
                <ListParagraph>
                  {t.mobile.map((f, i) => {
                    return <ListParagraph key={i}>{f}</ListParagraph>;
                  })}
                </ListParagraph>
              </ListContainer>
            </ListItem>
          </List>
        </Container>
      );
    })}
  </Section>
);

export default Technologies;

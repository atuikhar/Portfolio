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
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id='technology'>
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I've worked with a range a technologies from Font-End to Back-End.
    </SectionText>
    <Container>
      <List>
        <ListItem>
          <picture style={{ textAlign: 'center' }}>
            <FaReact size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              JavaScript <br />
              React <br />
              Redux
              <br />
              NextJS <br />
              HTML <br />
              CSS <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture style={{ textAlign: 'center' }}>
            <GrStackOverflow size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node <br />
              MongoDB <br />
              Express
            </ListParagraph>
          </ListContainer>
        </ListItem>
        {/* <ListItem>
          <picture style={{ textAlign: 'center' }}>
            <IoIosColorPalette size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Figma
              <br />
              AdobeXD
            </ListParagraph>
          </ListContainer>
        </ListItem> */}
        <ListItem>
          <picture style={{ textAlign: 'center' }}>
            <ImMobile size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>Android & IOS</ListTitle>
            <ListParagraph>React Native</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Container>
  </Section>
);

export default Technologies;

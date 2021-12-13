import React from 'react';
import { Grid } from '@mui/material';
import {
  Section,
  SectionTitle,
  Card,
  CardInfo,
  ExternalLinks,
  Header,
  Tag,
  TagList,
  List,
  Img,
  SectionText,
} from './ProjectsStyles';

const Project = () => (
  <>
    <Section id='project'>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Some of my works.</SectionText>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <Img src='Shop_vaqlqb.jpg' height={200} width={400} />
            <Header>ThriftShop</Header>
            <CardInfo>Online Shopping Site</CardInfo>
            <TagList>
              <Tag>MERN</Tag>
            </TagList>
            <List>
              <ExternalLinks href='https://github.com/atuikhar/ThriftShop.v1'>
                Source Code
              </ExternalLinks>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <Img src='Shop_vaqlqb.jpg' height={200} width={400} />
            <Header>Art</Header>
            <CardInfo className='card-info'>Art Gallery Portfolio</CardInfo>
            <TagList>
              <Tag>MERN</Tag>
            </TagList>
            <List>
              <ExternalLinks href='https://github.com/atuikhar/AteoArtPortfolio'>
                Source Code
              </ExternalLinks>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <Img src='Shop_vaqlqb.jpg' height={200} width={400} />
            <Header>Shop(BCA Project)</Header>
            <CardInfo className='card-info'>Online Shopping</CardInfo>
            <TagList>
              <Tag>JavaScript</Tag>
            </TagList>
            <List>
              <ExternalLinks href='https://github.com/atuikhar/Shop-BCA-Project'>
                Source Code
              </ExternalLinks>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Section>
  </>
);

export default Project;

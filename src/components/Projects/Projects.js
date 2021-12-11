import React from 'react';
import { Grid } from '@mui/material';
import {
  Section,
  SectionTitle,
  Card,
  CardInfo,
  ExternalLinks,
  GridContainer,
  Header,
  Tag,
  TagList,
  TitleContent,
  List,
  Img,
} from './ProjectsStyles';
import { myworks } from '../../constants/constants';
import Shop from '../../../public/Shop.jpg';

const Project = () => (
  <>
    <Section id='project'>
      <SectionTitle>Projects</SectionTitle>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <GridContainer>
            {myworks.map((p, i) => {
              return (
                <Card key={i}>
                  <Img src={Shop} height={200} width={400} />
                  <TitleContent>
                    <Header>{p.title}</Header>
                  </TitleContent>
                  <CardInfo className='card-info'>{p.description}</CardInfo>
                  <div>
                    <TagList>
                      {p.tags.map((t, i) => {
                        return <Tag key={i}>{t}</Tag>;
                      })}
                    </TagList>
                  </div>
                  <List>
                    <ExternalLinks href={p.source}>Source Code</ExternalLinks>
                  </List>
                </Card>
              );
            })}
          </GridContainer>
        </Grid>
      </Grid>
    </Section>
  </>
);

export default Project;

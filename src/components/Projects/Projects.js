import React from 'react';
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

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dzarf3lhh/image/upload/v1639304173/images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Project = () => (
  <>
    <Section id='project'>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {myworks.map((p, i) => {
          return (
            <Card key={i}>
              <Img
                loader={myLoader}
                src='Shop_cfk42k.jpg'
                height={200}
                width={400}
              />
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
    </Section>
  </>
);

export default Project;

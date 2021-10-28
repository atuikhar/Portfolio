import React from 'react';

import {
  Section,
  SectionTitle,
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import { myworks } from '../../constants/constants';

const Project = () => (
  <Section nopadding id='project'>
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {myworks.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} height={200} width={400} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Project;

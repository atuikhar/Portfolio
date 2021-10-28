import React from 'react';
import { HeroSection, Section, SectionText, SectionTitle } from './HeroStyles';
import { Avatar } from '../Avatar/Image';

const Hero = (props) => {
  return (
    <>
      <Avatar />
      <Section>
        <HeroSection>
          <SectionTitle main center>
            Hey, <br />
            I'm Ninglao Tuikhar
            <br />
            Web Developer
          </SectionTitle>

          <SectionText>
            I Build and Design , Websites, Apps , PWA's, API's etc....
          </SectionText>
        </HeroSection>
      </Section>
    </>
  );
};

export default Hero;

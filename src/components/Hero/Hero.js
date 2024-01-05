/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HeroSection, Section, SectionText, SectionTitle } from './HeroStyles';
import { Avatar } from '../Avatar/Image';

const Hero = () => {
  return (
    <div>
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
            "I specialize in crafting and designing a diverse range of digital
            solutions, including websites, mobile applications, progressive web
            apps (PWAs), APIs, and more. With a passion for innovation and a
            keen eye for design, I bring your ideas to life in the digital
            realm."{' '}
          </SectionText>
        </HeroSection>
      </Section>
    </div>
  );
};

export default Hero;

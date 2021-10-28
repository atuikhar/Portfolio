import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';

import {
  FooterWrapper,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
  FooterText,
} from './FooterStyles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href='https://github.com/atuikhar'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://google.com'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://google.com'>
              <AiFillInstagram size='3rem' />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
      <FooterText>
        <AiOutlineCopyrightCircle />
        atuikhar @2021
      </FooterText>
    </>
  );
};

export default Footer;

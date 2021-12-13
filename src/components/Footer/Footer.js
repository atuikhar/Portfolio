import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FooterText } from './FooterStyles';

const Footer = () => {
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <FooterText>
        <div style={{ textAlign: 'end' }}>
          <FaRegArrowAltCircleUp onClick={() => handleClick()} size={50} />
        </div>
        <AiOutlineCopyrightCircle />
        atuikhar @2021
      </FooterText>
    </>
  );
};

export default Footer;

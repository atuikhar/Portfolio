import React from 'react';
import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';
import { FooterText } from './FooterStyles';

const Footer = () => {
  return (
    <>
      <FooterText>
        <div style={{ textAlign: 'end', paddingTop: '20px' }}>
          <Link href='#top'>
            <FaRegArrowAltCircleUp size={50} />
          </Link>
        </div>
        <AiOutlineCopyrightCircle />
        atuikhar @2021
      </FooterText>
    </>
  );
};

export default Footer;

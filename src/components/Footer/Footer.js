import React from 'react';
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
          <FaRegArrowAltCircleUp
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick()}
            size={50}
          />
        </div>
        atuikhar @2024
      </FooterText>
    </>
  );
};

export default Footer;

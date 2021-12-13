import React, { useState } from 'react';
import { ImageWrapper, ImageContainer, Img } from './ImageStyles';
import { motion } from 'framer-motion';

export const Avatar = () => {
  const [isActive, setIsActive] = useState(false);

  const AvatarVariants = {
    animate: {
      rotate: isActive ? 360 : 0,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <ImageWrapper>
      <ImageContainer>
        <motion.div
          onClick={() => setIsActive(!isActive)}
          variants={AvatarVariants}
          animate='animate'
          whileHover='hover'
        >
          <Img src='key_rzphnx' height={200} width={200} />
        </motion.div>
      </ImageContainer>
    </ImageWrapper>
  );
};

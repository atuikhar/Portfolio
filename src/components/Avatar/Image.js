import { ImageWrapper, ImageContainer, Img } from './ImageStyles';
import { motion } from 'framer-motion';

const AvatarVariants = {
  animate: {
    rotateZ: 360,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const Avatar = () => {
  return (
    <ImageWrapper>
      <ImageContainer>
        <motion.div
          variants={AvatarVariants}
          animate='animate'
          whileHover='hover'
        >
          <Img
            src='https://images.unsplash.com/photo-1551034549-befb91b260e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
            height={200}
            width={200}
          />
        </motion.div>
      </ImageContainer>
    </ImageWrapper>
  );
};

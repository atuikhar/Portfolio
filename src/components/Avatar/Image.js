import { ImageWrapper, ImageContainer, Img } from './ImageStyles';
import { motion } from 'framer-motion';

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dzarf3lhh/image/upload/v1639304173/images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

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
            loader={myLoader}
            src='Art_t0efwm.jpg'
            height={200}
            width={200}
          />
        </motion.div>
      </ImageContainer>
    </ImageWrapper>
  );
};

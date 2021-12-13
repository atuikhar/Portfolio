import React, { useState } from 'react';
import Link from 'next/link';
import { FaHandPeace } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

import { Wrapper } from './HeaderStyles';

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);

  const HeaderVariants = {
    initial: {
      y: -250,
    },
    animate: {
      y: -5,
      transition: {
        duration: 1,
        type: 'spring',
        stiffness: 150,
      },
      rotate: isActive ? 360 : 0,
    },
    tap: {
      scale: 0.8,
    },
  };
  return (
    <Container>
      <Wrapper>
        <motion.div
          onClick={() => setIsActive(!isActive)}
          variants={HeaderVariants}
          initial='initial'
          animate='animate'
          whileTap='tap'
        >
          <Link href='/'>
            <motion.a
              drag={true}
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={1.3}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#02111a',
              }}
            >
              <FaHandPeace size={50} />
            </motion.a>
          </Link>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Header;

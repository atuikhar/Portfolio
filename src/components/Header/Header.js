import Link from 'next/link';
import { FaHandPeace, FaAddressCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Container, Wrapper } from './HeaderStyles';

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
  },
  tap: {
    scale: 0.8,
  },
};

const Header = () => (
  <Container>
    <Wrapper>
      <motion.div
        variants={HeaderVariants}
        initial='initial'
        animate='animate'
        whileTap='tap'
      >
        <Link href='/'>
          <motion.a
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragElastic={1.3}
            style={{ display: 'flex', alignItems: 'center', color: 'black' }}
          >
            <FaHandPeace drag size={50} />
          </motion.a>
        </Link>
      </motion.div>
    </Wrapper>
  </Container>
);

export default Header;

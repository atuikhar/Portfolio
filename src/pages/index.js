/* eslint-disable react/react-in-jsx-scope */
import Hero from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { Navigation } from '../components/Navigation/Navigation';
import Technology from '../components/Technologies/Technologies';
import Project from '../components/Projects/Projects';
import { motion } from 'framer-motion';
import BgParticles from '../components/Animate/Particles';
import Contacts from '../components/Contacts/Contacts';

const HomeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      duration: 3,
    },
  },
};

const Home = () => {
  return (
    <>
      <BgParticles />
      <Layout>
        <motion.div variants={HomeVariants} initial='initial' animate='animate'>
          <Section>
            <Hero />
            <Navigation />
          </Section>
          <Technology />
          <Project />
          <Contacts />
        </motion.div>
      </Layout>
    </>
  );
};

export default Home;

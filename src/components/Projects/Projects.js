import React from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import {
  Section,
  SectionTitle,
  Card,
  CardInfo,
  ExternalLinks,
  Header,
  Tag,
  TagList,
  List,
  Img,
  SectionText,
} from './ProjectsStyles';
import { motion } from 'framer-motion';

const Project = () => {
  const ImageVariants = {
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
    <Section id='project'>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Some of my works.</SectionText>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <motion.div variants={ImageVariants} whileHover='hover'>
              <Img src='ThriftShop_qta5xx' height={200} width={400} />
            </motion.div>
            <Header>ThriftShop</Header>
            <CardInfo>Online Shopping Site</CardInfo>
            <TagList>
              <Tag>MERN</Tag>
            </TagList>
            <List>
              <Link passHref href='https://github.com/atuikhar/ThriftShop.v1'>
                <ExternalLinks>Source Code</ExternalLinks>
              </Link>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <motion.div variants={ImageVariants} whileHover='hover'>
              <Img src='art_tiw58o' height={200} width={400} />
            </motion.div>
            <Header>Art</Header>
            <CardInfo className='card-info'>Art Gallery Portfolio</CardInfo>
            <TagList>
              <Tag>MERN</Tag>
            </TagList>
            <List>
              <Link
                passHref
                href='https://github.com/atuikhar/AteoArtPortfolio'
              >
                <ExternalLinks>Source Code</ExternalLinks>
              </Link>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <motion.div variants={ImageVariants} whileHover='hover'>
              <Img src='Google_fushdq.png' height={200} width={400} />
            </motion.div>
            <Header>Google</Header>
            <CardInfo className='card-info'>Google Home Clone</CardInfo>
            <TagList>
              <Tag>React</Tag>
            </TagList>
            <List>
              <Link
                passHref
                href='https://github.com/atuikhar/google-home-page'
              >
                <ExternalLinks>Source Code</ExternalLinks>
              </Link>
            </List>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <motion.div variants={ImageVariants} whileHover='hover'>
              <Img src='portfolio_m88plu' height={200} width={400} />
            </motion.div>
            <Header>Portfolio</Header>
            <CardInfo className='card-info'>Web Development Portfolio</CardInfo>
            <TagList>
              <Tag>NextJS</Tag>
            </TagList>
            <List>
              <Link passHref href='https://github.com/atuikhar/Portfolio'>
                <ExternalLinks>Source Code</ExternalLinks>
              </Link>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Project;

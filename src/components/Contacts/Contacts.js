import React from 'react';
import { RiUserSearchFill } from 'react-icons/ri';
import { Grid } from '@mui/material';
import { Section, SectionText, SectionTitle } from './ContactStyles';
import {
  FaGithubSquare,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Contacts = () => {
  return (
    <Section id='contact'>
      <SectionTitle>Contacts</SectionTitle>
      <SectionText>
        <RiUserSearchFill size={50} />
        Look Me Up
      </SectionText>

      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <div>
            <GrMail size={40} color='#a20869' />
            <SectionText>atuikhar@gmail.com</SectionText>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <FaTwitter size={40} color='#a20869' />
          <SectionText>@alaopa_tuikhar</SectionText>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <FaGithubSquare size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <FaLinkedin size={40} color='#a20869' />
          <SectionText>alaopa tuikhar</SectionText>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <FaFacebook size={40} color='#a20869' />
          <SectionText>alaopa tuikhar</SectionText>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'block', justifyContent: 'center' }}
        >
          <FaInstagram size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Contacts;

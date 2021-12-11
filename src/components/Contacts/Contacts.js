import React from 'react';
import Link from 'next/link';
import { Grid, TableCell } from '@mui/material';
import { Section, SectionText, SectionTitle } from './ContactStyles';
import {
  FaGithubSquare,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Contacts = (props) => (
  <Section id='contact'>
    <SectionTitle>Contacts</SectionTitle>

    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <GrMail size={40} color='#a20869' />
          <SectionText>atuikhar@gmail.com</SectionText>
        </TableCell>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <FaTwitter size={40} color='#a20869' />
          <SectionText>@alaopa_tuikhar</SectionText>
        </TableCell>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <FaGithubSquare size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </TableCell>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <FaLinkedin size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </TableCell>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <FaFacebook size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </TableCell>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <TableCell
          sx={{ border: 0, textAlign: 'center' }}
          component='th'
          scope='row'
        >
          <FaInstagram size={40} color='#a20869' />
          <SectionText>atuikhar</SectionText>
        </TableCell>
      </Grid>
    </Grid>
  </Section>
);

export default Contacts;

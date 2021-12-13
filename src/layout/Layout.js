import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { LayoutWrapper } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};

/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from 'styled-components';

import theme from '../themes/default';
import GlobalStyles from './globals';

// eslint-disable-next-line react/prop-types
const Theme = ({ children }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;

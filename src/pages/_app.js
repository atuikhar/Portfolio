/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

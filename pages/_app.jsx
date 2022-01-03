import { Fragment } from 'react';
import Navbar from '../Components/Layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

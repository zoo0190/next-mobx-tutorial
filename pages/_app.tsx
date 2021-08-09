import React, { useEffect } from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;

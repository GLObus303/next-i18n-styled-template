import App, { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import { Router } from 'next/router';

import { appWithTranslation } from '../i18n';
import { GlobalStyle } from '../components/GlobalStyle';

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />

    <Component {...pageProps} />
  </>
);

CustomApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithTranslation(CustomApp);

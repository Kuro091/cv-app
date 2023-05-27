import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import * as gtag from '../lib/gtag';
import Script from 'next/script';

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script defer id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <ThemeProvider>
        <AnimatePresence
          mode='wait'
          onExitComplete={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

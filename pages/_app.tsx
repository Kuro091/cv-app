import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps, router }: AppProps) {
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    // const start = () => {
    //   setLoading(true);
    // };
    // const end = () => {
    //   setLoading(false);
    // };
    // Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', handleRouteChange);
    // Router.events.on('routeChangeError', end);
    return () => {
      // Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', handleRouteChange);
      // Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
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
  );
}

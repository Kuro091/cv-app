import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Router } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <AnimatePresence initial={false} mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

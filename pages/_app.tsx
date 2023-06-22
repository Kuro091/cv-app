import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';
import * as gtag from '../lib/gtag';
import { GTMProvider, useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import { ISnippetsParams } from '@elgorditosalsero/react-gtm-hook/dist/models/GoogleTagManager';

const gtmParams: ISnippetsParams = {
  id: gtag.NEXT_PUBLIC_GTM_ID || '',
  environment: {
    gtm_auth: gtag.NEXT_PUBLIC_GTM_AUTH || '',
    gtm_preview: gtag.NEXT_PUBLIC_GTM_PREVIEW || '',
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <Script
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
      </Script> */}
      <GTMProvider state={gtmParams}>
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
      </GTMProvider>
    </>
  );
}

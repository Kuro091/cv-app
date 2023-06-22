import Head from 'next/head';
import Main from '../components/Main/Main';
import { Layout } from '../components/Layouts';
import { useEffect } from 'react';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import Router from 'next/router';
export default function Home() {
  const sendDataToGTM = useGTMDispatch();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // gtag.pageview(url);
      sendDataToGTM({
        event: 'pageview',
        pagePath: url,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [sendDataToGTM]);

  return (
    <>
      <Head>
        <title>MinhLC</title>
        <meta name='description' content='MinhLC App' />
        <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}

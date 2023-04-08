import Head from 'next/head';
import Main from '../components/Main/Main';
import { Layout } from '../components/Layouts';

export default function Home() {
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

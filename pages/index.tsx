import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from './layout';
import Main from '../components/Main/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>MinhLC</title>
        <meta name='description' content='MinhLC App' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <Main />
        </Layout>
      </main>
    </>
  );
}

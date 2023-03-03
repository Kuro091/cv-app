import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Duru_Sans } from '@next/font/google';
import Background from '../components/Background';
import { AnimatedMenu } from '../components/AnimatedComponents/AnimatedMenu';
import Navigation from '../components/Navigation';

const inter = Duru_Sans({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={`min-h-screen text-white ${inter.className} relative`}>
          <Header />
          <AnimatedMenu renderMenu={() => <Navigation />} />
          <Hero />
          <Background />
        </section>
        {/* <Main /> */}
      </main>
    </>
  );
}

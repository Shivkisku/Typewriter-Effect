// pages/index.js

import Head from 'next/head';
import Typewriter from '../components/Typewriter';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Typewriter Effect</title>
        <meta name="description" content="A typewriter effect using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1></h1>
        <Typewriter />
      </main>
    </div>
  );
}

import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'


export default function Home() {
  const [quote, setQuote] = useState('Hello, world');
  const getNextQuote = () => {
    (async () => {
      setQuote('...');
      const response = await fetch('/api/quote');
      const quoteResponse = await response.json();
      setQuote(quoteResponse.quote);
    })();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {quote}
        </h1>
        <button className='next-quote' onClick={getNextQuote}>Next Quote</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          KlaudSol Philippines, Inc.
        </a>
      </footer>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TRY Creative Tech - Swipe challenge</title>
        <meta
          name='description'
          content='Swipe component created in a Tinder style for TRY'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

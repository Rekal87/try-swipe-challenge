import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TRY Creative Tech - Swipe challenge</title>
        <meta
          name='description'
          content='Swipe component created in a Tinder style for TRY'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <picture>
          <img src='./images/logo.svg' alt='logo' />
        </picture>
        <Card />
      </main>

      <footer></footer>
    </div>
  );
}

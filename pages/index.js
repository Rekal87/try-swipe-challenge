import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';

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
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Test</h1>
        <Card />
      </main>

      <footer></footer>
    </div>
  );
}

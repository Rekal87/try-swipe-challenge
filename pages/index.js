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

        <button className={styles.thumbsdown}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.5185 16.5617C15.8292 16.1992 16 15.7376 16 15.2602L16 7C16 5.89543 15.1046 5 14 5H6.66915C5.70258 5 4.87432 5.69125 4.70141 6.64223L3.42869 13.6422C3.20547 14.8699 4.14862 16 5.39643 16H10L8.37211 20.8837C8.1586 21.5242 8.44858 22.2243 9.0525 22.5262V22.5262C9.60935 22.8047 10.2842 22.6684 10.6894 22.1957L15.5185 16.5617Z'
              stroke='white'
              strokeWidth='2'
            />
            <path
              d='M20 6V15'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        <button className={styles.leftarrow}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21 12L3 12'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M9 6L3 12L9 18'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <Card />
        <button className={styles.thumbsup}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.48149 7.43827C8.17078 7.80075 8 8.26243 8 8.73985V17C8 18.1046 8.89543 19 10 19H17.3308C18.2974 19 19.1257 18.3088 19.2986 17.3578L20.5713 10.3578C20.7945 9.13009 19.8514 8 18.6036 8H14L15.6279 3.11634C15.8414 2.47579 15.5514 1.77571 14.9475 1.47375V1.47375C14.3906 1.19532 13.7158 1.33161 13.3106 1.80431L8.48149 7.43827Z'
              stroke='white'
              strokeWidth='2'
            />
            <path
              d='M4 18V9'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>
        <button className={styles.rightarrow}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 12L21 12'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M15 18L21 12L15 6'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </main>
    </div>
  );
}

import { useGetCards } from '../hooks/useGetCards';
import styles from './Card.module.css';
import Image from 'next/image';

export default function Card() {
  // custom hook
  const cards = useGetCards();
  console.log(cards);

  console.log(cards);
  return (
    <div className={styles.card}>
      {/* <Image
        layout='fill'
        src='https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg'
        alt='random girl'
      ></Image>

      <h2>Jessica</h2>
      <p>
        Glass half-full using my farmshare jazz cafes local sports teams.
        Netflix my eyes Woody Allen if you think we have something in common
        stepping outside your comfort zone, if you’re still reading this medical
        school happy hour too many to list tattoos. I’m just a regular guy video
        games I enjoy making lasagna from scratch pickles fascinates me.
      </p> */}
    </div>
  );
}

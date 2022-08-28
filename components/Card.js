import { useGetCards } from '../hooks/useGetCards';
import { useSprings, animated, to } from 'react-spring';
import styles from './Card.module.css';
import Image from 'next/image';

export default function Card(props) {
  const { i, x, y, rot, scale, trans, cards, bind, objs } = props;
  const { name, age, distance, text, pics } = objs[i];
  return (
    // <div className={styles.card}>
    //   <div className={styles.cardImg}>
    //     <Image
    //       layout='fill'
    //       src='https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg'
    //       alt='random girl'
    //     />
    //   </div>
    //   <div className={styles.cardBody}>
    //     <div className={styles.cardTitle}>Jessica</div>
    //     <div className='card-text'>
    //       Glass half-full using my farmshare jazz cafes local sports teams.
    //       Netflix my eyes Woody Allen if you think we have something in common
    //       stepping outside your comfort zone, if you’re still reading this
    //       medical school happy hour too many to list tattoos. I’m just a regular
    //       guy video games I enjoy making lasagna from scratch pickles fascinates
    //       me.
    //     </div>
    //   </div>
    // </div>
    <animated.div
      key={i}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: to([rot, scale], trans),
        }}
      >
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <Image
              layout='fill'
              src='https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg'
              alt='random girl'
            />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>Jessica</div>
            <div className={styles.cardText}>
              Glass half-full using my farmshare jazz cafes local sports teams.
              Netflix my eyes Woody Allen if you think we have something in
              common stepping outside your comfort zone, if you’re still reading
              this medical school happy hour too many to list tattoos. I’m just
              a regular guy video games I enjoy making lasagna from scratch
              pickles fascinates me.
            </div>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}

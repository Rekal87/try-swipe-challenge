import { useGetCards } from '../hooks/useGetCards';
import styles from './Card.module.css';

export default function Card() {
  // custom hook
  const cards = useGetCards();

  console.log(cards);
  return (
    <div>
      <div className={styles.card}>
        <p>Like or Dislike</p>
      </div>
    </div>
  );
}

import { useGetCards } from '../hooks/useGetCards';

export default function Card() {
  // custom hook
  const cards = useGetCards();

  console.log(cards);
  return (
    <div>
      <div className='card card-1'>
        <p>Like or Dislike</p>
      </div>
    </div>
  );
}

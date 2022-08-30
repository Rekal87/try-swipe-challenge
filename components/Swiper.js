import React, { useRef, useState } from 'react';

// import localstorage hook
import { useLocalStorage } from 'usehooks-ts';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper';

// import custom hook
import { useGetCards } from '../hooks/useGetCards';

export default function Swipe() {
  const [history, setHistory] = useLocalStorage('history', []);
  const cards = useGetCards();
  console.log(cards);

  // POST the status change with the corresponding id
  const postData = (id, status) => {
    fetch(`https://creative-tech-code-quest.vercel.app/api/swipe/${id}`, {
      method: 'POST',
      body: status,
    })
      .then((response) => response.json())
      .then((response) => console.log('result from post', response))
      .catch((error) => console.log('error: ', error));

    // saving id and status to localstorage
    setHistory([...history, { id, status }]);
  };
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        onSlideChange={() => postData(cards.id, false)}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'
      >
        {cards?.map((card) => (
          <SwiperSlide key={card.id}>
            <div>
              <Image
                src={card.image}
                alt={card.title}
                height={270}
                width={240}
              />
            </div>
            <div>{card.title}</div>
            <div>{card.body}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

import { useSprings, animated } from 'react-spring';
import { useGesture, useDrag } from 'react-use-gesture';
import { useState } from 'react';
import Card from './Card';

const cards = [1, 2, 3, 4];

const objs = [
  {
    pics: [
      'https://images.unsplash.com/photo-1522263842439-347f062b8475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    ],
    name: 'Chloe',
    age: 18,
    distance: '1 mile away',
    text: 'The C and the L are silent.',
  },
  {
    pics: [
      'https://images.unsplash.com/photo-1535378719329-f0a8b9a42152?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    ],
    name: 'Sarah',
    age: 24,
    distance: '5 miles away',
    text: "It's tough being a single mom. Or so I'm told, I wouldn't know; I don't have kids.",
  },
  {
    pics: [
      'https://images.unsplash.com/photo-1514924801778-1db0aba75e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    ],
    name: 'Savannah',
    age: 29,
    distance: '3 miles away',
    text: 'A little known fact is that I cover about 40% of Africa.',
  },
  {
    pics: [
      'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      'https://images.unsplash.com/photo-1532635270-c09dac425ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    ],
    name: 'Jane',
    age: 22,
    distance: '2 miles away',
    text: "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife.",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  // The set flags all the cards that are flicked out
  const [gone] = useState(() => new Set());

  // Create a bunch of springs using the helpers above
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      // If you flick hard enough it should trigger the card to fly out
      const trigger = velocity > 0.2;

      // Direction should either point left or right
      const dir = xDir < 0 ? -1 : 1;

      // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      if (!down && trigger) gone.add(index);

      set((i) => {
        // We're only interested in changing spring-data for the current spring
        if (index !== i) return;
        const isGone = gone.has(index);

        // When a card is gone it flys out left or right, otherwise goes back to zero
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        // How much the card tilts, flicking it harder makes it rotate faster
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        // Active cards lift up a bit
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
    />
  ));
}

export default Deck;

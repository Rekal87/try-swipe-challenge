import { useEffect, useState } from 'react';

export const useGetCards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://creative-tech-code-quest.vercel.app/api/swipe')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return data;
};

import { useEffect, useState } from 'react';

export const useGetCards = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return data;
};

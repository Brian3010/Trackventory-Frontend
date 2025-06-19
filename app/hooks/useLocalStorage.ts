import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  console.log('useLocalStorage render');
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      console.log('item: ', item);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

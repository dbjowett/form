import { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
  const [localStorageState, setLocalStorageState] = useState();

  const value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
  useEffect(() => {
    window.localStorage.setItem(key, item);
  }, [key]);

  return value;
}

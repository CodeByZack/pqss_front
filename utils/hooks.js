import { useState, useEffect } from 'react';
import { throttle } from './index';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const fn = throttle(() => {
      setWindowWidth(window.innerWidth);
      console.log(innerWidth);
    }, 100);
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn);
    };
  }, []);

  return windowWidth;
};

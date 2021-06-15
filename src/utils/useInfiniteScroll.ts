import { useState, useEffect, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

const useInfiniteScroll = (
  callback: () => void
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    if (
      window.innerHeight + scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      return;
    }

    setIsFetching(true);
    callback();
  }, [isFetching, callback]);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () =>
      window.removeEventListener('scroll', debounce(handleScroll, 500));
  }, [handleScroll]);

  function debounce(func: () => void, delay: number) {
    let inDebounce: NodeJS.Timeout;
    return function () {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;

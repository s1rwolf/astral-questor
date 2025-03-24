
import { useEffect, RefObject, useState } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
}

const useIntersectionObserver = ({ ref, options = {} }: UseIntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      }
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersectionObserver;

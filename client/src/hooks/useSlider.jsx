import { useRef, useState } from 'react';

const useSlider = (slides) => {
  const [left, setLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(3);

  const slideRef = useRef();

  const handleClick = (param) => {
    if (param === 'next') {
      if (currentSlide >= slides.length) return;
      setCurrentSlide((prev) => prev + 1);
      setLeft(left + slideRef.current.clientWidth + 40);
    } else {
      if (currentSlide <= 3) return;
      setCurrentSlide((prev) => prev - 1);
      setLeft(left - slideRef.current.clientWidth - 40);
    }
  };
  return {
    handleClick,
    slideRef,
    currentSlide,
    left,
  };
};

export default useSlider;

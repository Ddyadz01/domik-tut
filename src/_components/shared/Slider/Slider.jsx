import { ChevronLeft, ChevronRight } from 'lucide-react';

import useSlider from '../../../hooks/useSlider';

import styles from './slider.module.scss';

const slides = [
  {
    id: 1,
    title: 'С бассейном',
    imageUrl:
      'https://images.unsplash.com/photo-1575204015190-28962b6919bf?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Семейные и уютные',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Хиты продаж',
    imageUrl:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'С бассейном',
    imageUrl:
      'https://images.unsplash.com/photo-1575204015190-28962b6919bf?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Семейные и уютные',
    imageUrl:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Хиты продаж',
    imageUrl:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export const Slider = () => {
  const { currentSlide, handleClick, slideRef, left } = useSlider(slides);

  return (
    <div className={styles.mini__slider}>
      <div className={styles.mini__slider_btns}>
        <div className={styles.mini__slider_btns_left}>
          <ChevronLeft
            color={currentSlide === 3 ? 'var(--color-gray)' : 'white'}
            onClick={() => handleClick('prev')}
          />
        </div>
        <div className={styles.mini__slider_btns_right}>
          <ChevronRight
            color={currentSlide === slides.length ? 'var(--color-gray)' : 'white'}
            onClick={() => handleClick('next')}
          />
        </div>
      </div>
      <div
        className={styles.mini__slider_slides}
        style={{ transform: `translateX(${-left + 'px'})` }}
      >
        {slides.map((item) => (
          <div ref={slideRef} className={styles.mini__slider_slides__slide} key={item.id}>
            <img src={item.imageUrl} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

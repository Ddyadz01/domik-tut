import { useEffect, useRef, useState } from 'react';

import { useParams } from 'react-router';

import { CenterContent, Loader, TextComponent } from '../../_components/IndexComponents';

import ProductInfoBottom from './ProductInfoBottom';
import ProductInfoContent from './ProductInfoContent';
import ProductInfoTop from './ProductInfoTop';

import { useCurrentProduct } from '../../hooks/useCurrentProduct';

import { Play } from 'lucide-react';

import styles from './product.module.scss';


export const ProductPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();
  const product = useCurrentProduct(id);

  const videoRef = useRef();

  const handleVideo = () => {
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    product && setTimeout(() => setIsLoaded(true), 200)
  }, [product]);

  return (
    <div  className={styles.product__page}>
      {isLoaded ? (
        <>
          <div className={styles.video_bg}>
            <CenterContent>
              <video autoPlay poster={product.imageURL} src={product?.videoURL} muted loop />
            </CenterContent>
          </div>
          <CenterContent>
            <div className={styles.product__info}>
              <ProductInfoTop product={product} />
              <ProductInfoContent product={product} />
              <ProductInfoBottom product={product} />
              <div className={styles.product__info_more}>
                <TextComponent text={'Описание'} size="title" />
                <div className={styles.product__info_more__text}>
                  <TextComponent text={product.information} />
                </div>
              </div>
              <div className={styles.product__info__media}>
                <div className={styles.product__info__media_left}>
                  <video
                    width={700}
                    height={500}
                    ref={videoRef}
                    poster={product.imageURL}
                    src={product?.videoURL}
                    onClick={handleVideo}
                  ></video>
                  {!isPlaying && (
                    <div className={styles.product__info__media_left_icon}>
                      <Play />
                    </div>
                  )}
                </div>
                <div className={styles.product__info__media_right}></div>
              </div>
            </div>
          </CenterContent>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

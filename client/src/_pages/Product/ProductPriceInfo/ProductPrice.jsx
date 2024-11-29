import React from 'react';

import { TextComponent } from '../../../_components/IndexComponents';

import ProductTariffs from './ProductTariffs';
import ProductOptions from './ProductOptions';
import ProductButtons from './ProductButtons';

import styles from '../product.module.scss';

const ProductPrice = ({ product }) => {
  return (
    <div className={styles.product__info_bottom_info_price}>
      <div className={styles.product__info_bottom_info_price_header}>
        <TextComponent size="lg" text={'Стоимость'} />
      </div>
      <ProductTariffs prices={product.tariffs} />
      <ProductOptions list={product.tariffs.options} />
      <ProductButtons />
    </div>
  );
};

export default ProductPrice;

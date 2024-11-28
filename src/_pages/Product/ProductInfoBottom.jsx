import React from 'react';

import { TextComponent } from '../../_components/IndexComponents';

import ProductPrice from './ProductPriceInfo/ProductPrice';
import ProductMoreInfo from './ProductMoreInfo/ProductMoreInfo';

import styles from './product.module.scss';

const ProductInfoBottom = ({ product }) => {
  return (
    <div className={styles.product__info_bottom}>
      <div className={styles.product__info_bottom_info_house}>
        <table className={styles.product__info_bottom_info_house__table_row}>
          <thead>
            <tr>
              <th scope="col">
                <TextComponent text={'Тип жилья'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Этажи'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Площадь'} size="base" />
              </th>
              <th scope="col">
                <TextComponent text={'Участок'} size="base" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.persons_info.type_house}</td>
              <td>{product.persons_info.floors}</td>
              <td>
                {product.persons_info.house_area} м<sup>2</sup>
              </td>
              <td>{product.persons_info.plot_size} соток</td>
            </tr>
          </tbody>
        </table>
        <ProductMoreInfo product={product} />
      </div>
      <ProductPrice product={product} />
    </div>
  );
};

export default ProductInfoBottom;

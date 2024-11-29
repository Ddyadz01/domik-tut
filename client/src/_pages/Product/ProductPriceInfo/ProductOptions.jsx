import React from "react";

import { TextComponent } from "../../../_components/IndexComponents";

import styles from "../product.module.scss";

const ProductOptions = ({ list }) => {
  return (
    <div className={styles.product__info_bottom_info_price_options}>
      {list.map((option) => (
        <div
          key={option.id}
          className={styles.product__info_bottom_info_price_options_item}
        >
          <div
            className={
              styles.product__info_bottom_info_price_options_item__title
            }
          >
            <TextComponent text={option.title} />
          </div>
          <TextComponent text={option.price + " ₽"} size="lg" />
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;

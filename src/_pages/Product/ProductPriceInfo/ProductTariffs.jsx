import React from "react";

import { TextComponent } from "../../../_components/IndexComponents";

import { CircleHelp } from "lucide-react";

import styles from "../product.module.scss";

const ProductTariffs = ({ prices }) => {
  return (
    <div className={styles.product__info_bottom_info_price_content}>
      <div className={styles.product__info_bottom_info_price_content_left}>
        {prices.prices_info.map((price) => (
          <div
            key={price.id}
            className={
              styles.product__info_bottom_info_price_content_left_price
            }
          >
            <TextComponent text={price.title} size="sm" />
            <div
              className={
                styles.product__info_bottom_info_price_content_left_price_sum
              }
            >
              <TextComponent text={price.price + " ₽"} size="lg" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.product__info_bottom_info_price_content_right}>
        <div
          className={styles.product__info_bottom_info_price_content_right_title}
        >
          <TextComponent text={"Залог"} icon={<CircleHelp />} />
        </div>
        <TextComponent text={prices.ball + " ₽"} size="lg" />
      </div>
    </div>
  );
};

export default ProductTariffs;

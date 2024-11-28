import React from "react";

import { useSelector } from "react-redux";

import { TextComponent } from "../../_components/IndexComponents";

import { ShareLinkProduct } from "../../utils/ShareLinkProduct";

import { Heart, MapPin, Share2 } from "lucide-react";

import styles from "./product.module.scss";

const ProductInfoTop = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className={styles.product__info_top}>
      <div className={styles.product__info_top_text}>
        <TextComponent text={product.title} size={"heading"} />
        <TextComponent text={product.addres} size={"base"} icon={<MapPin />} />
      </div>
      <div className={styles.product__info_top_btns}>
        {user.token && <Heart />}
        <Share2 onClick={ShareLinkProduct} />
      </div>
    </div>
  );
};

export default ProductInfoTop;

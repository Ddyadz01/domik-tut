import styles from './product.module.scss';

const ProductInfoContent = ({ product }) => {
  return (
    <div className={styles.product__info_content}>
      <div className={styles.product__info_content_left}>
        <img loading={'lazy'} src={product.imageURL} alt="" />
      </div>
      <div className={styles.product__info_content_right}>
        {product.features?.images?.map((image, idx) => (
          <img loading={'lazy'} key={idx} src={image} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfoContent;

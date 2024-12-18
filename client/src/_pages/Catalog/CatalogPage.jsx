import { CenterContent, ItemCard, TextComponent } from '../../_components/IndexComponents';
import { useSelector } from 'react-redux';

import styles from './catalog.module.scss';

export const CatalogPage = () => {
  const { products } = useSelector((state) => state.items);
  return (
    <div className={styles.catalog__page}>
      <CenterContent>
        <div className={styles.catalog__title}>
          <TextComponent text={'Каталог домов'} size="heading" />
        </div>
        <div className={styles.catalog__items}>
          {products && products.map((product) => <ItemCard item={product} key={product._id} />)}
        </div>
      </CenterContent>
    </div>
  );
};

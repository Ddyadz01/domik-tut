import { CenterContent, ItemCard, TextComponent } from '../../_components/IndexComponents';
import { useSelector } from 'react-redux';

import styles from './catalog.module.scss';

export const CatalogPage = () => {
  const { items } = useSelector((state) => state.items);
  return (
    <div className={styles.catalog__page}>
      <CenterContent>
        <div className={styles.catalog__title}>
          <TextComponent text={'Каталог домов'} size="heading" />
        </div>
        <div className={styles.catalog__items}>
          {items && items.map((product) => <ItemCard item={product} key={product.id} />)}
        </div>
      </CenterContent>
    </div>
  );
};

import { useSelector } from 'react-redux';
import { CenterContent, ItemCard, TextComponent } from '../../_components/IndexComponents';

import styles from './favorites.module.scss';
export const FavoritesPage = () => {
  const { favorites } = useSelector((state) => state.user.user);
  return (
    <div className={styles.favorite__page}>
      <CenterContent>
        <TextComponent text={'Избранные'} size="heading" />
        <div className={styles.favorite__page_content}>
          {favorites?.length ? (
            favorites.map((product) => <ItemCard item={product} key={product._id} />)
          ) : (
            <div className={styles.favorite__page_content_message}>
              <TextComponent text={'Ничего не найдено'} size="lg" />
            </div>
          )}
        </div>
      </CenterContent>
    </div>
  );
};

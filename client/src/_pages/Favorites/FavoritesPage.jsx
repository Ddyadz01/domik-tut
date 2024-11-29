import { CenterContent, TextComponent } from '../../_components/IndexComponents';

import styles from './favorites.module.scss';
export const FavoritesPage = () => {
  return (
    <div className={styles.favorite__page}>
      <CenterContent>
        <TextComponent text={'Избранные'} size="heading" />
        <div className={styles.favorite__page_content}></div>
      </CenterContent>
    </div>
  );
};

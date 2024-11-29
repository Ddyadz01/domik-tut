import {
  CenterContent,
  TextComponent,
  ItemCard,
  LinkComponent,
} from '../../_components/IndexComponents';

import styles from './home.module.scss';

const PopularHomeComponent = ({ items }) => {
  return (
    <div className={styles.popular__items}>
      <CenterContent>
        <TextComponent size={'heading'} text="Популярное в каталоге" />
        <div
          className="items"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: '80px 0 40px 0',
          }}
        >
          {items?.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
        <LinkComponent text={'Перейти в каталог'} path={'/catalog'} type={'primary'} />
      </CenterContent>
    </div>
  );
};

export default PopularHomeComponent;
